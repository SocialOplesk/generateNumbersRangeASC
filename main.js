/**
 * @param {number} start require
 * @param {number} end require
 * @example
 *  
 *  True
 *  genNumberRangeASC(1)(5) => [1,2,3,4,5]
 *  genNumberRangeASC(0)(5) => [1,2,3,4,5]
 *  
 *  False
 *  genNumberRangeASC(10)(5) => []
 *  genNumberRangeASC(-1)(5) => []
 *   
 * @return {array}  
 */
const genNumberRangeASC = (start) => {
    let cache = {
        active: false
    }
    return function addSecondParameter(end) {
        let limit = (start == 0) ? end + 1 : end;

        return (start >= limit) || (start < 0) ? [] :
            (
                [...Array(limit).fill(0).map((_) => {
                    if (!cache["active"]) {
                        cache["store"] = start - 1
                        cache["active"] = true
                    }

                    if (typeof cache["store"] !== "undefined") {
                        return (cache["store"] == limit) ? undefined :
                            (
                                cache["store"] = cache["store"] + 1
                            );
                    }
                    return cache["store"];
                })].filter(i => i != undefined)
            );
    }
}

let r = genNumberRangeASC(1)(5);
console.log(r) //[1,2,3,4,5]
