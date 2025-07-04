"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  CheckCircleIcon,
  CircleArrowDown,
  HammerIcon,
  RocketIcon,
  SaveIcon,
} from "lucide-react";

function FileUploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop,
    });
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
      <div
        {...getRootProps()}
        className={`flex h-96 w-[90%] items-center justify-center rounded-xl border-2 border-dashed border-indigo-600 p-10 text-indigo-600 ${isFocused || isDragAccept ? "bg-indigo-300" : "bg-indigo-100"}`}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center justify-center text-center">
          {isDragActive ? (
            <>
              <RocketIcon className="h-20 w-20 animate-ping" />
              <p>Drop the files here ...</p>
            </>
          ) : (
            <>
              <CircleArrowDown className="h-20 w-20 animate-bounce" />
              <p>
                Drag &apos;n&apos; drop some files here, or click to select
                files
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUploader;
