import styled from "styled-components";
import MovieImg from "../assets/image 6.png";
import MovieImg2 from "../assets/image 3.png";
import ScreenContainer from "../styles/ScreenContainer";

export default function ExplorePage() {
    return (
        <ScreenContainer color={"#293845"}>
            <h1>Selecione o Filme</h1>
            <MoviesContainer img={MovieImg}>
                <div>
                    <img src={MovieImg} />
                </div>
                <div>
                    <img src={MovieImg2} />
                </div>
                <div>
                    <img src={MovieImg} />
                </div>
                <div>
                    <img src={MovieImg2} />
                </div>
                <div>
                    <img src={MovieImg} />
                </div>
                <div>
                    <img src={MovieImg2} />
                </div>
                <div>
                    <img src={MovieImg} />
                </div>
                <div>
                    <img src={MovieImg2} />
                </div>
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
    div {
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
    }
`