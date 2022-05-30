import React from "react";
import { useParams } from "react-router-dom";

const HookParams = () => {
    const {id} = useParams();
    // console.log(window.location.pathname); - not recommended
    return(
        <>
            <div>ID from Caller - Product ID - {id}</div>
        </>
    )
}

export default HookParams;