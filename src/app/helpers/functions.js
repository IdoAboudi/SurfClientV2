"use strict";
var functions;
(function (functions) {
    function removeIf(arr, predicate) {
        var i = arr.length;
        while (i--) {
            if (predicate(arr[i])) {
                arr.splice(i, 1);
            }
        }
    }
    functions.removeIf = removeIf;
})(functions = exports.functions || (exports.functions = {}));
//# sourceMappingURL=functions.js.map