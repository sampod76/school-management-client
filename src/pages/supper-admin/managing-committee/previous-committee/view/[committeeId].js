/* // ? create by --> Bayajid

 */
import { Form, Input, Select, Button, Row, Col, Typography } from "antd";
import Link from "next/link";

import React, { useState } from "react";

const { Option } = Select;

const PreviousCommitteeViewPage = () => {
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
                <Input readOnly  placeholder="শিক্ষার্থীর নাম (বাংলায়) লিখুন" />
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
                <Input readOnly  placeholder="পিতার নাম (বাংলায়)" />
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
                <Input readOnly  placeholder="মাতার নাম (বাংলায়)" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                এনআইডি নাম্বার<span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="father_info.nid">
                <Input readOnly  placeholder="এনআইডি" />
              </Form.Item>
            </Col>
          </Row>
        </section>

        {/* Current Address */}
        <Typography.Title style={{ textDecoration: "underline" }} level={5}>
          বর্তমান ঠিকানা:-
        </Typography.Title>
        <section>
          <Row gutter={[16, 16]}>readOnly
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                বিভাগ <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="current_address.division">
                <Select disabled    placeholder="বিভাগ নির্বাচন করুন">
                  <Option value="" >
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
                <Select disabled  placeholder="জেলা নির্বাচন করুন">
                  <Option value="" >
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
                <Select disabled  placeholder="উপজেলা/থানা নির্বাচন করুন">
                  <Option value="" >
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
                <Select disabled
                  
                  placeholder="সিটি কর্পোরেশন/পৌরসভা নির্বাচন করুন"
                >
                  <Option value="" >
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
                <Select disabled  placeholder="ইউনিয়ন নির্বাচন করুন">
                  <Option value="" >
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
                <Select disabled  placeholder="ওয়ার্ড নম্বর নির্বাচন করুন">
                  <Option value="" >
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
                <Select disabled  placeholder="বিভাগ নির্বাচন করুন">
                  <Option value="" >
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
                <Select disabled  placeholder="জেলা নির্বাচন করুন">
                  <Option value="" >
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
                <Select disabled  placeholder="উপজেলা/থানা নির্বাচন করুন">
                  <Option value="" >
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
                <Select disabled
                  
                  placeholder="সিটি কর্পোরেশন/পৌরসভা নির্বাচন করুন"
                >
                  <Option value="" >
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
                <Select disabled  placeholder="ইউনিয়ন নির্বাচন করুন">
                  <Option value="" >
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
                <Select disabled  placeholder="ওয়ার্ড নম্বর নির্বাচন করুন">
                  <Option value="" >
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
                <Input readOnly  placeholder="ফোন নাম্বার" />
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
                <Input readOnly  placeholder="পদবী" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                সময়কাল <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="other_guardian_info.occupation">
                <Input readOnly  placeholder="সময়কাল" />
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
                <Input readOnly  placeholder="শিক্ষার্থীর নাম" />
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
                <Input readOnly  placeholder="শিক্ষার্থীর শ্রেণী" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                শিক্ষার্থীর আইডি <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="other_guardian_info.occupation">
                <Input readOnly  placeholder="শিক্ষার্থীর আইডি" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Typography.Text>
                শিক্ষার্থীর সাথে সম্পর্ক <span className="text-red-500">*</span>
              </Typography.Text>
              <Form.Item name="other_guardian_info.occupation">
                <Input readOnly   placeholder="শিক্ষার্থীর সাথে সম্পর্ক" />
              </Form.Item>
            </Col>
          </Row>
        </section>

        {/* <Form.Item style={{ width: "100%" }}>
          <div className="flex justify-center items-center">
            <Link href={`all-member/edit/1`}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "200px" }}
              >
                Edit
              </Button>
            </Link>
          </div>
        </Form.Item> */}
      </Form>
    </div>
  );
};

export default PreviousCommitteeViewPage;
