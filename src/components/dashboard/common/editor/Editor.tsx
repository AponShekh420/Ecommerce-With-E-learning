"use client";
import "@/components/dashboard/common/editor/quillEditor.css";
import {
  formats,
  modules,
} from "@/components/dashboard/common/editor/quillEditorConfig";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill-new/dist/quill.snow.css";

// Dynamically import React Quill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const Editor = () => {
  const [desc, setDesc] = useState<string>();

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={desc}
        onChange={(value) => setDesc(value)}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
