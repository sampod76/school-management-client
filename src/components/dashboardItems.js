import {
  HomeIcon,
  UserGroupIcon,
  CursorArrowRippleIcon,
  BellAlertIcon,
  CurrencyBangladeshiIcon,
} from "@heroicons/react/24/outline";
import { SiOnlyoffice, SiFuturelearn } from "react-icons/si";
import { GiTeacher, GiExpense, GiSatelliteCommunication } from "react-icons/gi";
import { PiStudentFill, PiExamBold } from "react-icons/pi";
import { AiFillMoneyCollect, AiFillPrinter } from "react-icons/ai";
import { GrOverview, GrUserWorker } from "react-icons/gr";
import { SiHtmlacademy } from "react-icons/si";
import { MdInventory, MdManageAccounts } from "react-icons/md";
import { FcSettings } from "react-icons/fc";

export const supperadminNavbarItem = [
  {
    name: "Home",
    href: "/home",
    current: true,
    onClick: () => {
      localStorage.setItem("role", JSON.stringify(""));
    },
  },
  // { name: 'My Account', href: '#', current: false },
  { name: "Switch to Admin", href: "/supper-admin/dashboard", current: false },
  { name: "Exit Dashboard", href: "#", current: false },
];

export const supperadminItem = [
  {
    name: "ড্যাশবোর্ড",
    href: "/supper-admin/dashboard",
    icon: HomeIcon,
    current: false,
  },
  {
    name: "অফিস ডেস্ক",
    icon: SiOnlyoffice,
    children: [
      {
        name: "অফিস ড্যাশবোর্ড",
        href: "/supper-admin/office-desk/office-dashboard",
      },

      {
        name: "নোটিশ/বিজ্ঞপ্তি",
        href: "/supper-admin/office-desk/office-notice",
      },
      {
        name: "প্রাতিষ্ঠানিক কাজ",
        href: "/supper-admin/office-desk/work-assign",
      },
      { name: "কর্ম-পরিকল্পনা", href: "/supper-admin/office-desk/work-plan" },
      {
        name: "প্রতিষ্ঠানের মিটিং",
        href: "/supper-admin/office-desk/organization-meeting",
      },
      {
        name: "অনলাইন আবেদন",
        href: "/supper-admin/office-desk/online-application",
      },
      { name: "ইভেন্ট", href: "/supper-admin/office-desk/event" },
    ],
  },
  {
    name: "শিক্ষক কর্নার",
    icon: GiTeacher,
    children: [
      {
        name: "শিক্ষক ড্যাশবোর্ড",
        href: "/supper-admin/teacher-corner/teacher-dashboard",
      },
      {
        name: "নতুন শিক্ষক",
        href: "/supper-admin/teacher-corner/add-teacher",
      },
      {
        name: "সকল শিক্ষক",
        href: "/supper-admin/teacher-corner/all-teachers",
      },

      {
        name: "শিক্ষক হাজিরা",
        href: "/supper-admin/teacher-corner/teacher-attendance",
      },
      {
        name: "শিক্ষক আইডি কার্ড",
        href: "/supper-admin/teacher-corner/teacher-id-card",
      },
      {
        name: "সেরা শিক্ষক",
        href: "/supper-admin/teacher-corner/best-teacher",
      },
      // {
      //   name: "শিক্ষক প্রোফাইল",
      //   href: "/supper-admin/teacher-corner/teacher-profile",
      // },
      {
        name: "শিক্ষক প্রশংসাপত্র",
        href: "/supper-admin/teacher-corner/testimonial-and-printing",
      },
    ],
  },
  {
    name: "শিক্ষার্থী কর্ণার",
    icon: UserGroupIcon,
    children: [
      {
        name: "শিক্ষার্থী ড্যাশবোর্ড",
        href: "/supper-admin/student-information/student-dashboard",
      },
      {
        name: "শিক্ষার্থী তালিকা ",
        href: "/supper-admin/student-information/student-list",
      },
      // {
      //   name: "শিক্ষার্থী বিবরণ",
      //   href: "/supper-admin/student-information/student-profile",
      // },
      {
        name: "নতুন ভর্তি",
        href: "/supper-admin/student-information/add-admission",
      },
      {
        name: "ভর্তির আবেদন",
        href: "/supper-admin/student-information/student-admission",
      },
      {
        name: "শিক্ষার্থীদের হাজিরা",
        href: "/supper-admin/student-information/student-attendance",
      },
      {
        name: "শিক্ষার্থী আইডি কার্ড",
        href: "/supper-admin/student-information/student-id-card",
      },
      // {
      //   name: "প্রতিবন্ধিত শিক্ষার্থী ",
      //   href: "/supper-admin/student-information/disable-student",
      // },
      {
        name: "শিক্ষার্থী প্রমোশন",
        href: "/supper-admin/student-information/student-promotion",
      },
      {
        name: "সেরা শিক্ষার্থী ",
        href: "/supper-admin/student-information/best-students",
      },
      {
        name: "শিক্ষার্থী প্রশংসাপত্র",
        href: "/supper-admin/student-information/testimonial-and-printing",
      },
    ],
  },
  {
    name: "একাডেমিক সেটিংস",
    icon: SiHtmlacademy,
    children: [
      {
        name: "একাডেমিক ড্যাশবোর্ড",
        href: "/supper-admin/academic-settings/academic-dashboard",
      },
      {
        name: "অনলাইন এসাইনমেন্ট",
        href: "/supper-admin/academic-settings/online-assignment",
      },
      // {
      //   name: "শিক্ষার্থী বিবরণ",
      //   href: "/supper-admin/student-information/student-details",
      // },
      {
        name: "সকল বিষয়",
        href: "/supper-admin/academic-settings/all-subject",
      },
      {
        name: "শ্রেনীসমূহ",
        href: "/supper-admin/academic-settings/all-class",
      },
      {
        name: "শাখা",
        href: "/supper-admin/academic-settings/section",
      },
      // {
      //   name: "প্রতিবন্ধিত শিক্ষার্থী ",
      //   href: "/supper-admin/student-information/disable-student",
      // },
      {
        name: "ক্লাস রুটিন",
        href: "/supper-admin/academic-settings/class-routine",
      },
      {
        name: "পরীক্ষা",
        href: "/supper-admin/academic-settings/exam",
      },
      {
        name: "ফলাফল",
        href: "/supper-admin/academic-settings/result",
      },
      // {
      //   name: "প্রশংসাপত্র ও মুদ্রণ",
      //   href: "/supper-admin/academic-settings/certificate-printing",
      // },
    ],
  },
  {
    name: "হিসাব বিভাগ",
    icon: CurrencyBangladeshiIcon,
    children: [
      {
        name: "হিসাব ড্যাশবোর্ড",
        href: "/supper-admin/accounts_department/accounts-deshboard",
      },
      {
        name: "নতুন আয়",
        href: "/supper-admin/accounts_department/new-income",
      },

      {
        name: "সকল আয়",
        href: "/supper-admin/accounts_department/all-income",
      },
      {
        name: "নতুন ব্যয়",
        href: "/supper-admin/accounts_department/new-expenses",
      },
      {
        name: "সকল ব্যয়",
        href: "/supper-admin/accounts_department/all-expenses",
      },

      {
        name: "শিক্ষার্থীদের ফি",
        href: "/supper-admin/accounts_department/student-fees",
      },
      {
        name: "শিক্ষকদের বেতন",
        href: "/supper-admin/accounts_department/salary-of-teachers",
      },
      {
        name: "ডোনেশন",
        href: "/supper-admin/accounts_department/donation",
      },
    ],
  },
  {
    name: "ডিজিটাল যোগাযোগ",
    icon: GiSatelliteCommunication,
    children: [
      {
        name: "মোবাইল এসএমএস",
        href: "/supper-admin/digital-communication/sms",
      },
      {
        name: "ই-মেইল ",
        href: "/supper-admin/digital-communication/email",
      },

      {
        name: "অনলাইন মিটিং",
        href: "/supper-admin/digital-communication/online-meeting",
      },
    ],
  },
  {
    name: "মানেজিং কমিটি",
    icon: MdManageAccounts,
    children: [
      {
        name: "ম্যানেজিং কমিটি ড্যাশবোর্ড",
        href: "/supper-admin/managing-committee/dashboard",
      },
      {
        name: "নতুন সদস্য",
        href: "/supper-admin/managing-committee/new-member",
      },

      {
        name: "সকল সদস্য",
        href: "/supper-admin/managing-committee/all-members",
      },
      {
        name: " পূর্ববর্তী কমিটি",
        href: "/supper-admin/managing-committee/previous-committee",
      },
      {
        name: "সভা/নির্বাচন",
        href: "/supper-admin/managing-committee/election",
      },
    ],
  },
  {
    name: "সফটওয়্যার সেটিংস",
    icon: FcSettings,
    children: [
      {
        name: "সাধারণ সেটিং",
        href: "/supper-admin/software-settings/general-settings",
      },
      {
        name: "ছবি ও ভিডিও আপলোড",
        href: "/supper-admin/software-settings/image-and-video",
      },
      {
        name: "লগো আপলোড",
        href: "/supper-admin/software-settings/logo-upload",
      },
      {
        name: "এসইও অপশন",
        href: "/supper-admin/software-settings/seo-options",
      },
    ],
  },
];

export const studentNavbarItem = [
  { name: "Home", href: "/student/dashboard", current: true },
  // { name: 'My Account', href: '#', current: false },
  { name: "Switch to Admin", href: "/supper-admin/dashboard", current: false },
  { name: "Switch to Student", href: "/student/dashboard", current: false },
];

export const studentItem = [
  {
    name: "Dashboard",
    href: "/student/dashboard",
    icon: HomeIcon,
    current: true,
  },
  {
    name: "Online Study",
    icon: PiStudentFill,
    children: [
      {
        name: "Study Dashboard",
        href: "/student/online-study/study-dashboard",
      },
      {
        name: "Add Assignment",
        href: "/student/online-study/add-assignment",
      },
      {
        name: "All Assignment",
        href: "/student/online-study/all-assignment",
      },
      {
        name: "Completed Assignment",
        href: "/student/online-study/complete-assignment",
      },
      {
        name: "Pending Assignment",
        href: "/student/online-study/pending-assignment",
      },
      {
        name: "Rejected Assignment",
        href: "/student/online-study/rejected-assignment",
      },
    ],
  },
  {
    name: "Fees Collection",
    icon: AiFillMoneyCollect,
    children: [
      {
        name: "Fees Dashboard",
        href: "/student/fees-collection/fees-dashboard",
      },
      {
        name: "Collect Fees",
        href: "/student/fees-collection/collect-fees",
      },
      {
        name: "Add Fees Categories",
        href: "/student/fees-collection/add-fees-categories",
      },
      {
        name: "All Fees",
        href: "/student/fees-collection/all-fees",
      },
      {
        name: "Pending Fees",
        href: "/student/fees-collection/pending-fees",
      },
      {
        name: "Rejected Fees",
        href: "/student/fees-collection/rejected-fees",
      },
      {
        name: "Fees Discount",
        href: "/student/fees-collection/fees-discount",
      },
    ],
  },
];
