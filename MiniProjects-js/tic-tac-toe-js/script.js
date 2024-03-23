let currentValue = 'X';
let board = Array(9).fill(null);

for (let i = 0; i < 9; i++) {
    document.getElementById(i).addEventListener('click', handleClick(i));
}

function handleClick(i) {
    return function() {
        if (board[i] === null) {
            board[i] = currentValue;
            if (currentValue === 'X') {
                currentValue = 'O';
            } else {    
                currentValue = 'X';
            }
        }
        renderBoard();
        checkWinner();
    }
}


function renderBoard() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).textContent = board[i];
    }
}

function checkWinner() {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];


    for (let each of winConditions) {
        if (board[each[0]] !== null && board[each[0]] === board[each[1]] && board[each[1]] === board[each[2]]) {
            alert('Winner!');
            setTimeout(() => {
                board = Array(9).fill(null);
                renderBoard();
                return;
            }, 1000);
        }

        if (!board.includes(null)) {
            board = Array(9).fill(null);
            renderBoard();
            alert('Tie!');
            return;
        }

    }
}