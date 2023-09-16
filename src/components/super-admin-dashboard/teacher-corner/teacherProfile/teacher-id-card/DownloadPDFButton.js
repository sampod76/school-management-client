import React from "react";
import { Button } from "antd";
import { ImDownload2 } from "react-icons/im";

const DownloadPDFButton = ({ teacherId, data }) => {
  const handleDownload = () => {
    const pdfContent = generatePDFContent(teacherId);
    const blob = new Blob([pdfContent], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `teacher_id_card_${teacherId}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generatePDFContent = (teacherId) => {
    // const teacher = data.find((teacher) => teacher.teacherId === teacherId);
    const teacher = {
      id: 1,
      name: "John Doe",
      teacherId: "T123",
      subject: "Math",
      year: "2023",
    };
    if (teacher.teacherId !== teacherId) {
      return ""; // Return empty content if teacher not found
    }

    // Generate HTML content for the PDF
    const htmlContent = `
        <div style="font-family: Arial, sans-serif;">
          <h2>Teacher ID Card</h2>
          <p><strong>Name:</strong> ${teacher.name}</p>
          <p><strong>Teacher ID:</strong> ${teacher.teacherId}</p>
          <p><strong>Subject:</strong> ${teacher.subject}</p>
          <p><strong>Year:</strong> ${teacher.year}</p>
        </div>
      `;

    return htmlContent;
  };

  return (
    <Button type="link" onClick={handleDownload}>
      <ImDownload2 />
    </Button>
  );
};

export default DownloadPDFButton;
