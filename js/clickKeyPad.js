function solution(numbers, hand) {
    var answer = '';
    const defaultHand = hand === "right" ? "R" : "L";
    const padMap = {
         1 : [0, 0]
        ,2 : [0, 1]
        ,3 : [0, 2]
        ,4 : [1, 0]
        ,5 : [1, 1]
        ,6 : [1, 2]
        ,7 : [2, 0]
        ,8 : [2, 1]
        ,9 : [2, 2]
        ,0 : [3, 1]
    };
    const handPosition = {
        leftHand : [3,0]
        ,rightHand : [3,2]
    };
    for(let i = 0; i < numbers.length; i++){
        const leftHandMoveCnt = Math.abs(padMap[numbers[i]][0] - handPosition.leftHand[0]) + Math.abs(padMap[numbers[i]][1] - handPosition.leftHand[1]);
        const rightHandMoveCnt = Math.abs(padMap[numbers[i]][0] - handPosition.rightHand[0]) + Math.abs(padMap[numbers[i]][1] - handPosition.rightHand[1]);
        

        if(numbers[i] % 3 === 2 || numbers[i] === 0){
            if(rightHandMoveCnt === leftHandMoveCnt){
                answer += defaultHand;
                hand === "right" ? handPosition.rightHand = padMap[numbers[i]] : handPosition.leftHand = padMap[numbers[i]];
            }else if(rightHandMoveCnt < leftHandMoveCnt){
                handPosition.rightHand = padMap[numbers[i]];
                answer += "R";
            }else{
                handPosition.leftHand = padMap[numbers[i]];
                answer += "L";
            }
        } else if(numbers[i] % 3 === 1){
            handPosition.leftHand = padMap[numbers[i]];
            answer += "L";
        }else if(numbers[i] % 3 === 0){
            handPosition.rightHand = padMap[numbers[i]];
            answer += "R";
        }
    }
    return answer;
}


const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";
const result = "LRLLLRLLRRL";
console.log(solution(numbers, hand) === result ? "true" : "false");

