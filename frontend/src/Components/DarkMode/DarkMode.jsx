import React, { useState, useContext } from 'react';
import './DarkMode.css';
import { DataContext } from '../../Contex/DataContex';

function DarkMode() {

    const { darkMode, handlePosition } = useContext(DataContext)

    return (

        <div className='dark-mode'>
            {
                darkMode === true ? 
                <button id="btn-darkMode" className='oscuro' onClick={handlePosition}><span class="toggle--label-background-oscuro"></span></button> 
                :
                <button id="btn-darkMode" className='claro' onClick={handlePosition}><span class="toggle--label-background-claro"></span></button>
            }
        </div>
    )
}

export default DarkMode
