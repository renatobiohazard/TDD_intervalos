# TDD_intervalos

|      Entrada     |       Condição     |   Classes válidas |   Clásses inválidas  |
|:----------------:|:------------------:|:-----------------:|:--------------------:|
|   valores        | 'valores' não nulo | 1. valores > 0    |   2. valores <= 0    |
|                  | 'valores' inteiro  | 3. valores = int  |   4. valores != int  |
|                  | 'valores' válidos  | 5. [1,2,3,6,7]    |   6. [1,2,'a',6,7]   |

### Equivalência

|        Válidas      |
|:-------------------:|
| 1. size = 10        |
| 3. type = int       |
| 4. [1,2,3,6,7,10,11]|

|      Inválidas     |
|:------------------:|
| 2. size = 0        |
| 4. type = String   |
| 6. [1,B,3,6,7,C,11]|
