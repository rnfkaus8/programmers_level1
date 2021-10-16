function solution(lottos, win_nums) {
    let answer = [];
    let win_nums_obj = {};
    let minMatchCount;
    let maxMatchCount;
    for (let i = 0; i < win_nums.length; i++) {
        win_nums_obj[win_nums[i]] = i;
    }
    let count = 0;
    let unknownLottosCount = 0;
    for(let i = 0; i < lottos.length; i++){
        if(lottos[i] != 0 && typeof win_nums_obj[lottos[i]] === "number"){
            count++;
        }else if(lottos[i] == 0){
            unknownLottosCount ++;
        }
    }
    console.log(count);
    console.log(unknownLottosCount);
    minMatchCount = count < 2 ? 1 : count;
    maxMatchCount = count + unknownLottosCount == 0 ? 1 : maxMatchCount;
    answer.push((7 - maxMatchCount));
    answer.push((7-minMatchCount));

    return answer;
}

const lottos = [1,2,3,4,5,6];
const win_nums = [31, 10, 45, 7, 8, 19];

console.log(solution(lottos, win_nums));