function toUpperCase(str) {
    if (typeof str !== String) {
        throw new TypeError("Your input should be string!");
    }
    
    return str.toUpperCase();
}

function toLowerCase(str) {
    if (typeof str !== String) {
        throw new TypeError("Your input should be string!");
    }

    return str.toLowerCase();
}

module.exports = {
    toLowerCase,
    toUpperCase
}