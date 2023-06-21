function findBiggerContainer (arr) {
  let maxContainer = 0;

  let leftPointer = 0;
  let rightPointer = arr.length-1;

  while(leftPointer < rightPointer ){
    maxContainer = Math.max(findContainerSize(arr, leftPointer, rightPointer),maxContainer);

    if(arr[leftPointer] < arr[rightPointer]){
      leftPointer ++;
    }else {
      rightPointer--;
    }
  }
  return maxContainer
}

function findContainerSize(arr, leftPointer, rightPointer){
  const min = Math.min(arr[leftPointer],arr[rightPointer]);
  const diff = rightPointer - leftPointer;
  return min * diff
}

const heightArr =  [1,1];

console.log(findBiggerContainer(heightArr));