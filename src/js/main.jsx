import React from 'react'
import ReactDOM from 'react-dom/client'
import { Icon } from './components/Icon';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components

let digits = [0, 0, 0, 0, 0, 0];
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {

  // Increment of digits up to 9 after that reset to 0
    for (let i = 0; i < digits.length -1; i++) {
      
      if (digits[i] < 9) {
        digits[i]++;
        break;
      } else {
        digits[i] = 0;
      }
    }


    // Render the component
    
    root.render(

      <div className="row">
        <div className="col d-flex bg-dark w-50 mx-auto justify-content-center">
        
        </div>,
        <div className="col d-flex bg-dark w-50 mx-auto justify-content-center">
        {[...digits].reverse().map((digit, index) => (
            <div key={index} className='card fs-1 m-2 p-2 bg-secondary text-white'>
                {digit}
            </div>
        ))}
        </div>
      </div>
    );
}, 200);
