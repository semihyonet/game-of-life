import { Slider } from '@material-ui/core';

import React from "react"


const SliderComp = ({value, setValue}) =>{

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return(
        <div
        style={{padding:50}}
        >
        <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider" 
        step={0.1}
        max={10}
        />
        </div>
    )
}

export default SliderComp