import { WINNER_COMBOS } from "../constant";

export const checkWinner = boardToCheck => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] && 
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }

  return null;
}

export const saveLocalStorage = (newBoard, newTurn) => {
  localStorage.setItem("board", JSON.stringify(newBoard));
  localStorage.setItem("turn", JSON.stringify(newTurn));
}

export const removeLocalStorage = () => {
  localStorage.clear();
}