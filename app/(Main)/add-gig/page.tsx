"use client";

import Container from "@/app/components/Reusable/Container";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiImage, FiUploadCloud } from "react-icons/fi";

type AddGigFormValues = {
  title: string;
  image: FileList;
};

export default function AddGigPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddGigFormValues>({
    mode: "onTouched",
  });

  const imageFiles = watch("image");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (!imageFiles?.length) {
      setImagePreview(null);
      return;
    }

    const file = imageFiles[0];
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);

    return () => URL.revokeObjectURL(previewUrl);
  }, [imageFiles]);

  const onSubmit = async (data: AddGigFormValues) => {
    const image = data.image?.[0];

    console.log({
      title: data.title,
      imageName: image?.name,
      imageSize: image?.size,
    });

    reset();
    setImagePreview(null);
  };

  return (
    <div className="py-8">
      <Container>
        <div className="mx-auto max-w-2xl">
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
                <input
                  id="title"
                  type="text"
                  placeholder="I will build a modern website for your business"
                  className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 ${
                    errors.title ? "border-red-400" : "border-zinc-300"
                  }`}
                  {...register("title", {
                    required: "Gig title is required",
                    minLength: {
                      value: 10,
                      message: "Title must be at least 10 characters",
                    },
                  })}
                />
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
                    errors.image ? "border-red-400 bg-red-50/40" : "border-zinc-300 bg-zinc-50/60"
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
                          PNG, JPG or WEBP recommended. Use a clear image that represents your gig.
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
                      validate: (files) =>
                        files?.length ? true : "Cover image is required",
                    })}
                  />
                </div>

                {errors.image ? (
                  <p className="mt-2 text-sm text-red-500">{errors.image.message}</p>
                ) : null}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  reset();
                  setImagePreview(null);
                }}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-300 px-5 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50"
              >
                Clear
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Saving..." : "Create gig"}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
