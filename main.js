//Declarations
let btn = document.querySelector("btn");
let form = document.querySelector("form");
let username = document.querySelector(".name");
let email = document.querySelector("#email");
let date = document.querySelector("#date");
let emailValidation = false;
let dateValidation = false;
let nameValidation = false;

username.addEventListener("blur", function () {
  if (/^[\w-]{3,}\s[\w-]{3,}$/.test(username.value)) {
    nameValidation = true;
    console.log("success");
  } else {
    console.log("failed");
    Swal.fire({
      title: "Oh Oh!",
      text: "Your first and last name must be more than one letter",
      icon: "info",
    });
  }
});

date.addEventListener("blur", function () {
  if (/^\(\d{4}\/\d{2}\/\d{2}\)$/gi.test(date.value)) {
    dateValidation = true;
    console.log("success");
  } else {
    console.log("failed");
    Swal.fire({
      title: "Oh Oh!",
      text: "Please write the date like this (1997/11/11)",
      icon: "info",
    });
  }
});

email.addEventListener("blur", function () {
  if (/^[\w\-\.]+\@\w+\.\w+(\.\w+)?$/.test(email.value)) {
    emailValidation = true;
  } else {
    console.log("failed");
    Swal.fire({
      title: "Oh Oh!",
      text: "Write you email",
      icon: "info",
    });
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (/^[\w-]{3,}\s[\w-]{3,}$/.test(username.value)) {
    nameValidation = true;
  }
  if (/^\(\d{4}\/\d{2}\/\d{2}\)$/gi.test(date.value)) {
    dateValidation = true;
  }
  if (/^[\w\-\.]+\@\w+\.\w+(\.\w+)?$/.test(email.value)) {
    emailValidation = true;
  }
  if (
    nameValidation === true &&
    dateValidation === true &&
    emailValidation === true
  ) {
    username.value = "";
    date.value = "";
    email.value = "";
    Swal.fire({
      title: "Congrats!",
      text: "You data is correct",
      icon: "success",
    });
  } else {
    Swal.fire({
      title: "Be Careful!",
      text: "There is one field or more missing",
      icon: "error",
    });
  }
});
