import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'Calculate'
})

export class CalculatorPipe implements PipeTransform{
    transform(value:number, operand1: number, operand2:number, operator: string):number{
        console.log(operand1 + ' ' + operand2 + ' ' + operator);
        switch(operator){
            case '+':{
                return operand1 + operand2;
            }
            case '-':{
                return operand1 - operand2;
            }
            case '/':{
                let div = operand1 / operand2
                return div?div:0;
            }
            case '*':{
                return operand1 * operand2;
            }
        }
        return;
    }       
    
}