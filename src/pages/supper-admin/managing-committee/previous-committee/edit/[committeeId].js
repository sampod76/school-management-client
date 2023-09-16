/* // ? create by --> Bayajid

 */
import {
  Form,
  Input,
  Select,
  Button,
  Row,
  Col,
  Typography,
} from "antd";


import React, { useState } from "react";

const { Option } = Select;

const PreviousCommitteeEditPage = () => {
  const [subjectOptionList, setSubjectListOption] = useState({});

  const [checkedList, setCheckedList] = useState([]);
  const checkAll =
    subjectOptionList?.subjects?.length === checkedList?.subjects?.length;
  const indeterminate =
    checkedList?.subjects?.length > 0 &&
    checkedList?.subjects?.length < subjectOptionList.subjects.length;

  const onChangeCheckedList = (list) => {
    setCheckedList(list);
  };

  const onCheckAllChangeList = (e) => {
    setCheckedList(e.target.checked ? subjectOptionList.subjects : []);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  let data = {
    students: {
      name_bangla: "শিক্ষার্থীর নাম (বাংলায়)",
      name_english: "Student Name (English)",
      birth_registration_number: "জন্ম নিবন্ধন নম্বর",
      date_of_birth: "জন্ম তারিখ",
      birth_district: "জন্মস্থান জেলা",
      gender: "জেন্ডার",
      nationality: "জাতীয়তা",
      religion: "ধর্ম",
      desired_class: "যে শ্রেনিতে ভর্তি হতে ইচ্ছুক",
      marital_status: "বৈবাহিক অবস্থা",
      blood_group: "রক্তের গ্রুপ",
      minority_ethnicity: "ক্ষুদ্র নৃ-গোষ্টি কিনা",
      photo: "শিক্ষার্থীর ছবি (পাসপোর্ট সাইজের ছবি)",
      previous_exam_info: [
        {
          class_name: "শ্রেনির নাম",
          exam_name: "পরীক্ষার নাম",
          result: "পরীক্ষার ফলাফল",
          exam_time: "পরীক্ষার সময়",
          institution_name: "শিক্ষা/প্রতিষ্ঠানের নাম",
        },
      ],

      hobbies: "শিক্ষার্থীর শখ",
      favorite_books: "শিক্ষার্থীর পছন্দের বই",
      financial_assistance_needed:
        "শিক্ষার্থী উপবৃত্তি প্রয়োজন (ড্রপ ডাউনে হ্যাঁ অথবা না)",
      opinion: "শিক্ষার্থীর মতামত",
    },
    mother_info: {
      name_bangla: "মাতার নাম (বাংলায়)",
      name_english: "Mother's Name (English)",
      nid: "মাতার এনআইডি",
      date_of_birth: "মাতার জন্ম তারিখ",
      birth_registration: "মাতার জন্ম নিবন্ধন",
      phone_number: "মাতার ফোন নাম্বার",
      profession: "মাতার পেশা",
      year_of_death: "মাতা মৃত হলে মৃত্যুর সাল",
    },
    father_info: {
      name_bangla: "পিতার নাম (বাংলায়)",
      name_english: "Father's Name (English)",
      nid: "পিতার এনআইডি",
      date_of_birth: "পিতার জন্ম তারিখ",
      birth_registration: "পিতার জন্ম নিবন্ধন",
      phone_number: "পিতার ফোন নাম্বার",
      profession: "পিতার পেশা",
      year_of_death: "পিতা মৃত হলে মৃত্যুর সাল",
    },
    current_address: {
      division: "বিভাগ",
      district: "জেলা",
      sub_district: "উপজেলা/থানা",
      city_corporation: "সিটি কর্পোরেশন/পৌরসভা",
      union: "ইউনিয়ন",
      ward_number: "ওয়ার্ড নম্বর",
      mouza: "মৌজা",
      village: "গ্রাম/মহল্লা/রাস্তার নাম ও নম্বর",
      house_house_holding_number: "বাসার হোল্ডিং নম্বর",
      post_office: "ডাকঘর",
      postal_code: "পোস্ট কোড",
    },
    permanent_address: {
      division: "বিভাগ",
      district: "জেলা",
      sub_district: "উপজেলা/থানা",
      city_corporation: "সিটি কর্পোরেশন/পৌরসভা",
      union: "ইউনিয়ন",
      ward_number: "ওয়ার্ড নম্বর",
      mouza: "মৌজা",
      village: "গ্রাম/মহল্লা/রাস্তার নাম ও নম্বর",
      house_house_holding_number: "বাসার হোল্ডিং নম্বর",
      post_office: "ডাকঘর",
      postal_code: "পোস্ট কোড",
    },
    other_guardian_info: {
      name: "অভিভাবকের নাম",
      nid: "অভিভাবকের এনআইডি",
      occupation: "অভিভাবকের পেশা",
      relationship: "অভিভাবকের সাথে শিক্ষার্থীদের সম্পর্ক",
      number: "অভিভাবকের ফোন নাম্বার",
    },
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

  const onFinish = (values) => {
    console.log("Form values:", values);
  };
  console.log(subjectOptionList);
  return (
    <div className="container mx-auto p-5">
      <Form onFinish={onFinish}>
        {/* Student Information */}
        <Typography.Title style={{ textDecoration: "underline" }} level={5}>
          সদস্যের তথ্য:-
        </Typography.Title>
        <section>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
              সদস্যের নাম (বাংলায়) <span className="text-red-500">*</span>
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

            <Col xs={24} sm={12} md={8} lg={6}>
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

            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
              এনআইডি নাম্বার<span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="father_info.nid">
                <Input placeholder="এনআইডি" />
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
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                বিভাগ <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="current_address.division">
                <Select placeholder="বিভাগ নির্বাচন করুন">
                  <Option value="" disabled>
                    বিভাগ নির্বাচন করুন
                  </Option>
                  <Option value="dhaka">ঢাকা</Option>
                  <Option value="chattogram">চট্টগ্রাম</Option>
                  <Option value="rajshahi">রাজশাহী</Option>
                  <Option value="khulna">খুলনা</Option>
                  {/* Add other division options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                জেলা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="current_address.district">
                <Select placeholder="জেলা নির্বাচন করুন">
                  <Option value="" disabled>
                    জেলা নির্বাচন করুন
                  </Option>
                  <Option value="dhaka">ঢাকা</Option>
                  <Option value="chattogram">চট্টগ্রাম</Option>
                  <Option value="rajshahi">রাজশাহী</Option>
                  <Option value="khulna">খুলনা</Option>
                  {/* Add other district options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                উপজেলা/থানা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="current_address.sub_district">
                <Select placeholder="উপজেলা/থানা নির্বাচন করুন">
                  <Option value="" disabled>
                    উপজেলা/থানা নির্বাচন করুন
                  </Option>
                  <Option value="uttara">উত্তরা</Option>
                  <Option value="mirpur">মিরপুর</Option>
                  <Option value="mohakhali">মহাখালী</Option>
                  <Option value="banani">বনানী</Option>
                  {/* Add other sub-district options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                সিটি কর্পোরেশন/পৌরসভা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="current_address.city_corporation">
                <Select placeholder="সিটি কর্পোরেশন/পৌরসভা নির্বাচন করুন">
                  <Option value="" disabled>
                    সিটি কর্পোরেশন/পৌরসভা নির্বাচন করুন
                  </Option>
                  <Option value="dhaka">ঢাকা</Option>
                  <Option value="chattogram">চট্টগ্রাম</Option>
                  <Option value="rajshahi">রাজশাহী</Option>
                  <Option value="khulna">খুলনা</Option>
                  {/* Add other city corporation options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
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
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                ওয়ার্ড নম্বর <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="current_address.ward_number">
                <Select placeholder="ওয়ার্ড নম্বর নির্বাচন করুন">
                  <Option value="" disabled>
                    ওয়ার্ড নম্বর নির্বাচন করুন
                  </Option>
                  <Option value="one">১</Option>
                  <Option value="two">২</Option>
                  <Option value="three">৩</Option>
                  <Option value="four">৪</Option>
                  <Option value="five">৫</Option>
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
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                বিভাগ <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="current_address.division">
                <Select placeholder="বিভাগ নির্বাচন করুন">
                  <Option value="" disabled>
                    বিভাগ নির্বাচন করুন
                  </Option>
                  <Option value="dhaka">ঢাকা</Option>
                  <Option value="chattogram">চট্টগ্রাম</Option>
                  <Option value="rajshahi">রাজশাহী</Option>
                  <Option value="khulna">খুলনা</Option>
                  {/* Add other division options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                জেলা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="current_address.district">
                <Select placeholder="জেলা নির্বাচন করুন">
                  <Option value="" disabled>
                    জেলা নির্বাচন করুন
                  </Option>
                  <Option value="dhaka">ঢাকা</Option>
                  <Option value="chattogram">চট্টগ্রাম</Option>
                  <Option value="rajshahi">রাজশাহী</Option>
                  <Option value="khulna">খুলনা</Option>
                  {/* Add other district options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                উপজেলা/থানা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="current_address.sub_district">
                <Select placeholder="উপজেলা/থানা নির্বাচন করুন">
                  <Option value="" disabled>
                    উপজেলা/থানা নির্বাচন করুন
                  </Option>
                  <Option value="uttara">উত্তরা</Option>
                  <Option value="mirpur">মিরপুর</Option>
                  <Option value="mohakhali">মহাখালী</Option>
                  <Option value="banani">বনানী</Option>
                  {/* Add other sub-district options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                সিটি কর্পোরেশন/পৌরসভা <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="current_address.city_corporation">
                <Select placeholder="সিটি কর্পোরেশন/পৌরসভা নির্বাচন করুন">
                  <Option value="" disabled>
                    সিটি কর্পোরেশন/পৌরসভা নির্বাচন করুন
                  </Option>
                  <Option value="dhaka">ঢাকা</Option>
                  <Option value="chattogram">চট্টগ্রাম</Option>
                  <Option value="rajshahi">রাজশাহী</Option>
                  <Option value="khulna">খুলনা</Option>
                  {/* Add other city corporation options here */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
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
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                ওয়ার্ড নম্বর <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="current_address.ward_number">
                <Select placeholder="ওয়ার্ড নম্বর নির্বাচন করুন">
                  <Option value="" disabled>
                    ওয়ার্ড নম্বর নির্বাচন করুন
                  </Option>
                  <Option value="one">১</Option>
                  <Option value="two">২</Option>
                  <Option value="three">৩</Option>
                  <Option value="four">৪</Option>
                  <Option value="five">৫</Option>
                  {/* Add other ward number options here */}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </section>

        <section className="mt-4">
          <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                ফোন নাম্বার <span className="text-red-500">*</span>
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
                <Input placeholder="ফোন নাম্বার" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
              পদবী <span className="text-red-500">*</span>
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
                <Input placeholder="পদবী" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
              সময়কাল <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="other_guardian_info.occupation">
                <Input placeholder="সময়কাল" />
              </Form.Item>
            </Col>
          </Row>
        </section>


        <Typography.Title style={{ textDecoration: "underline" }} level={5}>
        বিদ্যালয়ে যে শিক্ষার্থী রয়েছে
        </Typography.Title>
        <section>
          <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
              শিক্ষার্থীর নাম <span className="text-red-500">*</span>
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
                <Input disabled placeholder="শিক্ষার্থীর নাম" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
              শ্রেণী <span className="text-red-500">*</span>
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
                <Input disabled placeholder="শিক্ষার্থীর শ্রেণী" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
              শিক্ষার্থীর আইডি <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="other_guardian_info.occupation">
                <Input disabled placeholder="শিক্ষার্থীর আইডি" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
              শিক্ষার্থীর সাথে সম্পর্ক <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="other_guardian_info.occupation">
                <Input disabled  placeholder="শিক্ষার্থীর সাথে সম্পর্ক" />
              </Form.Item>
            </Col>
          </Row>
        </section>



        <Form.Item style={{ width: "100%" }}>
          <div className="flex justify-center items-center">
            <Button type="primary" htmlType="submit" style={{ width: "200px" }}>
            সাবমিট
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PreviousCommitteeEditPage;
