import React from "react";
import Item from "../itemstatus";

const Columnstatus = props => {
    return(
        <div style={{ height: '100%', paddingTop: 20, paddingBottom: 20}}>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "row"}} className="container"> 
                <Item />
            </div>
        </div>
    );
}

export default Columnstatus;
