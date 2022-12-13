import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import ScreenContainer from "../styles/ScreenContainer";
import LoadinGif from "../assets/loading-gif.gif";
import { Link } from "react-router-dom";

export default function ExplorePage() {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
        const promise = axios.get(URL);
        promise.then((resp) => setMovies(resp.data));
        promise.catch((err) => console.log(err.response));
    }, [])

    if (movies === null) {
        return (
            <Loading>
                <img src={LoadinGif}></img>
            </Loading>
        );
    }

    return (
        <ScreenContainer color={"#293845"}>
            <h1>Selecione o Filme</h1>
            <MoviesContainer>
                {movies.map((movie) => (
                    <Link key={movie.id} to={`/sessions/${movie.id}`}>
                        <Movie data-test="movie">
                            <img src={movie.posterURL} alt={movie.title} />
                        </Movie>
                    </Link>
                ))}
            </MoviesContainer>
        </ScreenContainer>
    );
}

const MoviesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    box-sizing: border-box;
`
const Movie = styled.div`
    background: #FFFFFF;
    width: 145px;
    height: 209px;
    margin: 6px 0;
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    img {
        width: 100%;
        height: 100%;
    }
`
const Loading = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`