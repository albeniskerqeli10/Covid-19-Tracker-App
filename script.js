async function getData() {
  let newcase = document.querySelector('#case');
  let newdeath = document.querySelector('#death');
  let newrecovery = document.querySelector('#recovery');
  let totalrow = document.querySelector('#total');
  let api =  'https://api.covid19api.com/summary';
const response = await fetch(api);
const data=  await response.json();

newcase.innerHTML = `
<h2>New Confirmed</h2>
<h1>${data.Global.NewConfirmed}</h1>
`
newdeath.innerHTML = `
<h2>New Deaths</h2>
<h1>${data.Global.NewDeaths}</h1>
`
newrecovery.innerHTML = `
<h2>New Recovered</h2>
<h1>${data.Global.NewRecovered}</h1>
`

let totalcase = document.querySelector('#totalcase')
let totaldeath = document.querySelector('#totaldeath')
let totalrecovery = document.querySelector('#totalrecovery')


totalcase.innerHTML = `
<h2>Total Cases</h2>
<h1>${data.Global.TotalConfirmed}</h1>
`

totaldeath.innerHTML = `
<h2>Total Deaths</h2>
<h1>${data.Global.TotalDeaths}</h1>
`


totalrecovery.innerHTML = `
<h2>Total Recovered</h2>
<h1>${data.Global.TotalRecovered}</h1>
`

console.log(data);
}

getData();