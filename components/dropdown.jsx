import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';


const Dropdown = ({ filters, selectedItem, setSelectedItem, notifs = [] }) => {

  // States

  const [openDispositionDropdown, setOpenDispositionDropdown] = useState(false);
  const [allNotifs, setAllNotifs] = useState(0);

  // useEffect(() => {
  //   if (notifs.length > 0) {
  //     setAllNotifs(notifs.reduce((a,b) => {
  //       return parseInt(a.nb) + parseInt(b.nb);
  //     }))
  //   }
  // }, [notifs])

  return (
    <div className="choiceBar">
      <div className="selectDropdownList">
        {/* {(allNotifs > 0 && !openDispositionDropdown) && (
          <div className="notif">{allNotifs}</div>
        )} */}
        {/* {filters && selectedItem !== -1 && filters.filter((item, index) => index === selectedItem).map((_filter, index) => {
          const notif = notifs.filter(_notif => _notif.index === selectedItem);
          if(_filter) {
            return (
              <div className="selectedElement" key={'selected'} onClick={() => setOpenDispositionDropdown(!openDispositionDropdown)}>
                <div>
                  {_filter}
                  {(notif.length === 1 && openDispositionDropdown) && (
                    <>&nbsp; ({notif[0].nb})</>
                  )}
                  
                </div>
                
                <img src="/chevronLeftS.svg" alt="arrow" className={`arrow ${openDispositionDropdown ? 'reverse' : ''}`} />
              </div>
            )
          }
          else {
            return null;
          }
        })} */}
        {/* {selectedItem === -1 && (
          <div className="selectedElement" key={'select'} onClick={() => setOpenDispositionDropdown(!openDispositionDropdown)}>
            <div className="placeholder">Selectionner...</div>
            <img src="/chevronLeftS.svg" alt="arrow" className={`arrow ${openDispositionDropdown ? 'reverse' : ''}`} />
          </div>
        )} */}

        {openDispositionDropdown && (
          <div className="listContainer">
            {
              filters.map((_filter, index) => {
                const selected = index === selectedItem;
                const notif = notifs.filter(_notif => _notif.index === index);
                return !selected ? (
                  <div
                    className="listElement"
                    key={index}
                    onClick={() => {
                      setSelectedItem(index);
                      setOpenDispositionDropdown(false);
                    }}
                  >
                    <div className="toolBarText">
                      {_filter} 
                      {notif.length === 1 && (
                        <>&nbsp; ({notif[0].nb})</>
                      )}
                    </div>
                  </div>
                ) : null;
              })
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
