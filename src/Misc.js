import React, { useContext } from "react";
import {Link, useLocation} from 'react-router-dom';
import {DataAppContext} from './common/DataApp';

const Misc = () => {
    const loginDetails = useContext(DataAppContext);

    const {state} = useLocation();
    console.log(state);

    const id = '12345';
    
    return(
        <>
            <div className='row bg-info bg-opacity-50'>
                <div className='col-9'>
                    {loginDetails.isLoggedIn && <div>Hi {state.username}</div>}
                </div>
                <div className='col-3'>
                    {loginDetails.isLoggedIn ? 
                    (<button onClick={() => loginDetails.setLogin(false)}>Logout</button>) :
                    (<button onClick={() => loginDetails.setLogin(true)}>Login</button>)}
                </div>
            </div>


            <div className='row bg-info bg-opacity-50'>
                <div>Misc Component</div>
                <Link to={`/hookparams/${id}`}>Product ID</Link>
            </div>

            
        </>
    )
}

export default Misc;