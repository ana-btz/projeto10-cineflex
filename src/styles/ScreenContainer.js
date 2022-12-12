import styled from "styled-components";

const ScreenContainer = styled.div`
    background-color: #FFFFFF;
    width: 100vw;
    min-height: 100vh;
    padding-top: 67px;
    box-sizing: border-box; 
    h1 {
        height: 110px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: ${props => props.color};
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export default ScreenContainer;