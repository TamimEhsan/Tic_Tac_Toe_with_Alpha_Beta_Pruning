# Tic Tac Toe with Alpha Beta Pruning

The goal here is to create an AI to play simple games. first of which is a tic tac toe. 
The board visualizer is stolen shamelessly from the coding train that can be found here -> [Coding Challenge #149: Tic Tac Toe](https://www.youtube.com/watch?v=GTWrWM1UsnA&t=0s)

Visit https://tamimehsan.github.io/Tic_Tac_Toe_with_Alpha_Beta_Pruning/ and open console to find the console log



## Benchmarking

AI goes first

| Move Number | Minimax | Alpha Beta | Zobrist Hashing | Ratio      |
| ----------- | ------- | ---------- | --------------- | ---------- |
| 1           | 549945  | 30709      | 6197            | 88:5:1     |
| 2           | 7331    | 1519       | 7               | 1047:217:1 |
| 3           | 197     | 97         | 5               | 40:19:1    |
| 4           | 13      | 13         | 3               | 4:4:1      |
| 5           | 1       | 1          | 1               | 1:1:1      |

Hooman goes first

| Move Number | Minimax | Alpha Beta | Zobrist Hashing | Ratio    |
| ----------- | ------- | ---------- | --------------- | -------- |
| 1           | 59704   | 6138       | 1874            | 32:3:1   |
| 2           | 1172    | 477        | 6               | 195:80:1 |
| 3           | 50      | 44         | 4               | 13:11:1  |
| 4           | 4       | 4          | 2               | 2:2:1    |

