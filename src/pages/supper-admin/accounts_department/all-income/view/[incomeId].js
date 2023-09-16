import React, { useState } from "react";

import {
  Form,
  Input,
  DatePicker,
  Button,
  Upload,
  message,
  Typography,
  Row,
  Col,
  Spin,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { fileUploadHook } from "@/utils/fileUploadHook";
import "tailwindcss/tailwind.css";
import { BiSave } from "react-icons/bi";
import { useGetSingleIncomeQuery } from "@/redux/features/income/incomeApi";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import moment from "moment";
import Link from "next/link";

const { TextArea } = Input;
const { Title } = Typography;

const ViewAllIncome = () => {
  const [fileList, setFileList] = useState([]);
  const [imageUploadeLoading, setImageUploadeLoading] = useState(false);

  // form and necessaries
  const [form] = Form.useForm();
  const router = useRouter();
  const { incomeId } = router.query;

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("শুধুমাত্র ছবি ফাইল আপলোড হবে!");
      return false;
    }
    const isJpgOrJpeg =
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png";
    if (!isJpgOrJpeg) {
      message.error("শুধুমাত্র আপলোড হবে JPEG/jpg/png  ফাইল!");
      return false;
    }
    setFileList([file]); // Replace the previous file with the new one
    return false; // Prevent automatic upload
  };

  const onFinish = async (values) => {
    //image uploade
    if (fileList.length) {
      setImageUploadeLoading(true);
      const result = await fileUploadHook({
        singleImage: { file: fileList[fileList.length - 1] },
      });
      if (!result?.singleImageFileData?._id) {
        setImageUploadeLoading(false);
        return;
      }
      values.document = result?.singleImageFileData?._id;
    }
    //
    addIncome(values).then((props) => {
      console.log(props);
      if (props.data?.success) {
        toast.success("আয় সফলভাবে যোগ করা হয়েছে।");
        setImageUploadeLoading(false);
        form.resetFields();
      }
    });
  };

  const { data: incomeData, isLoading } = useGetSingleIncomeQuery(incomeId);

  const defaultDate = moment(incomeData?.data?.date);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Spin></Spin>
      </div>
    );
  }

  return (
    <div className="w-full   p-8 bg-white rounded shadow-md m-3">
      <Title level={2} className="mb-4">
        আয় হিসাব
      </Title>
      <Form
        form={form}
        name="addIncomeForm"
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          incomeName: incomeData?.data?.incomeName,
          description: incomeData?.data?.description,
          amount: incomeData?.data?.amount,
          date: defaultDate,
          invoiceNumber: incomeData?.data?.invoiceNumber,
          incomeHeader: incomeData?.data?.incomeHeader,
        }}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="আয়ের উৎস"
              name="incomeName"
              rules={[
                { required: true, message: "অনুগ্রহ করে আয়ের উৎস লিখুন" },
              ]}
            >
              <Input readOnly />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="আয়ের মাধ্যম "
              name="incomeHeader"
              rules={[
                { required: true, message: "অনুগ্রহ করে আয়ের মাধ্যম লিখুন" },
              ]}
            >
              <Input readOnly />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="তারিখ"
              name="date"
              rules={[{ required: true, message: "অনুগ্রহ করে তারিখ লিখুন" }]}
            >
              <DatePicker disabled style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="ইনভয়েস নাম্বার"
              name="invoiceNumber"
              rules={[
                { required: true, message: "অনুগ্রহ করে ইনভয়েস নাম্বার লিখুন" },
              ]}
            >
              <Input readOnly />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="পরিমাণ ($)"
              name="amount"
              rules={[
                { required: true, message: "অনুগ্রহ করে আয়ের পরিমাণ লিখুন" },
              ]}
            >
              <Input readOnly type="number" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item label="ডকুমেন্ট" name="document">
              <Upload
                fileList={fileList}
                beforeUpload={beforeUpload}
                multiple={false}
              >
                <Button
                  disabled
                  icon={<UploadOutlined />}
                  style={{ width: "100%" }}
                >
                  ডকুমেন্ট আপলোড করুন (jpg/jpes/png)
                </Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="বর্ণনা" name="description">
          <TextArea disabled rows={4} />
        </Form.Item>

        <Form.Item>
          <Link href="/supper-admin/accounts_department/all-income">
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "170px",
                height: "45px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                fontSize: "1rem",
              }}
            >
              <BiSave></BiSave> সকল আয় ফিরে যান
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ViewAllIncome;
