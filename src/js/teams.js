// DATA FOR TEAM AND DRIVERS
const drivers = [
  {
    name: "Lewis Hamilton",
    team: "Mercedes",
    gpsEntered: 355,
    gpWins: 105,
    championships: 7,
    image: "../assets/images/drivers/driver_lewis-hamilton.avif",
    link: "./drivers/hamilton.html",
  },
  {
    name: "George Russell",
    team: "Mercedes",
    gpsEntered: 127,
    gpWins: 3,
    championships: 0,
    image: "../assets/images/drivers/driver_george-russell.avif",
    link: "./drivers/russell.html",
  },
  {
    name: "Max Verstappen",
    team: "Red Bull",
    gpsEntered: 208,
    gpWins: 63,
    championships: 3,
    image: "../assets/images/drivers/driver_max-verstappen.avif",
    link: "./drivers/verstappen.html",
  },
  {
    name: "Sergio Perez",
    team: "Red Bull",
    gpsEntered: 281,
    gpWins: 6,
    championships: 0,
    image: "../assets/images/drivers/driver_sergio-perez.avif",
    link: "./drivers/perez.html",
  },
  {
    name: "Charles Leclerc",
    team: "Ferrari",
    gpsEntered: 148,
    gpWins: 8,
    championships: 0,
    image: "../assets/images/drivers/driver_charles-leclerc.avif",
    link: "./drivers/leclerc.html",
  },
  {
    name: "Carlos Sainz",
    team: "Ferrari",
    gpsEntered: 207,
    gpWins: 4,
    championships: 0,
    image: "../assets/images/drivers/driver_carlos-sainz.avif",
    link: "./drivers/sainz.html",
  },
  {
    name: "Lando Norris",
    team: "Mclaren",
    gpsEntered: 127,
    gpWins: 3,
    championships: 0,
    image: "../assets/images/drivers/driver_lando-norris.avif",
    link: "./drivers/norris.html",
  },
  {
    name: "Oscar Piastri",
    team: "Mclaren",
    gpsEntered: 45,
    gpWins: 2,
    championships: 0,
    image: "../assets/images/drivers/driver_oscar-piastri.avif",
    link: "./drivers/piastri.html",
  },
  {
    name: "Alexander Albon",
    team: "Williams",
    gpsEntered: 104,
    gpWins: 0,
    championships: 0,
    image: "../assets/images/drivers/driver_alexander-albon.avif",
    link: "./drivers/albon.html",
  },
  {
    name: "Franco Colapinto",
    team: "Williams",
    gpsEntered: 8,
    gpWins: 0,
    championships: 0,
    image: "../assets/images/drivers/driver_franco-colapinto.avif",
    link: "./drivers/colapinto.html",
  },
  {
    name: "Yuki Tsunoda",
    team: "RB",
    gpsEntered: 89,
    gpWins: 0,
    championships: 0,
    image: "../assets/images/drivers/driver_yuki-tsunoda.avif",
    link: "./drivers/tsunoda.html",
  },
  {
    name: "Liam Lawson",
    team: "RB",
    gpsEntered: 10,
    gpWins: 0,
    championships: 0,
    image: "../assets/images/drivers/driver_liam-lawson.avif",
    link: "./drivers/lawson.html",
  },
  {
    name: "Valtteri Bottas",
    team: "Kick Sauber",
    gpsEntered: 245,
    gpWins: 10,
    championships: 0,
    image: "../assets/images/drivers/driver_valtteri-bottas.avif",
    link: "./drivers/bottas.html",
  },
  {
    name: "Zhou Guanyu",
    team: "Kick Sauber",
    gpsEntered: 67,
    gpWins: 0,
    championships: 0,
    image: "../assets/images/drivers/driver_zhou-guanyu.avif",
    link: "./drivers/guanyu.html",
  },
  {
    name: "Fernando Alsonso",
    team: "Aston Martin",
    gpsEntered: 403,
    gpWins: 32,
    championships: 2,
    image: "../assets/images/drivers/driver_fernando-alonso.avif",
    link: "./drivers/alonso.html",
  },
  {
    name: "Lance Stroll",
    team: "Aston Martin",
    gpsEntered: 166,
    gpWins: 0,
    championships: 0,
    image: "../assets/images/drivers/driver_lance-stroll.avif",
    link: "./drivers/stroll.html",
  },
  {
    name: "Nico Hulkenberg",
    team: "Haas",
    gpsEntered: 229,
    gpWins: 0,
    championships: 0,
    image: "../assets/images/drivers/driver_nico-hulkenberg.avif",
    link: "./drivers/hulkenberg.html",
  },
  {
    name: "Kevin Magnussen",
    team: "Haas",
    gpsEntered: 185,
    gpWins: 0,
    championships: 0,
    image: "../assets/images/drivers/driver_kevin-magnussen.avif",
    link: "./drivers/magnussen.html",
  },
  {
    name: "Pierre Gasly",
    team: "Alpine",
    gpsEntered: 153,
    gpWins: 1,
    championships: 0,
    image: "../assets/images/drivers/driver_pierre-gasly.avif",
    link: "./drivers/gasly.html",
  },
  {
    name: "Esteban Ocon",
    team: "Alpine",
    gpsEntered: 156,
    gpWins: 1,
    championships: 0,
    image: "../assets/images/drivers/driver_esteban-ocon.avif",
    link: "./drivers/ocon.html",
  },
];

const teams = [
  {
    name: "Mercedes",
    gpsEntered: 316,
    gpWins: 120,
    championships: 8,
    image: "../assets/images/teams/team_mercedes.avif",
    link: "./teams/mercedes.html",
  },
  {
    name: "Red Bull",
    gpsEntered: 393,
    gpWins: 122,
    championships: 6,
    image: "../assets/images/teams/team_red-bull.avif",
    link: "./teams/redbull.html",
  },
  {
    name: "Ferrari",
    gpsEntered: 1099,
    gpWins: 249,
    championships: 16,
    image: "../assets/images/teams/team_ferrari.avif",
    link: "./teams/ferrari.html",
  },
  {
    name: "Mclaren",
    gpsEntered: 973,
    gpWins: 188,
    championships: 8,
    image: "../assets/images/teams/team_mclaren.avif",
    link: "./teams/mclaren.html",
  },
  {
    name: "Williams",
    gpsEntered: 837,
    gpWins: 114,
    championships: 9,
    image: "../assets/images/teams/team_williams.avif",
    link: "./teams/williams.html",
  },
  {
    name: "RB",
    gpsEntered: 23,
    gpWins: 1,
    championships: 0,
    image: "../assets/images/teams/team_rb.avif",
    link: "./teams/rb.html",
  },
  {
    name: "Kick Sauber",
    gpsEntered: 488,
    gpWins: 1,
    championships: 0,
    image: "../assets/images/teams/team_kick-sauber.avif",
    link: "./teams/kicksauber.html",
  },
  {
    name: "Aston Martin",
    gpsEntered: 95,
    gpWins: 1,
    championships: 0,
    image: "../assets/images/teams/team_aston-martin.avif",
    link: "./teams/astonmartin.html",
  },
  {
    name: "Haas",
    gpsEntered: 189,
    gpWins: 0,
    championships: 0,
    image: "../assets/images/teams/team_haas.avif",
    link: "./teams/haas.html",
  },
  {
    name: "Alpine",
    gpsEntered: 89,
    gpWins: 21,
    championships: 2,
    image: "../assets/images/teams/team_alpine.avif",
    link: "./teams/alpine.html",
  },
];



// CONSTS FROM HTML ELEMENTS
const teamsGrid = document.querySelector(".teams-grid");
const driversTab = document.querySelector("#drivers-tab");
const teamsTab = document.querySelector("#teams-tab");
const filterButtons = document.querySelectorAll(".filters__option");





// RENDER CARDS
function renderItems(data) {
    teamsGrid.innerHTML = "";
  
    data.forEach(function (item) {
      const card = document.createElement("a");
      card.className = "teams-grid__item";
      card.href = item.link;
  
      card.innerHTML = `
        <img class="teams-grid__item-image" src="${item.image}" alt="${item.name}">
        <div class="teams-grid__item-middle">
          <h3 class="teams-grid__item-title">${item.name}</h3>
          <p class="teams-grid__item-team">${item.team || ""}</p>
        </div>
        <div class="teams-grid__item-right">
          <p class="teams-grid__item-info">GPs Entered: ${item.gpsEntered}</p>
          <p class="teams-grid__item-info">GP Wins: ${item.gpWins}</p>
          <p class="teams-grid__item-info">Championships: ${item.championships}</p>
        </div>
      `;
  
      teamsGrid.appendChild(card);
    });
  }





// SET ACTIVE TAB
function setActiveTab(tabId, data) {
    const tabs = document.querySelectorAll(".tabs__button");
  
    tabs.forEach(function (tab) {
        if (tab.id === tabId) {
          tab.classList.add("tabs__button--active");
        } else {
          tab.classList.remove("tabs__button--active");
        }
      });
    
      // RENDER TAB BASED ON FITLER GP-ENTERED AS DEFAULT
      renderItems(
        data.sort(function (a, b) {
          return b.gpsEntered - a.gpsEntered;
        })
      );
    }

  
 // EVENTLISTENER FOR TAB
driversTab.addEventListener("click", function () {
    setActiveTab("drivers-tab", drivers);
  });
  
  teamsTab.addEventListener("click", function () {
    setActiveTab("teams-tab", teams);
  });


// DEFAULT TAB AS TEAM
setActiveTab("teams-tab", teams);





// FILTERS
filterButtons.forEach(function (filter) {
  filter.addEventListener("click", function () {
    filterButtons.forEach(function (button) {
      button.classList.remove("filters__option--active");
    });
    filter.classList.add("filters__option--active");

    const activeData = teamsTab.classList.contains("tabs__button--active")
      ? teams
      : drivers;

    // SORT BASED ON FILTER
    let sortedData;
    if (filter.id === "filter-gp-wins") {
      sortedData = activeData.sort(function (a, b) {
        return b.gpWins - a.gpWins;
      });
    } else if (filter.id === "filter-gp-entered") {
      sortedData = activeData.sort(function (a, b) {
        return b.gpsEntered - a.gpsEntered;
      });
    } else if (filter.id === "filter-championships") {
      sortedData = activeData.sort(function (a, b) {
        return b.championships - a.championships;
      });
    } else {
      sortedData = activeData;
    }

    renderItems(sortedData);
  });
});



