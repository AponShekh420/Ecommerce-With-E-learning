"use client"
import {modules, formats} from '@/components/dashboard/common/editor/quillEditorConfig'
import "react-quill-new/dist/quill.snow.css";
import "@/components/dashboard/common/editor/quillEditor.css"
import { useState } from 'react';
import dynamic from "next/dynamic";

// Dynamically import React Quill with SSR disabled
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });


const Editor= () => {

  const [desc, setDesc] = useState<string>()

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
}

export default Editor;