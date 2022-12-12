import styled from "styled-components";
import MovieImg from "../assets/image 6.png";
import ScreenContainer from "../styles/ScreenContainer";

export default function SessionPage() {
    return (
        <>
            <ScreenContainer>
                <h1>Selecione o Horário</h1>
                <Schedules>
                    <h2>Quinta-feira - 24/06/2021</h2>
                    <Buttons>
                        <li>15:00</li>
                        <li>19:00</li>
                    </Buttons>
                    <h2>Sexta-feira - 25/06/2021</h2>
                    <Buttons>
                        <li>15:00</li>
                        <li>19:00</li>
                    </Buttons>
                </Schedules>
            </ScreenContainer>
            <Footer>
                <div>
                    <img src={MovieImg} />
                </div>
                <h1>Enola Homes</h1>
            </Footer>
        </>
    );
}

const Schedules = styled.div`
    width: 100%;
    padding-left: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    h2 {
        font-size: 20px;
        line-height: 23px;
    }
`

const Buttons = styled.ul`
display: flex;
    li {
        background-color: #E8833A;
        width: 83px;
        height: 43px;
        margin: 22px 8px 22px 0;
        font-size: 18px;
        line-height: 21px;
        align-items: center;
        border-radius: 3px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Footer = styled.div`
    background-color: #DFE6ED;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 117px;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    div {
        background-color: #FFFFFF;
        width: 64px;
        height: 89px;
        margin: 0 10px;
        padding: 8px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
    }
`