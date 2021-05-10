import { useEffect, useState } from "react";
import styled from "styled-components";
import Piece from "./Piece";

const Board = styled.div`
    border: 2px solid #000;
    width: max-content;
`

const Square = styled.div`
    width: 100px;
    height: 100px;
    background: ${props => {
        if(props.isOption) return '#5efca1';
        if(props.black) return '#000';
    }};
    border: 2px solid ${props => props.black ? '#000' : '#fff'};
`

const Row = styled.div`
    display: flex;
`

function identifyPiece(piece) {
    if(!piece) return null;
    const [type, color] = piece.split('-');
    const types = {
        'R': 'ROOK',
        'KN': 'KNIGHT',
        'B': 'BISHOP',
        'K': 'KING',
        'Q': 'QUEEN',
        'P': 'PAWN'
    }
    return { type: types[type], black: color === 'B' }
}

export default function ChessBoard() {
    const [isWhitesTurn, setWhitesTurn] = useState(true)
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState()
    const [board, setBoard] = useState({
        'a1': 'R-B',
        'b1': 'KN-B',
        'c1': 'B-B',
        'd1': 'K-B',
        'e1': 'Q-B',
        'f1': 'B-B',
        'g1': 'KN-B',
        'h1': 'R-B',

        'a2': 'P-B',
        'b2': 'P-B',
        'c2': 'P-B',
        'd2': 'P-B',
        'e2': 'P-B',
        'f2': 'P-B',
        'g2': 'P-B',
        'h2': 'P-B',

        'a8': 'R-W',
        'b8': 'KN-W',
        'c8': 'B-W',
        'd8': 'K-W',
        'e8': 'Q-W',
        'f8': 'B-W',
        'g8': 'KN-W',
        'h8': 'R-W',
        
        'a7': 'P-W',
        'b7': 'P-W',
        'c7': 'P-W',
        'd7': 'P-W',
        'e7': 'P-W',
        'f7': 'P-W',
        'g7': 'P-W',
        'h7': 'P-W',
    })
    useEffect(() => {
        if(!selected) return setOptions([])
        const piece = identifyPiece(board[selected]);
        let options = []
        if(piece.type === 'PAWN') {
            let [file, row] = selected
            row = parseInt(row, 10)
            const nextRow = row + (piece.black ? 1 : -1)
            if(!piece.black && row === 7) options.push(file + 5);
            if(piece.black && row === 2) options.push(file + 4);
            options.push(file + nextRow)
        }
        setOptions(options)
    }, [selected, board]);
    function moveHere(key) {
        if(!selected) return;
        const updatedBoard = {
            ...board,
            [selected]: null,
            [key]: board[selected],
        }
        setBoard(updatedBoard)
        setSelected()
        setWhitesTurn(!isWhitesTurn)
    }
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const rows = [1, 2, 3, 4, 5, 6, 7, 8];
    return <Board>
        {rows.map(r => {
            return <Row key={r}>
                {files.map((f, i) => {
                    const black = i % 2 === (r % 2 === 0 ? 1 : 0);
                    const key = f + r;
                    const piece = identifyPiece(board[key]);
                    return <Square key={f} black={black} isOption={options.includes(key)} onClick={() => moveHere(key)}>
                        {piece && <Piece {...piece}
                            {...((piece.black && !isWhitesTurn) || (!piece.black && isWhitesTurn) ? {
                                selected: key === selected,
                                select: () => setSelected(selected === key ? null : key),
                            } : {})}
                        />}
                    </Square>
                })}
            </Row>
        })}
    </Board>
}