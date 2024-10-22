
function superbowlWin(games) {
     for (let i = 0; i < games.length; i++) {
         if (games[i].result === "W") {
             return games[i].year;
         }
     }
     return undefined;
 }
  