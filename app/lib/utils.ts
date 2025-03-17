import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import imageCompression from "browser-image-compression";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeLink(link?: string) {
  if (!link) return "";

  return link
    .replace(/\s/g, "")
    .replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,ˆ.<>\/?]+/, "")
    .toLocaleLowerCase();
}

export async function compressFiles(files: File[]) {
  const compressPromises = files.map(async (file) => {
    try {
      return await compressImage(file);
    } catch (error) {
      console.log(error);
      return null;
    }
  });
  return (await Promise.all(compressPromises)).filter((file) => file !== null);
}

export const compressImage = (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    const options = {
      maxSizeMB: 0.2, //200kB
      maxWidthOrHeight: 900,
      useWebWorker: true,
      fileType: "image/png",
    };

    imageCompression(file, {
      maxSizeMB: 1,
      useWebWorker: true,
    }).then((compressedFile) => {
      resolve(compressedFile);
    });
  });
};

export function formatUrl(url: string) {
  const formattedUrl = url.startsWith("http") ? url : `https://${url}`;
  return formattedUrl;
}

export function triggerImageInput(id: string) {
  const input = document.getElementById(id)?.click();
}

export function handleImageInput(e: React.ChangeEvent<HTMLInputElement>) {
  const file = e.target.files?.[0] ?? null;

  if (file) {
    const imageURL = URL.createObjectURL(file);
    return imageURL;
  }
  return null;
}