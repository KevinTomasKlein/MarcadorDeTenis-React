import "bootstrap/dist/css/bootstrap.css";

export function TennisForm(): any {
  return (
    <body>
      <div
        className="container w-75"
        style={{ backgroundColor: "lightblue", height: "500px" }}
      >
        <h1 className="text-center">TENNIS GAME</h1>
        <div className="col-md-12 justify-content-around d-flex ">
          <div className="col-md-3  mb-5 pb-1">
            <label htmlFor="player1Name">JUGADOR 1</label>
            <input type="text" id="player1Name"></input>
          </div>
          <div className="col-md-3">
            <p className="text-muted py-5">Soy el texto de la partida</p>
          </div>
          <div className="col-lg-3  mb-5">
            <label htmlFor="player2Name">JUGADOR 2</label>
            <input type="text" id="player2Name"></input>
          </div>
        </div>
        <div className="d-flex justify-content-center pb-5">
          <input className="button" type="submit" value="Play!"></input>
        </div>
      </div>
    </body>
  );
}
