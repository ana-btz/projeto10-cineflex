import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Seat from "../components/Seat";
import LoadinGif from "../assets/loading-gif.gif";
import ScreenContainer from "../styles/ScreenContainer";

const selected = "#1AAE9E";
const available = "#C3CFD9";
const unavailable = "#FBE192";

export default function SeatsPage() {
    const { sessionId } = useParams();
    const [session, setSession] = useState(undefined);
    const [selectedSeats, setSelectedSeats] = useState([]);
    console.log(selectedSeats)
    const navigate = useNavigate();

    const [ids, setIds] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setcpf] = useState("");


    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`;
        const promise = axios.get(URL);
        promise.then((resp) => setSession(resp.data));
        promise.catch((err) => console.log(err));
    }, []);

    if (session === undefined) {
        return (
            <Loading>
                <img src={LoadinGif}></img>
            </Loading>
        );
    }

    function handleSeat(seat) {
        // console.log(seat)
        // //Se o assento estiver indisponível não faz nada
        if (seat.isAvailable === false) {
            return alert("Esse assento não está disponível");
        }
        // //Toggle - "Liga e desliga" a seleção
        seat.selected = !seat.selected;

        // //Se o estado atual é não selecionado precisamos remover o assento
        if (!seat.selected) {
            const filteredSeats = selectedSeats.filter((s) => !(s.id === seat.id));
            const filteredIds = ids.filter((id) => !(id === seat.id));
            setSelectedSeats([...filteredSeats]);
            setIds([...filteredIds]);
            return;
        }
        // //Adicionamos o assento a lista de assentos selecionados
        setSelectedSeats([...selectedSeats, seat]);
        setIds([...ids, seat.id]);
        return;
    }

    function reserveSeats(e) {
        e.preventDefault();
        const seats = { ids, name, cpf };
        const request = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", seats);
        request.then((resp) => {
            console.log(resp.data);
            navigate(`/success/${seats.name}/${seats.cpf}/${session.movie.title}`);
        });
        request.catch((err) => console.log(err));

        console.log(seats);

        setIds("");
        setName("");
        setcpf("");
    }

    return (
        <>
            <ScreenContainer>
                <h1>Selecione o(s) assento(s)</h1>
                <SeatsContainer>
                    {session.seats.map((seat) =>
                        <Seat key={seat.id} seat={seat} handleSeat={handleSeat} />
                    )}
                </SeatsContainer>
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
                <form onSubmit={reserveSeats}>
                    <ClientInfo>
                        Nome do Comprador:
                        <input data-test="client-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome..."></input>
                        CPF do Comprador:
                        <input data-test="client-cpf" type="number" value={cpf} onChange={(e) => setcpf(e.target.value)} placeholder="Digite seu CPF..."></input>
                    </ClientInfo>

                    <ReserveButton>
                        <button data-test="book-seat-btn">Reservar assento(s)</button>
                    </ReserveButton>
                </form>
            </ScreenContainer>
            <Footer data-test="footer">
                <div>
                    <img src={session.movie.posterURL} />
                </div>
                <span>
                    <p>{session.movie.title}</p>
                    <p>{session.day.weekday} - {session.name}</p>
                </span>
            </Footer>
        </>
    );
}

const SeatsContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 24px 0 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
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
    button {
        background-color: #E8833A;
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
        border: none;
        &:hover {
            background-color: #E9953B;
        } 
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
const Loading = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`