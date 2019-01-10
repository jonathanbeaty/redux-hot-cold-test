import reducer from "./reducer";
import { restartGame } from "./actions";

describe("restartGame", () => {
  it("Should restart game", () => {
    let state = {
      guesses: [6, 8, 10, 14],
      feedback: "Awesome dude",
      correctAnswer: 14
    };
    const correctAnswer = 12;
    state = reducer(state, restartGame(correctAnswer));
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual("Make your guess!");
    expect(state.correctAnswer).toEqual(correctAnswer);
    expect(state.auralStatus).toEqual("");
  });
});
