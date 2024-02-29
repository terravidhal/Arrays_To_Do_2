
//1-Reverse
function Reverse_Array(array) {
  for (let index = 0; index < array.length / 2; index++) {
    let temp = array[index];
    array[index] = array[array.length - 1 - index];
    array[array.length - 1 - index] = temp;
    //console.log(i);
  }
  console.log(array);
  return array;
}
Reverse_Array([3, 1, 6, 4, 2]); //[2,4,6,1,3]

//2-rotate
//first:
function rotateArr(arr, shiftBy) {
  for (let i = 0; i < shiftBy; i++) {
    let temp_value = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp_value;
   // console.log(temp_value);
  }
  return arr;
}

rotateArr([1, 2, 3], 1); //[3,1,2]
rotateArr([1, 2, 3], 2); //[2,3,1]


//second:
function rotateArr(arr, shiftBy) {
  if (shiftBy < 0) {
    shiftBy = arr.length + shiftBy; 
  }

  for (let i = 0; i < shiftBy; i++) {
    let temp_value = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp_value;
   // console.log(temp_value);
  }
  return arr;
}

rotateArr([1, 2, 3], -1); //[2,3,1]
rotateArr([1, 2, 3], 2); //[2,3,1]



//Third:
function rotateArr(arr, shiftBy) {
  if (shiftBy < 0) {
    shiftBy = arr.length + shiftBy; 
  }

  shiftBy = shiftBy % arr.length; 

  for (let i = 0; i < shiftBy; i++) {
    let temp_value = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp_value;
   // console.log(temp_value);
  }
  return arr;
}

rotateArr([1, 2, 3], -150000); //[1,2,3]
rotateArr([1, 2, 3], 20); //[2,3,1]


//Fourth:

//2-filter range
function retainValuesInRange(arr, min, max) {
  let writeIndex = 0;
 
  for (let readIndex = 0; readIndex < arr.length; readIndex++) {
    const value = arr[readIndex];
    if (value >= min && value <= max) {
      arr[writeIndex] = value; 
      writeIndex++; // Move writeIndex to store the next value
    }
  }
 
  arr.length = writeIndex;
 
  return arr;
 }
 
 // Example :
 const numbers = [3, 5, 1, 8, 4, 9, 2];
 const min = 2;
 const max = 6;
 
 const filteredNumbers = retainValuesInRange(numbers, min, max);
 console.log(filteredNumbers); // Output: [3, 5, 1, 4, 2]

 //3-concat
 function arrConcat(arr1, arr2) {
  let new_arr = [];
  for (let i = 0; i < arr1.length; i++) {
    new_arr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    new_arr.push(arr2[i]);
  }
  return new_arr;
}
arrConcat(["a", "b"], [1, 2]); // ['a','b',1,2]











