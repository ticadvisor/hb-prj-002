/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una calculadora con "if" que opere con dos números. La calculadora
 * utilizará la variable "option" para decidir el tipo de operación a realizar.
 * Debe poder sumar, restar, multiplicar y dividir. A mayores debe permitir
 * elevar el nº A a la potencia de B.
 *
 * Bonus point: no se puede dividir entre 0.
 */

"use strict";

const number1 = 10;
const number2 = 0;
const operator = ">";

if (operator === "+") {
    console.log(number1 + number2);
} else if (operator === "-") {
    console.log(number1 - number2);
} else if (operator === "*") {
    console.log(number1 * number2);
} else if (operator === "/") {
    if (number2 === 0) {
        throw new Error("Division by zero is not allowed");
    } else {
        console.log(number1 / number2);
    }
} else if (operator === "exp") {
    console.log(number1 ** number2);
} else {
    throw new Error("Operator not allowed");
}
