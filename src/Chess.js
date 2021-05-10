import styled from 'styled-components';
import ChessBoard from './lib/components/ChessBoard';

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Chess() {
    return <Container>
        <ChessBoard />
    </Container>
}