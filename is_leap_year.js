const compose = (...fns) => input =>
    fns.reduceRight((accumulator, nextFn) => nextFn(accumulator), input);

const and = (...boolFns) => input => boolFns.every(boolFn => boolFn(input));
const or = (...boolFns) => input => boolFns.some(boolFn => boolFn(input));
const not = boolFn => x => !boolFn(x);

const isDivisibleBy = divisor => number => number % divisor === 0;
const notDivisibleBy = compose(not, isDivisibleBy);

const isLeapYear = or(and(isDivisibleBy(4), notDivisibleBy(100)), isDivisibleBy(400));
console.log(isLeapYear(2000)); // >> true
