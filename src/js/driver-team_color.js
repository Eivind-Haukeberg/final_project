// COLOR FOR TEAMS AND DRIVERS
document.addEventListener("DOMContentLoaded", function () {
  const teamColors = {
    "Formula One | Red Bull Racing": {
      backgroundColor: "#121f45",
      fontColor: "#FFFFFF",
    },
    "Formula One | Max Verstappen": {
      backgroundColor: "#121f45",
      fontColor: "#FFFFFF",
    },
    "Formula One | Sergio Perez": {
      backgroundColor: "#121f45",
      fontColor: "#FFFFFF",
    },
    "Formula One | Mercedes": {
      backgroundColor: "#00a19c",
      fontColor: "#FFFFFF",
    },
    "Formula One | Lewis Hamilton": {
      backgroundColor: "#00a19c",
      fontColor: "#FFFFFF",
    },
    "Formula One | George Russell": {
      backgroundColor: "#00a19c",
      fontColor: "#FFFFFF",
    },
    "Formula One | Scuderia Ferrari": {
      backgroundColor: "#d12f28",
      fontColor: "#FFFFFF",
    },
    "Formula One | Charles Leclerc": {
      backgroundColor: "#d12f28",
      fontColor: "#FFFFFF",
    },
    "Formula One | Carlos Sainz": {
      backgroundColor: "#d12f28",
      fontColor: "#FFFFFF",
    },
    "Formula One | McLaren": {
      backgroundColor: "#FF8000",
      fontColor: "#000000",
    },
    "Formula One | Lando Norris": {
      backgroundColor: "#FF8000",
      fontColor: "#000000",
    },
    "Formula One | Oscar Piastri": {
      backgroundColor: "#FF8000",
      fontColor: "#000000",
    },
    "Formula One | Williams Racing": {
      backgroundColor: "#0100fe",
      fontColor: "#FFFFFF",
    },
    "Formula One | Alexander Albon": {
      backgroundColor: "#0100fe",
      fontColor: "#FFFFFF",
    },
    "Formula One | Franco Colapinto": {
      backgroundColor: "#0100fe",
      fontColor: "#FFFFFF",
    },
    "Formula One | Aston Martin": {
      backgroundColor: "#00594f",
      fontColor: "#FFFFFF",
    },
    "Formula One | Fernando Alonso": {
      backgroundColor: "#00594f",
      fontColor: "#FFFFFF",
    },
    "Formula One | Lance Stroll": {
      backgroundColor: "#00594f",
      fontColor: "#FFFFFF",
    },
    "Formula One | Visa Cash App RB": {
      backgroundColor: "#1434cb",
      fontColor: "#FFFFFF",
    },
    "Formula One | Yuki Tsunoda": {
      backgroundColor: "#1434cb",
      fontColor: "#FFFFFF",
    },
    "Formula One | Liam Lawson": {
      backgroundColor: "#1434cb",
      fontColor: "#FFFFFF",
    },
    "Formula One | Alpine": {
      backgroundColor: "#ff6ef3",
      fontColor: "#000000",
    },
    "Formula One | Pierre Gasly": {
      backgroundColor: "#ff6ef3",
      fontColor: "#000000",
    },
    "Formula One | Esteban Ocon": {
      backgroundColor: "#ff6ef3",
      fontColor: "#000000",
    },
    "Formula One | Haas": {
      backgroundColor: "#FFFFFF",
      fontColor: "#000000",
    },
    "Formula One | Nico Hulkenberg": {
      backgroundColor: "#FFFFFF",
      fontColor: "#000000",
    },
    "Formula One | Kevin Magnussen": {
      backgroundColor: "#FFFFFF",
      fontColor: "#000000",
    },
    "Formula One | Kick Sauber": {
      backgroundColor: "#00e701",
      fontColor: "#0b0e0f",
    },
    "Formula One | Valtteri Bottas": {
      backgroundColor: "#00e701",
      fontColor: "#0b0e0f",
    },
    "Formula One | Zhou Guanyu": {
      backgroundColor: "#00e701",
      fontColor: "#0b0e0f",
    },
  };



  // GET TEAM NAME FROM <title> IN HTML
  const teamName = document.title;


  
  // CHECK TEAM NAME IN COLOR LIST VS TEAM NAME FORM <title>
  if (teamColors[teamName]) {        // why is this in [] ? why is it not (teamColors === teamName)?
    
    const colors = teamColors[teamName];

    // CHANGE THE team__info COLORS
    const teamInfoSection = document.querySelector(".team__info");
    if (teamInfoSection) {
      teamInfoSection.style.backgroundColor = colors.backgroundColor;
      teamInfoSection.style.color = colors.fontColor;
    }
   // CHANGE THE driver__card SECTION COLORS
   const driverCards = document.querySelectorAll(".driver-card");
   if (driverCards) {
     driverCards.forEach(function (card) {
       card.style.backgroundColor = colors.backgroundColor;
       card.style.color = colors.fontColor;
     });
   }
 }
});
