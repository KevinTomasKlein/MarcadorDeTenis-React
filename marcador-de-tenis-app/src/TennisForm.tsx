import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { TennisGame } from "./Clases/TennisGame";
export function TennisForm(): any {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [gameStarted, setGameStarted] = useState(true);
  const [isWin, setIsWin] = useState(false);
  const tennisGame = new TennisGame(player1Name, player2Name);
  function handleSubmit(event: any) {
    event.preventDefault();
    setPlayer1Name(event.target.elements.player1Name.value);
    setPlayer2Name(event.target.elements.player2Name.value);
    setGameStarted(false);
  }
  function newGameSet(event: any) {
    setGameStarted(true);
  }

  function player1WonPoint(event: any) {
    event.preventDefault();
    tennisGame.wonPoint(player1Name);
    getScore();
  }

  function player2WonPoint(event: any) {
    event.preventDefault();
    tennisGame.wonPoint(player2Name);
    getScore();
  }

  function getScore() {
    disableButtons();
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById("score").innerHTML +=
      tennisGame.getScore() + "<br>";
  }

  function disableButtons() {
    if (tennisGame.getScore().toString().includes("win")) {
      setIsWin(true);
    }
  }

  if (gameStarted) {
    return (
      <div
        className="container w-75"
        style={{ backgroundColor: "lightblue", height: "500px" }}
      >
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="text-center">TENNIS GAME</h1>
          <div className="col-md-12 justify-content-around d-flex ">
            <div className="col-md-3  mb-5 pb-1">
              <label htmlFor="player1Name">JUGADOR 1</label>
              <input type="text" id="player1Name" required={true}></input>
            </div>
            <div className="col-lg-3  mb-5">
              <label htmlFor="player2Name">JUGADOR 2</label>
              <input type="text" id="player2Name" required={true}></input>
            </div>
          </div>
          <div className="d-flex justify-content-center pb-5">
            <input className="button" type="submit" value="Play!"></input>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div
        className="container w-75"
        style={{ backgroundColor: "lightblue", height: "500px" }}
      >
        <form className="form" onSubmit={newGameSet}>
          <h1 className="text-center">TENNIS GAME</h1>
          <div className="col-md-12 justify-content-around d-flex ">
            <div className="col-md-3  mb-5 pb-1">
              <label htmlFor="player1Name">{player1Name}</label>

              <input
                type="button"
                id="player1Name"
                value="wonPoint"
                onClick={player1WonPoint}
                disabled={isWin}
              ></input>
            </div>

            <div className="col-md-3" id="score"></div>
            <div className="col-lg-3  mb-5">
              <label htmlFor="player2Name">{player2Name}</label>
              <input
                type="button"
                id="player2Name"
                value="wonPoint"
                onClick={player2WonPoint}
                disabled={isWin}
              ></input>
            </div>
          </div>
          <div className="d-flex justify-content-center pb-5">
            <input className="button" type="submit" value="Play!"></input>
          </div>
        </form>
      </div>
    );
  }
}
