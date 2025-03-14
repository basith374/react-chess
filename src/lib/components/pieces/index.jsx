import { bishopMoves } from "./Bishop";
import { kingMoves } from "./King";
import { knightMoves } from "./Knight";
import { pawnMoves } from "./Pawn";
import { queenMoves } from "./Queen";
import { rookMoves } from "./Rook";

export const MOVES = {
  ROOK: rookMoves,
  BISHOP: bishopMoves,
  QUEEN: queenMoves,
  KING: kingMoves,
  KNIGHT: knightMoves,
  PAWN: pawnMoves,
};

export const PIECES = {
  R: "ROOK",
  KN: "KNIGHT",
  B: "BISHOP",
  K: "KING",
  Q: "QUEEN",
  P: "PAWN",
};

export const GAME_START = {
  a1: "R-B",
  b1: "KN-B",
  c1: "B-B",
  d1: "K-B",
  e1: "Q-B",
  f1: "B-B",
  g1: "KN-B",
  h1: "R-B",

  a2: "P-B",
  b2: "P-B",
  c2: "P-B",
  d2: "P-B",
  e2: "P-B",
  f2: "P-B",
  g2: "P-B",
  h2: "P-B",

  a8: "R-W",
  b8: "KN-W",
  c8: "B-W",
  d8: "K-W",
  e8: "Q-W",
  f8: "B-W",
  g8: "KN-W",
  h8: "R-W",

  a7: "P-W",
  b7: "P-W",
  c7: "P-W",
  d7: "P-W",
  e7: "P-W",
  f7: "P-W",
  g7: "P-W",
  h7: "P-W",
};
