/* eslint-disable prettier/prettier */

import { useState } from "react";

const DropDown = ({children, color, title, isImage}) => {

  const [open, setOpen] = useState(false)

  return (
    <div className={`dropDown`}>
      <div className={`header header${color}`} onClick={() => setOpen(!open)}>
        <div className="leftPart">
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