import React from 'react';
import ChildPropsDrillingB from './ChildPropsDrillingB';
import { NameContext } from './Parent';

class ChildPropsDrillingA extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
             ChildB Component
            <br></br>



            <div>---------------------</div>
            <ChildPropsDrillingB name={this.props.name}/>
            </>
        )
    }
}

export default ChildPropsDrillingA;