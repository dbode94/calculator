//it cannot finish with an operation
export const validFormula = (exp) =>{
    let expression = exp;
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

export const executeFormula = (exp) => {
    let auxExpression = exp;

    for(let i = 0; i < auxExpression.length; i++)
        switch(auxExpression[i]){
            case '√':
                auxExpression = auxExpression.split('');
                auxExpression[i]= 'Math.sqrt';
                auxExpression = auxExpression.join('');
                break;
            
            case '^':
                auxExpression = auxExpression.split('');
                let j = i - 1;
                let z = i + 2;
                let parenthesisCount;

                if(!isNaN(auxExpression[j]) && j > -1){
                    while(!isNaN(auxExpression[j])){
                        j--;
                    }   
                }
                else{
                    parenthesisCount = -1;
                   j=j-1;
                   while(parenthesisCount < 0) {
                        if(auxExpression[j] === '(') parenthesisCount++;
                        else if(auxExpression[j] === ')') parenthesisCount--;
                        j--;
                   }
                }

                parenthesisCount = 1;
                while(parenthesisCount > 0){
                    if(auxExpression[z] === '(') parenthesisCount++;
                    else if(auxExpression[z] === ')') parenthesisCount--;
                    z++;
                }

                auxExpression = auxExpression.join('');

                let prefix = auxExpression.substring(0,j+1);
                let sufix = auxExpression.substring(z+1,auxExpression.length);
                auxExpression = prefix + 'Math.pow(' + auxExpression.substring(j,i) + ',' + auxExpression.substring(i+1,z+1) + ')' + sufix; 
                break;
            
            case 'a':
                if(i === 0 || (auxExpression[i-1] !== '.' && auxExpression[i-1] !== 'M')){
                    auxExpression = auxExpression.substring(0,i) + 'Math.'+auxExpression.substring(i,auxExpression.length)
                }
                break;
            
            case 'l':
                if(auxExpression[i+3] === '('){
                    auxExpression = auxExpression.substring(0,i) + 'Math.' + auxExpression.substring(i,i+3) + '10' + auxExpression.substring(i+3, auxExpression.length);
                }
                break;
            
            default:               
                break;
        }

    return eval(auxExpression).toString();
};

export const deleteLastChar = (expression) =>{
    return (expression.length === 1)? '0' : expression.substring(0, expression.length-1);
}

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