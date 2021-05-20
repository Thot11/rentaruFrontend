/* eslint-disable prettier/prettier */

const CheckBox = ({ checked ,setChecked, click, info, resetInfo}) => {

  return (
    <button className={checked ? 'checkBoxChecked checkBox' : 'checkBox'} onClick={() => {setChecked ? setChecked(checked ? resetInfo : info) : click()}}>
      {checked && <img src="/checkmark.svg" alt="checkmark"/>}
    </button>
  );
};

export default CheckBox;