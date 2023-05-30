describe('First Test Suite', () => {

    before('Before Block',() => {
        console.log("Before All ")
    });

    beforeEach('Before Each Block',() => {
        console.log('Before Each')
    });

    after('After block ',() => {
        console.log('After block test')
        
    });

    afterEach('After Each block ',() => {
        console.log('After each block test')
        
    });


    it('First Test', () => {
        //body of test
        console.log('First Test')
        
    });
    
    it('Second Test', () => {
        //body of test
        console.log('Second Test')
        
    });

    
    
});