/* // ? create by --> sampod nath
      ? edited by Bayajid Aalm
 */

import React, { useContext, useState } from "react";
import {
  Checkbox,
  Divider,
  Form,
  Typography,
  Input,
  Row,
  Col,
  DatePicker,
  Table,
  Space,
  Dropdown,
  Upload,
  Button,
  Spin,
} from "antd";
// Import QuillEditor dynamically only on the client side
import dynamic from "next/dynamic";
import {
  UploadOutlined,
  InboxOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { AuthContext } from "@/components/Auth/AuthProvider";
import { fileUploadHook } from "@/utils/fileUploadHook";
import { usePostNoticeMutation } from "@/redux/features/notices/noticesApi";
import { Success_model } from "@/utils/modalHook";
import { useRouter } from "next/router";

const DynamicQuillEditor = dynamic(
  () =>
    import(
      "../../../../components/super-admin-dashboard/office-desk/text-editor"
    ),
  {
    ssr: false,
  }
);

const plainOptions = [
  "শিক্ষার্থী",
  "শিক্ষক",
  "অভিভাবক",
  "ম্যানেজিং কমিটি",
  // "সকলের জন্য",
];

const Send_notice = () => {
  const { Error_model } = useContext(AuthContext);
  const [checkedList, setCheckedList] = useState([]);
  const [form] = Form.useForm();
  const router = useRouter();
  //
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };
  // text editor values
  const [editorValue, setEditorValue] = useState("");
  //! ********* notice api ********
  const [createNotice, { error, isLoading: noticeLoading }] =
    usePostNoticeMutation();
  //! ******** file upload states ********
  const [fileList, setFileList] = useState([]);
  const [imageUploadeLoading, setImageUploadeLoading] = useState(false);
  //! ******** upload document image ****
  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
      return false;
    }
    const isJpgOrJpeg =
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png";
    if (!isJpgOrJpeg) {
      message.error("You can only upload JPEG/jpg/png image files!");
      return false;
    }
    setFileList([file]); // Replace the previous file with the new one
    return false; // Prevent automatic upload
  };
  //
  //! *********** frm submitting************
  const onFinish = async (values) => {
    console.log("Form values:", values);
    const allValues = { ...values };
    if (fileList.length) {
      setImageUploadeLoading(true);
      const result = await fileUploadHook({
        singleImage: { file: fileList[fileList.length - 1] },
      });
      if (!result?.singleImageFileData?._id) {
        setImageUploadeLoading(false);
        return;
      }
      allValues.document = result?.singleImageFileData?._id;
    }
    allValues.message = editorValue;
    createNotice(allValues)
      .then((res) => {
        if (res?.data?.success) {
          Success_model({ message: "নোটিশ তৈরি করা সম্পন্ন হয়েছে" });
          form.resetFields();
          setEditorValue(null);
          setCheckedList([]);
          setFileList([]);
        } else {
          console.log(res);
          Error_model({
            message: res?.error.data?.message || "নোটিশ তৈরি ব্যর্থ হয়েছে",
            error: res,
          });
          return;
        }
      })
      .catch((error) => {
        Error_model({ message: error?.message, error: error });
        return;
      })
      .finally(() => {
        setImageUploadeLoading(false);
      });
  };

  // chack list
  const onChange = (list) => {
    setCheckedList(list);
  };
  //! ************** Text editors ***************

  //get the text editor value
  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  //! ************** end *************************

  if (error) {
    Error_model({ message: error?.message, error: error });
  }
  return (
    <div className="m-4">
      <Typography.Title level={2} style={{ padding: "0.625rem" }}>
        নতুন নোটিশ/বিজ্ঞপ্তি লিখুন
      </Typography.Title>
      <div className="flex items-center gap-3 pl-2">
        <Button
          onClick={() => history.back()}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={<ArrowLeftOutlined />}
        >
          পূর্বের পেইজ
        </Button>
        <Button
          onClick={() => router.push("/supper-admin/office-desk/office-notice")}
        >
          সকল নোটিশ/বিজ্ঞপ্তি
        </Button>
      </div>
      <Divider></Divider>
      <Form form={form} onFinish={onFinish} style={{ padding: "0.625rem" }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={18}>
            <Typography.Text>
              শিরোনাম <span className="text-red-500">*</span>
            </Typography.Text>

            <Form.Item
              // label="শিক্ষার্থীর নাম (বাংলায়)"
              name="title"
              rules={[
                {
                  pattern: /^[\u0980-\u09FF\s]*$/,
                  message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                },
                { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
              ]}
            >
              <Input placeholder="শিরোনাম (বাংলায়) লিখুন" />
            </Form.Item>

            <Row gutter={[16, 16]}>
              <Col xs={24} md={12} lg={8}>
                <Typography.Text>
                  নোটিশ তারিখ<span className="text-red-500">*</span>
                </Typography.Text>
                <Form.Item
                  // label="জন্ম তারিখ"
                  name="notice_date"
                >
                  <DatePicker
                    placeholder="নোটিশ তারিখ নির্বাচন করুন"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={12} lg={8}>
                <Typography.Text>
                  প্রকাশ তারিখ<span className="text-red-500">*</span>
                </Typography.Text>
                <Form.Item
                  // label="জন্ম তারিখ"
                  name="publish_date"
                >
                  <DatePicker
                    placeholder="প্রকাশ তারিখ নির্বাচন করুন"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} lg={8}>
                <Typography.Text>
                  ডকুমেন্ট আপলোড করুন<span className="text-red-500">*</span>
                </Typography.Text>
                <Form.Item>
                  <Upload
                    fileList={fileList}
                    beforeUpload={beforeUpload}
                    multiple={false}
                  >
                    <Button icon={<UploadOutlined />} style={{ width: "100%" }}>
                      Select (jpg/jpes/png)
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>

            <div>
              <DynamicQuillEditor
                value={editorValue}
                onChange={handleEditorChange}
              />
            </div>
          </Col>
          <Col xs={24} md={6}>
            <Typography.Text>
              মেসেজ করুন <span className="text-red-500">*</span>
            </Typography.Text>
            <Checkbox.Group
              options={plainOptions}
              value={checkedList}
              onChange={onChange}
              style={{ display: "flex", flexDirection: "column" }}
            />
            <Checkbox
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
              checked={checkAll}
            >
              সকলের জন্য
            </Checkbox>
          </Col>
        </Row>
        <Form.Item style={{ width: "100%", marginTop: "3rem" }}>
          <div className="flex justify-start items-center">
            {imageUploadeLoading || noticeLoading ? (
              <Button
                type="default"
                htmlType="submit"
                style={{ width: "10.75rem" }}
              >
                <Spin />
              </Button>
            ) : (
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "10.75rem" }}
              >
                নোটিশ পাঠান
              </Button>
            )}
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Send_notice;
