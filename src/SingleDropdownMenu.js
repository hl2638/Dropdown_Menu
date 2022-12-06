import React, {useState} from "react";

export default function SingleDropdownMenu({title, optionList}) {
    const [displayMenu, setDisplayMenu] = useState(false); // Display the menu or not.
    const [choice, setChoice] = useState(null);

    const handleChangeDisplayMenu = () => {
        setDisplayMenu(!displayMenu);
    };

    const handleSelectItem = (name) => {
        setChoice(name);
    };

    const menuOptions = optionList.map((listItem) => {
        const checked = choice === listItem;
        return (<li key={listItem} className={"option-list-item"}
                    style={{ backgroundColor: checked ? 'lightsteelblue' : '#eeeeee', color: checked ? 'white' : 'black'}}
                    onClick={() => handleSelectItem(listItem)}>
            <input type={"radio"} className={"option"} checked={checked} name = {listItem} value={listItem} onChange={() => handleSelectItem(listItem)} />
            <label> {listItem} </label>
        </li>);
    }
    );

    return(
        <div className={"dropdown"}>
            <h4>{ title }</h4>
            <div className={"selected-items-container"}>
                <div className={"selected-items-box"}> {choice}</div>
                <button className={"dropdown-button"} onClick={handleChangeDisplayMenu}>{ displayMenu ? "CLOSE" : "OPEN"}</button>
            </div>
            { displayMenu ? <ul className={"option-list"}> { menuOptions } </ul> : null }
        </div>
    );
}
