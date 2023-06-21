function mergeArray(arr1, arr2,m,n){
 let ptr1 = m-1
 let ptr2 = n-1
 let ptr = arr1.length-1;

 while(ptr2 >= 0){
  if(arr1[ptr1] > arr2[ptr2]) {
      arr1[ptr--] = arr1[ptr1];
      ptr1--;
  }else {
      arr1[ptr--] = arr2[ptr2];
      ptr2--;
  }
 }
}

let arr1 = [1,2,3,4,5,0,0]
let arr2 = [6,7]

mergeArray(arr1,arr2,5,2);
console.log(arr1);





function maxProfit(arr){
  let maxProfit = 0;

  for(let i=0;i<arr.length ;i++){
    let currentElement = arr[i];;
    let nextElement = arr[i+1];
    if(currentElement < nextElement){
      maxProfit = (nextElement - currentElement) + maxProfit;
    }
  }

  return maxProfit;
}


function maxProfit1(arr) {
  let min = arr[0];
  let maxProfit = 0;

  for(let i=1;i<arr.length;i++){
    maxProfit = Math.max(maxProfit, arr[i] -  min);
    min = Math.min(min, arr[i]);
  }

  return maxProfit;

}