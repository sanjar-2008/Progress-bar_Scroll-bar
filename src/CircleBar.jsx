
const CircleBar = ({ percentage, circleWidth }) => {
    const radius = 85;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;
    const rotation = -90; // Rotation angle in degrees

    return (
        <div className={'circle'}>
            <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
                <circle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    strokeWidth={'15px'}
                    r={radius}
                    className={'circle-background'} />
                <circle
                    cx={circleWidth / 2}
                    cy={circleWidth / 2}
                    strokeWidth={'15px'}
                    r={radius}
                    className={'circle-progress'}
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset,
                        transform: `rotate(${rotation}deg)`,
                        transformOrigin: `${circleWidth / 2}px ${circleWidth / 2}px`,
                    }}
                />
                <text x={'50%'} y={'50%'} dy={'0.3em'} textAnchor={'middle'}>
                    {percentage}%
                </text>
            </svg>
        </div>
    );
};

export default CircleBar;
