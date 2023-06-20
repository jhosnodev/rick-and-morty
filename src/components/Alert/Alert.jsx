import React from 'react';

const Alert = ({message, type}) => {
    const handleCloseAlert = () =>{
        console.log('paa cerrar alert ');
    }
    
    return (
        <div className='alert___container'>
            <div className='alert___card'>
                <div className='alert___card-header'>
                    {type}
                    <span onClick={handleCloseAlert}>
                        X
                    </span>
                </div>
                <div className='alert___card-body'>
                    {message}
                </div>
            </div>
        </div>
    );
}

export default Alert;
