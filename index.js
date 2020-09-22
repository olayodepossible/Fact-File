let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");
let type_number = document.querySelector("#type-number");
let type_date = document.querySelector("#type-date");
let radios = document.getElementsByName("fact");

let numberInput = document.querySelector("#numberInput");
let dateInput = document.querySelector("#dateInput");

numberInput.addEventListener("input", getFactFetch);
dateInput.addEventListener("input", getDateFact);

function showDiv(value) {
  console.log("from show", value);
  if (value !== "number") {
    type_number.style.display = "none";
    type_date.style.display = "block";
    return;
  } else {
    type_date.style.display = "none";
    type_number.style.display = "block";
  }
}

/* function getFactAjax() {
  let number = numberInput.value;

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://numbersapi.com/" + number);

  xhr.onload = function () {
    if (this.status == 200 && number != "") {
      //   console.log(typeof this.response);
      fact.style.display = "block";
      factText.innerText = this.response;
    }
  };

  xhr.send();
} */

function getFactFetch() {
  let number = numberInput.value;
  fetch(`http://numbersapi.com/${number}`)
    .then((response) => response.text())
    .then((data) => {
      fact.style.display = "block";
      factText.innerText = data;
    })
    .catch((err) => console.log(err));
}

function getDateFact() {
  let date = dateInput.value.split("-");
  fetch(`http://numbersapi.com/${date[1]}/${date[2]}/date`)
    .then((response) => response.text())
    .then((data) => {
      if (Array.isArray(date) && date.length > 0) {
        fact.style.display = "block";
        factText.innerText = data;
      }
    })
    .catch((err) => console.log(err));
}
