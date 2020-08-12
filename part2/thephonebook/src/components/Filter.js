import React from "react";
const Filter = (props) => {
    return (
        <div>
            Filter show with{" "}
            <input
                value={props.filteredString}
                onChange={props.filterPerson}></input>
        </div>
    );
};

export default Filter