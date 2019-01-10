import { RESTART_GAME, restartGame } from "./actions";

describe("restartGame", () => {
  it("Should give an action", () => {
    const correctAnswer = 12;
    const action = restartGame(correctAnswer);
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toEqual(correctAnswer);
  });
});
