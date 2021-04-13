import "bootstrap/dist/css/bootstrap.css";

export function TennisForm(): any {
  return (
    <div className="container row">
      <div className="col-md-12">
        <div className="col-md-6">
          <label htmlFor="player1Name"></label>
          <input type="text" id="player1Name"></input>
        </div>
        <div className="col-md-6">
          <label htmlFor="player2Name"></label>
          <input type="text" id="player2Name"></input>
        </div>
      </div>
    </div>
  );
}
