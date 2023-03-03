function selectLetters(str1: string, str2: string) {
  let res = "";
  for (let index = 0; index < str1.length; index++) {
    if (str2[index]) {
      if (str2[index] === str2[index].toUpperCase()) {
        res += str1[index];
      }
    }
  }

  for (let index = 0; index < str2.length; index++) {
    if (str1[index]) {
      if (str1[index] === str1[index].toUpperCase()) {
        res += str2[index];
      }
    }
  }

  return res;
}

function repeat(str: string, count: number = 0) {
  if (count <= 0) return "";
  return new Array(count + 1).join(str);
}

function removeDoubles(str: string) {
  if (str.length % 2 === 0) {
    return "";
  } else return str[0];
}

function shiftSentence(str: string) {
  let splitted = str.split(" ");

  const res = [];
  if (splitted.length > 1) {
    let tmp = splitted[0];

    res.push(splitted[splitted.length - 1][0] + splitted[0].slice(1));

    for (let index = 1; index < splitted.length - 1; index++) {
      tmp = splitted[index];
      res.push(splitted[index - 1][0] + splitted[index].slice(1));
    }

    res.push(
      (splitted[splitted.length - 1] =
        tmp[0][0] + splitted[splitted.length - 1].slice(1))
    );

    console.log(res);
  } else return str;
}

function mostFrequent(arr: (string | number | boolean)[]) {
  let obj: { [index: string]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    let count = 1;
    for (let y = i + 1; y < arr.length; y++) {
      if (arr[y] === elem) {
        count++;
      }
    }

    if (!(elem.toString() in obj)) {
      obj[elem.toString()] = count;
    }
  }

  console.log(obj);

  let max = Math.max(...Object.values(obj));

  return Object.keys(obj).filter((key) => obj[key] === max)[0];
}

String.prototype.includes = function (str: string, position = 0) {
  let strLength = str.length;

  for (let i = position; i < this.length; i++) {
     if(this.slice(i, i + strLength)=== str){
        return true;
     }   

  }

  return false;
};

console.log("Hello from ALex".includes("from"));
