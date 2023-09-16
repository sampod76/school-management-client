import Swal from "sweetalert2";

export const confirm_modal = (message,confirmText="হ্যাঁ, এটি মুছুন!") => {
  return Swal.fire({
    title: "আপনি কি নিশ্চিত?",
    text:message|| "আপনি এই তথ্য ফিরিয়ে আনতে পারবেন না!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmText,
    cancelButtonText: "বাতিল",
  });
};

export const Success_model = ({ message }) => {
  return Swal.fire({
    position: "center",
    icon: "success",
    title: message || "সফলভাবে সম্পন্ন হয়েছে",
    showConfirmButton: false,
    timer: 2000,
  });
};

export const Error_model_hook = ({ message }) => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message || "সমস্যা হয়েছে!",
    footer: '<a href="">Why do I have this issue?</a>',
  });
};
