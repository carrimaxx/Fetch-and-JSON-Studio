// TODO: add code here
window.addEventListener("load", function () {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      // Bonus mission: sort
      json.sort((a, b) => a.hoursInSpace - b.hoursInSpace);

      for (let i = 0; i < json.length; i++) {
        const first = json[i].firstName;
        const last = json[i].lastName;
        const skills = json[i].skills;
        const hours = json[i].hoursInSpace;
        const activeOrNot = json[i].active;
        const image = json[i].picture;

        const container = document.getElementById("container");
        container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                  <h3>${first} ${last}</h3>
                  <ul>
                    <li>Hours in space: ${hours}</li>
                    <li>Active: <span class="active">${activeOrNot}</span></li>
                    <li>Skills: ${skills}</li>
                  </ul>
                </div>
                <img class="avatar" src="${image}">
                </div>
                `;

        // Bonus mission: Change text color to green
        const span = document.getElementsByClassName("active");
        for (let i = 0; i < span.length; i++) {
          if (span[i].textContent === "true") {
            span[i].classList.add("green");
          }
        }
      }

      // Bonus mission: Number of astronauts
      const numOfAstros = document.querySelector(".numberOfAstros");
      numOfAstros.innerHTML = `Number of astronauts: ${json.length}`;
    });
  });
});
