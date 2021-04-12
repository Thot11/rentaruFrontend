import Link from "next/link";
import { useState } from "react";

const Step3 = ({ step, setStep, user, data, setData }) => {

  const [selectedFile, setSelectedFile] = useState()

  const nextStep = () => {
    setData({
      ...data,
      images: selectedFile
    })
    setStep(step+1)
  }

  const previousStep = () => {
    setStep(step-1)
  }

  return (
    <div className="container flex flex-wrap mx-auto gap-2 mt-8">
      Ajouter des photos : <br />
        <input
          type="file"
          multiple="multiple"
          onChange={(e) => setSelectedFile(e.target.files)}
        />
      <div onClick={previousStep}>back</div> <div onClick={nextStep}>continuer</div>
    </div>
  );
};

export default Step3;
