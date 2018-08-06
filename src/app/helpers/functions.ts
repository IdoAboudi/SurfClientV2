export module functions {
  export function removeIf(arr: any[], predicate: (x) => boolean){
    var i = arr.length;
    while (i--) {
      if (predicate(arr[i])) {
        arr.splice(i, 1);
      }
    }
  }
}
