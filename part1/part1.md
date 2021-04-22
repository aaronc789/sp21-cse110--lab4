# Part 1

### 1a)

1. 20
2. 20
3. 20
4. "ReferenceError: result is not defined." This is because the let variable 'result' is declared inside the enclosing if statement block, denoted by {}, hence it is only known in the block it is defined in.
5. "TypeError: Assignment to constant variable." const cannot be reassigned.
6. "TypeError: Assignment to constant variable." const cannot be reassigned.

### 1b)

1. Prints out '3', i gets incremented in the for loop until it reaches the length of prices, which is 3.
2. Prints out '150', the last iteration of the for loop has i = 2, so var discountedPrice will print out [300 * (1 - 0.5)] = 150.
3. Prints out '150', the last iteration of the for loop has i = 2 and discountedPrice = 150, so finalPrice = Math.round(150 * 100) / 100 = 150.