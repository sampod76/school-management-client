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
import {
  useGetSingleIncomeQuery,
  useUpdateIncomeMutation,
} from "@/redux/features/income/incomeApi";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import moment from "moment";

const { TextArea } = Input;
const { Title } = Typography;

const EditAllIncome = () => {
  const [fileList, setFileList] = useState([]);
  const [imageUploadeLoading, setImageUploadeLoading] = useState(false);

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
    console.log("t-1");
    return false; // Prevent automatic upload
  };

  // form and necessaries
  const [form] = Form.useForm();
  const router = useRouter();
  const { incomeId } = router.query;

  // rtk query for get single element
  const {
    data: incomeData,
    isLoading,
    error,
    refetch,
  } = useGetSingleIncomeQuery(incomeId, { skip: !incomeId });
  const previousId = incomeData?.data?.document;
  console.log(previousId);

  async function deleteResource() {
    const url = `http://localhost:5000/api/v1/upload/${previousId}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
        // You can add headers if needed, such as authorization headers
      });

      if (response.ok) {
        console.log("Resource deleted successfully.");
        // Perform any additional actions after successful deletion
      } else {
        console.error("Failed to delete resource:", response.statusText);
        // Handle the error as needed
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error as needed
    }
  }

  //rtk query  for  update
  const [updateIncome, { isSuccess }] = useUpdateIncomeMutation();

  // make a empty object to reset from
  const initialValues = {
    incomeName: "",
    description: "",
    amount: "",
    date: "",
    invoiceNumber: "",
    incomeHeader: "",
  };

  // update income and handle success and error
  const onFinish = async (values) => {
    try {
      console.log("t-2");

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
      console.log("t-3");

      updateIncome({
        id: incomeId,
        data: { ...values },
      }).then((props) => {
        console.log(props);
        if (props.data?.success) {
          refetch();
          toast.success("আয় সফলভাবে পরিবর্তন হয়েছে।");
          setImageUploadeLoading(false);
          console.log("t-4");

          // Call the function to initiate the DELETE request
          deleteResource();
          // reset form as empty after update is successful
          form.setFieldsValue(initialValues);
        }
      });
    } catch (error) {
      console.log("t-5");

      console.error(error);
      toast.error("একটি অপ্রত্যাশিত ত্রুটি ঘটেছে");
    }
  };

  // set defalut date looks pretty
  const defaultDate = moment(incomeData?.data?.date);

  // set loader if loading
  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Spin></Spin>
      </div>
    );
  }
  //initial value 

  




  return (
    <div className="w-full   p-8 bg-white rounded shadow-md m-3">
      <Title level={2} className="mb-4">
        আয় হিসাব পরিবর্তন করুন
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
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="আয়ের মাধ্যম"
              name="incomeHeader"
              rules={[
                { required: true, message: "অনুগ্রহ করে আয়ের মাধ্যম লিখুন" },
              ]}
            >
              <Input />
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
              <DatePicker style={{ width: "100%" }} />
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
              <Input />
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
              <Input type="number" />
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
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          {imageUploadeLoading || isLoading ? (
            <Button
              type="default"
              htmlType="submit"
              style={{
                width: "150px",
                height: "45px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                fontSize: "1.5rem",
              }}
            >
              <Spin />
            </Button>
          ) : (
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "150px",
                height: "45px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                fontSize: "1.5rem",
              }}
            >
              <BiSave></BiSave> জমা দিন
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditAllIncome;
