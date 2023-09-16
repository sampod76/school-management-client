import React, { useContext, useState } from "react";
import { AuthContext } from "@/components/Auth/AuthProvider";
import HomePage from "./home";
import { Button, Form, Select } from "antd";
import axios from "axios";
import ImgCrop from 'antd-img-crop';

import { Upload } from 'antd';


const Index = () => {
  
  // const [fileList, setFileList] = useState([]);
  // const onChange = ({ fileList: newFileList }) => {
  //   setFileList(newFileList);
  // };
  // const onPreview = async (file) => {
  //   let src = file.url;
  //   if (!src) {
  //     src = await new Promise((resolve) => {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file.originFileObj);
  //       reader.onload = () => resolve(reader.result);
  //     });
  //   }
  //   const image = new Image();
  //   image.src = src;
  //   const imgWindow = window.open(src);
  //   imgWindow?.document.write(image.outerHTML);
  // };
  // console.log(fileList)

  return (
    <>
     {/* <ImgCrop rotationSlider>
      <Upload
        action={`${process.env.NEXT_PUBLIC_SERVER_URL}/upload/uploade-profile-image`}
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        multiple={false}
        name="image"
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
    </ImgCrop> */}
      <HomePage />
    

    </>
  );
};
export default Index;
