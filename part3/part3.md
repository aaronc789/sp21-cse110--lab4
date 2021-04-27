1. The bug is that num1 and num2 are being taken in as strings, so when calculateSum is called, it concatenates the strings together, instead of adding them.
2. I fixed it by implementing the Number() function to num1 and num2 to convert them from strings to numbers, that way I can actually add up the numbers now.
3. citylots.json
4. part2.js:2
5. 11.7 MB
6. 78 ms
7. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36
8. Apache
9. Tue, 26 Jan 2021 22:14:13 GMT
10. application/json
11. fetchData()