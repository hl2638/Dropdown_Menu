/*
* Author: Hongyi Liu
* */
import React, {useEffect, useState} from "react";


export default function MultipleDropdownMenu({title, optionList}) {
    const [displayMenu, setDisplayMenu] = useState(false); // Display the menu or not.
    const [selectedList, setSelectedList] = useState([]); // List of selected items.
    const [selectAll, setSelectAll] = useState(false);

    const handleChangeDisplayMenu = () => {
        setDisplayMenu(!displayMenu);
    };

    const handleSelectItem = (name) => {
        if (selectedList.includes(name)) {
            setSelectedList(selectedList.filter((item) => item !== name));
        } else {
            setSelectedList([...selectedList, name]);
        }

    };

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
    }

    useEffect(() => {
        if (selectAll) {
            setSelectedList([...optionList]);
        } else {
            setSelectedList([]);
        }
    }, [selectAll]);

    const selectedItems = selectedList.join(", ");


    const rawMenuOptions = optionList.map((listItem) => {
        const checked = selectedList.includes(listItem);
        return (<li key={listItem} className={"option-list-item"}
                    style={{ backgroundColor: checked ? 'lightsteelblue' : '#eeeeee', color: checked ? 'white' : 'black'}}
                    onClick={() => handleSelectItem(listItem)}>
            <input type={"checkbox"} className={"option"} checked={checked} name = {listItem} value={listItem} onChange={() => handleSelectItem(listItem)} />
            <label> {listItem} </label>
        </li>);
    });

    const selectAllOption = (<li key={"SelectAll"} className={"option-list-item"}
                                 style={{ backgroundColor: selectAll ? 'lightsteelblue' : '#eeeeee', color: selectAll ? 'white' : 'black'}}
                                 onClick={() => setSelectAll(!selectAll)}>
        <input type={"checkbox"} className={"option"} checked={selectAll} name = {"SelectAll"} value={"SelectAll"} onChange={handleSelectAll} />
        <label> {selectAll ? "Deselect All" : "Select All"} </label>
    </li>)

    const menuOptions = [selectAllOption, ...rawMenuOptions];


    return (
        <div className={"dropdown"}>
            <h4>{ title }</h4>
            <div className={"selected-items-container"}>
                <div className={"selected-items-box"}> {selectedItems}</div>
                <button className={"dropdown-button"} onClick={handleChangeDisplayMenu}>{ displayMenu ? "CLOSE" : "OPEN"}</button>
            </div>
            { displayMenu ? <ul className={"option-list"}> { menuOptions } </ul> : null }
        </div>
    );
}
