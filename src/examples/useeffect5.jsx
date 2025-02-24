import React, { useEffect, useState } from 'react'
import './useeffect5.css'

function Useeffect5() {

    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(()=>{

        if(isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else{
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
        
    },[isDarkMode]);

    return(
        <div>

            <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>

            <button onClick={()=>setIsDarkMode(!isDarkMode)}>Toggle Theme</button>
            
        </div>
    )
}

export default Useeffect5
