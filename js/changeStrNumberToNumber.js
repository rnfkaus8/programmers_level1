function solution(s) {
    let answer = 0;
    const strNumToNum = {
        'zero' : 0,
        'one'  : 1,	
        'two'  : 2,	
        'three' : 3,	
        'four' : 4,	
        'five' : 5,	
        'six'  : 6,	
        'seven' : 7,	
        'eight' : 8,	
        'nine' : 9	
    };
    Object.keys(strNumToNum).forEach(function(v){
        var regexp = new RegExp(v, "gi");
        s = s.replace(regexp , strNumToNum[v]);
        console.log(s);
    });
    answer = parseInt(s);


    return answer;
}


const s = "one4seveneightone";
console.log(solution(s));
