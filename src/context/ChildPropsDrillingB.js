import React from 'react';
import ChildPropsDrillingC from './ChildPropsDrillingC';

const ChildPropsDrillingB = (props) => {
    return(
        <>
            Child A Component
            <div>---------------------</div>
            <ChildPropsDrillingC name={props.name}/>
        </>
    )
}

export default ChildPropsDrillingB;