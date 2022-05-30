import React from 'react';
import ChildPropsDrillingD from './ChildPropsDrillingD';

const ChildPropsDrillingC = (props) => {
    return(
        <>
            Child C Component
            <div>---------------------</div>
            <ChildPropsDrillingD name={props.name}/>
        </>
    )
}

export default ChildPropsDrillingC;