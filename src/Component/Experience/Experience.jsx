import React from 'react'
import './Experience.css'

import { themeContext } from '../../Context'
import { useContext } from 'react'


const Experience=()=>{
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return(
        <div className='experience' id='Experience'>
            <div className='achievement'>
                <div className='circle' >1</div>
                <span style={{color:darkMode?'white':""}}>Years</span>
                <span>Experience</span>

            </div>
            <div className='achievement'>
                <div className='circle'>20+</div>
                <span style={{color:darkMode?'white':""}}>Compleated</span>
                <span>Project</span>

            </div>
            <div className='achievement'>
                <div className='circle'>5+</div>
                <span style={{color:darkMode?'white':""}}>Clients</span>
                <span>Experience</span>

            </div>
        </div>

    )
}
export default Experience;