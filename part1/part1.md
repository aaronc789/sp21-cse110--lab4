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
4. Function will return '[ 50, 100, 150 ]', since discounted gets calculated for every iteration of the for loop and each value gets pushed into discounted.
5. "ReferenceError: i is not defined." This is because let variables are block scoped, so since i is declared inside the for loop, it is only accessible within that for loop, not outside.
6. "ReferenceError: discountedPrice is not defined." This is because let variables are block scoped, so since discountedPrice is declared inside the for loop, it is only accessible within that for loop, not outside.
7. Prints out '150', finalPrice is declared inside the discountPrices function, so it is usable within the function scope. finalPrice is last updated in the last iteration of the for loop, so it calculates to 150, which is what is printed out. 
8. Function will return '[ 50, 100, 150 ]', since discounted gets calculated for every iteration of the for loop and each value gets pushed into discounted.
9. "ReferenceError: i is not defined." This is because let variables are block scoped, so since i is declared inside the for loop, it is only accessible within that for loop, not outside.
10. Prints out '3', const length is initialized at the beginning of the discountPrices function with a value of 3, so since it's const the console prints out the same value at the end of the function.
11. Function will return '[ 50, 100, 150 ]'. Even though discounted is declared as a const in the beginning of the function, while the const variable cannot be updated, the properties of the const variable can be updated, hence why we are able to push values into discounted and return them.
12. A) student.name;
    B) student['Grad Year'];
    C) student.greeting();
    D) student['Favorite Teacher'].name;
    E) student.courseLoad[0];