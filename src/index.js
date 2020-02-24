module.exports = function toReadable(number) {
    let arr1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arr3 = ['','one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];

    if (number == 0) return 'zero';
    if (number < 20) {
        return `${arr1[number]}`;
    }
    let splitStr = number.toString().split('');
    if (number >= 20 && number < 100) {
        return `${arr2[splitStr[0]]} ${arr1[splitStr[1]]}`.trim()
    } else if (number >= 100){
        return `${arr3[splitStr[0]]} ${arr2[splitStr[1]]} ${arr1[splitStr[2]]}`.trim()
    }

}



