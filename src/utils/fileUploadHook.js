import axios from "axios";
import Resizer from "react-image-file-resizer";

import { Error_model_hook } from "./modalHook";
import { SERVER_PD_URL } from "@/const/constans";

export const fileUploadHook = async ({
  profileImage,
  singleImage,
  multipalImage,
  singlePdf,
}) => {
  //   const [imageFileData, setImageFileData] = useState({
  //     singleProfileImageData: {},
  //     singleImageFileData: {},
  //     multipalImageFileData: [],
  //   });
  let allFileData = {
    singleProfileImageData: {},
    singleImageFileData: {},
    multipalImageFileData: [],
    singlePdfData: {},
  };
  //
  const resizeImage = (file, maxWidth = 300, maxHeight = 300) => {
    return new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        maxWidth, // max width
        maxHeight, // max height
        "JPEG", // format
        100, // quality
        0, // rotation
        (uri) => {
          // The uri argument here is the compressed image as a Blob
          const compressedImage = new File([uri], file.name, {
            type: file.type,
            lastModified: file.lastModified,
          });
          resolve(compressedImage);
        },
        "file" // output type: 'file', 'base64', 'blob' (default is blob)
      );
    });
  };
  //

  
  if (profileImage?.file) {
    const formData = new FormData();
    const compressedImage = await resizeImage(profileImage.file, 300, 300);
    formData.append("image", compressedImage);
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL_REAL_FILE}/upload/uploade-profile-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_CLIENT_BASE}`,
            "Access-Control-Allow-Credentials": "true",
            // authorization: localStorage.getItem("tech_token"),
          },
        }
      );
      console.log(result);
      if (result.data?.success) {
        allFileData.singleProfileImageData = result.data.data;
        // setImageFileData((c) => ({
        //   ...c,
        //   singleProfileImageData: result.data.data,
        // }));
      } else {
        Error_model_hook({
          message: result?.data?.message || "Image upload failed",
          error: result,
        });
        console.log(error);
        // setLoading(false);
      }
    } catch (error) {
      Error_model_hook({ message: error?.message, error });
      console.log(error);
      // setLoading(false);
    }
  }
  //
  if (singleImage?.file) {
    const formData = new FormData();
    const compressedImage = await resizeImage(singleImage.file, 800, 600);
    formData.append("image", compressedImage);
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL_REAL_FILE}/upload/uploade-single-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_CLIENT_BASE}`,
            "Access-Control-Allow-Credentials": "true",
            // authorization: localStorage.getItem("tech_token"),
          },
        }
      );
      console.log(result);
      if (result.data?.success) {
        allFileData.singleImageFileData = result.data.data;
        // setImageFileData((c) => ({
        //   ...c,
        //   singleImageFileData: result.data.data,
        // }));
      } else {
        Error_model_hook({
          message: result?.data?.message || "Image upload failed",
          error: result,
        });
        console.log(error);
        // setLoading(false);
      }
    } catch (error) {
      Error_model_hook({ message: error?.message, error });
      console.log(error);
      // setLoading(false);
    }
  }
  //
  //
  if (singlePdf?.file) {
    const formData = new FormData();
    formData.append("pdf", singlePdf?.file);
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL_REAL_FILE}/upload/uploade-single-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_CLIENT_BASE}`,
            "Access-Control-Allow-Credentials": "true",
            // authorization: localStorage.getItem("tech_token"),
          },
        }
      );
      console.log(result);
      if (result.data?.success) {
        allFileData.singlePdfData = result.data.data;
        // setImageFileData((c) => ({
        //   ...c,
        //   singleImageFileData: result.data.data,
        // }));
      } else {
        Error_model_hook({
          message: result?.data?.message || "pdf upload failed",
          error: result,
        });
        console.log(error);
        // setLoading(false);
      }
    } catch (error) {
      Error_model_hook({ message: error?.message, error });
      console.log(error);
      // setLoading(false);
    }
  }
  //
  if (multipalImage?.files?.length) {
    try {
      const formData = new FormData();
      formData.append("image", imgFile);
      for (let i = 0; i < multipalImage.files.length; i++) {
        const compressedImage = await resizeImage(
          multipalImage.files[i],
          800,
          600
        );
        formData.append("images", compressedImage);
        // formData.append("images", images[i]);
      }

      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL_REAL_FILE}/upload/uploade-multipal-images`,
        formData,
        {
          headers: {
            // authorization: localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_CLIENT_BASE}`,
            "Access-Control-Allow-Credentials": "true",
          },
        }
      );
      console.log(result);
      if (result.data?.success) {
        allFileData.multipalImageFileData = result.data.data;
        // console.log(result.data.data.filename);
        // console.log(result.data.data.url);
        // console.log(result.data.data._id);
        // setImageFileData((c) => ({
        //   ...c,
        //   multipalImageFileData: result.data.data,
        // }));
      } else {
        Error_model_hook({
          message: result?.data?.message || "Image upload failed",
          error: result,
        });
        console.log(error);
        // setLoading(false);
      }
    } catch (error) {
      Error_model_hook({ message: error?.message, error });
      console.log(error);
      // setLoading(false);
    }
  }
  return allFileData;
};
