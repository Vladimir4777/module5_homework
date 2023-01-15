let arr = [1, 3, 5, 4, 8, 6, 9, 10, 7, 11, 15];
let even = 0;
let odd = 0;
for(i = 0; i < arr.length; i++){
  if(arr[i] % 2 == 0){
    even++;
 }else {
   odd++;
 }
};
console.log(even, odd);