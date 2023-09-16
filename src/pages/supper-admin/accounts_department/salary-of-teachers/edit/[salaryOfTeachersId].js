import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Button, Form, Input } from "antd";
import { Success_model } from "@/utils/modalHook";
import { AuthContext } from "@/components/Auth/AuthProvider";

const EditTeacherSalary = () => {
  const { Error_model } = useContext(AuthContext);
  const router = useRouter();

  const { salaryOfTeachersId } = router.query;
  const [teacherData, setTeacherData] = useState({});
  const [editedData, setEditedData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTeacherData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/teacher_salary/${salaryOfTeachersId}`
        );
        const data = await response.json();
        setTeacherData(data?.data);
        setEditedData(data?.data); // Initialize edited data
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      }
    }

    if (salaryOfTeachersId) {
      fetchTeacherData();
    }
  }, [salaryOfTeachersId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData({ ...editedData, [name]: value });
  };

  console.log(editedData);
  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/teacher_salary/${salaryOfTeachersId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedData),
        }
      );

      const data = await response.json();

      if (data?.success) {
        setLoading(false);
        Success_model({ message: "Update successfully done" });
      } else {
        Error_model({ message: "Internal error" });
        setLoading(false);
      }
    } catch (error) {
      console.error("Error updating teacher data:", error);
    }
  };

  if (!teacherData._id) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ margin: "0.3rem 1rem" }}>
      <h2 className="text-center text-2xl font-bold">Edit Teacher Salary</h2>
      <Form layout="vertical">
        <Form.Item label="Teacher Name">
          <Input
            name="teacher_name"
            value={editedData.teacher_name || ""}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Teacher Designation">
          <Input
            name="teacher_designation"
            value={editedData.teacher_designation || ""}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Teacher Salary Scale">
          <Input
            name="teacher_salary_scale"
            value={editedData.teacher_salary_scale || ""}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Salary">
          <Input
            name="salary"
            value={editedData.salary || ""}
            onChange={handleInputChange}
          />
        </Form.Item>
        {/* Add more Form.Item components for other properties */}
        <Form.Item>
          <Button type="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditTeacherSalary;
