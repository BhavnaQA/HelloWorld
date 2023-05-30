import { assert, expect } from 'chai'

describe('Chai Assertions', () => {
    it('Assertions with chai', () => {
        let expected = 'Shridhar'
        let actual = 'Shri'
        expect(actual).to.equal(expected)
        
    });

    it('Assertions with chai with Assert', () => {
        let expected = 'Shridhar'
        let actual = 'Shri'
        // expect(actual).to.equal(expected)
        assert.equal(expected,actual,"Text does not match")
        
    });

    // it('Assertions with chai with Assert', () => {
    //     let expected = '3'
    //     let actual = 3
    //     // expect(actual).to.equal(expected)
    //     assert.strictEqual(expected,actual,"Text does not match")
        
    // });

    it('Assertions with chai with Assert', () => {
        let a = [1,2,3]
        expect(a).to.include(9)
        
    });
    
    
});