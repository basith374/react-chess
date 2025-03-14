import { getOptionsFromDirections } from "../ChessBoard";

export function rookMoves(file, row, board) {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  return getOptionsFromDirections(file, row, directions, board);
}

export default function Rook({ black }) {
  return (
    <svg viewBox="0 0 26.458 26.458">
      <g transform="translate(0 -270.54)" stroke="#000" strokeWidth="1.3229">
        {black ? (
          <g transform="matrix(.24697 0 0 .24697 58.759 -59.365)">
            <g fill="none" stroke="#fff">
              <g strokeLinejoin="round">
                <path
                  d="m-227.13 1436.2h85.549v-9.705h-85.549v9.096z"
                  strokeWidth="10"
                />
                <path
                  d="m-217.25 1415.5 5.106-8.088h54.831l5.106 8.088z"
                  strokeWidth="5"
                />
                <path
                  d="m-217.27 1428.5v-12.94h65.519v12.94z"
                  strokeWidth="10"
                />
              </g>
              <g strokeWidth="10">
                <path d="m-211.43 1407.4v-42.055h53.403v42.055z" />
                <path
                  d="m-210.54 1367.3-10.212-8.087 72.72-0.179-10.212 8.087z"
                  strokeLinejoin="round"
                />
                <path
                  d="m-220.75 1357.3v-14.746h13.902v6.47h14.02v-6.47h18.163v6.47h12.091v-6.47h14.401v14.746z"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <g stroke="#000" strokeWidth="1.5">
              <g strokeLinejoin="round">
                <path d="m-225.79 1436.1h82.815v-9.203h-82.815z" />
                <path d="m-215.06 1414.7 4.601-7.669h52.143l4.601 7.669z" />
                <path d="m-216.59 1426.9v-12.271h64.412v12.271z" />
              </g>
              <g>
                <path d="m-210.46 1407v-39.878h52.143v39.878z" />
                <path
                  d="m-210.46 1367.1-9.202-7.669h70.546l-9.202 7.669z"
                  strokeLinejoin="round"
                />
                <path
                  d="m-219.66 1359.4v-15.338h12.269v6.136h15.336v-6.136h15.336v6.136h15.336v-6.136h12.269v15.338z"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <g fill="none" stroke="#fff" strokeLinecap="round">
              <path d="m-216.59 1424h64.412" strokeWidth="4" />
              <path d="m-213.52 1412.1h58.277" strokeWidth="4" />
              <path d="m-210.46 1407h52.143" />
              <path d="m-210.46 1367.1h52.143" />
              <path d="m-219.66 1359.4h70.546" strokeWidth="4" />
            </g>
          </g>
        ) : (
          <>
            <g fill="#fff">
              <g strokeLinejoin="round">
                <path d="m2.2734 295.95h21.912v-2.4349h-21.912z" />
                <path d="m4.708 293.51v-3.2465h17.042v3.2465z" />
                <path d="m3.8965 275.65v-4.0581h3.2462v1.6232h4.0577v-1.6232h4.0577v1.6232h4.0577v-1.6232h3.2462v4.0581" />
                <path
                  d="m22.562 275.65-2.4346 2.4349h-13.796l-2.4346-2.4349"
                  strokeLinejoin="round"
                />
              </g>
              <path d="m20.127 278.09v10.145h-13.796v-10.145" />
              <path
                d="m20.127 288.24 1.2173 2.0291h-16.231l1.2173-2.0291"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path d="m3.8965 275.65h18.665" fill="none" strokeLinecap="round" />
          </>
        )}
      </g>
    </svg>
  );
}
