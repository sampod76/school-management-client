// import { Tabs, Typography } from "antd";
// import AddTeacherPage from "../teacher-corner/add-teacher";
// import AddStudentPage from "../student-information/add-admission";

import OnlineApplicationTable from "@/components/super-admin-dashboard/office-desk/online-application/online-application-table";

// const children = [
//   {
//     label: "শিক্ষক আবেদন ফরম",
//     key: "1",
//     children: <AddTeacherPage />,
//     style:{
//       height: 200,
//     }
//   },
//   {
//     label: "শিক্ষার্থী আবেদন ফরম",
//     key: "2",
//     children: <AddStudentPage />,
//     style:{
//       height: 200,
//     }
//   },
// ];

const OnlineApplication = () => {
  return (
    <>
      <h3 className="text-2xl font-bold m-4">অনলাইন আবেদন</h3>
      <OnlineApplicationTable />
    </>
    // <main className="p-5">
    //   <Typography.Title level={3}>অনলাইন আবেদন</Typography.Title>
    //   <Tabs
    //     defaultActiveKey="1"
    //     centered
    //     type="card"
    //     items={children}
    //   />
    // </main>
  );
};

export default OnlineApplication;
