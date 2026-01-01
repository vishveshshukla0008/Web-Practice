let arr = [['A', 'B', 'C'], ['a', 'b', 'c'], [1, 2, 3]]
for(let el of arr) {
   for (const element in el) {
    console.log(el[element])
   }
}