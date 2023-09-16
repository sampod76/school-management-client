import { Modal, Form, Input, Select } from "antd";

const EditClassModal = ({ visible, onCancel, onSave, classData }) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave({ ...classData, ...values });
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Edit Class"
      open={visible}
      onCancel={onCancel}
      onOk={handleSave}
    >
      <Form form={form} initialValues={classData}>
        <Form.Item label="নাম" name="className">
          <Input placeholder="নাম" />
        </Form.Item>
        <Form.Item label="অবস্থা" name="status">
          <Select placeholder="অবস্থা">
            <Select.Option value="active">active</Select.Option>
            <Select.Option value="inactive">inactive</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditClassModal;
