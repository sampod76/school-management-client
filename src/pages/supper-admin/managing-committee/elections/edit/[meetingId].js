import { Cascader, DatePicker, Input } from "antd";

const options = [
  {
    label: "শিক্ষক বৃন্দ",
    value: "all-teachers",
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Teacher ${index}`,
      value: index,
    })),
  },
  {
    label: "কমিটির সদস্যবৃন্দ",
    value: "committee-members",
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Committee ${index}`,
      value: index,
    })),
  },
];

const EditElectionMeetingPage = () => {
  
const onChange = (value) => {
  console.log(value);
};

  return (
    
    <div className="m-4">
      <h3 className="text-3xl m-4">প্রতিষ্ঠানের মিটিং</h3>
      <div className="lg:flex mb-12">
      
        <div className="space-y-2 px-4 pt-2 w-full">
          <p className="font-semibold text-lg">
          সভার তারিখ <span className="text-red-600">*</span>
          </p>
          {/* <Input placeholder="মিটিং এর তারিখ" /> */}
          <DatePicker
            format="YYYY-MM-DD"
            placeholder="মিটিং এর তারিখ"
            style={{ width: "100%" }}
          />
        </div>

        <div className="space-y-2 px-4 pt-2 w-full">
          <p className="font-semibold text-lg">
          সভার নাম <span className="text-red-600">*</span>
          </p>
          <Input  placeholder="মিটিং এর বিষয়" />
        </div>

        <div className="space-y-2 px-4 pt-2 w-full">
          <p className="font-semibold text-lg">
          সভার স্থান <span className="text-red-600">*</span>
          </p>
          {/* <Input placeholder="অংশগ্রহণকারী সদস্যবৃন্দ" /> */}
          <Cascader

            style={{
              width: "100%",
            }}
            
            options={options}
            onChange={onChange}
            multiple
            maxTagCount="responsive"
            placeholder="অংশগ্রহণকারী সদস্যবৃন্দ"
          />
        </div>
      </div>
    </div>
  );
};

export default EditElectionMeetingPage;
