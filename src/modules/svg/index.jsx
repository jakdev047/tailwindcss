import { arc } from "d3";
import Bangladesh from "./flag/Bangladesh";
import Circle from "./shape/Circle";

// mouth arc
const mouthWidth = 15;
const mouthRadius = 25;
const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3/2);

export default function SVG() {
  return (
    <>
      <div className="table-card">
        <div className="table-card-heading">
          <h2 className="title">{"SVG"}</h2>
        </div>
        <div className="table-card-body">
          <div className="table-card-content vertical-scroll-table">
            <div className="container px-4">
              <h2>Flag</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Bangladesh />
                </div>
              </div>
              <h2>Circle</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <svg width={300} height={300}>
                    <g transform={`translate(${150},${150})`}>
                      <circle
                        // cx={150}
                        // cy={100}
                        r={80}
                        fill={"yellow"}
                        stroke={"black"}
                        strokeWidth={"10"}
                      />
                      <circle
                        cx={-25}
                        cy={-30}
                        r={13}
                        fill={"black"}
                        stroke={"black"}
                        strokeWidth={"0"}
                      />
                      <circle
                        cx={20}
                        cy={-30}
                        r={13}
                        fill={"black"}
                        stroke={"black"}
                        strokeWidth={"0"}
                      />
                      <path d={mouthArc()}  stroke-width="4" />
                    </g>
                  </svg>
                </div>
                <div>
                  <Circle
                    classes={"transparnet"}
                    width="100%"
                    height="200"
                    cx="100"
                    cy="100"
                    r="80"
                    fill="yellow"
                    stroke="black"
                    strokeWidth="10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="table-card-pagination"></div>
        </div>
      </div>
    </>
  );
}
