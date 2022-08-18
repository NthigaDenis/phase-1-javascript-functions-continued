// code your solution here

function saturdayFun(fun = "roller-skate") {
    return (`This Saturday, I want to ${fun}!`);

}
saturdayFun();
const mondayWork = function (work = "go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(flair) {
    const innerFunction = function (msg = "special") {
        return 'You are ${flair}${msg}${flair}!';
    };
    return innerFunction;
}
wrapAdjective("*");
wrapAdjective("%")("dedicated programmer");   