// Tic Tac Toe AI with Minimax Algorithm
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/154-tic-tac-toe-minimax.html
// https://youtu.be/I64-UTORVfU
// https://editor.p5js.org/codingtrain/sketches/0zyUhZdJD


let counter = 0;
let reduced = 0;
let zobristOld = [
    [
        [0x9D39247E33776D41,0x2AF7398005AAA5C7],[0x44DB015024623547,0x9C15F73E62A76AE2],[0x75834465489C0C89,0x3290AC3A203001BF]
    ],[
        [0x0FBBAD1F61042279,0xE83A908FF2FB60CA],[0x0D7E765D58755C10,0x1A083822CEAFE02D],[0x9605D5F0E25EC3B0,0xD021FF5CD13A2ED5]
    ],[
        [0x40BDF15D4A672E32,0x011355146FD56395],[0x5DB4832046F3D9E5,0x239F8B2D7FF719CC],[0x05D1A1AE85B49AA1,0x679F848F6E8FC971]
    ]
];
let zobrist = [
    [
        [0x3776D41,0x5AAA5C7],[0x4623547,0x2A76AE2],[0x89C0C89,0x03001BF]
    ],[
        [0x1042279,0x2FB60CA],[0x8755C10,0xEAFE02D],[0x25EC3B0,0x13A2ED5]
    ],[
        [0xA672E32,0xFD56395],[0x6F3D9E5,0xFF719CC],[0x5B49AA1,0xE8FC971]
    ]
];

let gameMap = new Map();
console.log("new game map created");
function bestMove(hash) {
    // AI to make its turn
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // Is the spot available?
            if (board[i][j] == '') {
                board[i][j] = ai;
                hash = hash ^ zobrist[i][j][0];
                let score = minimax(board, 0, -Infinity,Infinity,false,hash);
                board[i][j] = '';
                hash = hash ^ zobrist[i][j][0];
                if (score > bestScore) {
                    bestScore = score;
                    move = { i, j };
                }
            }
        }
    }
    board[move.i][move.j] = ai;
    hash = hash ^ zobrist[move.i][move.j][0];
    currentPlayer = human;
    console.log("moves checkeds ",counter);

    counter = 0;
    reduced = 0;
    //console.log(gameMap);
    return hash;
}


let scores = {
    X: 10,
    O: -10,
    tie: 0
};

function minimax(board, depth,alpha,beta, isMaximizing,hash) {
    counter++;
    let result = checkWinner();
    if (result !== null) {
        gameMap.set(hash,scores[result]);
        return scores[result];
    }
    if( gameMap.get(hash)!==undefined ) {
        reduced++;
        return gameMap.get(hash);
    }


    if (isMaximizing) {
        let maxScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (board[i][j] === '') {
                    board[i][j] = ai;
                    hash = hash ^ zobrist[i][j][0];
                    let score = minimax(board, depth + 1,alpha,beta, false,hash);
                    board[i][j] = '';
                    hash = hash ^ zobrist[i][j][0];
                    maxScore = max(score, maxScore);
                    alpha = max(score,alpha);
                   if( beta <= alpha ) {
                       gameMap.set(hash,maxScore);
                       return maxScore;
                   }
                }
            }
        }
        gameMap.set(hash,maxScore);
        return maxScore;
    } else {
        let minScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (board[i][j] == '') {
                    board[i][j] = human;
                    hash = hash ^ zobrist[i][j][1];
                    let score = minimax(board, depth + 1,alpha,beta,  true,hash);
                    board[i][j] = '';
                    hash = hash ^ zobrist[i][j][1];
                    minScore = min(score, minScore);
                    beta = min(beta,minScore);
                   if( beta <= alpha ) {
                       gameMap.set(hash,minScore);
                       return minScore;
                   }
                }
            }
        }
        gameMap.set(hash,minScore);
        return minScore;
    }
}