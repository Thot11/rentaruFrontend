/* eslint-disable prettier/prettier */

import { useState } from "react";
import Radio from "./Radio";

const DropDown = ({children, color, title, isImage, radio, checked, setChecked, info, resetInfo}) => {

  const [open, setOpen] = useState(false)

  return (
    <div className={`dropDown`}>
      <div className={`header header${color}`} onClick={() => setOpen(!open)}>
        <div className="leftPart">
          {radio && <Radio checked={checked} setChecked={setChecked} info={info} resetInfo={resetInfo}/>}
          {isImage && <img src="/creditCard.svg" alt="creditCard"/>}
          <h3>{title}</h3>
        </div>
        <img src="/bigArrow.svg" alt="chevron" className={`arrow ${open ? 'reverse' : ''}`}/>
      </div>
      {open ? children : null}
    </div>
  );
};

export default DropDown;