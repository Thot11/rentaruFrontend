/* eslint-disable prettier/prettier */

const Button = ({children, color, functionOnClick}) => {

  return (
    <div className={`button button${color}`} onClick={functionOnClick}>
      {children}
    </div>
  );
};

export default Button;