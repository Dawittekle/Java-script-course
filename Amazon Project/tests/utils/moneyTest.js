import {formatCurrency} from "../../scripts/utils/money.js";

describe('test suit : format currency',()=>{
    it('Convert cents to dollar',()=>{
        expect(formatCurrency(2090)).toEqual('20.90')
    })
    it('check for 0',()=>{
        expect(formatCurrency(0)).toEqual('0.00')
    })
    it('check round up',()=>{
        expect(formatCurrency(238.7)).toEqual('2.39');
    })
    it('check round down',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    })
})