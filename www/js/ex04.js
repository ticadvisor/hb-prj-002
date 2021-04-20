/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Crea una calculadora con "switch" que opere con dos números. La calculadora
 * utilizará la variable "option" para decidir el tipo de operación a realizar.
 * Debe poder sumar, restar, multiplicar y dividir. A mayores debe permitir
 * elevar el nº A a la potencia de B.
 *
 * Bonus point: no se puede dividir entre 0.
 */

'use strict';

const number1 = 10;
const number2 = 3;
const option = '+';

switch (option) {
    case '+':
        console.log(number1 + number2);
        break;
    case '-':
        console.log(number1 - number2);
        break;
    case '*':
        console.log(number1 * number2);
        break;
    case '/':
        if (number2 === 0) {
            throw new Error('Division by zero is not allowed');
        } else {
            console.log(number1 / number2);
            break;
        }
    case 'exp':
        console.log(number1 ** number2);
        break;
    default:
        throw new Error('Operator not allowed');
}
