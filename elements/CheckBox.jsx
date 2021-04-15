/* eslint-disable prettier/prettier */

const CheckBox = ({ checked ,setChecked, info, resetInfo}) => {

  return (
    <button className={checked ? 'checkBoxChecked checkBox' : 'checkBox'} onClick={() => setChecked(checked ? resetInfo : info)}>
      {checked && <img src="/checkmark.svg" alt="checkmark"/>}
    </button>
  );
};

export default CheckBox;