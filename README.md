# Tic Tac Toe with Alpha Beta Pruning

The goal here is to create an AI to play simple games. first of which is a tic tac toe. 
The board visualizer is stolen shamelessly from the coding train that can be found here -> [Coding Challenge #149: Tic Tac Toe](https://www.youtube.com/watch?v=GTWrWM1UsnA&t=0s)

## Benchmarking

AI goes first

| Move Number | Minimax | Alpha Beta | Ratio  |
| ----------- | ------- | ---------- | ------ |
| 1           | 549945  | 3079       | 178.61 |
| 2           | 7331    | 1519       | 4.82   |
| 3           | 197     | 97         | 2.03   |
| 4           | 13      | 13         | 1      |
| 5           | 1       | 1          | 1      |

Hooman goes first

| Move Number | Minimax | Alpha Beta | Ratio |
| ----------- | ------- | ---------- | ----- |
| 1           | 59704   | 6138       | 9.72  |
| 2           | 1172    | 477        | 2.45  |
| 3           | 50      | 44         | 1.13  |
| 4           | 4       | 4          | 1     |
| 5           | 1       | 1          | 1     |

