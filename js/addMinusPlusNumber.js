function solution(absolutes, signs) {
    let answer = 0;
    for(let i = 0; i < absolutes.length; i++){
        answer += signs[i] ? absolutes[i] : (absolutes[i] * -1);
    }
    return answer;
}

const absolutes = [4,7,12];
const signs = [true,false,true];
const result = 9;

console.log(solution(absolutes, signs) === result ? 'true' : 'false');