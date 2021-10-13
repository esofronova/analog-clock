import './style.scss';
import { useEffect, useState } from 'react';

const diallines = [...Array(60)].map((k = 1, i) => k + i);

export default function App() {

  let [date, setDate] = useState(new Date());
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
       
  let hDeg = h * 30 + m * (360/720);
  let mDeg = m * 6 + s * (360/3600);
  let sDeg = s * 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container my-5">
      <div className="centered">
        <div className="clock border border-dark border-5 rounded-circle position-relative">
          <span className="center rounded-circle shadow position-absolute bg-dark"></span>
          <div className="diallines">
            {diallines.map((item) => {
              return (
                <span
                  key={item}
                  className="position-absolute"
                  style={{ transform: `rotate(${6 * item}deg)` }}
                ></span>
              )
            })}
          </div>
          <div className="numbers">
            <span className="h3">3</span>
            <span className="h6">6</span>
            <span className="h9">9</span>
            <span className="h12">12</span>
          </div>
          <div className="hands">
            <span 
              className="hour"
              style={{ transform: `rotate(${hDeg}deg)` }}  
            ></span>
            <span 
              className="minute"
              style={{ transform: `rotate(${mDeg}deg)` }}  
            ></span>
            <span  
              className="second"
              style={{ transform: `rotate(${sDeg}deg)` }}            
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};