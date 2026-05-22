type ImgBBUploadResponse = {
  success?: boolean;
  data?: {
    url?: string;
    delete_url?: string;
  };
  error?: {
    message?: string;
  };
};

export async function uploadImageToImgBB(file: File, apiKey: string) {
  if (!apiKey) {
    throw new Error("Add NEXT_PUBLIC_IMGBB_API_KEY to upload images.");
  }

  const formData = new FormData();
  formData.append("image", file);

  const uploadResponse = await fetch(
    `https://api.imgbb.com/1/upload?key=${encodeURIComponent(apiKey)}`,
    {
      method: "POST",
      body: formData,
    }
  );

  const payload = (await uploadResponse.json().catch(() => null)) as
    | ImgBBUploadResponse
    | null;

  if (!uploadResponse.ok || !payload?.success || !payload.data?.url) {
    throw new Error(
      payload?.error?.message ?? "Image upload failed. Please try again."
    );
  }

  return {
    imageUrl: payload.data.url,
    imageDeleteUrl: payload.data.delete_url,
  };
}

export async function deleteImageFromImgBB(deleteUrl: string) {
  await fetch(deleteUrl, {
    method: "GET",
    mode: "no-cors",
    cache: "no-store",
  });
}
