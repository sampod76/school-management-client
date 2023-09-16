/* // ? create by --> sampod nath

 */
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ value, onChange }) => {
  const reactQuillRef = useRef(null);
  const handleImageInsert = () => {
    const url = window.prompt("Enter the image URL:");
    if (url) {
      const editor = this.reactQuillRef.getEditor();
      const range = editor.getSelection();
      editor.insertEmbed(range.index, "image", url);
    }
  };
  const modules = {
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }],
        ["bold", "italic", "underline", "strike", "link"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["blockquote", "code-block", "image"],
        [{ align: [] }],
        ["clean"],
      ],
      handlers: {
        image: handleImageInsert, // Custom image handler
      },
    },
  };

  return (
    <ReactQuill
    style={{ height: "300px",width:"100%", backgroundColor: 'white' }}
      ref={reactQuillRef}
    //   modules={modules}
      theme="snow"
      value={value}
      onChange={onChange}
    />
  );
};

export default TextEditor;
