// import data from "/static/data/data.json";
let citis = document.getElementById("city");
let districts = document.getElementById("district");
let wards = document.getElementById("ward");
let data = fetch("/data/data.json")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    renderCity(res);
  });

console.log(data);
function renderCity(data) {
  for (const x of data) {
    console.log(x);
    citis.options[citis.options.length] = new Option(x.Name, x.Id);
    // console.log(x.Name, x.Id);
  }
  citis.onchange = function () {
    district.length = 1;
    ward.length = 1;
    if (this.value != "") {
      const result = data.filter((n) => n.Id === this.value);

      for (const k of result[0].Districts) {
        district.options[district.options.length] = new Option(k.Name, k.Id);
      }
    }
  };
  district.onchange = function () {
    ward.length = 1;
    const dataCity = data.filter((n) => n.Id === citis.value);
    if (this.value != "") {
      const dataWards = dataCity[0].Districts.filter(
        (n) => n.Id === this.value,
      )[0].Wards;

      for (const w of dataWards) {
        wards.options[wards.options.length] = new Option(w.Name, w.Id);
      }
    }
  };
}

// var Parameter = {
//     url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",
//     method: "GET",
//     responseType: "application/json",
// };
// var promise = axios(Parameter);
// promise.then(function (result) {
//     renderCity(result.data);
// });
