export class TennisGame {
  player1Name: string = "";
  player2Name: string = "";
  player1Points: string = "";
  player2Points: string = "";
  points: string[] = [
    "Love",
    "Fifteen",
    "Thirty",
    "Forty",
    "Duece",
    "Advantage",
  ];
  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.player1Points = this.points[0];
    this.player2Points = this.points[0];
  }

  public wonPoint(playerName: string): void {
    if (this.player1Name === playerName) {
      this.increasePoints(this.player1Points);
    } else {
      this.increasePoints(this.player2Points);
    }
  }

  private increasePoints(newPoint: string) {
    if (
      this.player1Points === this.player2Points &&
      this.player1Points !== "Advantage"
    ) {
      for (let i: number = 0; i < this.points.length - 1; i++) {
        if (this.points[i] === newPoint) {
          return this.points[i + 1];
        }
      }
    } else {
      for (let i: number = 0; i < this.points.length - 1; i++) {
        if (this.points[i] === newPoint) {
          return this.points[i - 1];
        }
      }
    }
    return " win";
  }

  public getScore(): string {
    let score: string = "";
    if (this.player1Points === this.player2Points) {
      if (this.player1Points === "Duece") {
        score = " Duece";
      } else {
        score = this.player1Points + " all";
      }
    } else {
      score = this.player1Points + " - " + this.player2Points;
    }

    return "<p></p>";
  }
}
