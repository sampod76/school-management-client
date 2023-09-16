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
  Divider,
  Row,
  Col,
  Typography,
  message,
} from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";

import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "@/components/Auth/AuthProvider";
import { Success_model } from "@/utils/modalHook";
import { useGetClassesQuery } from "@/redux/features/class/classApi";
const subjectOptionList = [
  {
    class: "one",
    books: [
      { bookName: "বাংলা", _id: "sdfhjkdsfsdf" },
      { bookName: "ইংরেজি", _id: "sdfhjdfgsdkdsfsdf" },
      { bookName: "গণিত", _id: "sdfhjkdsfsdfddf" },
    ],
  },
  {
    class: "two",
    books: [
      { bookName: "বাংলা", _id: "sdfhj5455kdsfsdf" },
      { bookName: "ইংরেজি", _id: "sdf851hjkdsfsdf" },
      { bookName: "গণিত", _id: "sdfhjkds74fsdf" },
    ],
  },
  {
    class: "three",
    books: [
      { bookName: "বাংলা", _id: "sdfhj5455kdsfsdf" },
      { bookName: "ইংরেজি", _id: "sdf851hjkdsfsdf" },
      { bookName: "গণিত", _id: "sdfhjkds74fsdf" },
    ],
  },
];
const { Option } = Select;

const HomeAddAdmission = () => {
  const { Error_model } = useContext(AuthContext);
  //get all classes
  const { data: AllClass, error, isLoading } = useGetClassesQuery();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  //checkbox states
  const [subjectOptionList, setSubjectListOption] = useState({});
  //chackbox functionality
  const [checkedList, setCheckedList] = useState();
  const [selectedBooksIds, setSelectedBooksIds] = useState();
  const plainOptions = subjectOptionList?.books?.map((book) => book.bookName);
  const checkAll = plainOptions?.length === checkedList?.length;
  const indeterminate =
    checkedList?.length > 0 && checkedList?.length < plainOptions?.length;
  const onChange = (list) => {
    const selectedBooksIds = subjectOptionList.books
      .filter((book) => list.includes(book.bookName))
      .map((book) => book._id);

    setCheckedList(list);
    setSelectedBooksIds(selectedBooksIds);
  };
  const onCheckAllChange = (e) => {
    const list = e.target.checked ? plainOptions : [];
    const selectedBooksIds = e.target.checked
      ? subjectOptionList.books.map((book) => book._id)
      : [];
    setCheckedList(list);
    setSelectedBooksIds(selectedBooksIds);
  };
  console.log(selectedBooksIds);
  /// ? //

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

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

  const onFinish = async (values) => {
    console.log("from value", values);
    const transperdata = {
      userId: values.userId,
      password: values.password,
      books: selectedBooksIds,
    };

    for (const key in values) {
      if (key !== "userId" && key !== "password") {
        const [objKey, propKey] = key.split(".");
        if (!transperdata[objKey]) {
          transperdata[objKey] = {};
        }
        transperdata[objKey][propKey] = values[key];
      }
    }
    console.log("mongodb accect value", transperdata);

    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/students`,
        transperdata
      );
      if (result?.data?.success) {
        setLoading(false);
        Success_model({ message: "Registration successfully done" });

        // messageApi.open({
        //   type: "success",
        //   content: "Successfully create students",
        // });
      } else {
        Error_model({ message: "Internal error" });
        setLoading(false);
      }
      console.log(result);
    } catch (error) {
      Error_model({ message: error?.message });
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(error);
    Error_model({ message: error?.message });
  }

  console.log(subjectOptionList);
  return (
    <div className="container mx-auto p-5">
      {contextHolder}
      <Form onFinish={onFinish}>
        {/* Student Information */}
        <Typography.Title style={{ textDecoration: "underline" }} level={5}>
          শিক্ষার্থী তথ্য:-
        </Typography.Title>
        <section>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                শিক্ষার্থীর নাম (বাংলায়) <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                // label="শিক্ষার্থীর নাম (বাংলায়)"
                name="student.name_bangla"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input placeholder="শিক্ষার্থীর নাম (বাংলায়) লিখুন" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                শিক্ষার্থীর নাম (ইংরেজি) <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                // label="শিক্ষার্থীর নাম (ইংরেজি)"
                name="student.name_english"
                rules={[
                  {
                    pattern: /^[A-Za-z\s]*$/,
                    message: "ইংরেজিতে শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input placeholder="শিক্ষার্থীর নাম (ইংরেজি) লিখুন" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                যে শ্রেনিতে ভর্তি হতে ইচ্ছুক{" "}
                <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                // label="যে শ্রেনিতে ভর্তি হতে ইচ্ছুক"
                name="student.desired_class"
                rules={[
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Select placeholder="যে শ্রেনিতে ভর্তি হতে ইচ্ছুক নির্বাচন করুন">
                  <Select.Option value="" key={0}>
                    শ্রেনি নির্বাচন করুন
                  </Select.Option>
                  {AllClass?.data?.map((singleClass) => (
                    <Select.Option
                      value={singleClass.className}
                      key={singleClass._id}
                    >
                      <div onClick={() => setSubjectListOption(singleClass)}>
                        {singleClass.className}
                      </div>
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
                name="student.date_of_birth"
              >
                <DatePicker
                  format="YYYY-MM-DD"
                  placeholder="জন্ম তারিখ নির্বাচন করুন"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                জন্ম নিবন্ধন নম্বর <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                // label="জন্ম নিবন্ধন নম্বর"
                name="student.birth_registration_number"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input placeholder="জন্ম নিবন্ধন নম্বর লিখুন" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                জন্মস্থান জেলা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="student.birth_district">
                <Select placeholder="জন্মস্থান জেলা লিখুন">
                  <Select.Option value="ঢাকা">ঢাকা</Select.Option>
                  <Select.Option value="ফরিদপুর">ফরিদপুর</Select.Option>
                  <Select.Option value="গাজীপুর">গাজীপুর</Select.Option>
                  {/* <Select.Option value="gopalganj">গোপালগঞ্জ</Select.Option>
                  <Select.Option value="kishoreganj">কিশোরগঞ্জ</Select.Option>
                  <Select.Option value="madaripur">মাদারীপুর</Select.Option>
                  <Select.Option value="munshiganj">মুন্সিগঞ্জ</Select.Option>
                  <Select.Option value="narayanganj">নারায়ণগঞ্জ</Select.Option>
                  <Select.Option value="rajbari">রাজবাড়ি</Select.Option>
                  <Select.Option value="shariatpur">শরীয়তপুর</Select.Option>
                  <Select.Option value="tangail">টাঙ্গাইল</Select.Option>
                  <Select.Option value="barisal">বরিশাল</Select.Option>
                  <Select.Option value="barguna">বরগুড়া</Select.Option>
                  <Select.Option value="bhola">ভোলা</Select.Option>
                  <Select.Option value="jhalokathi">ঝালকাঠি</Select.Option>
                  <Select.Option value="patuakhali">পটুয়াখালী</Select.Option>
                  <Select.Option value="pirojpur">পিরোজপুর</Select.Option>
                  <Select.Option value="rangpur">রংপুর</Select.Option>
                  <Select.Option value="dinajpur">দিনাজপুর</Select.Option>
                  <Select.Option value="gaibandha">গাইবান্ধা</Select.Option>
                  <Select.Option value="kurigram">কুড়িগ্রাম</Select.Option>
                  <Select.Option value="lalmonirhat">লালমনিরহাট</Select.Option>
                  <Select.Option value="nilphamari">নীলফামারী</Select.Option>
                  <Select.Option value="panchagarh">পঞ্চগড়</Select.Option>
                  <Select.Option value="rangpur">রংপুর</Select.Option>
                  <Select.Option value="thakurgaon">ঠাকুরগাঁও</Select.Option>
                  <Select.Option value="habiganj">হবিগঞ্জ</Select.Option>
                  <Select.Option value="maulvibazar">মৌলভীবাজার</Select.Option>
                  <Select.Option value="sunamganj">সুনামগঞ্জ</Select.Option>
                  <Select.Option value="sylhet">সিলেট</Select.Option>
                  <Select.Option value="bandarban">বান্দরবান</Select.Option>
                  <Select.Option value="khagrachari">খাগড়াছড়ি</Select.Option>
                  <Select.Option value="rangamati">রাঙ্গামাটি</Select.Option>
                  <Select.Option value="chattogram">চট্টগ্রাম</Select.Option>
                  <Select.Option value="coxsbazar">কক্সবাজার</Select.Option>
                  <Select.Option value="feni">ফেনী</Select.Option>
                  <Select.Option value="brahmanbaria">
                    ব্রাহ্মণবাড়িয়া
                  </Select.Option>
                  <Select.Option value="chandpur">চাঁদপুর</Select.Option>
                  <Select.Option value="comilla">কুমিল্লা</Select.Option>
                  <Select.Option value="lakshmipur">লক্ষ্মীপুর</Select.Option>
                  <Select.Option value="noakhali">নোয়াখালী</Select.Option> */}
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
                name="student.nationality"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                name="student.religion"
                rules={[
                  {
                    required: true,
                    message: "এই ফিল্ডটি পূরণ করতেই হবে",
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
                name="student.gender"
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
                name="student.marital_status"
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
                name="student.blood_group"
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
                name="student.minority_ethnicity"
              >
                <Select placeholder="ক্ষুদ্র নৃ-গোষ্টি নির্বাচন করুন">
                  <Option value="হ্যাঁ">হ্যাঁ </Option>
                  <Option value="না">না </Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                আর্থিক সহায়তা প্রয়োজন<span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                // label="ক্ষুদ্র নৃ-গোষ্টি কিনা"
                name="student.financial_assistance_needed"
              >
                <Select placeholder="আর্থিক সহায়তা প্রয়োজন">
                  <Option value="হ্যাঁ">হ্যাঁ </Option>
                  <Option value="না">না </Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                শিক্ষার্থীর শখ <span className="text-red-500">*</span>
              </Typography.Text>

              <Form.Item
                name="student.hobbies"
                // label="Select Hobbies"
              >
                <Select
                  mode="multiple"
                  allowClear
                  placeholder="শিক্ষার্থীর শখ লিখুন"
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

        <Typography.Title style={{ textDecoration: "underline" }} level={5}>
          মাতার তথ্য:-
        </Typography.Title>
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
                { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
            >
              <DatePicker
                format="YYYY-MM-DD"
                placeholder="মাতার জন্ম তারিখ"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
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
                { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
              ]}
            >
              <Input placeholder="মাতার জন্ম নিবন্ধন" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Typography.Text>
              মাতার ফোন নাম্বার <span className="text-red-500">*</span>
            </Typography.Text>
            <Form.Item
              // label="মাতার ফোন নাম্বার"
              name="mother_info.phone_number"
              rules={[
                {
                  pattern: /^[\u0980-\u09FF\s]*$/,
                  message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                },
                { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
              ]}
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
                { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
              ]}
            >
              <Input placeholder="মাতার পেশা" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Typography.Text>
              মৃত্যুর সাল (মাতা মৃত হলে) <span className="text-red-500">*</span>
            </Typography.Text>
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
        <Typography.Title style={{ textDecoration: "underline" }} level={5}>
          পিতার তথ্য:-
        </Typography.Title>
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
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input placeholder="পিতার নাম (বাংলায়)" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                Father's Name (English) <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="father_info.name_english"
                rules={[
                  {
                    pattern: /^[A-Za-z\s]*$/,
                    message: "ইংরেজিতে শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input placeholder="Father's Name (English)" />
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
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input placeholder="পিতার এনআইডি" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                পিতার জন্ম তারিখ <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="father_info.date_of_birth">
                <DatePicker
                  format="YYYY-MM-DD"
                  placeholder="পিতার জন্ম তারিখ"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                পিতার জন্ম নিবন্ধন <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="father_info.birth_registration"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input placeholder="পিতার জন্ম নিবন্ধন" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                পিতার ফোন নাম্বার <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="father_info.phone_number"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input placeholder="পিতার ফোন নাম্বার" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                পিতার পেশা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item
                name="father_info.profession"
                rules={[
                  {
                    pattern: /^[\u0980-\u09FF\s]*$/,
                    message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                  },
                  { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input placeholder="পিতার পেশা" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                মৃত্যুর সাল (পিতা মৃত হলে){" "}
                <span className="text-red-500">*</span>
              </Typography.Text>
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
              <Form.Item name="current_address.division">
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
              <Form.Item name="current_address.district">
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
              <Form.Item name="current_address.sub_district">
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
                সিটি কর্পোরেশন <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="current_address.city_corporation">
                <Select placeholder="সিটি কর্পোরেশন/পৌরসভা নির্বাচন করুন">
                  <Option value="" disabled>
                    সিটি কর্পোরেশন/পৌরসভা নির্বাচন করুন
                  </Option>
                  <Option value="ঢাকা">বালুচর</Option>
                  {/* <Option value="চট্টগ্রাম">চট্টগ্রাম</Option>
                  <Option value="রাজশাহী">রাজশাহী</Option>
                  <Option value="খুলনা">খুলনা</Option> */}
                  {/* Add other city corporation options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                ইউনিয়ন <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="current_address.union">
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
              <Form.Item name="permanent_address.division">
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
              <Form.Item name="permanent_address.district">
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
              <Form.Item name="permanent_address.sub_district">
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
                সিটি কর্পোরেশন <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="permanent_address.city_corporation">
                <Select placeholder="সিটি কর্পোরেশন/পৌরসভা নির্বাচন করুন">
                  <Option value="" disabled>
                    সিটি কর্পোরেশন/পৌরসভা নির্বাচন করুন
                  </Option>
                  <Option value="ঢাকা">বালুচর</Option>
                  {/* <Option value="চট্টগ্রাম">চট্টগ্রাম</Option>
                  <Option value="রাজশাহী">রাজশাহী</Option>
                  <Option value="খুলনা">খুলনা</Option> */}
                  {/* Add other city corporation options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
              <Typography.Text>
                ইউনিয়ন <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="permanent_address.union">
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

        <Typography.Title style={{ textDecoration: "underline" }} level={5}>
          অন্য অভিভাবক:-
        </Typography.Title>
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
                name="other_guardian_info.name"
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
                name="other_guardian_info.nid"
              >
                <Input placeholder="অভিভাবকের এনআইডি" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Typography.Text>
                অভিভাবকের পেশা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="other_guardian_info.occupation">
                <Input placeholder="অভিভাবকের পেশা" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <span className="text-red-500">*</span>{" "}
              <Typography.Text>
                অভিভাবকের সাথে শিক্ষার্থীদের সম্পর্ক
              </Typography.Text>
              <Form.Item name="other_guardian_info.relationship">
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
                name="other_guardian_info.number"
              >
                <Input placeholder="অভিভাবকের ফোন নাম্বার" />
              </Form.Item>
            </Col>
          </Row>
        </section>

        {/* select then subject  */}
        <Typography.Title style={{ textDecoration: "underline" }} level={5}>
          বিষয় নির্বাচন করুন:-
        </Typography.Title>
        <section
          style={{
            padding: "0.5rem",
            marginBottom: "1rem",
            marginTop: ["0.75rem", "0.875rem"],
            borderRadius: "0.375rem",
            borderWidth: "2px",
          }}
        >
          {/* <Row gutter={[16, 16]}>
            <Col xs={24} md={8}></Col>
          </Row> */}
          {subjectOptionList._id && (
            <>
              <Checkbox
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
              >
                Check all
              </Checkbox>
              <Divider />
              <Checkbox.Group
                options={plainOptions}
                value={checkedList}
                onChange={onChange}
              />
            </>
          )}
        </section>

        {/* Other form items for other guardian information */}

        <Form.Item labelAlign="top" className="mt-2 ">
          <label>শিক্ষার্থীর ছবি (পাসপোর্ট সাইজের ছবি)</label>
          <Form.Item
            name="student.photo"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files" action="/upload.do">
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
          </Form.Item>
        </Form.Item>

        <Form.Item
          style={{ width: "100%" }}
          // label=""
          name="student.opinion"
        >
          <label>শিক্ষার্থীর মতামত</label>

          <Input.TextArea rows={10} />
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
                  { min: 6, message: "Password must be at least 6" },
                ]}
                hasFeedback={true}
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
            <Button type="primary" htmlType="submit" style={{ width: "200px" }}>
              জমা দিন
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default HomeAddAdmission;
