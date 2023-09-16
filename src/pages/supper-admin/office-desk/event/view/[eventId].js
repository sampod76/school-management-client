import { useGetSingleEventQuery } from "@/redux/features/event/eventApi";
import { Button, Col, DatePicker, Form, Row, Select, Typography } from "antd";
import { useRouter } from "next/router";
import { Input } from "antd";
import { BiSave } from "react-icons/bi";
import { useEffect } from "react";
 
import Link from "next/link";
const { Title } = Typography;
const ViewEvent = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { eventId } = router.query;

  // get query
  const { data: eventData, refetch } = useGetSingleEventQuery(eventId, {
    skip: !eventId,
  });
  console.log(eventData?.data);

  const onFinish = (values) => {};

  useEffect(() => {
    if (eventData) {
      form.setFieldsValue({
        event_name: eventData.data.event_name,
        event_details: eventData.data.event_details,
        event_date: moment(eventData.data.event_date),
        status: eventData.data.status,
      });
    }
  }, [eventData, form]);

  return (
    <div className="p-4">
      <Title level={2} className="mb-4">
        ইভেন্ট দেখুন
      </Title>
      <Form
        form={form}
        name="addIncomeForm"
        onFinish={onFinish}
        layout="vertical"
        className="p-4"
        // initialValues={{
        //   event_name: eventData?.data?.event_name,
        //   event_details: eventData?.data?.event_details,
        //   event_date: eventData?.data?.event_date,
        //   status: eventData?.data?.status,
        // }}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12} lg={8}>
            <Form.Item
              label="ইভেন্ট এর নাম"
              name="event_name"
              rules={[{ required: true, message: "ইভেন্ট এর নাম লিখুন" }]}
            >
              <Input readOnly />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Form.Item
              label="ইভেন্ট এর 	তারিখ"
              name="event_date"
              rules={[{ required: true, message: "তারিখ অবশ্যই দিতে হবে" }]}
            >
              <DatePicker disabled style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Form.Item
              label="ইভেন্ট এর স্টাটাস"
              name="status"
              rules={[{ required: true, message: "স্টাটাস অবশ্যই দিতে হবে" }]}
            >
              <Select
                disabled
                defaultValue="active"
                options={[
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "Inactive" },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item className="w-full" label="বর্ণনা" name="event_details">
          <textarea
            readOnly
            placeholder="ইভেন্ট এর ডিটেইলস"
            name="event_details"
            className="w-full h-20 border border-slate-300 rounded-xl p-2"
          ></textarea>
        </Form.Item>

        <Form.Item>
          <Link href="/supper-admin/office-desk/event">
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
                fontSize: "1rem",
              }}
            >
              <BiSave></BiSave>ইভেন্ট ফিরে যান
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ViewEvent;
