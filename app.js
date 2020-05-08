let url = 'https://api.covid19india.org/data.json'

const myDiv = document.querySelector('#myDisp')

function showTotal(totalConfirm, totalRecov,totalDec) {
     let disptotal = document.querySelector("#totalDisplay")
     disptotal.innerHTML = ` <br> <br> <div class="container"> <div class="card text-white bg-primary mb-3 float-left" style="max-width: 18rem;">
     <div class="card-header"> <h3> Total Confirmed </h3> </div>
     <div class="card-body">
       <h5 class="card-title">${totalConfirm}</h5>
      </div>
   </div>
   <div class="card text-white bg-success mb-3 float-left" style="max-width: 18rem;">
  <div class="card-header"><h3>Recovered </h3> </div>
  <div class="card-body">
    <h5 class="card-title"> ${totalRecov}  </h5>
     </div>
</div>
<div class="card text-white  bg-secondary mb-3 " style="max-width: 18rem;">
  <div class="card-header"> <h3> Deaths </h3> </div>
  <div class="card-body">
    <h5 class="card-title">${totalDec} </h5>
  </div>
</div>

<br>

</div>
`

}

function getData(stateName, confirmCase,  activeCase, deathCase, recoverCase) {
      

      const template = 
       ` 
    <tr>
      <th scope="row">${stateName}</th>
      <td>${activeCase}</td>
      <td>${confirmCase}</td>
      <td>${recoverCase}</td>
      <td>${deathCase}</td>
    </tr>
      `
      return template;
}

fetch(url).then(payload => payload.json()).then(data => {
      for (state of data.statewise)
 {
         const htmlTe = getData(state.state, state.confirmed,  state.active, state.deaths, state.recovered)
            document.getElementById('tb').innerHTML += (htmlTe);
 }

         const html1 = data.cases_time_series[data.cases_time_series.length-1].totalconfirmed
         const html2 = data.cases_time_series[data.cases_time_series.length-1].totalrecovered
         const html3 = data.cases_time_series[data.cases_time_series.length-1].totaldeceased
        

             showTotal(html1,html2,html3)

})

   

