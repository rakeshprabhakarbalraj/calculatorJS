import { calculator} from '../pageobjects/calculatorPage'
let calculatorObj = new calculator();

describe('First Calculator Operation', ()=>{
    it('Add 2 whole numbers and validate the result', async () => {
        await calculatorObj.addAndValidate(2, 4);
    });
    it('Add 2 decimal numbers and validate the result', async () => {
        await calculatorObj.addAndValidate(4.3, 5.11);
    });
    it('Add a whole number and decimal number and validate the result', async () => {
        await calculatorObj.addAndValidate(2, 4.23);
    });    
})

