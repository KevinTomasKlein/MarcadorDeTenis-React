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
      let scores: string[] = this.increasePoints(
        this.player1Points,
        this.player2Points
      );
      this.player1Points = scores[0];
      this.player2Points = scores[1];
    } else {
      let scores: string[] = this.increasePoints(
        this.player2Points,
        this.player1Points
      );
      this.player2Points = scores[0];
      this.player1Points = scores[1];
    }
  }

  private increasePoints(
    pointToIncreased: string,
    rivalPoint: string
  ): string[] {
    if (pointToIncreased === "Advantage" && rivalPoint === "Forty") {
      return ["win", rivalPoint];
    } else if (pointToIncreased === "Forty" && rivalPoint === "Advantage") {
      return ["Forty", "Forty"];
    } else if (pointToIncreased === "Forty" && rivalPoint === "Forty") {
      return ["Advantage", rivalPoint];
    } else if (pointToIncreased === "Forty") {
      return ["win", rivalPoint];
    } else {
      return [
        this.points[this.points.indexOf(pointToIncreased) + 1],
        rivalPoint,
      ];
    }
  }

  public getScore(): string {
    let score: string = "";
    if (this.player1Points === this.player2Points) {
      if (this.player1Points === "Forty") {
        return "Duece";
      } else {
        return this.player1Points + " all";
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
    } else if (this.player1Points === "win") {
      return this.player1Name + " win";
    } else if (this.player2Points === "win") {
      return this.player2Name + " win";
    } else {
      score = this.player1Points + " - " + this.player2Points;
    }

    return score;
  }
}
