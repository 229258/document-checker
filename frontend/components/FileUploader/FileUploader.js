import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

import FileUploaderStyles from "./FileUploader.module.scss";

const FileUploaderComponent = (props) => {
  const { getImage, setFrontImage, setBackImage, position } = props;

  const [firstFile, setFirstFile] = useState(null);
  const [secondFile, setSecondFile] = useState(null);

  const [firstPreview, setFirstPreview] = useState(null);
  const [secondPreview, setSecondPreview] = useState(null);

  useEffect(() => {
    if (firstFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFirstPreview(reader.result);
      };
      reader.readAsDataURL(firstFile);
    }

    if (secondFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSecondPreview(reader.result);
      };
      reader.readAsDataURL(secondFile);
    }
  }, [firstFile, secondFile]);

  useEffect(() => {
    if (firstPreview) {
      setFrontImage(firstPreview);
      getImage(firstPreview);
    }

    if (secondPreview) {
      setBackImage(secondPreview);
      getImage(secondPreview);
    }
  }, [firstPreview, secondPreview]);

  const handleChange = (file) => {
    if (file && file?.type.substr(0, 5) === "image") {
      if (position === "left") {
        setFirstFile(file);
      } else {
        setSecondFile(file);
      }
    }
  };

  return (
    <>
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        classes={FileUploaderStyles.label}
        children={" "}
      />
    </>
  );
};

export default FileUploaderComponent;
