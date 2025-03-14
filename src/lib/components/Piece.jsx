import styled from "styled-components";
import Bishop from "./pieces/Bishop";
import King from "./pieces/King";
import Knight from "./pieces/Knight";
import Pawn from "./pieces/Pawn";
import Queen from "./pieces/Queen";
import Rook from "./pieces/Rook";

const Container = styled.div`
  background: ${(props) => (props.selected ? "#FDE3A7" : null)};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 8px;
`;

export default function Piece({ type, black, select, selected }) {
  return (
    <Container selected={selected} onClick={select}>
      {type === "KING" && <King black={black} />}
      {type === "KNIGHT" && <Knight black={black} />}
      {type === "QUEEN" && <Queen black={black} />}
      {type === "BISHOP" && <Bishop black={black} />}
      {type === "ROOK" && <Rook black={black} />}
      {type === "PAWN" && <Pawn black={black} />}
    </Container>
  );
}
