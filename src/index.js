module.exports = function toReadable (num) {
    
        let result = '';
        let numStr = num.toString();
        
        if (num === 0)
            result = 'zero';
            
        let simple = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
        }
        let teens = {
            0: 'ten',
            1: 'eleven',
            2: 'twelve',
            3: 'thirteen',
            4: 'fourteen', 
            5: 'fifteen', 
            6: 'sixteen', 
            7: 'seventeen', 
            8: 'eighteen', 
            9: 'nineteen', 
        }
        let tens = {
            1: 'ten',
            2: 'twenty',
            3: 'thirty', 
            4: 'forty',
            5: 'fifty',
            6: 'sixty',
            7: 'seventy',
            8: 'eighty',
            9: 'ninety',
        }
    
        if (num > 0 && num < 10)
            result = simple[num];
            
        if (num >= 10 && num < 20)
            result = teens[numStr[1]];
        if (num >= 20 && num < 100) {
            if (numStr[1] === '0')
                result = tens[numStr[0]]
            else
                result = tens[numStr[0]] + ' ' + simple[numStr[1]]
        }
        
        if (num >= 100 && num < 1000) {
            if (numStr[1] === '0' && numStr[2] === '0')
                result = simple[numStr[0]] + ' hundred'
            else if (numStr[1] === '0')
                result = simple[numStr[0]] + ' hundred ' + simple[numStr[2]]
            else if (numStr[1] === '1') 
                result = simple[numStr[0]] + ' hundred ' + teens[numStr[2]]
            else if (numStr[2] === '0')
                result = simple[numStr[0]] + ' hundred ' + tens[numStr[1]]
            else 
                result = simple[numStr[0]] + ' hundred ' + tens[numStr[1]] + ' ' + simple[numStr[2]]
        }
        return result;
}
