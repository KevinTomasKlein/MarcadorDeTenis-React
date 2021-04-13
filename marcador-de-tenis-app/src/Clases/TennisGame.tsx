export class TennisGame {
  player1Name: string = "";
  player2Name: string = "";
  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  public wonPoint(playerName: string): void {}

  public getScore(): string {
    return "";
  }
}
