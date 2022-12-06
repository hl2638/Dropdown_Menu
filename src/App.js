/*
* Author: Hongyi Liu
* */

import './App.css';
import Dropdown from "./Dropdown";

function App() {

    const multipleTitle = "Multiple Dropdown";
    const singleTitle = "Single Dropdown";
    const largeMultipleTitle = "Large Multiple Dropdown (1000 items)";


    const numOptions = 5, largeNumOptions = 1000;
    let optionList = [], largeOptionList = [];
    for (let i=1; i<=numOptions; i++) {
        optionList.push("option " + i);
    }
    for (let i=1; i<=largeNumOptions; i++) {
        largeOptionList.push("option " + i);
    }


    return (
    <div className="App" style={{display: "flex"}}>
        <Dropdown title={multipleTitle} optionList={optionList} multiple={true}/>
        <Dropdown title={singleTitle} optionList={optionList} multiple={false}/>
        <Dropdown title={largeMultipleTitle} optionList={largeOptionList} multiple={true}/>
    </div>
    );
}

export default App;
