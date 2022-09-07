`use strict`;

module.exports = (req, res, next) => {
    const num = req.query.num;
    // console.log(typeof (+num));

    if (!isNaN(num)) {
        req.isNum = num;
        next();
    } else {
        next(`the ${num} is not number`)
    }

};