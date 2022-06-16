// function (myArray) {

//
//לולאת for-of//
//1////2//
// let elements=document.getElementsByClassName("my_class")
// function printElements() {
//     for(let runner of elements){
//         console.log(runner);
//     }
// }
// let myBtn = document.getElementById("btn1");
// let elements = document.getElementsByClassName("my_class");
// function replaceText() {
//   for (let runner of elements) {
//     runner.style.color = "blue";
//   }
// }
// myBtn.onclick = function () {
//   replaceText();
// };
// let myBtn2 = document.getElementById("btn2");
// function replaceText2() {
//   for (let runner of elements) {
//     runner.innerText = "hello";
//   }
// }
// myBtn2.onclick = function () {
//   replaceText2();
// };
//3//
// myObj={
//     name
// }
// function name(params) {

// }
//5//
// const userObj = {
//   fName: "",
//   lName: "",
//   age: ""
// };

// function createInputElement() {
//   for (let key in userObj) {
//     let inputLabel = document.createElement("label");
//     inputLabel.innerText = `Enter ${key}:`;
//     document.body.append(inputLabel);

//     let fieldInput = document.createElement("input");
//     fieldInput.id = `${key}_input`;
//     document.body.append(fieldInput);
//   }

//   let btn = document.createElement("button");
//   btn.innerText = "SEND";
//   btn.addEventListener("click", assignValuesAndPrintUserData);
//   document.body.append(btn);

// }
// createInputElement();

// function assignValuesAndPrintUserData() {
//   for (let key in userObj) {
//     userObj[key] = document.getElementById(`${key}_input`).value;
//     let myH1 = document.createElement("h1");
//     myH1.innerText = `${key} : ${userObj[key]}`;
//     document.body.append(myH1);
//   }
// }
objArray = [{}, {}, {}, {}];

function createObjectArray() {
  objArray.forEach(item() => {
    objArray = {
      firstName: "",
      lastName: "",
      birthDate: "",
      email: ""
    }
  });
  console.log(objArray);
}
