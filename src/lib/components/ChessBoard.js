import { useEffect, useState } from "react";
import styled from "styled-components";
import Piece from "./Piece";
import { GAME_START, MOVES, PIECES } from "./pieces";

const Board = styled.div`
  border: 2px solid #000;
  width: max-content;
`;

const Square = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => {
    if (props.isAttack) return "#FF8C7C";
    if (props.isOption) return "#5efca1";
    if (props.black) return "#000";
  }};
  border: 2px solid ${(props) => (props.black ? "#000" : "#fff")};
`;

const Row = styled.div`
  display: flex;
`;

export function identifyPiece(piece) {
  if (!piece) return null;
  const [type, color] = piece.split("-");
  return { type: PIECES[type], black: color === "B" };
}

export function findPositionFromMove(file, row, move) {
  const nextFile = String.fromCharCode(file.charCodeAt(0) + move[0]);
  const nextRow = row + move[1];
  return [nextFile, nextRow];
}

export function getOptionsFromMoves(file, row, moves, board) {
  const piece = identifyPiece(board[file + row]);
  const options = [];
  moves.forEach((move) => {
    const newPosition = findPositionFromMove(file, row, move).join("");
    const targetPiece = identifyPiece(board[newPosition]);
    if (targetPiece) {
      if (targetPiece.black === piece.black) return;
    }
    options.push(newPosition);
  });
  return options;
}

export function getOptionsFromDirections(file, row, directions, board) {
  const piece = identifyPiece(board[file + row]);
  const options = [];
  function findPositions(direction) {
    let [f, r] = findPositionFromMove(file, row, direction);
    let pos = f + r;
    while (validPosition(pos)) {
      const targetPiece = identifyPiece(board[pos]);
      if (targetPiece) {
        if (targetPiece.black !== piece.black) {
          options.push(pos);
        }
        break;
      }
      options.push(pos);
      [f, r] = findPositionFromMove(f, r, direction);
      pos = f + r;
    }
  }
  for (const direction of directions) findPositions(direction);
  return options;
}

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ROWS = [1, 2, 3, 4, 5, 6, 7, 8];

export function validPosition(pos) {
  let [file, row] = pos;
  row = parseInt(row, 10);
  return ROWS.includes(row) && FILES.includes(file);
}

function isAttack(piece, isWhitesTurn) {
  if (piece) {
    if (piece.black && isWhitesTurn) return true;
    if (!piece.black && !isWhitesTurn) return true;
  }
}

function isTurn(piece, isWhitesTurn) {
  if (piece) {
    if (piece.black && !isWhitesTurn) return true;
    if (!piece.black && isWhitesTurn) return true;
  }
}

export default function ChessBoard() {
  const [isWhitesTurn, setWhitesTurn] = useState(true);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState();
  const [board, setBoard] = useState(GAME_START);
  useEffect(() => {
    if (!selected) return setOptions([]);
    const piece = identifyPiece(board[selected]);
    let [file, row] = selected;
    row = parseInt(row, 10);
    let options = MOVES[piece.type](file, row, board);
    setOptions(options);
  }, [selected, board]);
  function moveHere(key) {
    if (!selected) return;
    if (!options.includes(key)) return;
    const updatedBoard = {
      ...board,
      [selected]: null,
      [key]: board[selected],
    };
    setBoard(updatedBoard);
    setSelected();
    setWhitesTurn(!isWhitesTurn);
  }
  return (
    <Board>
      {ROWS.map((r) => {
        return (
          <Row key={r}>
            {FILES.map((f, i) => {
              const black = i % 2 === (r % 2 === 0 ? 1 : 0);
              const key = f + r;
              const piece = identifyPiece(board[key]);
              return (
                <Square
                  key={f}
                  black={black}
                  isOption={options.includes(key)}
                  isAttack={
                    options.includes(key) && isAttack(piece, isWhitesTurn)
                  }
                  onClick={() => moveHere(key)}
                >
                  {piece && (
                    <Piece
                      {...piece}
                      {...(isTurn(piece, isWhitesTurn)
                        ? {
                            selected: key === selected,
                            select: () =>
                              setSelected(selected === key ? null : key),
                          }
                        : {})}
                    />
                  )}
                </Square>
              );
            })}
          </Row>
        );
      })}
    </Board>
  );
}
