import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Descriptions } from "antd";

const TeacherSalaryView = () => {
  const router = useRouter();
  const { salaryOfTeachersId } = router.query;

  console.log(salaryOfTeachersId);
  const [teacherData, setTeacherData] = useState(null);

  useEffect(() => {
    async function fetchTeacherSalary() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/teacher_salary/${salaryOfTeachersId}`
        );
        const data = await response.json();
        setTeacherData(data?.data);
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      }
    }

    if (salaryOfTeachersId) {
      fetchTeacherSalary();
    }
  }, [salaryOfTeachersId]);

  if (!teacherData) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="text-center text-2xl font-bold mb-4">
        View Teacher Salary
      </h2>
      <Descriptions bordered layout="vertical">
        <Descriptions.Item label="Teacher Name">
          {teacherData.teacher_name}
        </Descriptions.Item>
        <Descriptions.Item label="Teacher Designation">
          {teacherData.teacher_designation}
        </Descriptions.Item>
        <Descriptions.Item label="Teacher Salary Scale">
          {teacherData.teacher_salary_scale}
        </Descriptions.Item>
        <Descriptions.Item label="Salary">
          {teacherData.salary}
        </Descriptions.Item>
        {/* Add more items for other properties */}
      </Descriptions>
    </div>
  );
};

export default TeacherSalaryView;
