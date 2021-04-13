/* eslint-disable prettier/prettier */

const Button = ({children, color, functionOnClick}) => {

  return (
    <button className={`button button${color}`} onClick={functionOnClick}>
      {children}
    </button>
  );
};

export default Button;