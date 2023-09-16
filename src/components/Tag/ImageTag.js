import Image from "next/image";
import React from "react";
import NoImgeFoundImage from "../../assets/images/noImge.jpg";
import { SERVER_PD_URL_IMAGES } from "@/const/constans";
export default function ImageTag({ data }) {
  return (
    <>
      {data?.src ? (
        <Image
          //sampod
          src={`${SERVER_PD_URL_IMAGES}/${data?.src}`}
        //   src={`https://freepickapi/images/${data?.src}`}
          width={data?.width || 200}
          height={data?.height || 200}
          alt={`${data?.alt || "Images"}`}
          className={`${data?.class}`}
        />
      ) : data?.url ? (
        <Image
          src={`${data?.url}`}
          width={data?.width || 200}
          height={data?.height || 200}
          alt={`${data?.alt || "Images"}`}
          className={`${data?.class}`}
        />
      ) : (
        <Image
          src={NoImgeFoundImage}
          width={data?.width || 200}
          height={data?.height || 200}
          alt={`${data?.alt || "Images"}`}
          className={`${data?.class}`}
        />
      )}
    </>
  );
}
