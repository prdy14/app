import { AssetType } from "./asset-configs";
import { isAssetSizeValid } from "./file-validation";

export const uploadFile = async (assetType: AssetType, file: File) => {
  if (!isAssetSizeValid(assetType, file)) {
    console.log("file size is not valid");
    return;
  }

  try {
    const response = await fetch(
      `/api/s3/rgb/upload-url?objectKey=${file.name}`
    );
    const { presignedUrl } = await response.json();
    try {
      await fetch(presignedUrl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });
    } catch (er) {
      console.log("err", er);
    }
  } catch (error) {
    console.log("er");
    throw error;
  }
};
