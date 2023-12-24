import { decode } from "blurhash";

const getBlurUrl = (blurhash: string) => {
  const pixels = decode(blurhash, 32, 32);
  if (typeof document !== "undefined") {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const imageData = ctx.createImageData(32, 32);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
    const blurURL = canvas.toDataURL();
    return blurURL;
  }
  return "";
};

export default getBlurUrl;
