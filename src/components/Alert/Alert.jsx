import React from 'react';
import './Alert.css'

const Alert = ({message, type, setAlert}) => {
    const handleCloseAlert = () =>{
        setAlert({})
    }
    
    return (
        <div className='alert___container' onClick={handleCloseAlert}>
            <div className='alert___card'>
                <div className='alert___card-header'>
                    <h3>
                    {type}
                    </h3>
                    <span onClick={handleCloseAlert}>
                        X
                    </span>
                    
                </div>
                <hr/>
                <div className='alert___card-body'>
                    {message}
                </div>
            </div>
        </div>
    );
}

export default Alert;
