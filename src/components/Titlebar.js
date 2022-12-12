import styled from "styled-components";

export default function Titlebar() {
    return (
        <Title>
            <h1>
                CINEFLEX
            </h1>
        </Title>
    );
}

const Title = styled.div`
    background-color: #C3CFD9;
    width: 100vw;
    height: 67px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        text-align: center;
        color: #E8833A;
    }
`