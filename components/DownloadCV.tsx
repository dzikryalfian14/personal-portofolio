"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const DownloadCv = () => {
  const handleDownload = () => {
    const fileURL =
      "https://docs.google.com/document/d/1nCxJJ90wq7JrnPLMMKDfsTtVR29oalkE/edit?tab=t.0";
    window.open(fileURL, "_blank");
  };

  return (
    <Button
      variant={"outline"}
      className="uppercase flex items-center gap-2"
      onClick={handleDownload}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadCv;