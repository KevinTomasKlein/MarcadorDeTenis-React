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
      this.player1Points = this.increasePoints(this.player1Points);
    } else {
      this.player2Points = this.increasePoints(this.player2Points);
    }
  }

  private increasePoints(newPoint: string) {
    this.decreasePoints(newPoint);
    if (
      this.player1Points === this.player2Points ||
      this.player1Points !== "Advantage"
    ) {
      for (let i: number = 0; i < this.points.length - 1; i++) {
        if (this.points[i] === newPoint) {
          if (this.points[i] === "Forty" && this.player1Points === "Forty") {
            this.points[i] = this.player1Name;
            return this.points[i + 1];
          } else if (
            this.points[i] === "Forty" &&
            this.player2Points === "Forty"
          ) {
            this.points[i] = this.player2Name;
            return this.points[i + 1];
          }
          return this.points[i + 1];
        }
      }
    }
    return " win";
  }

  decreasePoints(newPoint: string) {
    if (newPoint === "Advantage") {
      return (newPoint = "Duece");
    }
  }

  public getScore(): string {
    let score: string = "";
    if (this.player1Points === this.player2Points) {
      if (this.player1Points === "Forty") {
        this.player1Points = this.increasePoints(this.player1Points);
        this.player2Points = this.increasePoints(this.player2Points);
      }
      if (this.player1Points === "Duece") {
        score = " Duece";
      } else {
        score = this.player1Points + " all";
      }
    } else if (
      this.player1Points === "Advantage" ||
      this.player2Points === "Advantage"
    ) {
      if (this.player1Points === "Advantage") {
        score = this.player1Name + " Advantage";
      } else if (this.player2Points === "Advantage") {
        score = this.player2Name + " Advantage";
      }
    } else if (
      this.player1Points === "Duece" ||
      this.player2Points === "Duece"
    ) {
      score = " Duece";
      for (let i: number = 0; i <= 2; i++) {
        if (this.points[i] === this.player1Points) {
          score = this.player2Name + " win";
        } else if (this.points[i] === this.player2Points) {
          score = this.player1Name + " win";
        }
      }
    } else {
      score = this.player1Points + " - " + this.player2Points;
    }

    return score;
  }
}
