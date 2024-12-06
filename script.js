(function () {
    document.getElementById('LatestButton').addEventListener("click", FetchData, false); //this is for 20 most recent earthquakes
    document.getElementById('submitdates').addEventListener("submit", FetchDataWithDates, false); //this is for earthquakes between 2 dates
})();
async function FetchDataWithDates(event) { //end point 1
    event.preventDefault(); //stops page refresh which would break the code
    const StartDate = document.getElementById('startdate').value;
    const EndDate = document.getElementById('enddate').value;
    const url = `https://everyearthquake.p.rapidapi.com/earthquakesByDate?startDate=${StartDate}&endDate=${EndDate}&start=1&count=100&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=1000&units=miles&magnitude=3&intensity=1`;
    const options = { //above displays earthquakes between 2 dates
        method: 'GET',
        headers: {
            'x-rapidapi-key': '800f202ea8mshd1d117000dca254p1ecd93jsnf7135bec8012',
            'x-rapidapi-host': 'everyearthquake.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        DisplayData(result.data);
    } catch (error) {
        console.error(error);
    };
}
async function FetchData() { //end point 2
    const url = 'https://everyearthquake.p.rapidapi.com/recentEarthquakes?interval=P1Y2M3W4DT1H2M3S&start=1&count=20&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=1000&units=miles&magnitude=3&intensity=1';
    const options = { //above displays recent earthquakes
    method: 'GET',
    headers: {
        'x-rapidapi-key': '800f202ea8mshd1d117000dca254p1ecd93jsnf7135bec8012',
        'x-rapidapi-host': 'everyearthquake.p.rapidapi.com'
    }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        DisplayData(result.data);
    } catch (error) {
        console.error(error);
    }
};
async function DisplayData(data) {
    data.forEach(quake => {
        const Div = document.createElement('div');

        /* //this is testing code i used to figure some stuff out
        const h3 = document.createElement('div');
        const Test = "TESTING";
        h3.textContent = Test;
        Div.appendChild(h3);
        */

       //following takes info from the object
        const title = document.createElement('h2');
        title.textContent = quake.title;

        const ID = document.createElement('h3');
        ID.textContent = "QuakeID: " + quake.id;

        const Magna = document.createElement('h3');
        Magna.textContent = "Magnitude: " + quake.magnitude;

        const Dates = document.createElement('h3');
        Dates.textContent = "Time: "+quake.date;

        const Place = document.createElement('h3');
        Place.textContent = "Location: " + quake.place;

        const Subn = document.createElement('h3');
        Subn.textContent = "City: " + quake.subnational;

        const Country = document.createElement('h3');
        Country.textContent = "Country: " + quake.country;
        //following appends to the DIV then appends the DIV to the BODY
        Div.appendChild(title);
        Div.appendChild(ID);
        Div.appendChild(Magna);
        Div.appendChild(Dates);
        Div.appendChild(Place);
        Div.appendChild(Subn);
        Div.appendChild(Country);
        document.body.appendChild(Div);
    });
};
