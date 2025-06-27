
let image  = document.getElementById("personImage");
let personName   = document.getElementById("personName");
let gender = document.getElementById("gender");
let city   = document.getElementById("city");

$.ajax({
  url: "https://randomuser.me/api/",
  dataType: "json",

  success: function (data) {
    console.log(data.results[0]);
    image.src = data.results[0].picture.large;
    let fullname = data.results[0].name;
    personName.innerHTML = fullname.title + " " + fullname.first + " " + fullname.last;
    gender.innerHTML = data.results[0].gender;
    city.innerHTML = data.results[0].location.city;
  },

  error: function (xhr, status, err) {
    console.error("RandomUser API failed:", err);
  }
});
