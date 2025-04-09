import "./Seat.css"

const Seat = ({reserved, seatNumber}) => {
    return (
        <div class={`seat ${reserved ? "reserved" : ""}`}>
            {seatNumber}
        </div>
    )
}

export default Seat;