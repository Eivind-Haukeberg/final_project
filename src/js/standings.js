// STANDINGS DATA
const drivers = [
  { name: "Lewis Hamilton", points: 211 },
  { name: "George Russell", points: 235 },
  { name: "Max Verstappen", points: 429 },
  { name: "Sergio Perez", points: 152 },
  { name: "Charles Leclerc", points: 341 },
  { name: "Carlos Sainz", points: 272 },
  { name: "Fernando Alonso", points: 68 },
  { name: "Lance Stroll", points: 24 },
  { name: "Pierre Gasly", points: 36 },
  { name: "Esteban Ocon", points: 23 },
  { name: "Nico Hulkenberg", points: 37 },
  { name: "Kevin Magnussen", points: 16 },
  { name: "Yuki Tsunoda", points: 30 },
  { name: "Liam Lawson", points: 4 },
  { name: "Valteri Bottas", points: 0 },
  { name: "Zhou Guanyu", points: 4 },
  { name: "Alexander Albon", points: 12 },
  { name: "Franco Colapinto", points: 5 },
  { name: "Lando Norris", points: 349 },
  { name: "Oscar Piastri", points: 291 },
  { name: "Oliver Bearman", points: 7 },
  { name: "Daniel Ricciardo", points: 12 },
  { name: "Logan Sargeant", points: 0 },
];

const teams = [
  { name: "Mercedes", points: 446 },
  { name: "Red Bull Racing", points: 581 },
  { name: "Ferrari", points: 619 },
  { name: "Aston Martin", points: 92 },
  { name: "Alpine", points: 59 },
  { name: "Haas", points: 54 },
  { name: "RB", points: 46 },
  { name: "Kick Sauber", points: 4 },
  { name: "Williams", points: 17 },
  { name: "Mclaren", points: 640 },
];




// CONSTS FROM HTML ELEMENTS
const driversTab = document.querySelector("#drivers-tab");
const teamsTab = document.querySelector("#teams-tab");






// FUNCTION TO RENDER STANDINGS TABLE
function renderStandings(data) {
  const standingsBody = document.querySelector(".standings__body");
  standingsBody.innerHTML = "";

  // SORT DATA BY POINTS AND CREATE ROWS
  data.sort(function (a, b) {
    return b.points - a.points;
  });

  data.forEach(function (item, index) {
    const row = document.createElement("tr");
    row.className = "standings__body-row";

    // ADD NUMBER IN RANK COLUMN
    const rankCell = document.createElement("td");
    rankCell.className = "standings__cell";
    rankCell.textContent = index + 1;
    row.appendChild(rankCell);

    // ADD THE NAME
    const nameCell = document.createElement("td");
    nameCell.className = "standings__cell";
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    // ADD THE POINTS
    const pointsCell = document.createElement("td");
    pointsCell.className = "standings__cell";
    pointsCell.textContent = item.points;
    row.appendChild(pointsCell);

    // ADD ROW TO THE TABLE BODY
    standingsBody.appendChild(row);
  });
}




// SET ACTIVE TAB
function setActiveTab(tabId) {
  const tabs = document.querySelectorAll(".standings__tab");

  tabs.forEach(function (tab) {
    if (tab.id === tabId) {
      tab.classList.add("standings__tab--active");
    } else {
      tab.classList.remove("standings__tab--active");
    }
  });
}

// EVENT LISTENER FOR TABS
driversTab.addEventListener("click", function () {
  renderStandings(drivers);
  setActiveTab("drivers-tab");
});

teamsTab.addEventListener("click", function () {
  renderStandings(teams);
  setActiveTab("teams-tab");
});

// SET DRIVERS AS DEFAULT
renderStandings(drivers);
