
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */
const fetch = require('node-fetch');
//reservation data
const reservations = {
  name: "Ehab Wasel",
  numberOfPeople: 5
}
async function makeReservation() {
  
    try{

      const response = await fetch('https://reservation100-sandbox.mxapps.io/api/reservations',
      {
        method: 'POST',
          body:    JSON.stringify(reservations),
          headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      console.log(data);
    }
    catch(err){
      console.log(err.message);
    }
}


makeReservation();

 


