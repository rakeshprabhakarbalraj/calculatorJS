import { NumberLiteralType } from 'typescript'
import { executeAction } from '../../lib/actions'

export class calculator {   
    get addButton() {
        return $("~plus")
    }
    numberButton(value: string) {
        return $("~" + value)
    }
    get clearButton() {
        return $("~clear")
    }
    get pointButton(){
        return $("~point")
    }
    get equalsButton(){
        return $("~equals")
    }
    get resultPreview(){
        return $('//android.widget.TextView[@resource-id="com.google.android.calculator:id/result_final"]')
    }


    async clickAddButton(){
        await executeAction("CLICK", await this.addButton);
    }

    async clickNumberButton(value:number){
        var numStr = value.toString();
        for (var i = 0; i < numStr.length; i++) {
            if (numStr.charAt(i)==='.'){
                await executeAction("CLICK", await this.pointButton);
            }
            else{
                await executeAction("CLICK", await this.numberButton(numStr.charAt(i)) );
            }
            
        }
        
    }

    async clickClearButton(){
        await executeAction("CLICK", await this.clearButton);
    }

    async clickEqualsButton(){
        await executeAction("CLICK", await this.equalsButton);
    }

    async getResult(){
        return await executeAction("GET_TEXT", await this.resultPreview);
    }

    async addNumber(a: number, b: number){
        let val= "";
        await this.clickClearButton()
        await this.clickNumberButton(a)
        await this.clickAddButton()
        await this.clickNumberButton(b)
        await this.clickEqualsButton()
        val = await this.getResult()
        return val;
    }

    async addAndValidate(a: number, b: number){
        let expectedValue= a+ b;
        let actualValue = await this.addNumber(a, b)
        console.log('Actual:',actualValue)
        console.log('Expected:',expectedValue.toString())
        expect(expectedValue.toString()).toEqual(actualValue);
        return;

    }
}
