/* // ? create by --> sampod nath

 */

import {
  Form,
  Input,
  Select,
  DatePicker,
  Checkbox,
  Upload,
  Button,
  InputNumber,
  Row,
  Col,
  Typography,
  Space,
  Spin,
  message,
  Modal,
} from "antd";
import {
  InboxOutlined,
  UploadOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "@/components/Auth/AuthProvider";
import {
  useGetAllUniqueBooksQuery,
  useGetBooksQuery,
} from "@/redux/features/book/bookApi";
import { fileUploadHook } from "@/utils/fileUploadHook";
import { usePostTeacherMutation } from "@/redux/features/teacher/teacherApi";
import { Success_model, confirm_modal } from "@/utils/modalHook";
import DeshbordLoading from "@/components/loader/deshbordLoading";

const { Option } = Select;
const AddTeacherPage = () => {
  const { Error_model } = useContext(AuthContext);
  const [form] = Form.useForm();
  //! *************all state ****************
  const [isModalVisible, setIsModalVisible] = useState(false);
  //
  const [imgFiles, setImgFiles] = useState();
  const [textareaText, setTextareaText] = useState("");
  ///
  const [fileList, setFileList] = useState([]);
  const [imageUploadeLoading, setImageUploadeLoading] = useState(false);
  //! *************all state ** end **************
  //

  //! ************all api methods*******************

  const [createTeacher, { isLoading: teacherLoading, error: teacherError }] =
    usePostTeacherMutation();
  const {
    data: uniqueBooks,
    isLoading: uniqueLoading,
    error: uniqueError,
    refetch,
  } = useGetAllUniqueBooksQuery();

  //! ************all api methods*** end*************

  // upload profile image
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
  ///

  //*************** */ certificate uploade end *********

  const hobbiesOptions = [
    "ফুটবল খেলা",
    "পড়া",
    "লেখা",
    "পেইন্টিং",
    "রান্না করা",
    "গান গাওয়া",
    "নাচ করা",
    "অভিনয়",
    "মাছ ধরা",
    "ভিডিও গেম খেলা",
    "কবিতা লেখা",
  ];
  const subjectList = [
    { id: 1, class: 6, name: "বাংলা" },
    { id: 2, class: 6, name: "ইংরেজি" },
    { id: 3, class: 6, name: "গণিত" },
    { id: 4, class: 6, name: "সাধারণ বিজ্ঞান" },
    { id: 5, class: 6, name: "সামাজিক বিজ্ঞান" },
    { id: 6, class: 6, name: "ধর্ম ও নৈতিক শিক্ষা" },
    { id: 7, class: 6, name: "শারীরিক শিক্ষা ও স্বাস্থ্য" },
    { id: 8, class: 6, name: "কৃষি অধ্যয়ন" },
    { id: 9, class: 6, name: "তথ্য ও যোগাযোগ প্রযুক্তি" },
    { id: 10, class: 6, name: "শিল্প ও শিল্পকলা" },
    { id: 11, class: 6, name: "গৃহকর্ম ও পাঠ্য প্রযুক্তি" },
    { id: 12, class: 6, name: "সঙ্গীত" },
  ];

  const onFinish = async (values) => {
    console.log("Form values:", values);
    setIsModalVisible(false);
    const transperdata = {
      userId: values?.userId,
      password: values?.password,
      educational_qualification: values?.educational_qualification,
      previous_experience: values?.previous_experience,
      training_courses: values?.training_courses,
    };

    for (const key in values) {
      if (
        key !== "userId" &&
        key !== "password" &&
        key !== "educational_qualification" &&
        key !== "previous_experience" &&
        key !== "training_courses"
      ) {
        const [objKey, propKey] = key.split(".");
        if (!transperdata[objKey]) {
          transperdata[objKey] = {};
        }
        transperdata[objKey][propKey] = values[key];
      }
    }
    if (fileList.length) {
      setImageUploadeLoading(true);
      const result = await fileUploadHook({
        profileImage: { file: fileList[fileList.length - 1] },
      });
      if (!result?.singleProfileImageData?._id) {
        setImageUploadeLoading(false);
        return;
      }
      transperdata.teacher_info.photo = result?.singleProfileImageData?._id;
    }
    transperdata.teacher_info.opinion = textareaText;
    console.log(transperdata);
    try {
      createTeacher(transperdata)
        .then((result) => {
          console.log(result);
          if (result?.data?.success) {
            Success_model({ message: "successfully created teacher account" });
            form.resetFields();
          } else {
            console.log(result);
            Error_model({message: result?.error?.data?.message || "কোন কিছু ভুল হচ্ছে দয়া করে আবার যাচাই করুন!!",error: result,});}
        })
        .catch((error) => {
          console.log(error);
          Error_model({
            message: error?.message || "failed to create",
            error,
          });
        })
        .finally(() => {
          setImageUploadeLoading(false);
        });
    } catch (error) {
      Error_model({
        message: error?.message || "failed to create",
        error,
      });
      console.log(error);
    }
  };
  const showConfirmationModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // is loading

  if (uniqueLoading || teacherLoading) {
    return <DeshbordLoading />;
  }

  if (teacherError || uniqueError) {
    console.log(teacherError,uniqueError);
    Error_model({ message: teacherError?.message ||  uniqueError?.message, error: teacherError|| uniqueError });
  }
  return (
    <div /* className="container mx-auto p-5" */>
      <Form form={form} onFinish={onFinish} style={{ padding: "1rem" }}>
        {/* Student Information */}
        <Typography.Text style={{ border: "0px solid black" }}>
          <span className="text-lg font-bold underline">শিক্ষকের তথ্য:</span>
        </Typography.Text>
        <section>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                শিক্ষকের নাম (বাংলায়) <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                // label="শিক্ষকের নাম (বাংলায়)"
                name="teacher_info.name_bangla"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true },
                ]}
              >
                <Input placeholder="শিক্ষকের নাম (বাংলায়) লিখুন" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                শিক্ষকের নাম (ইংরেজি) <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                // label="শিক্ষকের নাম (ইংরেজি)"
                name="teacher_info.name_english"
                rules={[
                  {
                    pattern: /^[A-Za-z\s]*$/,
                    message: "ইংরেজিতে শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true },
                ]}
              >
                <Input placeholder="শিক্ষকের নাম (ইংরেজি) লিখুন" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                বিষয় <span className="text-red-500">*</span>
              </Typography.Text>

              <Form.Item
                name="teacher_info.subject"
                // label="Select Hobbies"
                rules={[{ required: true }]}
              >
                <Select
                  mode="multiple"
                  allowClear
                  placeholder="শিক্ষকের বিষয়"
                  style={{ width: "100%" }}
                >
                  {uniqueBooks?.data?.map((subject, i) => (
                    <Select.Option key={i} value={subject.uniqueBook}>
                      {subject.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                জন্ম তারিখ <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                // label="জন্ম তারিখ"
                name="teacher_info.date_of_birth"
                rules={[{ required: true }]}
              >
                <DatePicker
                  format="YYYY-MM-DD"
                  placeholder="জন্ম তারিখ নির্বাচন করুন"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>

            {/* <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                জন্ম নিবন্ধন নম্বর <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                // label="জন্ম নিবন্ধন নম্বর"
                name="teacher_info.birth_registration_number"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true },
                ]}
              >
                <Input placeholder="জন্ম নিবন্ধন নম্বর লিখুন" />
              </Form.Item>
            </Col> */}
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                ফোন নাম্বার <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="teacher_info.phone_number"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true },
                ]}
              >
                <Input placeholder="ফোন নাম্বার লিখুন" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                জন্মস্থান জেলা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="teacher_info.birth_district">
                <Select placeholder="জন্মস্থান জেলা লিখুন">
                  <Select.Option value="dhaka">ঢাকা</Select.Option>
                  {/* <Select.Option value="faridpur">ফরিদপুর</Select.Option>
                  <Select.Option value="gazipur">গাজীপুর</Select.Option>
                  {/* Add more options for other districts here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                জাতীয়তা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                // label="জাতীয়তা"
                name="teacher_info.nationality"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true },
                ]}
              >
                <Input placeholder="জাতীয়তা লিখুন" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                ধর্ম <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                // label="ধর্ম"
                name="teacher_info.religion"
                rules={[
                  {
                    required: true,

                    message: "দয়া করে ধর্ম নির্বাচন করুন",
                  },
                ]}
              >
                <Select placeholder="ধর্ম নির্বাচন করুন">
                  <Option value="ইসলাম">ইসলাম</Option>
                  <Option value="হিন্দুধর্ম">হিন্দুধর্ম</Option>
                  <Option value="বৌদ্ধধর্ম">বৌদ্ধধর্ম</Option>
                  <Option value="খ্রিস্টানধর্ম">খ্রিস্টানধর্ম</Option>
                  <Option value="অন্য">অন্য</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                জেন্ডার <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                // label="জেন্ডার"
                name="teacher_info.gender"
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Select placeholder="জেন্ডার নির্বাচন করুন">
                  <Option value="পুরুষ">পুরুষ</Option>
                  <Option value="মহিলা">মহিলা</Option>
                  <Option value="অন্যান্য">অন্যান্য</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                বৈবাহিক অবস্থা <span className="text-red-500">*</span>
              </Typography.Text>

              <Form.Item
                // label="বৈবাহিক অবস্থা"
                name="teacher_info.marital_status"
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Select placeholder="বৈবাহিক অবস্থা নির্বাচন করুন">
                  <Option value="অবিবাহিত">অবিবাহিত</Option>
                  <Option value="বিবাহিত">বিবাহিত</Option>
                  <Option value="তালাকপ্রাপ্ত">তালাকপ্রাপ্ত</Option>
                  <Option value="বিপত্নীক/বিধবা">বিপত্নীক / বিধবা</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                রক্তের গ্রুপ <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                //  label="রক্তের গ্রুপ"
                name="teacher_info.blood_group"
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Select placeholder="রক্তের গ্রুপ নির্বাচন করুন">
                  <Option value="এ পজিটিভ">এ পজিটিভ</Option>
                  <Option value="এ নেগেটিভ">এ নেগেটিভ</Option>
                  <Option value="বি পজিটিভ">বি পজিটিভ</Option>
                  <Option value="বি নেগেটিভ">বি নেগেটিভ</Option>
                  <Option value="এবি পজিটিভ">এবি পজিটিভ</Option>
                  <Option value="এবি নেগেটিভ">এবি নেগেটিভ</Option>
                  <Option value="ও পজিটিভ">ও পজিটিভ</Option>
                  <Option value="ও নেগেটিভ">ও নেগেটিভ</Option>
                  {/*  <Option value="A+">A Positive (A+)</Option>
                  <Option value="A-">A Negative (A-)</Option>
                  <Option value="B+">B Positive (B+)</Option>
                  <Option value="B-">B Negative (B-)</Option>
                  <Option value="AB+">AB Positive (AB+)</Option>
                  <Option value="AB-">AB Negative (AB-)</Option>
                  <Option value="O+">O Positive (O+)</Option>
                  <Option value="O-">O Negative (O-)</Option> */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                ক্ষুদ্র নৃ-গোষ্টি কিনা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                // label="ক্ষুদ্র নৃ-গোষ্টি কিনা"
                name="teacher_info.minority_ethnicity"
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Select placeholder="ক্ষুদ্র নৃ-গোষ্টি নির্বাচন করুন">
                  <Option value="হ্যাঁ">হ্যাঁ </Option>
                  <Option value="না">না </Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                শিক্ষকের শখ <span className="text-red-500">*</span>
              </Typography.Text>

              <Form.Item
                name="teacher_info.hobbies"
                // label="Select Hobbies"
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Select
                  mode="multiple"
                  allowClear
                  placeholder="শিক্ষকের শখ লিখুন"
                  style={{ width: "100%" }}
                >
                  {hobbiesOptions.map((hobby) => (
                    <Select.Option key={hobby} value={hobby}>
                      {hobby}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </section>
        {/* Mother Information */}
        <Typography.Text style={{ border: "0px solid black" }}>
          <span className="text-lg font-bold underline">মাতার তথ্য:</span>
        </Typography.Text>
        {/* <h1 className="text-center font-bold text-lg ">মাতার তথ্য</h1> */}
        {/* <hr size="5" noshade style={{border:"2px solid black"}} /> */}
        <br />
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Typography.Text>
              মাতার নাম (বাংলায়) <span className="text-red-500">*</span>
            </Typography.Text>
            <Form.Item
              // label="মাতার নাম (বাংলায়)"
              name="mother_info.name_bangla"
              rules={[
                {
                  pattern: /^[\u0980-\u09FF\s]*$/,
                  message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                },
                { required: true },
              ]}
            >
              <Input placeholder="মাতার নাম (বাংলায়)" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Typography.Text>
              মায়ের নাম (ইংরেজিতে) <span className="text-red-500">*</span>
            </Typography.Text>
            <Form.Item
              // label="মায়ের নাম (ইংরেজিতে)"
              name="mother_info.name_english"
              rules={[
                {
                  pattern: /^[A-Za-z\s]*$/,
                  message: "ইংরেজিতে শুধুমাত্র অক্ষর ব্যবহার করুন",
                },
                { required: true },
              ]}
            >
              <Input placeholder="Mother's Name (English)" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Typography.Text>
              মাতার এনআইডি <span className="text-red-500">*</span>
            </Typography.Text>
            <Form.Item
              // label="মাতার এনআইডি"
              name="mother_info.nid"
              rules={[
                {
                  pattern: /^[\u0980-\u09FF\s]*$/,
                  message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                },
                { required: true },
              ]}
            >
              <Input placeholder="মাতার এনআইডি" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Typography.Text>
              মাতার জন্ম তারিখ <span className="text-red-500">*</span>
            </Typography.Text>
            <Form.Item
              // label="মাতার জন্ম তারিখ"
              name="mother_info.date_of_birth"
              rules={[{ required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" }]}
            >
              <DatePicker
                format="YYYY-MM-DD"
                placeholder="মাতার জন্ম তারিখ"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          {/* <Col xs={24} sm={12} md={8}>
            <Typography.Text>
              মাতার জন্ম নিবন্ধন <span className="text-red-500">*</span>
            </Typography.Text>
            <Form.Item
              // label="মাতার জন্ম নিবন্ধন"
              name="mother_info.birth_registration"
              rules={[
                {
                  pattern: /^[\u0980-\u09FF\s]*$/,
                  message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                },
                { required: true },
              ]}
            >
              <Input placeholder="মাতার জন্ম নিবন্ধন" />
            </Form.Item>
          </Col> */}
          <Col xs={24} sm={12} md={8}>
            <Typography.Text>
              মাতার ফোন নাম্বার <span className="text-red-500">*</span>
            </Typography.Text>
            <Form.Item
              // label="মাতার ফোন নাম্বার"
              name="mother_info.phone_number"
              rules={[{ required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" }]}
            >
              <Input placeholder="মাতার ফোন নাম্বার" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Typography.Text>
              মাতার পেশা <span className="text-red-500">*</span>
            </Typography.Text>
            <Form.Item
              // label="মাতার পেশা"
              name="mother_info.profession"
              rules={[
                {
                  pattern: /^[\u0980-\u09FF\s]*$/,
                  message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                },
                { required: true },
              ]}
            >
              <Input placeholder="মাতার পেশা" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Typography.Text>মৃত্যুর সাল (মাতা মৃত হলে)</Typography.Text>
            <Form.Item
              // label="মৃত্যুর সাল (মাতা মৃত হলে)"
              name="mother_info.year_of_death"
            >
              <DatePicker
                format="YYYY-MM-DD"
                placeholder="মৃত্যুর সাল (মাতা মৃত হলে)"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          {/* Other form items for mother information */}
        </Row>

        {/* Father Information */}
        {/* <h1 className="text-center font-bold text-lg  mt-2">পিতার তথ্য</h1> */}
        <Typography.Text style={{ border: "0px solid black" }}>
          <span className="text-lg font-bold underline">পিতার তথ্য:</span>
        </Typography.Text>

        <br />
        <section>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                পিতার নাম (বাংলায়) <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="father_info.name_bangla"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true },
                ]}
              >
                <Input placeholder="পিতার নাম (বাংলায়)" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                পিতার নাম (ইংরেজি) <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="father_info.name_english"
                rules={[
                  {
                    pattern: /^[A-Za-z\s]*$/,
                    message: "ইংরেজিতে শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true },
                ]}
              >
                <Input placeholder="পিতার নাম (ইংরেজি)" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                পিতার এনআইডি <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="father_info.nid"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true },
                ]}
              >
                <Input placeholder="পিতার এনআইডি" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                পিতার জন্ম তারিখ <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
                name="father_info.date_of_birth"
              >
                <DatePicker
                  format="YYYY-MM-DD"
                  placeholder="পিতার জন্ম তারিখ"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
            {/* <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                পিতার জন্ম নিবন্ধন <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item  rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true },
                ]} name="father_info.birth_registration">
                <Input placeholder="পিতার জন্ম নিবন্ধন" />
              </Form.Item>
            </Col> */}
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                পিতার ফোন নাম্বার <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true },
                ]}
                name="father_info.phone_number"
              >
                <Input placeholder="পিতার ফোন নাম্বার" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                পিতার পেশা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
                name="father_info.profession"
              >
                <Input placeholder="পিতার পেশা" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>মৃত্যুর সাল (পিতা মৃত হলে) </Typography.Text>
              <Form.Item name="father_info.year_of_death">
                <DatePicker
                  format="YYYY-MM-DD"
                  placeholder="মৃত্যুর সাল (পিতা মৃত হলে)"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
          </Row>
        </section>

        {/* Current Address */}
        <Typography.Title style={{ textDecoration: "underline" }} level={5}>
          বর্তমান ঠিকানা:-
        </Typography.Title>
        <section>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                বিভাগ <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
                name="current_address.division"
              >
                <Select placeholder="বিভাগ নির্বাচন করুন">
                  <Option value="" disabled>
                    বিভাগ নির্বাচন করুন
                  </Option>
                  <Option value="ঢাকা">ঢাকা</Option>
                  {/* <Option value="চট্টগ্রাম">চট্টগ্রাম</Option>
                  <Option value="রাজশাহী">রাজশাহী</Option>
                  <Option value="খুলনা">খুলনা</Option> */}
                  {/* Add other division options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                জেলা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
                name="current_address.district"
              >
                <Select placeholder="জেলা নির্বাচন করুন">
                  <Option value="" disabled>
                    জেলা নির্বাচন করুন
                  </Option>
                  <Option value="ঢাকা">মুন্সিগঞ্জ</Option>
                  {/* <Option value="চট্টগ্রাম">চট্টগ্রাম</Option>
                  <Option value="রাজশাহী">রাজশাহী</Option>
                  <Option value="খুলনা">খুলনা</Option> */}
                  {/* Add other district options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                উপজেলা/থানা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
                name="current_address.sub_district"
              >
                <Select placeholder="উপজেলা/থানা নির্বাচন করুন">
                  <Option value="" disabled>
                    উপজেলা/থানা নির্বাচন করুন
                  </Option>
                  <Option value="উত্তরা">সিরাজদিখান </Option>
                  {/* <Option value="মিরপুর">মিরপুর</Option>
                  <Option value="মহাখালী">মহাখালী</Option>
                  <Option value="বনানী">বনানী</Option> */}
                  {/* Add other sub-district options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                ইউনিয়ন <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
                name="current_address.union"
              >
                <Select placeholder="ইউনিয়ন নির্বাচন করুন">
                  <Option value="" disabled>
                    ইউনিয়ন নির্বাচন করুন
                  </Option>
                  <Option value="চিত্রকোট">চিত্রকোট</Option>
                  <Option value="শেখরনগর">শেখরনগর</Option>
                  <Option value="রাজানগর">রাজানগর</Option>
                  <Option value="কেয়াইন">কেয়াইন</Option>
                  <Option value="বাসাইল">বাসাইল</Option>
                  <Option value="লতবদী">লতবদী</Option>
                  <Option value="বালুচর">বালুচর</Option>
                  <Option value="বয়রাগাদি">বয়রাগাদি</Option>
                  <Option value="মালখানগর">মালখানগর</Option>
                  <Option value="জৈনসার">জৈনসার</Option>
                  <Option value="মধ্যপাড়া">মধ্যপাড়া</Option>
                  <Option value="ইছাপুরা">ইছাপুরা</Option>
                  <Option value="রশুনিয়া">রশুনিয়া</Option>
                  <Option value="কোলা ইউনিয়ন">কোলা ইউনিয়ন</Option>
                </Select>
              </Form.Item>
            </Col>
            {/* village */}
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                গ্রাম <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="current_address.village"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input placeholder="গ্রাম " />
              </Form.Item>
            </Col>
            {/* post_office */}
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                পোস্ট অফিস <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="current_address.post_office"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input placeholder="পোস্ট অফিস " />
              </Form.Item>
            </Col>

            {/* postal_code */}
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                পোস্ট কোড <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="current_address.postal_code"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input placeholder="পোস্ট কোড " />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                ওয়ার্ড নম্বর <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="current_address.ward_number"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Select placeholder="ওয়ার্ড নম্বর নির্বাচন করুন">
                  <Option value="" disabled>
                    ওয়ার্ড নম্বর নির্বাচন করুন
                  </Option>
                  <Option value="১">১</Option>
                  <Option value="২">২</Option>
                  <Option value="৩">৩</Option>
                  <Option value="৪">৪</Option>
                  <Option value="৫">৫</Option>
                  {/* Add other ward number options here */}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </section>
        {/* Permanent Address */}
        <Typography.Title style={{ textDecoration: "underline" }} level={5}>
          স্থায়ী ঠিকানা:-
        </Typography.Title>
        <section>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                বিভাগ <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
                name="permanent_address.division"
              >
                <Select placeholder="বিভাগ নির্বাচন করুন">
                  <Option value="" disabled>
                    বিভাগ নির্বাচন করুন
                  </Option>
                  <Option value="ঢাকা">ঢাকা</Option>
                  {/* <Option value="চট্টগ্রাম">চট্টগ্রাম</Option>
                  <Option value="রাজশাহী">রাজশাহী</Option>
                  <Option value="খুলনা">খুলনা</Option> */}
                  {/* Add other division options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                জেলা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
                name="permanent_address.district"
              >
                <Select placeholder="জেলা নির্বাচন করুন">
                  <Option value="" disabled>
                    জেলা নির্বাচন করুন
                  </Option>
                  <Option value="ঢাকা">মুন্সিগঞ্জ</Option>
                  {/* <Option value="চট্টগ্রাম">চট্টগ্রাম</Option>
                  <Option value="রাজশাহী">রাজশাহী</Option>
                  <Option value="খুলনা">খুলনা</Option> */}
                  {/* Add other district options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                উপজেলা/থানা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
                name="permanent_address.sub_district"
              >
                <Select placeholder="উপজেলা/থানা নির্বাচন করুন">
                  <Option value="" disabled>
                    উপজেলা/থানা নির্বাচন করুন
                  </Option>
                  <Option value="উত্তরা">সিরাজদিখান </Option>
                  {/* <Option value="মিরপুর">মিরপুর</Option>
                  <Option value="মহাখালী">মহাখালী</Option>
                  <Option value="বনানী">বনানী</Option> */}
                  {/* Add other sub-district options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                ইউনিয়ন <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
                name="permanent_address.union"
              >
                <Select placeholder="ইউনিয়ন নির্বাচন করুন">
                  <Option value="" disabled>
                    ইউনিয়ন নির্বাচন করুন
                  </Option>
                  <Option value="চিত্রকোট">চিত্রকোট</Option>
                  <Option value="শেখরনগর">শেখরনগর</Option>
                  <Option value="রাজানগর">রাজানগর</Option>
                  <Option value="কেয়াইন">কেয়াইন</Option>
                  <Option value="বাসাইল">বাসাইল</Option>
                  <Option value="লতবদী">লতবদী</Option>
                  <Option value="বালুচর">বালুচর</Option>
                  <Option value="বয়রাগাদি">বয়রাগাদি</Option>
                  <Option value="মালখানগর">মালখানগর</Option>
                  <Option value="জৈনসার">জৈনসার</Option>
                  <Option value="মধ্যপাড়া">মধ্যপাড়া</Option>
                  <Option value="ইছাপুরা">ইছাপুরা</Option>
                  <Option value="রশুনিয়া">রশুনিয়া</Option>
                  <Option value="কোলা ইউনিয়ন">কোলা ইউনিয়ন</Option>
                </Select>
              </Form.Item>
            </Col>
            {/* village */}
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                গ্রাম <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="permanent_address.village"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input placeholder="গ্রাম " />
              </Form.Item>
            </Col>
            {/* post_office */}
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                পোস্ট অফিস <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="permanent_address.post_office"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input placeholder="পোস্ট অফিস " />
              </Form.Item>
            </Col>

            {/* postal_code */}
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                পোস্ট কোড <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="permanent_address.postal_code"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input placeholder="পোস্ট কোড " />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                ওয়ার্ড নম্বর <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="permanent_address.ward_number"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Select placeholder="ওয়ার্ড নম্বর নির্বাচন করুন">
                  <Option value="" disabled>
                    ওয়ার্ড নম্বর নির্বাচন করুন
                  </Option>
                  <Option value="১">১</Option>
                  <Option value="২">২</Option>
                  <Option value="৩">৩</Option>
                  <Option value="৪">৪</Option>
                  <Option value="৫">৫</Option>
                  {/* Add other ward number options here */}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </section>

        {/* Other Guardian Information */}
        {/* <h1 className="text-center font-bold text-lg  mt-2">অন্য অভিভাবক</h1> */}
        <Typography.Text style={{ border: "0px solid black" }}>
          <span className="text-lg font-bold underline">অভিভাবক:</span>
        </Typography.Text>

        <br />
        <section>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                অভিভাবকের নাম <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                ]}
                name="guardian_info.name"
              >
                <Input placeholder="অভিভাবকের নাম" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                অভিভাবকের এনআইডি <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                ]}
                name="guardian_info.nid"
              >
                <Input placeholder="অভিভাবকের এনআইডি" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                অভিভাবকের পেশা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
                name="guardian_info.occupation"
              >
                <Input placeholder="অভিভাবকের পেশা" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <span className="text-red-500">*</span>{" "}
              <Typography.Text>
                অভিভাবকের সাথে শিক্ষার্থীদের সম্পর্ক
              </Typography.Text>
              <Form.Item
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
                name="guardian_info.relationship"
              >
                <Input placeholder="অভিভাবকের সাথে শিক্ষার্থীদের সম্পর্ক" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                অভিভাবকের ফোন নাম্বার <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                ]}
                name="guardian_info.number"
              >
                <Input placeholder="অভিভাবকের ফোন নাম্বার" />
              </Form.Item>
            </Col>
          </Row>
        </section>
        <section className="border-2 p-2 rounded-lg my-1 border-gray-400">
          <Typography.Text
            style={{ border: "0px solid black", fontWeight: "bold" }}
          >
            শিক্ষকের শিক্ষাগত যোগ্যতা
          </Typography.Text>

          <Form.List name="educational_qualification">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Row gutter={[16, 16]} key={key}>
                    <Col xs={24} sm={12} md={8} lg={5}>
                      <Typography.Text>
                        পরীক্ষার নাম <span className="text-red-500">*</span>
                      </Typography.Text>
                      <Form.Item
                        {...restField}
                        name={[name, "exam_name"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing exam_name",
                          },
                        ]}
                      >
                        {/* <Input placeholder="পরীক্ষার নাম" /> */}
                        <Select placeholder="পরীক্ষার নাম">
                          <Option value="" disabled>
                            পরীক্ষার নাম নির্বাচন করুন
                          </Option>
                          <Option value="s.s.c">S.S.C</Option>
                          <Option value="h.s.c">H.S.C</Option>
                          <Option value="b.b.a">B.B.A</Option>
                          <Option value="b.a">B.A</Option>
                          <Option value="m.a">M.A</Option>
                          <Option value="m.b.a">M.B.A</Option>
                          {/* Add other division options here */}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={4}>
                      <Typography.Text>
                        বোর্ডের নাম <span className="text-red-500">*</span>
                      </Typography.Text>
                      <Form.Item
                        {...restField}
                        name={[name, "board"]}
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Missing last name",
                        //   },
                        // ]}
                      >
                        <Select placeholder="বোর্ডের নাম">
                          <Option value="" disabled>
                            বোর্ডের নাম নির্বাচন করুন
                          </Option>
                          <Option value="dhaka_education_board">
                            ঢাকা শিক্ষা বোর্ড
                          </Option>
                          <Option value="chattogram_education_board">
                            চট্টগ্রাম শিক্ষা বোর্ড
                          </Option>
                          <Option value="rajshahi_education_board">
                            রাজশাহী শিক্ষা বোর্ড
                          </Option>
                          <Option value="barisal_education_board">
                            বরিশাল শিক্ষা বোর্ড
                          </Option>
                          <Option value="sylhet_education_board">
                            সিলেট শিক্ষা বোর্ড
                          </Option>
                          <Option value="comilla_education_board">
                            কুমিল্লা শিক্ষা বোর্ড
                          </Option>
                          <Option value="jessore_education_board">
                            যশোর শিক্ষা বোর্ড
                          </Option>
                          <Option value="dinajpur_education_board">
                            দিনাজপুর শিক্ষা বোর্ড
                          </Option>
                          <Option value="mymensingh_education_board">
                            ময়মনসিংহ শিক্ষা বোর্ড
                          </Option>
                          <Option value="madrasah_education_board">
                            মাদ্রাসা শিক্ষা বোর্ড
                          </Option>
                          <Option value="technical_education_board">
                            পেশাগত শিক্ষা বোর্ড
                          </Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={5}>
                      <Typography.Text>
                        প্রতিষ্ঠানের নাম<span className="text-red-500">*</span>
                      </Typography.Text>
                      <Form.Item {...restField} name={[name, "institution"]}>
                        <Input placeholder="প্রতিষ্ঠানের নাম" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={4}>
                      <Typography.Text>
                        ফলাফল<span className="text-red-500">*</span>
                      </Typography.Text>
                      <Form.Item {...restField} name={[name, "result"]}>
                        <Input placeholder="ফলাফল" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={3}>
                      <Typography.Text>
                        সার্টিফিকেট
                        <span className="text-red-500">*</span>
                      </Typography.Text>
                      {/* <Upload {...props} multiple={false} >
                        <Button
                          icon={<UploadOutlined />}
                          style={{ width: "100%" }}
                        >
                          সার্টিফিকেট
                        </Button>
                      </Upload> */}
                      <input type="file" multiple={false} name=""></input>
                    </Col>
                    {/* <MinusCircleOutlined s onClick={() => remove(name)} /> */}
                    <Col>
                      <div className="flex flex-col items-center">
                        <Typography.Text>
                          <span className="text-red-500">*</span>
                        </Typography.Text>
                        <Button
                          onClick={() => remove(name)}
                          style={{
                            fontSize: "1rem",
                            color: "red",
                            textAlign: "center",
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    </Col>
                  </Row>
                ))}
                <div className="flex justify-center items-center">
                  <Form.Item style={{ width: "100%", margin: "10px 0" }}>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      icon={
                        <PlusOutlined
                          style={{
                            paddingBottom: "20px",
                            display: "flex",
                            justifyItems: "center",
                            alignItems: "center",
                          }}
                        />
                      }
                    >
                      শিক্ষকের শিক্ষাগত যোগ্যতা যোগ করুন
                    </Button>
                  </Form.Item>
                </div>
              </>
            )}
          </Form.List>
        </section>
        <section className="border-2 p-2 rounded-lg my-1 border-gray-400">
          <Typography.Text
            style={{ border: "0px solid black", fontWeight: "bolder" }}
          >
            পূর্ববর্তী শিক্ষকতার অভিজ্ঞার তথ্য
          </Typography.Text>

          <Form.List name="previous_experience">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Row gutter={[16, 16]} key={key}>
                    <Col xs={24} sm={12} md={8}>
                      <Typography.Text>
                        প্রতিষ্ঠানের নাম<span className="text-red-500">*</span>
                      </Typography.Text>
                      <Form.Item
                        {...restField}
                        name={[name, "institution"]}
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Missing exam_name",
                        //   },
                        // ]}
                      >
                        <Input placeholder="প্রতিষ্ঠানের নাম" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={5}>
                      <Typography.Text>
                        বিষয়ের নাম<span className="text-red-500">*</span>
                      </Typography.Text>
                      <Form.Item
                        {...restField}
                        name={[name, "subject"]}
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Missing last name",
                        //   },
                        // ]}
                      >
                        <Select
                          mode="multiple"
                          allowClear
                          placeholder="বিষয়ের নাম"
                        >
                          <Option value="" disabled>
                            বিষয়ের নাম নির্বাচন করুন
                          </Option>
                          <Option value="bangla">বাংলা</Option>
                          <Option value="mathematics">গণিত</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={5}>
                      <Typography.Text>
                        পদবী<span className="text-red-500">*</span>
                      </Typography.Text>
                      <Form.Item
                        {...restField}
                        name={[name, "designation"]}
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Missing last name",
                        //   },
                        // ]}
                      >
                        <Input placeholder="পদবী"></Input>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={5}>
                      <Typography.Text>
                        চাকুরীর সময়কাল <span className="text-red-500">*</span>
                      </Typography.Text>
                      <Form.Item name={[name, "employment_period"]}>
                        <DatePicker.RangePicker />
                      </Form.Item>
                    </Col>
                    <Col>
                      <div className="flex flex-col items-center">
                        {/* <MinusCircleOutlined s onClick={() => remove(name)} /> */}
                        <Typography.Text>
                          <span className="text-red-500">*</span>
                        </Typography.Text>
                        <Button
                          onClick={() => remove(name)}
                          style={{
                            fontSize: "1rem",
                            color: "red",
                            textAlign: "center",
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    </Col>
                  </Row>
                ))}
                <div className="flex justify-center items-center">
                  <Form.Item style={{ width: "100%", margin: "10px 0" }}>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      icon={
                        <PlusOutlined
                          style={{
                            paddingBottom: "20px",
                            display: "flex",
                            justifyItems: "center",
                            alignItems: "center",
                          }}
                        />
                      }
                    >
                      পূর্ববর্তী শিক্ষকতার অভিজ্ঞার তথ্য
                    </Button>
                  </Form.Item>
                </div>
              </>
            )}
          </Form.List>
        </section>
        <section className="border-2 p-2 rounded-lg my-1 border-gray-400">
          <Typography.Text
            style={{ border: "0px solid black", fontWeight: "bolder" }}
          >
            শিক্ষা বিষয়ক বিভিন্ন ট্রেনিং
          </Typography.Text>

          <Form.List name="training_courses">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Row gutter={[16, 16]} key={key} style={{}}>
                    <Col xs={24} sm={12} md={8} lg={5}>
                      <Typography.Text>
                        ট্রেনিং এর নাম
                        <span className="text-red-500">*</span>
                      </Typography.Text>
                      <Form.Item
                        {...restField}
                        name={[name, "course_name"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing exam_name",
                          },
                        ]}
                      >
                        <Input placeholder="ট্রেনিং এর নাম" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={4}>
                      <Typography.Text>
                        ট্রেনিং এর বিষয় <span className="text-red-500">*</span>
                      </Typography.Text>
                      <Form.Item
                        {...restField}
                        name={[name, "course_subject"]}
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Missing last name",
                        //   },
                        // ]}
                      >
                        <Select placeholder="ট্রেনিং এর বিষয়">
                          <Option value="bangla">বাংলা</Option>
                          <Option value="mathematics">গণিত</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={5}>
                      <Typography.Text>
                        ট্রেনিং এর সময়কাল{" "}
                        <span className="text-red-500">*</span>
                      </Typography.Text>
                      <Form.Item name={[name, "course_duration"]}>
                        <DatePicker.RangePicker />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={12} md={8} lg={3}>
                      <Typography.Text>সার্টিফিকেট</Typography.Text>
                      {/* <Upload {...props}>
                        <Button
                          icon={<UploadOutlined />}
                          style={{ width: "100%" }}
                        >
                          সার্টিফিকেট
                        </Button>
                      </Upload> */}
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={3}>
                      <div className="flex flex-col items-center">
                        {/* <MinusCircleOutlined s onClick={() => remove(name)} /> */}
                        <Typography.Text>
                          <span className="text-red-500">*</span>
                        </Typography.Text>
                        <Button
                          onClick={() => remove(name)}
                          style={{
                            fontSize: "1rem",
                            color: "red",
                            textAlign: "center",
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    </Col>
                    <Col xs={24}>
                      <Typography.Text>
                        ট্রেনিং সম্পর্কে বিস্তারিত{" "}
                        <span className="text-red-500">*</span>
                      </Typography.Text>
                      <Input.TextArea rows={10} name="course_details" />
                    </Col>
                    {/* <MinusCircleOutlined s onClick={() => remove(name)} /> */}
                  </Row>
                ))}
                <div className="flex justify-center items-center">
                  <Form.Item style={{ width: "100%", margin: "5px 0" }}>
                    <Button
                      style={{ marginTop: "10px" }}
                      type="dashed"
                      onClick={() => add()}
                      // block
                      icon={
                        <PlusOutlined
                          style={{
                            paddingBottom: "20px",
                            display: "flex",
                            justifyItems: "center",
                            alignItems: "center",
                          }}
                        />
                      }
                    >
                      শিক্ষকের শিক্ষাগত যোগ্যতা যোগ করুন
                    </Button>
                  </Form.Item>
                </div>
              </>
            )}
          </Form.List>
        </section>

        {/* Other form items for other guardian information */}

        <Form.Item labelAlign="top" className="mt-2 ">
          <label>শিক্ষকের ছবি (পাসপোর্ট সাইজের ছবি)</label>
          {/* <Form.Item
            name="teacher_info.photo"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files" action="/upload.do" multiple={false}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item> */}
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

        <Form.Item
          style={{ width: "100%" }}
          // label=""
          rules={[
            {
              pattern: /^[\u0980-\u09FF\s]*$/,
              message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
            },
          ]}
          name="student.opinion"
        >
          <label>শিক্ষার্থীর মতামত (বাংলায়)</label>

          <Input.TextArea
            showCount
            maxLength={3000}
            rows={12}
            onBlur={(e) => setTextareaText(e.target.value)}
            // defaultValue={}
          />
        </Form.Item>
        <section>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Typography.Text>
                ব্যবহারকারী আইডি <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="userId"
                rules={[
                  {
                    required: true,
                    message: "এই ফিল্ডটি পূরণ করতেই হবে",
                  },
                  // { validator: validatePassword },
                  { min: 6, message: "userId must be at least 6" },
                ]}
                autoComplete="off"
              >
                <Input placeholder="ব্যবহারকারী আইডি দিন" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Typography.Text>
                পাসওয়ার্ড <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "এই ফিল্ডটি পূরণ করতেই হবে",
                    message: "Password is required",
                  },
                  // { validator: validatePassword },
                  { min: 6, message: "Password must be at least" },
                  { type: "password" },
                ]}
                hasFeedback={true}
                autoComplete="off"
              >
                <Input.Password placeholder="পাসওয়ার্ড দিন" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Typography.Text>
                কনফার্ম পাসওয়ার্ড <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="confirm_password"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "এই ফিল্ডটি পূরণ করতেই হবে",
                    message: "Password is required",
                  },
                  { type: "string" }, // Change this line
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject("দুটি পাসওয়ার্ড সমান হতে হবে");
                    },
                  }),
                ]}
                hasFeedback={true}
                autoComplete="off"
              >
                <Input.Password placeholder="কনফার্ম পাসওয়ার্ড দিন" />
              </Form.Item>
            </Col>
          </Row>
        </section>

        <Form.Item style={{ width: "100%" }}>
          <div className="flex justify-center items-center">
            {imageUploadeLoading || teacherLoading ? (
              <Button
                type="default"
                htmlType="submit"
                style={{ width: "18.75rem" }}
              >
                <Spin />
              </Button>
            ) : (
              <Button
                type="primary"
                htmlType="button"
                style={{ width: "10.75rem" }}
                onClick={showConfirmationModal}
              >
                জমা দিন
              </Button>
            )}
          </div>
        </Form.Item>
      </Form>
      <Modal
        title="নিশ্চিতকরণ করুন !"
        open={isModalVisible}
        onOk={form.submit} // This will trigger the form submission when confirmed
        onCancel={handleCancel}
        okText="Confirm"
        cancelText="Cancel"
      >
        আপনি কি আবেদনটি নিশ্চিত করতে চান?
      </Modal>
    </div>
  );
};

export default AddTeacherPage;

// (
//   confirm_modal("").then(()=><Button
//   type="primary"
//   htmlType="submit"
//   style={{ width: "18.75rem" }}
// >
//   জমা দিন
// </Button>)
// )}
