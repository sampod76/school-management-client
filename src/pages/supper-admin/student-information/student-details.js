import StudentDetailsTable from "@/components/student-information/student-details/student-details-table";
import { Button, Col, Form, Row, Select, Table, Typography,Input } from "antd";
import { AiOutlineFileExcel } from "react-icons/ai";
import { BsFiletypeCsv } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { FiColumns, FiPrinter } from "react-icons/fi";
import { ImCopy } from "react-icons/im";
const { Search } = Input;

const { Option } = Select;
const data=[
  {
    "gender": "Male",
    "mobile_number": "12345678900",
    "admission_date": "2020-08-23",
    "guardians_name": "John Doe fathen0",
    "students_name": "Jane Doe0",
    "roll_number": 101,
    "admission_number": 12345,
    "serial_number": "SR1230",
    "key": 0
  },
  {
    "gender": "Male",
    "mobile_number": "12345678901",
    "admission_date": "2021-08-27",
    "guardians_name": "John Doe fathen1",
    "students_name": "Jane Doe1",
    "roll_number": 102,
    "admission_number": 12346,
    "serial_number": "SR1231",
    "key": 1
  },
  {
    "gender": "Male",
    "mobile_number": "12345678902",
    "admission_date": "2022-08-26",
    "guardians_name": "John Doe fathen2",
    "students_name": "Jane Doe2",
    "roll_number": 103,
    "admission_number": 12347,
    "serial_number": "SR1232",
    "key": 2
  },
  {
    "gender": "Male",
    "mobile_number": "12345678903",
    "admission_date": "2023-08-2",
    "guardians_name": "John Doe fathen3",
    "students_name": "Jane Doe3",
    "roll_number": 104,
    "admission_number": 12348,
    "serial_number": "SR1233",
    "key": 3
  },
  {
    "gender": "Male",
    "mobile_number": "12345678904",
    "admission_date": "2024-08-28",
    "guardians_name": "John Doe fathen4",
    "students_name": "Jane Doe4",
    "roll_number": 105,
    "admission_number": 12349,
    "serial_number": "SR1234",
    "key": 4
  },
  {
    "gender": "Male",
    "mobile_number": "12345678905",
    "admission_date": "2025-08-9",
    "guardians_name": "John Doe fathen5",
    "students_name": "Jane Doe5",
    "roll_number": 106,
    "admission_number": 12350,
    "serial_number": "SR1235",
    "key": 5
  },
  {
    "gender": "Male",
    "mobile_number": "12345678906",
    "admission_date": "2026-08-30",
    "guardians_name": "John Doe fathen6",
    "students_name": "Jane Doe6",
    "roll_number": 107,
    "admission_number": 12351,
    "serial_number": "SR1236",
    "key": 6
  },
  {
    "gender": "Male",
    "mobile_number": "12345678907",
    "admission_date": "2027-08-29",
    "guardians_name": "John Doe fathen7",
    "students_name": "Jane Doe7",
    "roll_number": 108,
    "admission_number": 12352,
    "serial_number": "SR1237",
    "key": 7
  },
  {
    "gender": "Male",
    "mobile_number": "12345678908",
    "admission_date": "2028-08-26",
    "guardians_name": "John Doe fathen8",
    "students_name": "Jane Doe8",
    "roll_number": 109,
    "admission_number": 12353,
    "serial_number": "SR1238",
    "key": 8
  },
  {
    "gender": "Male",
    "mobile_number": "12345678909",
    "admission_date": "2029-08-17",
    "guardians_name": "John Doe fathen9",
    "students_name": "Jane Doe9",
    "roll_number": 110,
    "admission_number": 12354,
    "serial_number": "SR1239",
    "key": 9
  },
  {
    "gender": "Male",
    "mobile_number": "123456789010",
    "admission_date": "20210-08-2",
    "guardians_name": "John Doe fathen10",
    "students_name": "Jane Doe10",
    "roll_number": 111,
    "admission_number": 12355,
    "serial_number": "SR12310",
    "key": 10
  },
  {
    "gender": "Male",
    "mobile_number": "123456789011",
    "admission_date": "20211-08-23",
    "guardians_name": "John Doe fathen11",
    "students_name": "Jane Doe11",
    "roll_number": 112,
    "admission_number": 12356,
    "serial_number": "SR12311",
    "key": 11
  },
  {
    "gender": "Male",
    "mobile_number": "123456789012",
    "admission_date": "20212-08-3",
    "guardians_name": "John Doe fathen12",
    "students_name": "Jane Doe12",
    "roll_number": 113,
    "admission_number": 12357,
    "serial_number": "SR12312",
    "key": 12
  },
  {
    "gender": "Male",
    "mobile_number": "123456789013",
    "admission_date": "20213-08-23",
    "guardians_name": "John Doe fathen13",
    "students_name": "Jane Doe13",
    "roll_number": 114,
    "admission_number": 12358,
    "serial_number": "SR12313",
    "key": 13
  },
  {
    "gender": "Male",
    "mobile_number": "123456789014",
    "admission_date": "20214-08-18",
    "guardians_name": "John Doe fathen14",
    "students_name": "Jane Doe14",
    "roll_number": 115,
    "admission_number": 12359,
    "serial_number": "SR12314",
    "key": 14
  },
  {
    "gender": "Male",
    "mobile_number": "123456789015",
    "admission_date": "20215-08-27",
    "guardians_name": "John Doe fathen15",
    "students_name": "Jane Doe15",
    "roll_number": 116,
    "admission_number": 12360,
    "serial_number": "SR12315",
    "key": 15
  },
  {
    "gender": "Male",
    "mobile_number": "123456789016",
    "admission_date": "20216-08-7",
    "guardians_name": "John Doe fathen16",
    "students_name": "Jane Doe16",
    "roll_number": 117,
    "admission_number": 12361,
    "serial_number": "SR12316",
    "key": 16
  },
  {
    "gender": "Male",
    "mobile_number": "123456789017",
    "admission_date": "20217-08-25",
    "guardians_name": "John Doe fathen17",
    "students_name": "Jane Doe17",
    "roll_number": 118,
    "admission_number": 12362,
    "serial_number": "SR12317",
    "key": 17
  },
  {
    "gender": "Male",
    "mobile_number": "123456789018",
    "admission_date": "20218-08-8",
    "guardians_name": "John Doe fathen18",
    "students_name": "Jane Doe18",
    "roll_number": 119,
    "admission_number": 12363,
    "serial_number": "SR12318",
    "key": 18
  },
  {
    "gender": "Male",
    "mobile_number": "123456789019",
    "admission_date": "20219-08-20",
    "guardians_name": "John Doe fathen19",
    "students_name": "Jane Doe19",
    "roll_number": 120,
    "admission_number": 12364,
    "serial_number": "SR12319",
    "key": 19
  },
  {
    "gender": "Male",
    "mobile_number": "123456789020",
    "admission_date": "20220-08-17",
    "guardians_name": "John Doe fathen20",
    "students_name": "Jane Doe20",
    "roll_number": 121,
    "admission_number": 12365,
    "serial_number": "SR12320",
    "key": 20
  },
  {
    "gender": "Male",
    "mobile_number": "123456789021",
    "admission_date": "20221-08-15",
    "guardians_name": "John Doe fathen21",
    "students_name": "Jane Doe21",
    "roll_number": 122,
    "admission_number": 12366,
    "serial_number": "SR12321",
    "key": 21
  },
  {
    "gender": "Male",
    "mobile_number": "123456789022",
    "admission_date": "20222-08-4",
    "guardians_name": "John Doe fathen22",
    "students_name": "Jane Doe22",
    "roll_number": 123,
    "admission_number": 12367,
    "serial_number": "SR12322",
    "key": 22
  },
  {
    "gender": "Male",
    "mobile_number": "123456789023",
    "admission_date": "20223-08-2",
    "guardians_name": "John Doe fathen23",
    "students_name": "Jane Doe23",
    "roll_number": 124,
    "admission_number": 12368,
    "serial_number": "SR12323",
    "key": 23
  },
  {
    "gender": "Male",
    "mobile_number": "123456789024",
    "admission_date": "20224-08-12",
    "guardians_name": "John Doe fathen24",
    "students_name": "Jane Doe24",
    "roll_number": 125,
    "admission_number": 12369,
    "serial_number": "SR12324",
    "key": 24
  },
  {
    "gender": "Male",
    "mobile_number": "123456789025",
    "admission_date": "20225-08-30",
    "guardians_name": "John Doe fathen25",
    "students_name": "Jane Doe25",
    "roll_number": 126,
    "admission_number": 12370,
    "serial_number": "SR12325",
    "key": 25
  },
  {
    "gender": "Male",
    "mobile_number": "123456789026",
    "admission_date": "20226-08-1",
    "guardians_name": "John Doe fathen26",
    "students_name": "Jane Doe26",
    "roll_number": 127,
    "admission_number": 12371,
    "serial_number": "SR12326",
    "key": 26
  },
  {
    "gender": "Male",
    "mobile_number": "123456789027",
    "admission_date": "20227-08-28",
    "guardians_name": "John Doe fathen27",
    "students_name": "Jane Doe27",
    "roll_number": 128,
    "admission_number": 12372,
    "serial_number": "SR12327",
    "key": 27
  },
  {
    "gender": "Male",
    "mobile_number": "123456789028",
    "admission_date": "20228-08-3",
    "guardians_name": "John Doe fathen28",
    "students_name": "Jane Doe28",
    "roll_number": 129,
    "admission_number": 12373,
    "serial_number": "SR12328",
    "key": 28
  },
  {
    "gender": "Male",
    "mobile_number": "123456789029",
    "admission_date": "20229-08-17",
    "guardians_name": "John Doe fathen29",
    "students_name": "Jane Doe29",
    "roll_number": 130,
    "admission_number": 12374,
    "serial_number": "SR12329",
    "key": 29
  }
]

const StudentDetailsPage = () => {
  const onSearch = (value) => console.log(value);
  return (
    <div className=" ">
      <h3 className="text-2xl mx-4 my-2"><span style={{color:"507ac9"}}>হোম</span> /শিক্ষার্থীর বিবরণ</h3>
      <section style={{ marginInline: "1.2rem" }}>
        <div className="md:flex justify-between items-center ">
          <Typography.Title level={4}>ফিল্টারিং</Typography.Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Select
                placeholder="শ্রেনি নির্বাচন করুন"
                style={{ minWidth: "100%", textAlign: "center" }}
              >
                <Select.Option value="">শ্রেনি নির্বাচন করুন</Select.Option>
                <Select.Option value="6">ষষ্ঠ শ্রেণি</Select.Option>
                <Select.Option value="7">সপ্তম শ্রেণী</Select.Option>
                <Select.Option value="8">অষ্টম শ্রেণী</Select.Option>
                <Select.Option value="9">নবম শ্রেণী</Select.Option>
                <Select.Option value="10">দশম শ্রেণী</Select.Option>
                {/* Add other division options here */}
              </Select>
            </Col>
            <Col xs={24} md={12}>
              <Select
                placeholder="শাখা নির্বাচন করুন"
                style={{ minWidth: "100%", textAlign: "center" }}
              >
                <Select.Option value="">শাখা নির্বাচন করুন</Select.Option>
                <Select.Option value="6">ষষ্ঠ শ্রেণি</Select.Option>
                <Select.Option value="chattogram">সপ্তম শ্রেণী</Select.Option>
                <Select.Option value="rajshahi">অষ্টম শ্রেণী</Select.Option>
                <Select.Option value="khulna">নবম শ্রেণী</Select.Option>
                <Select.Option value="khulna">দশম শ্রেণী</Select.Option>
                {/* Add other division options here */}
              </Select>
            </Col>
            
          </Row>
        </div>
      </section>
      {/* <Table
        dataSource={data}
        style={{ margin: "0.3rem 1rem" }}
        scroll={{
          x: 1200,
        }}
        columns={[
          {
            title: "এসআর নং",
            width: 100,
            dataIndex: "serial_number",
            key: "key",
            // fixed: "left",
            width: 150,
          },

          {
            title: "শিক্ষাথীর নাম",
            dataIndex: "students_name",
            key: "key",
            width: 150,
          },
          {
            title: "মোট নম্বর",
            width: 100,
            dataIndex: "total_number",
            key: "key",
            // fixed: "left",
          },
          {
            title: "রোল নম্বর",
            dataIndex: "roll_number",
            key: "key",
            width: 150,
          },

          {
            title: "অবিভাবকের নাম",
            dataIndex: "guardians_name",
            key: "key",
            width: 150,
          },
          
          {
            title: "মোবাইল নম্বর",
            dataIndex: "mobile_number",
            key: "key",
            width: 150,
          },
          {
            title: "লিঙ্গ",
            dataIndex: "gender",
            key: "key",
            width: 150,
          },

          {
            title: "একশন",
            key: "key",
            fixed: "right",
            width: 100,
            render: () => <a>action</a>,
          },
        ]}
        d
      ></Table> */}

     
      <div className="flex lg:flex-row  flex-col-reverse   items-center justify-between px-4 py-4 ">
        {/* search input field  */}
        <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
                style={{ width: "12rem", textAlign: "center" }}
              />

        {/* download data  */}
        <div className="border-b border-gray-200 focus:border-blue-400 outline-none flex items-center text-xl gap-2 pb-2 lg:px-2">
          <ImCopy data-te-toggle="tooltip" title="Copy" />
          <AiOutlineFileExcel data-te-toggle="tooltip" title="Excel" />
          <BsFiletypeCsv data-te-toggle="tooltip" title="CSV" />
          <FaRegFilePdf data-te-toggle="Pdf" title="Copy" />
          <FiPrinter data-te-toggle="tooltip" title="Printer" />
          <FiColumns data-te-toggle="tooltip" title="Columns" />
          <Button type="primary">+Add</Button>
        </div>
      
      </div>

      {/* Table Start */}
      <StudentDetailsTable />
    </div>
  );
};

export default StudentDetailsPage;
