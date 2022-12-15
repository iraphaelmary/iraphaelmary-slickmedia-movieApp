import React from 'react';
import './Load.scss';

const Loader = function() {
    return(
        <>
            <div className='loader'>
                <div className='wrapper'>
                   <div>
                        <div className="lds-roller">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                   </div>
                </div>
            </div>
        </>
    )
};

export default Loader;