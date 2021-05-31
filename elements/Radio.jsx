/* eslint-disable prettier/prettier */

const Radio = ({ checked ,setChecked, click, info, resetInfo}) => {

  return (
    <button className={checked ? 'radioChecked radio' : 'radio'} onClick={(e) => {
      e.stopPropagation();
      {setChecked ? setChecked(checked ? resetInfo : info) : click()}}}>
      {checked && <div className="fillRadio"/>}
    </button>
  );
};

export default Radio;