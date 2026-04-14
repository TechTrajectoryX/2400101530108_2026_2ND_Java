import { useState } from 'react';
function Toggle(){
    const [value,setvalue] =useState(" Status ON");
    function Assignment(){
        setvalue(" Status OFF");
    }
    return(
        <>
         <h1>Toggle button</h1>
         <h1>{value}</h1>
         <button onClick={Assignment}>Toggle</button>
        </>

    )
}
export default Toggle