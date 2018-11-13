import React from 'react';
import './Display.css';
import Clear_equal from './SecondRow' ;
import ThirdRow from './ThirdRow';
import FourthRow from './FourthRow';
import FifthRow from './FifthRow';
import SixthRow from './SixthRow';


const CalculatorDisplay = () => {
    return (
        <div className='TopDisplay'>
            <h1>0</h1> 
            <Clear_equal />
            <ThirdRow />
            <FourthRow />
            <FifthRow />
            <SixthRow />
        </div>    
    )
}

export default CalculatorDisplay;
