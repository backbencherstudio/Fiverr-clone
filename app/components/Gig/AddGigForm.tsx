"use client";

import { uploadImageToImgBB } from "@/app/lib/imgbb";
import { readStoredGigs, writeStoredGigs, type StoredGig } from "@/app/lib/gigs";
import { useEffect, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { FiImage, FiUploadCloud } from "react-icons/fi";

type AddGigFormValues = {
  title: string;
  image: FileList;
};

type AddGigFormProps = {
  onSuccess?: () => void;
  variant?: "page" | "modal";
};

const TITLE_PREFIX = "I will do";
const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY?.trim() ?? "";

function buildGigTitle(value: string) {
  return `${TITLE_PREFIX} ${value.trim()}`.trim();
}

export default function AddGigForm({
  onSuccess,
  variant = "page",
}: AddGigFormProps) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddGigFormValues>({
    mode: "onTouched",
    defaultValues: {
      title: "",
    },
  });

  const imageFiles = useWatch({
    control,
    name: "image",
  });
  const titleField = register("title", {
    required: "Gig title is required",
    validate: (value) => value.trim().length > 0 || 'Add a few words after "I will do"',
  });
  const imagePreview = useMemo(() => {
    const file = imageFiles?.[0];

    if (!file) {
      return null;
    }

    return URL.createObjectURL(file);
  }, [imageFiles]);

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const onSubmit = async (data: AddGigFormValues) => {
    setSubmitError(null);
    setSubmitSuccess(null);

    const image = data.image?.[0];

    if (!image) {
      return;
    }

    try {
      const { imageUrl, imageDeleteUrl } = await uploadImageToImgBB(
        image,
        IMGBB_API_KEY,
      );
      const newGig: StoredGig = {
        id: crypto.randomUUID(),
        title: buildGigTitle(data.title),
        imageUrl,
        imageName: image.name,
        imageDeleteUrl,
        createdAt: new Date().toISOString(),
      };

      const storedGigs = readStoredGigs();
      writeStoredGigs([...storedGigs, newGig]);
      reset();

      if (onSuccess) {
        onSuccess();
        return;
      }

      setSubmitSuccess("Gig created and image stored with ImgBB.");
    } catch (error) {
      if (error instanceof DOMException && error.name === "QuotaExceededError") {
        setSubmitError(
          "Local storage is still full from older saved images. Clear old gigs once, then try again.",
        );
        return;
      }

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to save this gig right now.",
      );
    }
  };

  return (
    <div className={variant === "modal" ? "" : "mx-auto max-w-2xl"}>
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Gig setup
        </p>
        <h1 className="mt-2 text-3xl font-bold text-zinc-950">
          Add your gig details
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Keep it simple: just a title and a cover image.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
      >
        <div className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-semibold text-zinc-900"
            >
              Gig title
            </label>
            <div
              className={`flex h-12 items-center rounded-xl border bg-white px-4 text-sm transition focus-within:border-zinc-900 ${
                errors.title ? "border-red-400" : "border-zinc-300"
              }`}
            >
              <span className="shrink-0 font-semibold text-zinc-900">
                {TITLE_PREFIX}
              </span>
              <input
                id="title"
                type="text"
                placeholder="modern website design for your business"
                className="h-full w-full bg-transparent pl-2 text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
                {...titleField}
              />
            </div>
            {errors.title ? (
              <p className="mt-2 text-sm text-red-500">{errors.title.message}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-900">
              Cover image
            </label>

            <div
              className={`rounded-2xl border border-dashed p-4 transition ${
                errors.image
                  ? "border-red-400 bg-red-50/40"
                  : "border-zinc-300 bg-zinc-50/60"
              }`}
            >
              <label
                htmlFor="image"
                className="flex min-h-52 cursor-pointer flex-col items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-8 text-center transition hover:border-zinc-400"
              >
                {imagePreview ? (
                  <div className="flex w-full flex-col items-center gap-4">
                    <img
                      src={imagePreview}
                      alt="Selected preview"
                      className="h-44 w-full max-w-md rounded-xl object-cover"
                    />
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-600">
                      <FiImage className="h-4 w-4" />
                      Preview selected
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 text-zinc-900">
                      <FiUploadCloud className="h-6 w-6" />
                    </div>
                    <p className="mt-4 text-base font-semibold text-zinc-900">
                      Upload a cover image
                    </p>
                    <p className="mt-1 max-w-sm text-sm text-zinc-500">
                      PNG, JPG or WEBP recommended. Use a clear image that represents your
                      gig.
                    </p>
                    <p className="mt-4 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700">
                      Click to choose an image
                    </p>
                  </>
                )}
              </label>

              <input
                id="image"
                type="file"
                accept="image/*"
                className="hidden"
                {...register("image", {
                  required: "Cover image is required",
                  validate: {
                    required: (files) =>
                      files?.length ? true : "Cover image is required",
                    fileSize: (files) =>
                      !files?.[0] || files[0].size <= 32 * 1024 * 1024
                        ? true
                        : "Image must be 32 MB or smaller",
                  },
                })}
              />
            </div>

            {errors.image ? (
              <p className="mt-2 text-sm text-red-500">{errors.image.message}</p>
            ) : null}

            {!IMGBB_API_KEY ? (
              <p className="mt-2 text-sm text-amber-600">
                Add <code>NEXT_PUBLIC_IMGBB_API_KEY</code> to enable image uploads.
              </p>
            ) : null}
          </div>
        </div>

        {submitError ? (
          <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {submitError}
          </p>
        ) : null}

        {submitSuccess ? (
          <p className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {submitSuccess}
          </p>
        ) : null}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={() => {
              setSubmitError(null);
              setSubmitSuccess(null);
              reset();
            }}
            className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-300 px-5 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50"
          >
            Clear
          </button>
          <button
            type="submit"
            disabled={isSubmitting || !IMGBB_API_KEY}
            className="inline-flex h-12 items-center justify-center rounded-xl bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Saving..." : "Create gig"}
          </button>
        </div>
      </form>
    </div>
  );
}
