/* eslint-disable prettier/prettier */

const Modal = ({children, open, setOpen, onClick = () => null}) => {

  return (
    <>
    <div className={`modalContainerBackground ${open ? 'open' : 'closed'}`} onClick={() => {setOpen(!open); onClick()}} />
      <div className="modalContainerFullscreen">
        <div className="close" onClick={() => {setOpen(false); onClick()}}>Fermer</div>
        {open ? children : null}
      </div>
    </>
  );
};

export default Modal;