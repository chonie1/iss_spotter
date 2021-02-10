const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  
  for (const pass of passTimes) {
    let date = new Date(pass.risetime * 1000).toLocaleString();
    console.log(`Next pass at ${date} for ${pass.duration} seconds!`);
  }

});


