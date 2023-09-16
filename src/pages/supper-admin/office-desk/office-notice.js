/* // ? create by --> sampod nath
  ? edited by Bayajid Alam
 */
import NoticePDF from "@/components/GeneratePDf/NoticePDF";
import { confirm_modal } from "@/utils/modalHook";
import {
  Button,
  Col,
  DatePicker,
  Dropdown,
  Form,
  Menu,
  Row,
  Space,
  Spin,
  Table,
  Typography,
} from "antd";
import Link from "next/link";
import { Input } from "antd";
import { useContext, useState } from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Swal from "sweetalert2";
import {
  useDeleteNoticeMutation,
  useGetNoticesQuery,
} from "@/redux/features/notices/noticesApi";
import { toast } from "react-toastify";
 
import englishDataToBangle from "@/utils/englishDataToBangle";
import { AuthContext } from "@/components/Auth/AuthProvider";
import { ImDownload2 } from "react-icons/im";
const googleDrivePdfLink =
  "https://drive.google.com/file/d/1stZoAn9R8bofR5fmCIrD6k61gudWn1Bf/view?usp=drive_link";

const OfficeNotice = () => {
  // react to print
  const { Error_model } = useContext(AuthContext);
  const componentRef = useRef();

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   documentTitle: "Notice",
  //   onAfterPrint: () => alert("Print successfully"),
  // });

  const [startDate, setStartDate] = useState(new Date());

  // get query
  const { data: noticeData, refetch, isLoading, error } = useGetNoticesQuery();
  console.log(noticeData);

  // mutation query
  const [deleteNotice, { isError, error: DeleteError }] =
    useDeleteNoticeMutation();

  const handleDelete = (id) => {
    confirm_modal("You want to delete Notice!").then(async (willDelete) => {
      if (willDelete.value) {
        deleteNotice(id).then((res) => {
          console.log(res);
          if (res.data?.success) {
            refetch();
            toast.success("Notice deleted successfully");
          } else {
            Error_model({
              message:
                res?.error?.data?.message ||
                "নোটিশটি মুছে ফেলাতে ব্যর্থ হয়েছি",
              error: res,
            });
            return;
          }
        });
      }
    });
  };

  // Sort the eventData by createdAt in ascending order and take the first five items
  const sortedNotice = noticeData?.data
    ? noticeData.data
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];
  console.log(sortedNotice);

  const [newSubject, setNewSubject] = useState({});
  const [statusOptions] = useState(["Active", "Inactive"]);

  const columns = [
    { title: "নাম", dataIndex: "name", key: "name" },
    { title: "কোড", dataIndex: "code", key: "code" },
    { title: "ধরন", dataIndex: "type", key: "type" },
    {
      title: "অবস্থা",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span style={{ color: status === "Active" ? "green" : "red" }}>
          {status}
        </span>
      ),
    },
  ];

  const handleAddSubject = () => {
    setNewSubject([...subjects, newSubject]);
    setNewSubject({});
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  // if (isLoading) {
  //   return;
  // }
  if (DeleteError || error) {
    Error_model({
      message: DeleteError?.message || error?.message || "অনাকাঙ্ক্ষিত সমস্যা",
      error: DeleteError || error,
    });
  }
  return (
    // <Spin spinning={false} tip="Loading...">
    <div className="p-3">
      <section className="flex justify-between items-center px-4">
        <Typography.Title level={2}>নোটিশ/বিজ্ঞপ্তি</Typography.Title>
        <Button>
          <Link href="/supper-admin/office-desk/share/send-notice">
            বিজ্ঞপ্তি পাঠান
          </Link>
        </Button>
      </section>

      {/* <section className="px-4">
        <Row gutter={24} className="mb-4">
          <Col xs={24} sm={12} lg={8}>
            <Form.Item
              label="সূত্র"
              name="date"
              rules={[{ required: true, message: "তারিখ অবশ্যই দিতে হবে" }]}
            >
              <Input
                placeholder="সূত্র"
                value={newSubject.name || ""}
                onChange={(e) =>
                  setNewSubject({ ...newSubject, name: e.target.value })
                }
                required
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Form.Item
              label="তারিখ"
              name="date"
              rules={[{ required: true, message: "তারিখ অবশ্যই দিতে হবে" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <button
          // onClick={handlePrint}
          className="bg-gradient-to-r from-[#324CAD] to-[#05065c] text-white py-2 px-4 rounded border-none text-2xl my-2"
        >
          <span className="text-lg">প্রিন্ট করুন</span>
        </button>
      </section> */}

      <div ref={componentRef} className="w-full my-6 hidden">
        <NoticePDF />
      </div>
      <section>
        <Table
          loading={isLoading}
          dataSource={sortedNotice}
          style={{ margin: "0.3rem 1rem" }}
          scroll={{
            x: 600,
          }}
          columns={[
            {
              title: "ক্রমিক নং",
              dataIndex: "serial",
              key: "key",
              width: 40,
              render: (text, record, rowIndex) => rowIndex + 1,
              align: "center",
            },
            {
              title: "শিরোনাম",

              key: "key",
              // fixed: "left",
              width: 250,
              ellipsis: true,
              render: (record) => (
                <Link href={`office-notice/view/${record._id}`}>
                  {record?.title}
                </Link>
              ),
            },

            {
              title: "তারিখ",
              width: 100,
              dataIndex: "notice_date",
              key: "key",
              render: (recode) => <span>{englishDataToBangle(recode)}</span>,
              // fixed: "left",
            },

            {
              title: "একশন",
              key: "key",
              fixed: "right",
              width: 50,
              render: (record) => (
                <Space size="middle">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item
                          key="view"
                          onClick={() => {
                            // Handle view logic here
                          }}
                        >
                          <Link href={`office-notice/view/${record._id}`}>
                            Open
                          </Link>
                        </Menu.Item>
                        <Menu.Item key="download">
                          {/* <Link href={`office-notice/edit/${record._id}`}>
                            Edit
                          </Link> */}
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={googleDrivePdfLink}
                            download
                          >
                            {/* <ImDownload2></ImDownload2> */}
                            Download
                          </a>
                        </Menu.Item>

                        <Menu.Item
                          key="delete"
                          onClick={() => {
                            handleDelete(record._id);
                          }}
                        >
                          Delete
                        </Menu.Item>
                      </Menu>
                    }
                  >
                    <a>একশন</a>
                  </Dropdown>
                </Space>
              ),
            },
          ]}
        ></Table>
      </section>
    </div>
    // </Spin>
  );
};

export default OfficeNotice;
