import styled from "styled-components";
import MovieImg from "../assets/image 6.png";
import ScreenContainer from "../styles/ScreenContainer";

const seats = [
    { id: 1, status: "available" },
    { id: 2, status: "unavailable" },
    { id: 3, status: "unavailable" },
    { id: 4, status: "unavailable" },
    { id: 5, status: "available" },
    { id: 6, status: "available" },
    { id: 7, status: "available" },
    { id: 8, status: "available" },
    { id: 9, status: "available" },
    { id: 10, status: "available" },
    { id: 11, status: "unavailable" },
    { id: 12, status: "available" },
    { id: 13, status: "available" },
    { id: 14, status: "available" },
    { id: 15, status: "available" },
    { id: 16, status: "available" },
    { id: 17, status: "available" },
    { id: 18, status: "available" },
    { id: 19, status: "available" },
    { id: 20, status: "available" }
];

const selected = "#1AAE9E";
const available = "#C3CFD9";
const unavailable = "#FBE192";

export default function SeatsPage() {
    return (
        <>
            <ScreenContainer>
                <h1>Selecione o(s) assento(s)</h1>
                <Seats>
                    {seats.map((seat) => (
                        <div>{seat.id}</div>
                    ))}
                </Seats>
                <ColorsLegendContainer>
                    <div>
                        <ColorLegend color={selected}></ColorLegend>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <ColorLegend color={available}></ColorLegend>
                        <p>Disponível</p>
                    </div>
                    <div>
                        <ColorLegend color={unavailable}></ColorLegend>
                        <p>Indisponível</p>
                    </div>
                </ColorsLegendContainer>
                <ClientInfo>
                    Nome do Comprador:
                    <input placeholder="Digite seu nome..."></input>
                    CPF do Comprador:
                    <input placeholder="Digite seu CPF..."></input>
                </ClientInfo>
                <ReserveButton>
                    <p>Reservar assento(s)</p>
                </ReserveButton>
            </ScreenContainer>
            <Footer>
                <div>
                    <img src={MovieImg} />
                </div>
                <span>
                    <p>Enola Homes</p>
                    <p>Quinta-feira - 15:00</p>
                </span>
            </Footer>
        </>
    );
}

const Seats = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 24px 0 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    div {
        background-color: #C3CFD9;
        width: 26px;
        height: 26px;
        margin: 0 3px 18px 3px;
        border: 1px solid #808F9D;
        border-radius: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: #000000;
    }
`
const ColorsLegendContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    p {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #4E5A65;
    }
`
const ColorLegend = styled.div`
    background-color: ${props => props.color};
    width: 26px;
    height: 26px;
    border: 1px solid ${props => props.color};
    border-radius: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #000000;
`
const ClientInfo = styled.div`
    width: 100%;
    padding: 40px 24px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
    input {
        background-color: #FFFFFF;
        width: 327px;
        height: 51px;
        padding: 18px;
        margin-bottom: 7px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        ::placeholder {
            font-style: italic;
            color: #AFAFAF;
        }
    }
`
const ReserveButton = styled.div`
    display: flex;
    justify-content: center;
    p {
        background-color: #E8833A;;
        width: 225px;
        height: 42px;
        border-radius: 3px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
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
    span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
    }
`