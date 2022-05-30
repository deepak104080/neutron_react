import React, { useCallback, useEffect, useState } from "react";
import HookCallbackChild from './HookCallbackChild';

const HookCallback = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('Temp Name');

    useEffect(() => {
        console.log('useEffect - ', show, name);
    })

    const renderChildComp = useCallback((temp) => {
        return 'Data from render - ' + temp + name;
    }, [name])

    return(
        <>  
            <div>Hook Callback Parent</div>

            <button onClick={() => setShow(!show)}>Button Show Update</button>


            <div>-----------------------</div>
            <button onClick={() => setName('New Temp Name - hahahahaha')}>Button Name Update</button>
            <HookCallbackChild temp = {renderChildComp}/>
        </>
    )
}

export default HookCallback;