import SingleDropdownMenu from "./SingleDropdownMenu";
import MultipleDropdownMenu from "./MultipleDropdownMenu";
import './Dropdown.css';

export default function Dropdown({title, optionList, multiple}) {

    return (
        <div>
            { multiple ? <MultipleDropdownMenu title={title} optionList={optionList}/> : <SingleDropdownMenu title={title} optionList={optionList}/> }
        </div>
    )
}