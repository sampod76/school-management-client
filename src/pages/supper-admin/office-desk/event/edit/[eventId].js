import {
  useGetSingleEventQuery,
  useUpdateEventMutation,
} from "@/redux/features/event/eventApi";
import { Button, Col, DatePicker, Form, Row, Select, Spin, Typography } from "antd";
import { useRouter } from "next/router";
import { Input } from "antd";
import { BiSave } from "react-icons/bi";
import { useEffect } from "react";
 
import { toast } from "react-toastify";
const { Title } = Typography;

const EditEvent = () => {

  // form and necessaries
  const [form] = Form.useForm();
  const router = useRouter();
  const { eventId } = router.query;

  // get query
  const { data: eventData, refetch,isLoading } = useGetSingleEventQuery(eventId, {
    skip: !eventId,
  });
  
  //rtk query  for  update
  const [updateEvent, { isSuccess }] = useUpdateEventMutation();

  // show previous value
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


   // make a empty object to reset from 
   const initialValues = {
            event_name:"",
          event_details: "",
          event_date: "",
          status: "",
  };

  // update event and handle success and error
  const onFinish = async (values) => {
    console.log(values);
    try {
      updateEvent({
        id: eventId,
        data: { ...values },
      }).then((props) => {
        console.log(props);
        if (props.data?.success) {
          refetch();
          toast.success("Event updated successfully");

          // reset form as empty after update is successful
          form.setFieldsValue(initialValues);
        }
      });
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred");
    }
  };

    // set loader if loading 
    if (isLoading) {
      return (
        <div className="h-screen w-full flex items-center justify-center">
          <Spin></Spin>
        </div>
      );
    }

  return (
    <div className="p-4">
      <Title level={2} className="mb-4">
        ইভেন্ট দেখুন
      </Title>
      <Form
        form={form}
        name="addEventForm"
        onFinish={onFinish}
        layout="vertical"
        className="p-4"
        initialValues={{
          // event_name: eventData?.data?.event_name,
          // event_details: eventData?.data?.event_details,
          // event_date: eventData?.data?.event_date,
          // status: eventData?.data?.status,
        }}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12} lg={8}>
            <Form.Item
              label="ইভেন্ট এর নাম"
              name="event_name"
              rules={[{ required: true, message: "ইভেন্ট এর নাম লিখুন" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Form.Item
              label="ইভেন্ট এর 	তারিখ"
              name="event_date"
              rules={[{ required: true, message: "তারিখ অবশ্যই দিতে হবে" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Form.Item
              label="ইভেন্ট এর স্টাটাস"
              name="status"
              rules={[{ required: true, message: "স্টাটাস অবশ্যই দিতে হবে" }]}
            >
              <Select
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
            placeholder="ইভেন্ট এর ডিটেইলস"
            name="event_details"
            className="w-full h-20 border border-slate-300 rounded-xl p-2"
          ></textarea>
        </Form.Item>

        <Form.Item>
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
            <BiSave></BiSave>ইভেন্ট যোগ করুন
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditEvent;
