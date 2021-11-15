function solution(numbers) {
    let answer = 0;
    const allNum = {
        0 : 1,
        1 : 1,
        2 : 1,
        3 : 1,
        4 : 1,
        5 : 1,
        6 : 1,
        7 : 1,
        8 : 1,
        9 : 1
    };
    numbers.forEach(number => {
        delete allNum[number];
    });

    Object.keys(allNum).forEach(num => {
        answer += parseInt(num, 0);
    });

    return answer;
}

const numbers = [1,2,3,4,6,7,8,0];
const result = 14;
console.log(solution(numbers));