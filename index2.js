const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(passTimes => {
    console.log(passTimes);
    for (const pass of passTimes) {
      let date = new Date(pass.risetime * 1000).toLocaleString();
      console.log(`Next pass at ${date} for ${pass.duration} seconds!`);
    }
  })
  .catch(error => console.log("It didn't work: ", error.message));
  
