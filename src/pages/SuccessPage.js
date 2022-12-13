import styled from "styled-components";
import ScreenContainer from "../styles/ScreenContainer";

export default function SuccessPage() {
    return (
        <>
            <ScreenContainer color={"#247A6B"}>
                <h1>Pedido feito com sucesso!</h1>
                <PurchaseInfo>
                    <h2>Filme e sessão</h2>
                    <p>Enola Holmes</p>
                    <p>24/06/2021 15:00</p>
                </PurchaseInfo>
                <PurchaseInfo>
                    <h2>Ingressos</h2>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </PurchaseInfo>
                <PurchaseInfo>
                    <h2>Comprador</h2>
                    <p>Nome: João da Silva Sauro</p>
                    <p>CPF: 123.456.789-10</p>
                </PurchaseInfo>
                <BackHomeButton>
                    <p>Voltar pra Home</p>
                </BackHomeButton>
            </ScreenContainer>
        </>
    );
}

const PurchaseInfo = styled.div`
    width: 100%;
    padding-left: 30px;
    padding-bottom: 50px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: #293845;
    h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
    }
    p {
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
    }
`

const BackHomeButton = styled.div`
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