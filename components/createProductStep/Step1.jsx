import Link from "next/link";
import slugify from 'slugify';
import { useState } from "react";


const Step1 = ({ step, setStep, user, data, setData }) => {

  const [name, setName] = useState('')

  const nextStep = () => {
    if (name) {
      setData({
        user: user.id,
        title : name,
        slug : slugify(name)
      })
      setStep(step+1)
    }
  }

  return (
    <div className="container flex flex-wrap mx-auto gap-2 mt-8">
       Quelle série mettez vous en location ?
      <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} />
      <div onClick={nextStep}>Submit</div>
    </div>
  );
};

export default Step1;
