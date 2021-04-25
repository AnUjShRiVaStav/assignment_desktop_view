import { useState } from "react"

export default function Navbar() {
   
    const[line, setLine] = useState(false);

    const cutIt = () => {
        
        setLine(true);
    }


    return(
        
        <div className = 'navbar'>
        <h1>Lorem Ipsum</h1>
        
        <ul className = 'navbar_'
       
        >
         <li style = {{ textDecoration: line ? 'line-through': 'none'}}onClick = {cutIt} ><a href="#about">About</a></li>
         <li  ><a href="#services">Services</a></li>
         <li ><a href="#gallery">Gallery</a></li>
         <li ><a href="#contact">Contact</a></li>
         <li ><a href="#book">Book</a></li>
      </ul>
    
         <button className='button'>Cart</button>

        </div>
    )
}