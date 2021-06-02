import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';


const Dropdown = ({ filters, selectedItem, setSelectedItem, notifs = [] }) => {

  // States

  const [openDispositionDropdown, setOpenDispositionDropdown] = useState(false);
  const [allNotifs, setAllNotifs] = useState(0);

  useEffect(() => {
    console.log(notifs)
    if (notifs.length > 0) {
      console.log(notifs)
      setAllNotifs(notifs.reduce((a,b) => {
        return parseInt(a.nb) + parseInt(b.nb);
      }))
    }
  }, [notifs])

  return (
    <div className="choiceBar">
      <div className="selectDropdownList">
        {(allNotifs > 0 && !openDispositionDropdown) && (
          <div className="notif">{allNotifs}</div>
        )}
        {filters && selectedItem !== -1 && filters.filter((filter, index) => index === selectedItem).map((filter, index) => {
          const notif = notifs.filter(_notif => _notif.index === selectedItem);
           return filter ? (
            <div className="selectedElement" key={'selected'} onClick={() => setOpenDispositionDropdown(!openDispositionDropdown)}>
              <div>
                {filter}
                {(notif.length === 1 && openDispositionDropdown) && (
                  <>&nbsp; ({notif[0].nb})</>
                )}
                
              </div>
              
              <img src="/chevronLeftS.svg" alt="arrow" className={`arrow ${openDispositionDropdown ? 'reverse' : ''}`} />
            </div>
          ) : null;
        })}
        {selectedItem === -1 && (
          <div className="selectedElement" key={'select'} onClick={() => setOpenDispositionDropdown(!openDispositionDropdown)}>
            <div className="placeholder">Selectionner...</div>
            <img src="/chevronLeftS.svg" alt="arrow" className={`arrow ${openDispositionDropdown ? 'reverse' : ''}`} />
          </div>
        )}

        {openDispositionDropdown && (
          <div className="listContainer">
            {
              filters.map((filter, index) => {
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
                      {filter} 
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
