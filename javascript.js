let baseURL = "https://api.gbif.org/v1/enumeration/country";
let myRequest = new XMLHttpRequest();
myRequest.open("GET", baseURL);

myRequest.onload = () => {
  if (myRequest.readyState == 4 && myRequest.status == 200) {
    let table = document.querySelector(".all-contry");
    let convertJson = JSON.parse(myRequest.responseText);
    let mybody = document.querySelector("#tableBody");

    convertJson.forEach((element) => {
      let row = mybody.insertRow();
      //----number----
      let numberCell = row.insertCell();
      numberCell.append(element.isoNumerical);
      //---country-----
      let countryCell = row.insertCell();
      countryCell.append(element.title);
      //----Continent----
      let continentCell = row.insertCell();
      continentCell.append(element.gbifRegion);
    });
  }
};

let optionSelect = document.querySelector("#allRegin");

optionSelect.addEventListener("change", (event) => {

  let oldTbody = document.querySelector("#tableBody");
  while (oldTbody.firstChild) {
    oldTbody.removeChild(oldTbody.firstChild);
  }

  let value = optionSelect.value;
  let convertJson = JSON.parse(myRequest.responseText);

  convertJson.forEach((element) => {
    let mybody = document.querySelector("#tableBody");

    if (value == element.gbifRegion) {
      let row = mybody.insertRow();
      //----number----
      let numberCell = row.insertCell();
      numberCell.append(element.isoNumerical);
      //   //---country-----
      let countryCell = row.insertCell();
      countryCell.append(element.title);
      //----Continent----
      let continentCell = row.insertCell();
      continentCell.append(element.gbifRegion);
    }
  });
});

myRequest.send();
