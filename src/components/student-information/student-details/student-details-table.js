import { Space, Table } from "antd";
import { MdModeEdit } from "react-icons/md";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const { Column } = Table;

const columns = [
  {
    title: "ভর্তি নম্বর",
    dataIndex: "admission_no",
    filters: [
      {
        text: "General",
        value: "General",
      },
      {
        text: "General",
        value: "General",
      },
      {
        text: "General",
        value: "General",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.category.startsWith(value),
    width: "30%",
  },
  {
    title: "শিক্ষার্থীর নাম",
    dataIndex: "name",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "শ্রেণী",
    dataIndex: "class",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Fathers Name",
    dataIndex: "fathers_name",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },

  {
    title: "বাবার নাম",
    dataIndex: "date_of_birth",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "লিঙ্গ",
    dataIndex: "gender",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },

  {
    title: "বিভাগ",
    dataIndex: "category",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "ফোন নম্বর",
    dataIndex: "phone",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "একশন",
    key: "action",
    style: { padding: "5px 5px" },
    render: () => (
      <Space size="small">
        <RxHamburgerMenu data-te-toggle="tooltip" title="Columns" />
        <MdModeEdit data-te-toggle="tooltip" title="Columns" />
        <RxCross2 data-te-toggle="tooltip" title="Columns" />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    admission_no: "১২৩৩৩৪",
    name: "রহিম উদ্দিন",
    class: "ষষ্ঠ শ্রেণি",
    fathers_name: "করিম খান",
    date_of_birth: "08th March, 2018",
    gender: "পুরুষ",
    category: "সাধারণ",
    phone: "০১৪৩২৫৫৬৬৭৫",
  },
  {
    key: "2",
    name: "রহিম উদ্দিন",
    class: "ষষ্ঠ শ্রেণি",
    fathers_name: "করিম খান",
    date_of_birth: "08th March, 2018",
    gender: "পুরুষ",
    category: "সাধারণ",
    phone: "০১৪৩২৫৫৬৬৭৫",
  },
  {
    key: "3",
    name: "রহিম উদ্দিন",
    class: "ষষ্ঠ শ্রেণি",
    fathers_name: "করিম খান",
    date_of_birth: "08th March, 2018",
    gender: "পুরুষ",
    category: "সাধারণ",
    phone: "০১৪৩২৫৫৬৬৭৫",
  },
  {
    key: "4",
    name: "রহিম উদ্দিন",
    class: "ষষ্ঠ শ্রেণি",
    fathers_name: "করিম খান",
    date_of_birth: "08th March, 2018",
    gender: "পুরুষ",
    category: "সাধারণ",
    phone: "০১৪৩২৫৫৬৬৭৫",
  },
];

// const data = [
//   {
//     admission_roll: "01",
//     key: "1",
//     studentName: "John",
//     class: 1,
//     date_of_birth: "08th March, 2018",
//     gender: "male",
//     phone: 35856973432,
//     category: "General",
//   },
//   {
//     admission_roll: "02",
//     key: "2",
//     studentName: "Jim",
//     class: 2,
//     date_of_birth: "08th March, 2018",
//     gender: "male",
//     phone: 35856973442,
//     category: "General",
//   },
//   {
//     admission_roll: "03",
//     key: "3",
//     studentName: "Joe",
//     class: 3,
//     date_of_birth: "08th March, 2018",
//     gender: "male",
//     phone: 35856973432,
//     category: "General",
//   },
// ];

const StudentDetailsTable = () => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="col-span-2 ms-0 md:ms-4">
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
    // <div>
    //   <Table dataSource={data}>
    //     <Column
    //       title="Admission No"
    //       dataIndex="admission_roll"
    //       key="admission_roll"
    //     />
    //     <Column
    //       title="Student Name"
    //       dataIndex="studentName"
    //       key="studentName"
    //     />
    //     <Column title="Student Class" dataIndex="class" key="class" />
    //     <Column
    //       title="Date Of Birth "
    //       dataIndex="date_of_birth"
    //       key="date_of_birth"
    //     />
    //     <Column title="Gender " dataIndex="gender" key="gender" />
    //     <Column title="Category" dataIndex="category" key="category" />
    //     <Column title="Mobile Number" dataIndex="phone" key="phone" />
    //     <Column
    //       title="Action"
    //       key="action"
    //       render={(_, record) => (
    //         <Space size="middle">
    //           <>View</>
    //           <>Edit</>
    //           <>Delete</>
    //         </Space>
    //       )}
    //     />
    //   </Table>
    // </div>
  );
};

export default StudentDetailsTable;
