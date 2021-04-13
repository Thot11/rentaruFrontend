/* eslint-disable prettier/prettier */

const Button = ({children, color}) => {

  return (
    <div className={`button button${color}`}>
      {children}
    </div>
  );
};

export default Button;