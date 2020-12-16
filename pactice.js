const reverse = (string) => {
    let afterReverse = "";
    for(let i = 0; i < string.length; i++){
        const element = string[i];
        afterReverse = element + afterReverse;
    }
    return afterReverse;
};

const string = "hello i'm a mahbub hasan";
const result = reverse(string);
console.log(result)