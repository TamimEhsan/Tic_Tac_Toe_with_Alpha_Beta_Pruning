// Tic Tac Toe AI with Minimax Algorithm
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/154-tic-tac-toe-minimax.html
// https://youtu.be/I64-UTORVfU
// https://editor.p5js.org/codingtrain/sketches/0zyUhZdJD


let counter = 0;

function bestMove() {
    // AI to make its turn
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // Is the spot available?
            if (board[i][j] == '') {
                board[i][j] = ai;
                let score = minimax(board, 0, -Infinity,Infinity,false);
                board[i][j] = '';
                if (score > bestScore) {
                    bestScore = score;
                    move = { i, j };
                }
            }
        }
    }
    board[move.i][move.j] = ai;
    currentPlayer = human;
    console.log("moves checked ",counter);
    counter = 0;
}


let scores = {
    X: 10,
    O: -10,
    tie: 0
};

function minimax(board, depth,alpha,beta, isMaximizing) {
    counter++;
    let result = checkWinner();
    if (result !== null) {
        return scores[result];
    }

    if (isMaximizing) {
        let maxScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (board[i][j] == '') {
                    board[i][j] = ai;
                    let score = minimax(board, depth + 1,alpha,beta, false);
                    board[i][j] = '';
                    maxScore = max(score, maxScore);
                    alpha = max(score,alpha);
                   if( beta <= alpha ) return maxScore;
                }
            }
        }
        return maxScore;
    } else {
        let minScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (board[i][j] == '') {
                    board[i][j] = human;
                    let score = minimax(board, depth + 1,alpha,beta,  true);
                    board[i][j] = '';
                    minScore = min(score, minScore);
                    beta = min(beta,minScore);
                   if( beta <= alpha ) return minScore;
                }
            }
        }
        return minScore;
    }
}