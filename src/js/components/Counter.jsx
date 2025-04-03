import { useState, useEffect } from 'react';

export const Counter = () => {

    // let [digit1, setDigit1] = useState(0);
    // let [digit2, setDigit2] = useState(0);
    // let [digit3, setDigit3] = useState(0);
    // let [count3, setCount3] = useState(0);
    // let [count4, setCount] = useState(0);
    // let [count5, setCount] = useState(0);
    // let [count6, setCount] = useState(0);

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => (prevCount < 9 ? prevCount + 1 : prevCount));
        }, 1000);

        return () => clearInterval(interval); // Limpieza del intervalo al desmontar el componente
    }, []);


    return (
        <div className='d-flex'>
            {/* <div className='card fs-1 m-2 p-2 bg-secondary text-white'>{digit3}</div>,
            <div className='card fs-1 m-2 p-2 bg-secondary text-white'>{digit2}</div>, */}
            <div className='card fs-1 m-2 p-2 bg-secondary text-white'>{count}</div>
        </div>
        // <div className='card fs-1 m-2 p-2 bg-secondary text-white'>{digit4}</div>
        // <div className='card fs-1 m-2 p-2 bg-secondary text-white'>{digit5}</div>
        // <div className='card fs-1 m-2 p-2 bg-secondary text-white'>{digit6}</div>
    );
  
   
};
