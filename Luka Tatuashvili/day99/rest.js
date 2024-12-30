const sum = (...numbers) => {
    let total = 0;
    for (let i of numbers){
        total += i;
    }
    return total;
};

console.log(sum(1, 2, 3, 4)); // 10