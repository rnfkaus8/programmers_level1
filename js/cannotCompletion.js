function solution(participant, completion) {
    let answer = '';
    const participantObj = {};
    for(let i = 0; i < participant.length; i++){
        if(participantObj[participant[i]] === undefined){
            participantObj[participant[i]] = 1;
        }else{
            participantObj[participant[i]] = participantObj[participant[i]] + 1;
        }
    }
    for(let i = 0; i < completion.length; i++){
        participantObj[completion[i]] = participantObj[completion[i]] -1;
        if(participantObj[completion[i]] == 0){
            delete participantObj[completion[i]];
        }
    }
    answer = Object.keys(participantObj)[0];
    return answer;
}

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = 	["stanko", "ana", "mislav"];
console.log(solution(participant, completion));