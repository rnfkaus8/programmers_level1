function solution(numbers) {
    const answer = new Set();
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            const sum = numbers[i] + numbers[j];
            answer.add(sum);
        }
    }
    return [...answer].sort((a,b)=>{
        return a-b;
    });
}

const numbers = [5,0,2,7];
const result = [2,3,4,5,6,7];
console.log(solution(numbers));
