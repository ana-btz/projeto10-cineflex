import styled from "styled-components";

const selected = "#1AAE9E";
const available = "#C3CFD9";
const unavailable = "#FBE192";

export default function Seat({ seat, isSelected, handleSeat }) {
    return (
        <>
            {!seat.selected ? (
                <SeatStyle
                    key={seat.id}
                    color={seat.isAvailable ? available : unavailable}
                    onClick={() => handleSeat(seat)}
                >
                    {seat.name}
                </SeatStyle>
            ) : (
                <SeatStyle
                    key={seat.id}
                    color={selected}
                    onClick={() => handleSeat(seat)}
                >
                    {seat.name}
                </SeatStyle>
            )}
        </>

    );
}

const SeatStyle = styled.div`
    background-color: ${(props) => props.color};
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
`