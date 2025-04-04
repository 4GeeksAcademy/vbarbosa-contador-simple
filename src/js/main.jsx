import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import { Icon } from './components/Icon';

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


    // Render the loop while maping array to create the digits
    
    root.render(

      <div className="row d-flex m-5">
        <div className="col-12 col-lg-12">
          <div className='d-flex bgCounter justify-content-center mx-auto'>
          <Icon />
          {[...digits].reverse().map((digit, index) => (
            <div key={index} className="card bgDigits m-2 p-3">
              {digit}
            </div>
          ))}
          </div>
        </div>
      </div>
    );
}, 1000);
