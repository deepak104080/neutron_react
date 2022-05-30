import React, { useEffect } from "react";

const HookCallbackChild = (props) => {
    const {temp} = props;

    useEffect(() => {
        console.log('useEffect of child - ')
    }, [temp])

    return(
        <>
            <div>Hook Callback Child</div>
            <div>Temp = {temp('Name from child comp')}</div>
        </>
    )
}

export default HookCallbackChild;