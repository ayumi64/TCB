describe('api learning', () => {
    const pageUrl = 'http://the-internet.herokuapp.com/dropdown';
    const DROP_DOWN_LIST = '#dropdown';


    const OPTION_1_TEXT = 'Option 1';
    const OPTION_1_VALUE = '1';
    const OPTION_1_INDEX = 1;

    const OPTION_2_TEXT = 'Option 2';
    const OPTION_2_VALUE = '2';
    const OPTION_2_INDEX = 2;

    before('open page', () => {
        browser.url(pageUrl);

    });

    it('dropdown list handling', () => {

        //select o1 by using selectByVisibleText
        $(DROP_DOWN_LIST).selectByVisibleText(OPTION_1_TEXT);
        browser.pause(3000);

        //select o2 by using selectByvValue
        $(DROP_DOWN_LIST).selectByValue(OPTION_2_VALUE);
        browser.pause(3000);

        //select o1 by using selectByIndex
        $(DROP_DOWN_LIST).selectByIndex(OPTION_1_INDEX);
        browser.pause(3000);

        //select o2 by using selectByVisibleText
    })
})