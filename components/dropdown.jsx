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
              <svg className={`arrow ${openDispositionDropdown ? 'reverse' : ''}`} width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.65039 13.0852L0.581688 0.40994L18.5077 0.261351L9.65039 13.0852Z" fill="#F5F6F7"/>
              </svg>
            </div>
          ) : null;
        })}
        {selectedItem === -1 && (
          <div className="selectedElement" key={'select'} onClick={() => setOpenDispositionDropdown(!openDispositionDropdown)}>
            <div className="placeholder">Selectionner votre manga...</div>
            <svg className={`arrow ${openDispositionDropdown ? 'reverse' : ''}`} width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.65039 13.0852L0.581688 0.40994L18.5077 0.261351L9.65039 13.0852Z" fill="#F5F6F7"/>
            </svg>
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
