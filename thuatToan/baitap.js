// date-exercises

// 1. Viết chương trình nhập vào năm sinh và in ra số tuổi
function showAge(since) {
  const nowDate = new Date();
  const curentSince = nowDate.getFullYear();
  const age = curentSince - since;

  return age;
}

// console.log(showAge(2002));

// 2. input: Wed Jan 05 2022 08:49:50 GMT+0700 (Indochina Time). in ra 01/05/2002

function birthday(date) {
  const now = new Date(date);

  const getDate = now.getDate(); // 5
  const getMonth = now.getMonth() + 1; //1
  const getYear = now.getFullYear(); //2022
  const prefixDate = getDate < 10 ? "0" : "";
  const prefixMonth = getDate < 10 ? "0" : "";
  const getBirth = `${prefixDate}${getDate}/${prefixMonth}${getMonth}/${getYear}`;

  return getBirth;
}

// console.log(birthday("Wed Jan 05 2022 08:49:50 GMT+0700 (Indochina Time)"));

// 3. Viết chương trình đếm ngược thời gian theo từng giây(countdown) dựa vào thời gian đầu vào. ví dụ thời gian làm bài là 30 phút nếu chạy về 0 thì báo đã hết thời gian

function countdown(time) {
  let i = time;
  const setOut = setInterval(function () {
    console.log(`Thời gian còn ${i} giây`);
    i--;
    if (i === 0) {
      clearInterval(setOut);
      console.log(`Thời gian còn 0 giây`);
      console.log("Hết time");
    }
  }, 1000);
}

// countdown(10);

// 4. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian nhập vào so với thời gian hiện tại, ví dụ : bạn đang chat với bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online `3 phút trước`, `3 ngày trước`, `2 tháng trước`, `30 giây trước`, 1 năm trước`

// timeSince("Tue Jan 04 2022 23:15:52 GMT+0700 (Indochina Time)");

function timeSince(date) {
  const now = new Date();
  const inputTime = new Date(date);
  const seconds = Math.round((now - inputTime) / 1000);

  let timer = seconds / (360 * 24 * 60 * 60);
  if (timer > 1) {
    console.log(`${Math.round(timer)} năm trước`);
    return;
  }

  timer = seconds / (30 * 24 * 60 * 60);
  if (timer > 1) {
    console.log(`${Math.round(timer)} tháng trước`);
    return;
  }

  timer = seconds / (7 * 24 * 60 * 60);
  if (timer > 1) {
    console.log(`${Math.round(timer)} tuần trước`);
    return;
  }

  timer = seconds / (24 * 60 * 60);
  if (timer > 1) {
    console.log(`${Math.round(timer)} ngày trước`);
    return;
  }

  timer = seconds / (60 * 60);
  if (timer > 1) {
    console.log(`${Math.round(timer)} giờ trước`);
    return;
  }

  timer = seconds / 60;
  if (timer > 1) {
    console.log(`${Math.round(timer)} phút trước`);
    return;
  }
  timer = seconds;
  if (timer > 1) {
    console.log(`${Math.round(timer)} giây trước`);
    return;
  }
  if (timer < 0) {
    alert("thowif gian k hopwj leej");
  }
  return;
}

// timeSince("Wed Dec 15 2022 14:55:00 GMT+0700 (Indochina Time)");

// // --------------------------------------------------------ARRAY-----------------------------------------------------------------

// // b4 sắp xếp theo thứ tự tăng dần và tìm phần tử đầu tiên trong mảng lớn hơn 10
// const random = [1, 99, 100, 5, 09];

function handlArrayRandom(arr) {
  let newArr = [...arr];
  function SortArr(item) {
    newArr = item.sort((a, b) => (a > b ? 1 : -1));

    return newArr;
  }

  function findArr(item) {
    console.log(newArr);
    return item.find((value) => value > 10);
  }

  return findArr(SortArr(arr));
}

// console.log(handlArrayRandom(random));

// // b5. Đảo ngược chuỗi. ví dụ : 'My name is evondev' -> 'evondev is  name My';
function reverseStr(str) {
  const strCoppy = str.split(" ").reverse().join(" ");

  return strCoppy;
}

// console.log(reverseStr("My name is evondev"));

// // 6. đảo ngược chuỗi bao gồm kí tự . ví dụ: 'i love' -> 'evol i';
function reverseWork(str) {
  const newStr = str
    .split(" ")
    .map((item) => item.split(" ").reverse().join(" "))
    .join(" ");

  return newStr;
}

// console.log(reverseWork("evol i"));

// // ------------------------------------------------------array------------forloop---------------------------------------------
// // 1. Sao chép mảng dùng vòng lặp for
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumber = [];

for (let value in number) {
  newNumber.push(value);
}

// console.log(newNumber);

// 2. Đảo ngược từ "i love" -> "evol i" sử dụng loop

const str = "i love";

function reserse(value) {
  const result = [];
  const convertToStr = value.toString();

  for (let i = convertToStr.length - 1; i >= 0; i--) {
    result.push(convertToStr[i]);
  }

  return result.join("");
}

// console.log(reserse(str));

// 3. Cho 1 mảng gồm nhiều giá trị [1, 1000, false, null, "evondev", "", undefined, "javascript", [1,2,3]]. Viết chương trình loại bỏ các giá trị falsy ra khỏi mảng chỉ giữ lại giá trị truthy

const beginAray = [
  1,
  1000,
  false,
  null,
  "evondev",
  "",
  undefined,
  "javascript",
  [1, 2, 3],
];

function filterFalsy(value) {
  const result = value.filter((item) => Boolean(item));

  return result;
}

// console.log(filterFalsy(beginAray));

// 4. Cho 1 mảng các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]. Viết 1 function trả về một mảng với các giá trị unique. và xắp xếp theo tứ tự tăng dần. Kết quả ở trên sẽ là [1,2,3,5,6,7,66];

const numArr = [1, 2, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 7, 7, 6, 66, 4];

function handleArayUniAndSort(item) {
  function unique(arr) {
    const uni = [];

    for (let value of arr) {
      if (!uni.includes(value)) uni.push(value);
    }
    return uni;
  }

  function sort(arr) {
    return arr.sort((a, b) => (a > b ? 1 : -1));
  }

  return sort(unique(item));
}

// console.log(handleArayUniAndSort(numArr));

// 5. Cho 1 mảng phức tạp [[1, 2, 3, [false, null]], [1, 5, 6, ["javascript"]], [888, 666, [90]]]. làm phẳng mảng [1, 2, 3, false, null, 1, 5, 6, 2, 3, "javascript", 888, 666, 90], và loại bỏ các giá trị falsy, và loại bỏ các kí tự trùng nhau

const complexArr = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["javascript"]],
  [888, 666, [90]],
];

function handleAray(arr) {
  const flatArray = arr.flat(2);
  const filter = filterFalsy(flatArray);
  const result = handleArayUniAndSort(filter);

  return result;
}

// console.log(handleAray(complexArr));

// console.log(handleAray(complexArr, filterFalsy, uniqueAndSort));

// 6. Đảo ngược số nguyên. Ví dụ 123 -> 4321 -567 -> -756

function reverseNumber(number) {
  const reverNum = reserse(number);
  const result = parseInt(reverNum) * Math.sign(number);

  return result;
}

// console.log(reverseNumber(-567));

// 7. Viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 cho tới số nguyên đó rồi kiểm tra nếu số đó chia hết cho 2 thì in ra chữ "Fizz", nếu chia hết cho 3 thì in ra chữ "Buzz", nếu chia hết cho 2, 3 thì in ra "FizzBuzz"

function fizzbuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 2 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    }
  }
}

// fizzbuzz(6);

// 8. Cho 1 chuỗi bất kỳ, đếm số lượng kí tự `vowels` có trong chuỗi. (vowels) là các kí tự u e o a i. Ví dụ "evondev" -> 3

function countVowels(str) {
  let count = 0;
  const vowels = "ueoai";
  const item = str.toLowerCase();

  for (let i = 0; i < item.length; i++) {
    // console.log(i);
    if (vowels.includes(item[i])) count++;
  }

  return count;
}

// console.log(countVowels("Evondev"));

// 9. Viết 1 function xử lý từ 1 mảng lớn thành nhiều mảng con dựa vào một số nguyên đầu vào. Ví dụ ([1,2,3,4,5], 2) -> [[1,2], [3,4], 5]

function handleSplitArr(arr, number) {
  const result = [];
  for (let i = 0; i < arr.length; i += number) {
    result.push(arr.slice(i, number + i));
  }

  return result;
}

// console.log(handleSplitArr([1, 2, 3, 4, 5], 2));

// ------------------------------------------------------------------object-------------------------------------------------------
// 1. viết 1 function kiểm tra value có phải là obj hay không ?

function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null)
    return true;

  return false;
}

// console.log(isObject({}));

// 2. viết 1 function trả về 1 mảng gồm key, value dựa vào obj {a: 1, b: 2} -> [["a", 1], ["b", 2]], viết theo 3 cách (entries, object.key, forIn)

function entriesobject(value) {
  if (!isObject(value)) return;

  // c1
  // const result = Object.entries(value);

  // c2
  //[a, b].map(item => {[]})
  // const result = Object.keys(value).map((item) => [item, value[item]]);

  // c3
  const result = [];
  for (let item in value) {
    result.push([item, value[item]]);
  }

  return result;
}

// console.log(entriesobject({ a: 1, b: 2 }));

// 3. viết 1 phương thức có tên là without xóa đi phần tử dựa vào key truyền vào ({a: 1, b: 2}, "b") => {a: 1}

function without(obj, ...key) {
  if (!isObject(obj)) return;
  const result = { ...obj };

  key.map((keys) => delete result[keys]);

  return result;
}

// console.log(without({ a: 1, b: 2 }, "a"));

// 4. viết 1 function kiểm tra 2 obj truyền vào có bằng nhau không

function compareObj(obj1, obj2) {
  if (!(isObject(obj1) && isObject(obj2))) return;

  const keyObj1 = Object.keys(obj1);
  const keyObj2 = Object.keys(obj2);

  if (keyObj1.length === keyObj2.length) {
    return keyObj1.every((item) => obj1[item] === obj2[item]);
  }

  return false;
}

// console.log(compareObj({ a: 1, b: 2 }, { a: 1, b: 3 }));

// ------------------------------------------------------------------deQuy (recursive)-------------------------------------------------------

// 1. Dùng đệ quy làm phẳng mảng phức tạp sau
const complexArrRecur = [
  [1, 2, 3],
  [3, 4, 5],
  9,
  [
    [2, 3],
    [2, 3, 5],
    [1, 2],
  ],
];

// [1,2,3,3,4,5,2,3,2,3,5,1,2]
function flatArrayComlex(arr, deep) {
  const result =
    deep > 0
      ? arr.reduce(
          (a, val) =>
            a.concat(Array.isArray(val) ? flatArrayComlex(val, deep - 1) : val),
          []
        )
      : arr.slice();
  return result;
}
console.log(flatArrayComlex(complexArrRecur, Infinity));
