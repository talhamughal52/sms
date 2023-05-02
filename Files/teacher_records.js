
let html0 = `<table class="table table-striped">
<thead class="thead-dark">
  <tr>
    <th scope="col">SR.</th>
    <th scope="col">FIRST NAME</th>
    <th scope="col">LAST NAME</th>
    <th scope="col">ADDRESS</th>
    <th scope="col">PHONE</th>
    <th scope="col">EMAIL</th>
    <th scope="col">SUBJECT</th>
  </tr>
</thead>
<tbody id='table_body'>
</tbody>
</table>`

let display = document.getElementById('display')
display.innerHTML = html0

let params = {
  method: 'POST',
  body: JSON.stringify({

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}
fetch('http://localhost:4500/teacher_records', params)
  .then((response) => response.json())
  .then((data) => {
    let html1 = ''
    let table_body = document.getElementById('table_body')
    Array.from(data).forEach(function (key, index) {
      html1 += `<tr>
            <th scope="row">${index+1}</th>
            <td>${key.First_name}</td>
            <td>${key.Last_name}</td>
            <td style="width: 230px">${key.Address}</td>
            <td>${key.Phone}</td>
            <td style="width: 200px;" >${key.Email}</td>
            <td>${key.Subject}</td>
          </tr>`
    })
    table_body.innerHTML = html1
  });


let signout = document.getElementById('signout')
signout.addEventListener('click', (e) => {
  signout.href = 'index.html'
})