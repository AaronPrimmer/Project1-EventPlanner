// TODO
// Grab event input and search on serpapi for information & display
// Save info to local storage for quick links
// Do we want to use jquery and/or dayjs?
// When user searches for destination, grab weather from weatherapi for current and 5 days
// When user clicks on event, search for flight info to destination
//

const airlineWebsites = {
  american: "https://www.aa.com",
  delta: "https://www.delta.com",
  united: "https://www.united.com",
  southwest: "https://www.southwest.com",
  "air canada": "https://www.aircanada.com",
  "british airways": "https://www.britishairways.com",
  lufthansa: "https://www.lufthansa.com",
  "air france": "https://www.airfrance.us",
  emirates: "https://www.emirates.com",
  "qatar airways": "https://www.qatarairways.com",
  singapore: "https://www.singaporeair.com",
  "qantas airways": "https://www.qantas.com",
  "aer lingus": "https://www.aerlingus.com",
  alaska: "https://www.alaskaair.com",
  spirit: "https://www.spirit.com",
};

// Given the results array, display events to the page
function displayEventsData(eventsData) {
  let eventResults = [];
  for (let eventData of eventsData) {
    let address = eventData.address[0];
    eventResults.push({
      title: eventData.title,
      venueName: address.split(",", 2)[0],
      location: `${address.split(",", 2)[1]}, ${eventData.address[1]}`,
      description: eventData.description,
      startDate: eventData.date.start_date,
      when: eventData.date.when,
      thumbnail: eventData.thumbnail,
      ticketSource: eventData.ticket_info[0].source,
      ticketLink: eventData.ticket_info[0].link,
    });
  }
  console.log(eventResults);
}

// Gets the html for display of info
function getDisplayHTML(data) {
  let addressString = data.address[0];
  return `<div>
      <h3>${data.title}</h3>
      <p>${addressString.split(",", 2)[0]}</p>
      <p>${addressString.split(",", 2)[1]}, ${data.address[1]}</p>
      <p>${data.description}</p>
    </div>`;
}

// Gets the html for display of info
function getDisplayFlightHTML(data) {
  let flightsInfo = [];
  if (data.flights.length >= 2) {
    for (let flight of data.flights) {
      flightsInfo.push({
        airline: flight.airline,
        airlineLink: returnAirlineLink(flight.airline.toLowerCase()),
        logo: flight.airline_logo,
        class: flight.travel_class,
        flightNumber: flight.flight_number,
        departureTime: flight.departure_airport.time,
        departureAirport: flight.departure_airport.name,
        arrivalAirport: flight.arrival_airport.name,
        price: data.price,
      });
    }

    console.log(flightsInfo);

    return flightsInfo;
  }
}

// Goes through array and returns the link for the airline
function returnAirlineLink(airline) {
  let airlineLink = airlineWebsites[airline];

  if (airlineLink) {
    return airlineLink;
  } else {
    return "#";
  }
}

// Displays flights to the screen
function displayFlights(flightsData) {
  for (let flightData of flightsData) {
    let flightHTML = getDisplayFlightHTML(flightData);
  }
}

displayEventsData(eventAPIData.events_results);

displayFlights(secondFlight.best_flights);
