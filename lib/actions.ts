export async function executeAction(actionName: string, element: any, DataString?: any, timeoutVal?: number) {
    try{
        switch (actionName) {
            case "CLICK":
                try {
                    await driver.waitUntil(() => element.isDisplayed(), { timeout: timeoutVal });
                    await element.click()
                    console.log('PASS:CLICK action performed')
                }
                catch (err) {
                    console.log('FAIL:CLICK action failed to perform')
                    console.log(err)
                }
                break;
            
            case "WAITFORELEMENT":
                try {
                    await element.waitForDisplayed({ timeout: timeoutVal })
                    console.log('PASS:WAITFORELEMENT action performed')
                }
                catch (err) {
                    console.log('FAIL:WAITFORELEMENT action failed to perform')
                    console.log(err)
                }
                break;
            
            case "GET_TEXT":
                try {
                    await driver.waitUntil(() => element.isDisplayed(), { timeout: timeoutVal });
                    const actualText = await element.getText();
                    console.log('PASS:GET_TEXT action performed matched text')
                    return actualText;
                }
                catch (err) {
                    console.log('FAIL:GET_TEXT action failed to perform ')
                    console.log(err)
                    return null;
                }
                break;
            
            default:
                console.log(actionName + ' not supported')
                break;
        }
        return true;
    }
    catch(err){
        console.trace(err)
        throw new Error(err)
    }

}

