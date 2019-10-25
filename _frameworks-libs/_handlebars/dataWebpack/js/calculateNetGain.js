
module.exports =  function(Close, Open) {
    if (Close - Open >= 0) {
        return `Net Gain: Positive`
    } else {
        return `Net Gain: Negative`
    }
} 