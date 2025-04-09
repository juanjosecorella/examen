import { useState, useEffect } from "react"
import Seat from "./Seat";

import { SuggestSeats } from "./Suggest";

import "./Seat.css"

const COLUMNS = 5;
const ROWS = 5;

function App() {
  const [reserveSeats, setReserveSeats] = useState(0);
  const [seats, setSeats] = useState(Array.from(Array(ROWS).keys().map((rowNumber => Array.from(Array(COLUMNS).keys().map(columnNumber => { return { id: (rowNumber * COLUMNS + columnNumber) + 1, reserved: false }}))))));

  const Reserve = () => {
    const toReserve = SuggestSeats(reserveSeats, seats);
    if (toReserve.size === 0) {
      alert("No se pudo crear la reserva");
    }

    setSeats(seats => seats.map(row => row.map(seat => toReserve.has(seat.id) ? { id: seat.id, reserved: true } : seat)));
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <a className="navbar-brand ms-3">Teatro</a>
      </nav>
        <div className="d-flex flex-column align-items-center">
          <h2>Asientos</h2>
          <div className="seats-area">
            {[].concat(...seats).map(seat => <Seat key={seat.id} reserved={seat.reserved} seatNumber={seat.id}></Seat>)}
          </div>
          <div className="d-flex justify-content-around bg-body-secondary rounded col-6 p-2 mb-5">
            <input type="number" defaultValue={seats} onChange={(e) => setReserveSeats(e.target.value)}></input>
            <button type="button" className="btn btn-primary" onClick={Reserve}>Reservar</button>
          </div>
        </div>
        <footer className="col-12 bg-primary text-white d-flex justify-content-between fixed-bottom">
          <p>©TEATRO-UNA</p>
          <p>100 Metros del hospital</p>
          <p>8888-8888</p>
          <p>teatrouna@example.com</p>
        </footer>
    </div>
  );
}

export default App;
