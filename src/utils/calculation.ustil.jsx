//it cannot finish with an operation
export const validFormula = (exp) =>{
    const expression = exp;
    const regex = /([-,+,*,/][-,+,*,/])|[-,+,*,/]$/g;
    const found = expression.match(regex);
    if(found != null) return false;
    return areParenthesisBalanced(expression);
}

const areParenthesisBalanced = (expression) =>{
    let parenthesisCount = 0;
    for (let i = 0; i < expression.length; i++) {
        if(expression[i] === '(') parenthesisCount ++;
        else if(expression[i] === ')') parenthesisCount --;
        if(parenthesisCount < 0) return false;
    }
    return (parenthesisCount === 0);
}

//make it better - it is slow.
// add parenthesis handling
export const executeFormula = (exp) =>{

    let expression = exp;
    let oprationsArray = [['*','/'], ['+','-']];

    return recursiveFormulaExecution(expression, oprationsArray);
}

const recursiveFormulaExecution = (expression, oprationsArray) => {

    if(!isNaN(expression)) return expression;

    for(let i = 0; i < oprationsArray.length; i++)
    for(let j = 0; j < expression.length; j++){ //add another loop to iterate throught the iterations
    if(expression[j] === oprationsArray[i][0] || expression[j] === oprationsArray[i][1]){ 
        let numb1Ind = null,numb2Ind = null;
        let numb1 = null, numb2 = null;
        for(let z = j-1; z > -1; z--)
        if(isNaN(expression[z]) && expression[z] !== '.') {
            numb1 = Number(expression.substring(z+1,j));
            numb1Ind = z+1;
        }
        if(numb1 == null){ 
        numb1 = Number(expression.substring(0,j));
        numb1Ind = 0;
        }
        for(let z = j+1; z < expression.length; z++)
        if(isNaN(expression[z]) && expression[z] !== '.') {
            numb2 = Number(expression.substring(j+1,z));
            numb2Ind = z
        }
        if(numb2 == null){
        numb2 = Number(expression.substring(j+1,expression.length));
        numb2Ind = expression.length;
        }
        return recursiveFormulaExecution(expression.substring(0,numb1Ind) + executeOperation(expression[j],numb1,numb2) + expression.substring(numb2Ind,expression.length),oprationsArray);
    }
    }
    return expression;
}
    
const executeOperation = (op, number1, number2) =>{

    let result = 0;

    switch (op) {
    case '*':
        result = number1 * number2;
        break;

    case '/':
        result = number1 / number2;
        break;

    case '+':
        result = number1 + number2;
        break;

    case '-':
        result = number1 - number2;
        break;
    
    default:
        break;
    }
    return result;
}
