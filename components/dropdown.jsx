import React, { useState } from 'react';


const Dropdown = ({ filters, selectedItem, setSelectedItem }) => {

  // States

  const [openDispositionDropdown, setOpenDispositionDropdown] = useState(false);

  return (
    <div className="choiceBar">
      <div className="selectDropdownList">
        {filters && selectedItem !== -1 && filters.filter((filter, index) => index === selectedItem).map(filter => {
           return filter ? (
            <div className="selectedElement" key={'selected'} onClick={() => setOpenDispositionDropdown(!openDispositionDropdown)}>
              <div>{filter}</div>
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
                return !selected ? (
                  <div
                    className="listElement"
                    key={index}
                    onClick={() => {
                      setSelectedItem(index);
                      setOpenDispositionDropdown(false);
                    }}
                  >
                    <div className="toolBarText">{filter}</div>
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
