import { formattedAnsKey } from '../types';

const correctCells: HTMLElement[] = [];
const incorrectCells: HTMLElement[] = [];
export const checkAnswers = () => {
  const cells = document.querySelectorAll('.w');
  
  cells.forEach((cell) => {
    const row = cell.getAttribute('data-row')!;
    const col = cell.getAttribute('data-col')!;
    const answer = formattedAnsKey[parseInt(row)][parseInt(col)];
    const userAnswer = (cell.querySelector('b') as HTMLElement).textContent || '';

    if (userAnswer === answer) {
      (cell as HTMLElement).style.backgroundColor = 'lightgreen'; // Correct answer
      correctCells.push(cell as HTMLElement);
    } else if (userAnswer && answer !== 'b') { // Only mark red if it's not a black square
      (cell as HTMLElement).style.backgroundColor = 'red'; // Incorrect answer
      incorrectCells.push(cell as HTMLElement);
    }
  });
};


export const clearColors = () => {
  incorrectCells.forEach(cell => {
    (cell.querySelector('b') as HTMLElement).textContent = ''; // Clear user input for incorrect cells
    cell.style.backgroundColor = 'transparent'; // Clear background color
  });

  correctCells.forEach(cell => {
    cell.style.backgroundColor = 'transparent'; // Clear background color
  });

  console.log("Incorrect Cells Cleared:", incorrectCells);
  console.log("Correct Cells Cleared:", correctCells);
};


