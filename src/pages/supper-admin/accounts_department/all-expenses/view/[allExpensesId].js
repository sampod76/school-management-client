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
import { useGetSingleExpenseQuery } from "../../../../../redux/features/expense/expenseApi";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import moment from "moment";
import Link from "next/link";
// import AddExpense from "@/pages/expense/add-expense";

const { TextArea } = Input;
const { Title } = Typography;

const ViewAllExpenses = () => {
  const [fileList, setFileList] = useState([]);
  const [imageUploadeLoading, setImageUploadeLoading] = useState(false);

  const [form] = Form.useForm();
  const router = useRouter();
  const { allExpensesId } = router.query;

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

    AddExpense(values).then((props) => {
      console.log(props);
      if (props.data?.success) {
        toast.success("ব্যয় সফলভাবে যোগ করা হয়েছে।");
        setImageUploadeLoading(false);
        form.resetFields();
      }
    });
  };

  const { data: expenseData, isLoading } =
    useGetSingleExpenseQuery(allExpensesId);

  const defaultDate = moment(expenseData?.data?.date);

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
        ব্যায় হিসাব
      </Title>
      <Form
        form={form}
        name="addExpenseForm"
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          expenseName: expenseData?.data?.expenseName,
          description: expenseData?.data?.description,
          amount: expenseData?.data?.amount,
          date: defaultDate,
          invoiceNumber: expenseData?.data?.invoiceNumber,
          expenseHeader: expenseData?.data?.expenseHeader,
        }}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="ব্যয়ের উৎস"
              name="expenseName"
              rules={[
                { required: true, message: "অনুগ্রহ করে ব্যয়ের উৎস লিখুন" },
              ]}
            >
              <Input readOnly />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="ব্যয়ের মাধ্যম"
              name="expenseHeader"
              rules={[
                { required: true, message: "অনুগ্রহ করে ব্যয়ের মাধ্যম লিখুন" },
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
                { required: true, message: "অনুগ্রহ ইনভয়েস নাম্বার লিখুন" },
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
                { required: true, message: "অনুগ্রহ করে ব্যয়ের পরিমাণ লিখুন" },
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
              <BiSave></BiSave> সকল ব্যয় ফিরে যান
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ViewAllExpenses;
