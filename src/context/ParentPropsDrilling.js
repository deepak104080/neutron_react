import React, { createContext, useState } from 'react';
import ChildPropsDrillingA from './ChildPropsDrillingA';

const NameContext = createContext();

const ParentPropsDrilling = () => {
    const [name, setName] = useState('Mr. ABC');
    const [count, setCount] = useState(0);
    
    return(
        <>  
            Parent Component
            <div>---------------------</div>
            <br></br>

            <div>---------------------</div>
            {/* https://www.carlrippon.com/static/0d1f722d0fe4c2bc4c3d71595dbe67dd/ca682/prop-drilling-v-context.png */}
            

                <ChildPropsDrillingA name={name} />
        </>
    )
}

export default ParentPropsDrilling;
export {NameContext};

