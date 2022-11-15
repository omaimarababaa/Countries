//------invokeValue------------------
let optionSelect = document.querySelector("#allRegin");
function onChange() {
  let value = optionSelect.value;
  optionSelect.onchange = onChange;
  console.log(value);
}
onChange();

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.gbif.org/v1/enumeration/country");
console.log(myRequest);
myRequest.onload = () => {
  if (myRequest.readyState == 4 && myRequest.status == 200) {
    let table = document.querySelector(".all-contry");
    let convertJson = JSON.parse(myRequest.responseText);
    convertJson.forEach((element) => {
      // console.log(element);
      let row = table.insertRow();
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
     
      //------------------------------------------
      //------invokeValue------------------
    //   let optionSelect = document.querySelector("#allRegin");
      
    //   function onChange() {
    //     let value = optionSelect.value;
        
    //     //console.log(value);
    //     return value;
    //   }
      
    //   optionSelect.onchange = onChange;
    //   let regionValue=onChange();
    //   console.log(regionValue);

    //   let allRegin = element.gbifRegion;
    //   console.log(allRegin);
    //   convertJson.forEach((element) => {
    //     if (value == allRegin) {
    //       let continentCell = row.insertCell();
    //       continentCell.append(element.allRegin);
    //       console.log(allRegin);
    //     }
    //   });

      //------------------------------------------------------
   
  }
};

//let =document.querySelector('option')[7].value;

myRequest.send();
