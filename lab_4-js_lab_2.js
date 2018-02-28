/*
Web Development: Lab_4 - JavaScript Lab_2
Hunkar Lule
*/

/*Answer-1*/
function rotateLeft3(arr) {
  var element = arr[0];
  var rotatedArray = arr.slice(1);
  rotatedArray.push(element);
  return rotatedArray;
} 
console.log(rotateLeft3([1, 2, 3]));
console.log(rotateLeft3([5, 11, 9]));
console.log(rotateLeft3([7, 0, 0]));

/*========================================================*/

/*Answer-2*/
function reverse3(arr) {
  return arr.reverse();
}
console.log(reverse3([1, 2, 3]));
console.log(reverse3([5, 11, 9]));
console.log(reverse3([7, 0, 0]));

/*========================================================*/

/*Answer-3*/
function has23(arr) {
  for ( let i = 0; i < arr.length; i++) {
    if (arr[i] == 2 || arr[i] == 3)
      return true;
  }
  return false;
}
console.log(has23([2, 5]));
console.log(has23([4 ,3]));
console.log(has23([4, 5]));

/*========================================================*/

/*Answer-4*/
function fix23(arr) {
  if (arr[1] == 3 && arr[0] == 2) {
    arr[1] = 0;
    return arr;
  }
  if (arr[1] == 2 && arr[2] == 3) {
    arr[2] = 0;
    return arr;
  }
  return arr;
}

console.log(fix23([1, 2, 3]));
console.log(fix23([2, 3, 5]));
console.log(fix23([1, 2, 1]));

/*========================================================*/

/*Answer-5*/
function maxTriple(arr) {
  var max = arr[0];
  var arrLength = arr.length;
  if (arr[(arrLength - 1) / 2] > max) {
    max = arr[(arrLength - 1) / 2];
  }
  if (arr[arrLength - 1] > max) {
    max = arr[arrLength - 1];
  }
  return max;
}
console.log(maxTriple([1, 2, 3]));
console.log(maxTriple([1, 5, 3]));
console.log(maxTriple([5, 2, 3]));

/*========================================================*/

/*Answer-6*/
function swapEnds(arr) {
  var element = arr[0];
  arr[0] = arr[arr.length -1];
  arr[arr.length - 1] = element;
  
  return arr;
}
console.log(swapEnds([1, 2, 3, 4]));
console.log(swapEnds([1, 2, 3]));
console.log(swapEnds([8, 6, 7, 9, 5]));

/*========================================================*/

/*Answer-7*/
function unlucky1(arr) {
  result = false;
  if((arr[0] == 1 && arr[1] == 3) || (arr[1] == 1 && arr[2] == 3) || (arr[arr.length -2] == 1 && arr[arr.length -1] == 3)) {
    result = true;
  }
  
  return result;
}
console.log(unlucky1([1, 3, 4, 5]));
console.log(unlucky1([2, 1, 3, 4, 5]));
console.log(unlucky1([1, 1, 1]));

/*========================================================*/

/*Answer-8*/
function front11(a, b) {
  
  var newArray = [];
  
  if (a.length > 0) {
    newArray.push(a[0]);
  }

  if (b.length > 0) {
    newArray.push(b[0]);
  }
 return newArray;
}
console.log(front11([1, 2, 3], [7, 9, 8]));
console.log(front11([1], [2]));
console.log(front11([1, 7], []));

/*========================================================*/

/*Answer-9*/
function isEverywhere(arr, number) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != number && arr[i + 1] != number) {
      return false;
    }
  }
  return true;
}
console.log(isEverywhere([1, 2, 1, 3], 1)); 
console.log(isEverywhere([1, 2, 6, 3], 2)); 
console.log(isEverywhere([1, 2, 1, 3, 4], 1));

/*========================================================*/

/*Answer-10*/
function tenRun(arr) {
  var multiple = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 == 0) {
      multiple = arr[i];
    } 
    else {
      if (multiple != null)
        arr[i] = multiple;
    }
  }
  return arr;
}
console.log(tenRun([2, 10, 3, 4, 20, 5]));
console.log(tenRun([10, 1, 20, 2]));
console.log(tenRun([10, 1, 9, 20]));

/*========================================================*/

/*Answer-11*/
function twoTwo(arr) {

  if ((arr[0] == 2 && arr[1] != 2) || (arr[arr.length - 1] == 2 && arr[arr.length - 2] != 2)) {
    return false;
  }
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] == 2) {
      if (arr[i - 1] != 2 && arr[i + 1] != 2) {
        return false;
      }
    }
  }
  return true;
}
console.log(twoTwo([4, 2, 2, 3]));
console.log(twoTwo([2, 2, 4]));
console.log(twoTwo([2, 2, 4, 2]));

/*========================================================*/

/*Answer-12*/
function shiftLeft(arr) {
  var element = arr[0];
  var shiftLeft = arr.slice(1);
  shiftLeft.push(element);
  return shiftLeft;
}
console.log(shiftLeft([6, 2, 5, 3]));
console.log(shiftLeft([1, 2]));
console.log(shiftLeft([1]));

/*========================================================*/

/*Answer-13*/
function evenOdd(arr) {
  var newArray = [];
 for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArray.unshift(arr[i]);
    } 
    else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(evenOdd([1, 0, 1, 0, 0, 1, 1]));
console.log(evenOdd([3, 3, 2]));
console.log(evenOdd([2, 2, 2]));

/*========================================================*/

/*Answer-14*/
function fizzBuzz(start, end) {
  var newArray = [];
  for (let i = start; i < end; i++) {
    if (i % 3 == 0) {
      if (i % 5 == 0) {
        newArray.push("FizzBuzz");
      } 
      else {
        newArray.push("Fizz");
      }
    } 
    else if (i % 5 == 0) {
      newArray.push("Buzz");
    } 
    else {
      newArray.push(i.toString());
    }
  }
  return newArray;
}
console.log(fizzBuzz(1, 6));
console.log(fizzBuzz(1, 8));
console.log(fizzBuzz(1, 11));

/*========================================================*/

/*Answer-15*/
function countClumps(arr) {
  var clumpCount = 0;
  var numberRepeat = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
      numberRepeat++;
      if (numberRepeat == 2) {
        clumpCount++;
      }
    } 
    else {
      numberRepeat = 1;
    }

  }
  return clumpCount;
}
console.log(countClumps([1, 2, 2, 3, 4, 4]));
console.log(countClumps([1, 1, 2, 1, 1]));
console.log(countClumps([1, 1, 1, 1, 1]));

/*========================================================*/
