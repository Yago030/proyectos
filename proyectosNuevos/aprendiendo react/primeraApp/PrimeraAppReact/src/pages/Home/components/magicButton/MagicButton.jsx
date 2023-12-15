import React from 'react'
import { useState , useEffect} from 'react';

function MagicButton() {
     const [data, setData] = useState(1); /*creando nuestro estado */

    const handleClick = () => {
        setData(10);
        
    };

    useEffect(() => {
        console.log(data);
      },[data]);

  return (
    <div>
          <button onClick={handleClick} >TRANSFORMAMOS A</button>
           <span> {data}</span>
    </div>
  )
}

export default MagicButton
