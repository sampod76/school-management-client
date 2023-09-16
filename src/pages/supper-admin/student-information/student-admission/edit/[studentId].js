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
  Spin,
  Modal,
} from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "@/components/Auth/AuthProvider";
import { Success_model } from "@/utils/modalHook";
import { useGetClassesQuery } from "@/redux/features/class/classApi";
import {
  useGetSingleStudentQuery,
  usePatchStudentMutation,
  usePostStudentMutation,
} from "@/redux/features/student/studentApi";
import { fileUploadHook } from "@/utils/fileUploadHook";
import DeshbordLoading from "@/components/loader/deshbordLoading";
import { useRouter } from "next/router";
 
import ImageTag from "@/components/Tag/ImageTag";

const { Option } = Select;

const StudentEdit = () => {
  const { Error_model } = useContext(AuthContext);
  const [form] = Form.useForm();
  const router = useRouter();
  const { studentId } = router.query;
  //
  const [isModalVisible, setIsModalVisible] = useState(false);
  //
  const [loading, setLoading] = useState(false);
  const [imgFile, setImgFile] = useState();
  const [textareaText, setTextareaText] = useState("");
  // on change value state
  const [onChangeValue, setOnChangeValue] = useState({});
  //full data
  const {
    data: studentData,
    error: studentGetError,
    isLoading: studentGetLoading,
    refetch,
  } = useGetSingleStudentQuery(studentId, { skip: !studentId });

  //get all classes
  const { data: AllClass, error, isLoading } = useGetClassesQuery();
  const [updateStudent, { isLoading: studentLoading, error: studentError }] =
    usePatchStudentMutation();

  //checkbox states
  const [subjectOptionList, setSubjectListOption] = useState({}); //single class to all book list -->{ class:"one" , books:["bangla","english"]}
  //***************chackbox functionality************
  const [checkedList, setCheckedList] = useState([]); //booklist to only select --> ["bangla","english"]
  const [selectedBooksIds, setSelectedBooksIds] = useState([]); //store books _id --> ["64f1f609fb5651a8ad10dab4","64f1f609fb5651a8ad10dab4"]
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

  useEffect(() => {
    if (AllClass?.data?.length) {
      AllClass?.data?.forEach((element) => {
        if (element?.className === studentData?.data?.student?.desired_class) {
          //option --> class by all book list
          setSubjectListOption(element);
        }
      });
    }
    if (studentData?.data?.student?.books?.length) {
      //default value set
      setCheckedList(
        studentData?.data?.student?.books?.map((book) => book?.bookName)
      ); // ["bangla","english"]
    }
  }, [AllClass?.data, studentData?.data?.student?.desired_class]);

  /// *******************end****************** //
  console.log(studentData);
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    console.log(e?.fileList);
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

  const handleFormValuesChange = (changedValues, allValues) => {
    setOnChangeValue((c) => ({ ...c, ...changedValues }));
  };

  const onFinish = async (value) => {
    const transperdata = {
      userId: onChangeValue?.userId,
    };
    setIsModalVisible(false);
    for (const key in onChangeValue) {
      if (key !== "userId") {
        const [objKey, propKey] = key.split(".");
        if (!transperdata[objKey]) {
          transperdata[objKey] = {};
        }
        transperdata[objKey][propKey] = onChangeValue[key];
      }
    }

    if (imgFile) {
      setLoading(true);
      const result = await fileUploadHook({ profileImage: { file: imgFile } });
      if (result?.singleProfileImageData?._id) {
        if (!transperdata["student"]) {
          transperdata["student"] = {};
        }
        transperdata["student"]["photo"] = result?.singleProfileImageData?._id;
      }
      setLoading(false);
    }
    if (selectedBooksIds?.length) {
      if (!transperdata["student"]) {
        transperdata["student"] = {};
      }
      transperdata["student"]["books"] = selectedBooksIds;
    }
    if (textareaText) {
      if (!transperdata["student"]) {
        transperdata["student"] = {};
      }
      transperdata["student"]["opinion"] = textareaText;
    }

    try {
      setLoading(true);
      const result = await axios.patch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/students/${studentId}`,
        transperdata
      );
      if (result?.data?.success) {
        setLoading(false);
        refetch();
        Success_model({ message: "রেজিস্ট্রেশন ফর্ম আপডেট সম্পন্ন হয়েছে" });
        //
        
      } else {
        Error_model({ message: "ভুল হচ্ছে দয়া করে চেক করুন" });
        setLoading(false);
      }
      console.log(result);
    } catch (error) {
      Error_model({ message: error?.message });
      console.log(error);
      setLoading(false);
    }
    // updateStudent({id:studentId,data:transperdata}).then((res) => {
    //   if (res?.data?.success) {
    //     Success_model({ message: "সফলভাবে আপডেট করা হয়েছে" });
    //     refetch()
    //   }else{
    //     Error_model({
    //       message: res?.error?.data?.message || "আপডেট ব্যর্থ হয়েছে",
    //       error: res,
    //     });
    //     console.log(res);
    //   }
    //   console.log(res)
    // })
    // .catch((error) => {
    //   Error_model({ message: error?.message, error: error });
    //   console.log(error);
    // })
    // return
  };

  if (error || studentError || studentGetError) {
    console.log(error, studentError, studentGetError);
    Error_model({
      message:
        error?.message || studentError?.message || studentGetError?.message,
      error: error || studentError || studentGetError,
    });
  }

  if (isLoading || studentLoading || studentGetLoading) {
    return <DeshbordLoading />;
  }
  // initialize student values

  // console.log(moment(
  //   studentData?.data?.student?.date_of_birth,
  //   "YYYY-MM-DD"
  // ));
  const showConfirmationModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div /* className="container mx-auto p-5 " */>
      <Form
      style={{padding:"1rem"}}
        initialValues={{
          userId: studentData?.data?.userId,
          "student.name_bangla": studentData?.data?.student?.name_bangla,
          "student.birth_district": studentData?.data?.student?.birth_district,
          "student.birth_registration_number":
            studentData?.data?.student?.birth_registration_number,
          "student.blood_group": studentData?.data?.student?.blood_group,
          "student.books": studentData?.data?.student?.books,
          "student.name_english": studentData?.data?.student?.name_english,
          "student.minority_ethnicity":
            studentData?.data?.student?.minority_ethnicity,
          "student.marital_status": studentData?.data?.student?.marital_status,
          "student.hobbies": studentData?.data?.student?.hobbies,
          "student.gender": studentData?.data?.student?.gender,
          "student.desired_class": studentData?.data?.student?.desired_class,
          "student.financial_assistance_needed":
            studentData?.data?.student?.financial_assistance_needed,
          "student.favorite_books": studentData?.data?.student?.favorite_books,
          "student.nationality": studentData?.data?.student?.nationality,
          "student.previous_exam_info":
            studentData?.data?.student?.previous_exam_info,
          "student.religion": studentData?.data?.student?.religion,
          // "student.date_of_birth":moment(studentData?.data?.student?.date_of_birth),
          //
          "current_address.ward_number":
            studentData?.data?.current_address?.ward_number,
          "current_address.village":
            studentData?.data?.current_address?.village,

          "current_address.union": studentData?.data?.current_address?.union,
          "current_address.sub_district":
            studentData?.data?.current_address?.sub_district,
          "current_address.postal_code":
            studentData?.data?.current_address?.postal_code,
          "current_address.post_office":
            studentData?.data?.current_address?.post_office,
          "current_address.division":
            studentData?.data?.current_address?.division,
          "current_address.district":
            studentData?.data?.current_address?.district,
          //
          //
          "permanent_address.ward_number":
            studentData?.data?.permanent_address?.ward_number,
          "permanent_address.village":
            studentData?.data?.permanent_address?.village,

          "permanent_address.union":
            studentData?.data?.permanent_address?.union,
          "permanent_address.sub_district":
            studentData?.data?.permanent_address?.sub_district,
          "permanent_address.postal_code":
            studentData?.data?.permanent_address?.postal_code,
          "permanent_address.post_office":
            studentData?.data?.permanent_address?.post_office,
          "permanent_address.division":
            studentData?.data?.permanent_address?.division,
          "permanent_address.district":
            studentData?.data?.permanent_address?.district,
          //
          
          "father_info.profession": studentData?.data?.father_info?.profession,
          "father_info.phone_number":
            studentData?.data?.father_info?.phone_number,
          "father_info.nid": studentData?.data?.father_info?.nid,
          "father_info.name_english":
            studentData?.data?.father_info?.name_english,
          "father_info.name_bangla":
            studentData?.data?.father_info?.name_bangla,
          // "father_info.date_of_birth": moment(studentData?.data?.father_info?.date_of_birth),
          "father_info.birth_registration":
            studentData?.data?.father_info?.birth_registration,
          // "father_info.year_of_death":moment(studentData?.data?.father_info?.year_of_death),
          //
          // "mother_info.year_of_death": moment(studentData?.data?.mother_info?.year_of_death),
          "mother_info.profession": studentData?.data?.mother_info?.profession,
          "mother_info.phone_number":
            studentData?.data?.mother_info?.phone_number,
          "mother_info.nid": studentData?.data?.mother_info?.nid,
          "mother_info.name_english":
            studentData?.data?.mother_info?.name_english,
          "mother_info.name_bangla":
            studentData?.data?.mother_info?.name_bangla,
          //  "mother_info.date_of_birth": moment(studentData?.data?.mother_info?.date_of_birth),
          "mother_info.birth_registration":
            studentData?.data?.mother_info?.birth_registration,
          //
          "other_guardian_info.relationship":
            studentData?.data?.other_guardian_info?.relationship,
          "other_guardian_info.profession":
            studentData?.data?.other_guardian_info?.profession,
          "other_guardian_info.number":
            studentData?.data?.other_guardian_info?.number,
          "other_guardian_info.nid":
            studentData?.data?.other_guardian_info?.nid,
          "other_guardian_info.name":
            studentData?.data?.other_guardian_info?.name,
        }}
        onValuesChange={handleFormValuesChange}
        //! same --> only change value provide
        // onValuesChange={(onChangeValue,allValues)=>(setOnChangeValue((c) => ({ ...c, ...onChangeValue })))}
        onFinish={onFinish}
        form={form}
      >
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input
                  // defaultValue={studentData?.data?.student?.name_bangla}

                  placeholder="শিক্ষার্থীর নাম (বাংলায়) লিখুন"
                />
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Input
                  //   defaultValue={studentData?.data?.student?.name_english}
                  placeholder="শিক্ষার্থীর নাম (ইংরেজি) লিখুন"
                />
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
                rules={
                  [
                    // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                  ]
                }
              >
                <Select
                  //   defaultValue={studentData?.data?.student?.desired_class}
                  placeholder="যে শ্রেনিতে ভর্তি হতে ইচ্ছুক নির্বাচন করুন"
                >
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
                 defaultValue={dayjs(
                  studentData?.data?.student?.date_of_birth,
                  "YYYY-MM-DD"
                )}
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                <Select
                  //   defaultValue={studentData?.data?.student?.birth_district}
                  placeholder="জন্মস্থান জেলা লিখুন"
                >
                  <Select.Option value="ঢাকা">ঢাকা</Select.Option>
                  <Select.Option value="ফরিদপুর">ফরিদপুর</Select.Option>
                  <Select.Option value="গাজীপুর">গাজীপুর</Select.Option>
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                    // required: true,
                    message: "এই ফিল্ডটি পূরণ করতেই হবে",
                  },
                ]}
              >
                <Select
                  //   defaultValue={studentData?.data?.student?.religion}
                  placeholder="ধর্ম নির্বাচন করুন"
                >
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
                rules={
                  [
                    // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                  ]
                }
              >
                <Select
                  //   defaultValue={studentData?.data?.student?.gender}
                  placeholder="জেন্ডার নির্বাচন করুন"
                >
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
                <Select
                  //   defaultValue={studentData?.data?.student?.marital_status}
                  placeholder="বৈবাহিক অবস্থা নির্বাচন করুন"
                >
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
                <Select
                  //   defaultValue={studentData?.data?.student?.blood_group}
                  placeholder="রক্তের গ্রুপ নির্বাচন করুন"
                >
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
                <Select
                  //   defaultValue={studentData?.data?.student?.minority_ethnicity}
                  placeholder="ক্ষুদ্র নৃ-গোষ্টি নির্বাচন করুন"
                >
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
                <Select
                  //   defaultValue={
                  //     studentData?.data?.student?.financial_assistance_needed
                  //   }
                  placeholder="আর্থিক সহায়তা প্রয়োজন"
                >
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
                  //   defaultValue={studentData?.data?.student?.hobbies}
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
                // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                defaultValue={dayjs(
                  studentData?.data?.mother_info?.date_of_birth,
                  "YYYY-MM-DD"
                )}
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
                // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
               defaultValue={dayjs(
                studentData?.data?.student?.year_of_death,
                "YYYY-MM-DD"
              )}
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
              
                name="father_info.date_of_birth"
              >
                <DatePicker
                 defaultValue={dayjs(
                  studentData?.data?.father_info?.date_of_birth,
                  "YYYY-MM-DD"
                )}
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
              <Form.Item
              
                name="father_info.year_of_death"
              >
                <DatePicker
                  defaultValue={dayjs(
                    studentData?.data?.father_info?.year_of_death,
                    "YYYY-MM-DD"
                  )}
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
                <Select
                  //   defaultValue={studentData?.data?.current_address?.division}
                  placeholder="বিভাগ নির্বাচন করুন"
                >
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
                <Select
                  //   defaultValue={studentData?.data?.current_address?.district}
                  placeholder="জেলা নির্বাচন করুন"
                >
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
                <Select
                  //   defaultValue={
                  //     studentData?.data?.current_address?.sub_district
                  //   }
                  placeholder="উপজেলা/থানা নির্বাচন করুন"
                >
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
              <Form.Item name="current_address.union">
                <Select
                  //   defaultValue={studentData?.data?.current_address?.union}
                  placeholder="ইউনিয়ন নির্বাচন করুন"
                >
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Select
                  //   defaultValue={studentData?.data?.current_address?.ward_number}
                  placeholder="ওয়ার্ড নম্বর নির্বাচন করুন"
                >
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
                <Select
                  //   defaultValue={studentData?.data?.permanent_address?.division}
                  placeholder="বিভাগ নির্বাচন করুন"
                >
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
                <Select
                  //   defaultValue={studentData?.data?.permanent_address?.district}
                  placeholder="জেলা নির্বাচন করুন"
                >
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
                <Select
                  //   defaultValue={
                  //     studentData?.data?.permanent_address?.sub_district
                  //   }
                  placeholder="উপজেলা/থানা নির্বাচন করুন"
                >
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
              <Form.Item name="permanent_address.union">
                <Select
                  //   defaultValue={studentData?.data?.permanent_address?.union}
                  placeholder="ইউনিয়ন নির্বাচন করুন"
                >
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
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
                  // { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
                ]}
              >
                <Select
                  //   defaultValue={
                  //     studentData?.data?.permanent_address?.ward_number
                  //   }
                  placeholder="ওয়ার্ড নম্বর নির্বাচন করুন"
                >
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
              <Form.Item name="other_guardian_info.profession">
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
        <Form.Item labelAlign="top">
          <label>শিক্ষার্থীর ছবি (পাসপোর্ট সাইজের ছবি)</label>
          <div className="  gap-2 items-center justify-start ">
            {/* <label htmlFor='busi-logo' className="leading-7 font-[600] text-gray-700 col-span-3">Business logo</label> */}
            <ImageTag
              data={{
                url: studentData?.data?.student?.photo?.url,
                class: "w-[200px] h-[200px]",
              }}
            />
            <input
              //single image

              onChange={(e) => setImgFile(e.target.files[0])}
              type="file"
              id="busi-logo"
              placeholder="Enter business logo"
              className="w-80 rounded  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-[2px]  transition-colors duration-200 ease-in-out"
            />
          </div>
          {/* <Form.Item
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
            </Form.Item> */}
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
            defaultValue={studentData?.data?.student?.opinion}
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
                    // required: true,
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
          </Row>
        </section>
        <Form.Item style={{ width: "100%" }}>
          <div className="flex justify-center items-center">
            {loading ? (
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
                // onClick={handleSubmit}
                onClick={showConfirmationModal}
                style={{ width: "18.75rem" }}
              >
                 জমা দিন
              </Button>
            )}
          </div>
        </Form.Item>
      </Form>
      <Modal
        title="জমা নিশ্চিত করুন!!"
        open={isModalVisible}
        onOk={form.submit} // This will trigger the form submission when confirmed
        onCancel={handleCancel}
        okText="Confirm"
        cancelText="Cancel"
      >
       আপনি কি এই ফর্মটি জমা দেওয়ার বিষয়ে নিশ্চিত?
      </Modal>
    </div>
  );
};

export default StudentEdit;
