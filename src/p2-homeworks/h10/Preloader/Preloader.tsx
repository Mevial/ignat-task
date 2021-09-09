import React from 'react';
import preloader from '../image/preloader.svg'

const Preloader = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
                <img src={preloader}/>
        </div>
    );
};

export default Preloader;