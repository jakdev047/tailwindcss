export default function Circle({
    classes,
    width,
    height,
    cx,
    centerX,
    cy,
    centerY,
    fill,
    r,
    stroke,
    strokeWidth,
}) {

    return (
      <svg 
        className={classes ? classes : "" }
        width={width} 
        height={height}
    >
        <circle 
            cx={centerX ? (width/2) : cx } 
            cy={centerY ? (height/2) : cy } 
            r= {r ? r : '0'} 
            fill={fill ? fill : 'transparent'} 
            stroke={stroke ? stroke : 'transparent'} 
            strokeWidth={strokeWidth ? strokeWidth : '0'}
        />
      </svg>
    );
  }
  