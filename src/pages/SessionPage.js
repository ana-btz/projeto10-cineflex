import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import MovieImg from "../assets/image 6.png";
import ScreenContainer from "../styles/ScreenContainer";
import LoadinGif from "../assets/loading-gif.gif";

export default function SessionPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(undefined);

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`;
        const promise = axios.get(URL);
        promise.then((resp) => setMovie(resp.data));
        promise.catch((err) => console.log(err.response))
    }, []);

    if (movie === undefined) {
        return (
            <Loading>
                <img src={LoadinGif}></img>
            </Loading>
        );
    }

    return (
        <>
            <ScreenContainer>
                <h1>Selecione o Horário</h1>
                {movie.days.map(({ id, weekday, date, showtimes }) => (
                    <Schedules key={id}>
                        <h2 >{weekday} - {date}</h2>
                        <Buttons>
                            {showtimes.map(({ name, id }) => (
                                <Link key={id} to={`/seats/${id}`}>
                                    <li>{name}</li>
                                </Link>
                            ))}
                        </Buttons>
                    </Schedules>
                ))}
            </ScreenContainer>
            <Footer>
                <div>
                    <img src={movie.posterURL} />
                </div>
                <h1>{movie.title}</h1>
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
    a {
       text-decoration: none;
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
const Loading = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`