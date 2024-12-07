// COLOR FOR TEAMS
document.addEventListener("DOMContentLoaded", function () {
  const teamColors = {
    "Formula One | Red Bull Racing": {
      backgroundColor: "#1E41FF",
      fontColor: "#FFFFFF",
    },
    "Formula One | Mercedes": {
      backgroundColor: "#00D2BE",
      fontColor: "#000000",
    },
    "Formula One | Scuderia Ferrari": {
      backgroundColor: "#DC0000",
      fontColor: "#FFFFFF",
    },
    "Formula One | McLaren": {
      backgroundColor: "#FF8700",
      fontColor: "#000000",
    },
    "Formula One | Williams Racing": {
      backgroundColor: "#005AFF",
      fontColor: "#FFFFFF",
    },
    "Formula One | Aston Martin": {
      backgroundColor: "#006F62",
      fontColor: "#FFFFFF",
    },
    "Formula One | Visa Cash App RB": {
      backgroundColor: "#8A00FF",
      fontColor: "#FFFFFF",
    },
    "Formula One | Alpine": {
      backgroundColor: "#2293D1",
      fontColor: "#FFFFFF",
    },
    "Formula One | Haas": {
      backgroundColor: "#FFFFFF",
      fontColor: "#000000",
    },
    "Formula One | Kick Sauber": {
      backgroundColor: "#E5E5E5",
      fontColor: "#900000",
    },
  };



  // GET TEAM NAME FROM <title> IN HTML
  const teamName = document.title;


  
  // CHECK TEAM NAME IN COLOR LIST
  if (teamColors[teamName]) {
    
    const colors = teamColors[teamName];
    document.body.style.backgroundColor = colors.backgroundColor;
    document.body.style.color = colors.fontColor;
  }
});
