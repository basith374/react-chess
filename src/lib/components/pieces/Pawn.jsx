import { findPositionFromMove, identifyPiece } from "../ChessBoard";

export function pawnMoves(file, row, board) {
  const options = [];
  const piece = identifyPiece(board[file + row]);
  const nextRow = row + (piece.black ? 1 : -1);
  // forwards
  const moves = [file + nextRow];
  // two squares
  if (!piece.black && row === 7 && !board[file + 6]) moves.push(file + 5);
  if (piece.black && row === 2 && !board[file + 3]) moves.push(file + 4);
  moves.forEach((move) => {
    let targetPiece = identifyPiece(board[move]);
    if (targetPiece) return;
    options.push(move);
  });
  // attacks
  const attackMoves = piece.black
    ? [
        [-1, 1],
        [1, 1],
      ]
    : [
        [-1, -1],
        [1, -1],
      ];
  attackMoves.forEach((move) => {
    const newPosition = findPositionFromMove(file, row, move).join("");
    let targetPiece = identifyPiece(board[newPosition]);
    if (targetPiece) {
      if (targetPiece.black !== piece.black) options.push(newPosition);
    }
  });
  return options;
}

export default function Pawn({ black }) {
  return (
    <svg viewBox="0 0 26.458 26.458">
      <g transform="translate(0 -270.54)">
        <path
          d="m13.229 271.62c-1.7589 0-3.1867 1.4278-3.1867 3.187 0 0.70518 0.23402 1.3644 0.62233 1.8924-1.5551 0.89402-2.614 2.5602-2.614 4.4818 0 1.6205 0.75038 3.0589 1.9169 4.0088-2.3893 0.84285-5.9005 4.4194-5.9005 10.731h18.323c0-6.3119-3.5111-9.8885-5.9005-10.731 1.1665-0.94986 1.9169-2.3883 1.9169-4.0088 0-1.9213-1.059-3.5878-2.614-4.4818 0.38831-0.52805 0.62233-1.187 0.62233-1.8924 5.19e-4 -1.7592-1.4273-3.187-3.1862-3.187z"
          fill={black ? "#000" : "#fff"}
          stroke={black ? "#fff" : "#000"}
          strokeLinecap="round"
          strokeWidth="1.2987"
        />
      </g>
    </svg>
  );
}
