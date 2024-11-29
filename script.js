const url = 'https://everyearthquake.p.rapidapi.com/recentEarthquakes?interval=P1Y2M3W4DT1H2M3S&start=1&count=20&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=1000&units=miles&magnitude=3&intensity=1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '800f202ea8mshd1d117000dca254p1ecd93jsnf7135bec8012',
		'x-rapidapi-host': 'everyearthquake.p.rapidapi.com'
	}
};
async function FetchData(){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        DisplayData(result.data);
    } catch (error) {
        console.error(error);
    }
}
async function DisplayData(data){
    data.forEach(quake => {
        const Div = document.createElement('div');
        
        /*
        const h3 = document.createElement('div');
        const Test = "TESTING";
        h3.textContent = Test;
        Div.appendChild(h3);
        */

        const h1 = document.createElement('h2');
        h1.textContent = quake.title;

        const h2 = document.createElement('h3');
        h2.textContent = "QuakeID: "+quake.id;

        const h22 = document.createElement('h3');
        h22.textContent = "Magnitude: "+quake.magnitude;

        const h222 = document.createElement('h3');
        h222.textContent = "Time: "+quake.date;

        const h2222 = document.createElement('h3');
        h2222.textContent = "Location: "+quake.place;

        const h222222 = document.createElement('h3');
        h222222.textContent = "City: "+quake.subnational;

        const h2222222 = document.createElement('h3');
        h2222222.textContent = "Country: "+quake.country;

        Div.appendChild(h1);
        Div.appendChild(h2);
        Div.appendChild(h22);
        Div.appendChild(h222);
        Div.appendChild(h2222);
        Div.appendChild(h222222);
        Div.appendChild(h2222222);
        document.body.appendChild(Div);
    });
};
FetchData();
