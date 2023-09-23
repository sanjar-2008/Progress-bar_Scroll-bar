import { useRef, useState, useEffect } from 'react';
import CircleBar from "./CircleBar.jsx";
import './App.css';

const App = () => {
    const [percentage, setPercentage] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const bar = ref.current;
        const style = getComputedStyle(bar).strokeDasharray;
        const styleNow = parseFloat(style) * (1 - parseFloat(percentage / 100));
        bar.style.strokeDashoffset = styleNow;
    }, [percentage]);
    return (
        <div className={'bar'}>
            <h1>Homework (useState, useEffect, useRef)</h1>
            <div className={'bar-block'}>
                <div className={'card'} ref={ref} onScroll={(event)=>setPercentage(Math.floor(event.target.scrollTop *100/500))}>
                    <div className={'card-item'}>
                        <p>$</p>
                        <p>#</p>
                        <p>!</p>
                    </div>
                    <CircleBar percentage={percentage} circleWidth='200'/>
                </div>
            </div>
        </div>
    );
};

export default App;
