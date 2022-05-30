import React, { useEffect, useLayoutEffect } from "react";

const HookLayoutEffect = () => {

    useEffect(() => {
        console.log('useffect triggered...');
    })

    useLayoutEffect(() => {
        console.log('useLayoutEffect triggered...');
    })

    return(
        <>
            <div>Hook HookLayoutEffect</div>
            
        </>
    )
}

export default HookLayoutEffect;