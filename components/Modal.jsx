/* eslint-disable prettier/prettier */

const Modal = ({children, open, setOpen}) => {

  return (
    <>
    <div className={`modalContainerBackground ${open ? 'open' : 'closed'}`} onClick={() => setOpen(!open)} />
      <div className="modalContainer">
        <div className="close" onClick={() => setOpen(false)}>Fermer</div>
        {open ? children : null}
      </div>
    </>
  );
};

export default Modal;