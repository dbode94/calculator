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
export const executeFormula = (exp) => eval(exp);

export const deleteLastChar = (expression) =>{
    return (expression.length === 1)? '0' : expression.substring(0, expression.length-1);
}

//review
export const oppositeNumber = (expression) =>{
    if(expression === '(-')
        return '0';
    let regex = /(\(-)?\d+$/g
    let found = expression.match(regex);
    let exp;
    if(found != null)
        if(found[0].includes('(-')){
            const number = found[0].match(/\d+$/g);
            exp = expression.substring(0,expression.length - found[0].length) + number[0];
        }
        else exp = expression.substring(0,expression.length - found[0].length) + '(-' + found[0];
    else if(expression[expression.length-1] === ')')
        exp = expression + "*(-";
    else {
        regex = /[-,+,*,/]$/g;
        found = expression.match(regex);
        if(found != null)
            exp = expression + '(-';
    }
    return exp;
}