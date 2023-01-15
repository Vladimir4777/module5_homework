let arrayNumber = [1, 1, 2, 4, 3, 6, 9, 8];
function checkSame (arr) {
  let result = true;
  for (let i = 0; i < arr.length - 1; i++){
    if(arr[i] !== arr [i + 1]){
      result = false;
    };
  };
  return result;
};
console.log(checkSame(arrayNumber));