let data
let params = {
  method: 'POST',
  body: JSON.stringify({

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}

let a = async () => {
  let response = await fetch('http://localhost:4500/student_records', params)
  data = await response.json()
}
a()



let html = `
<table class="table table-striped thead-dark">
<thead class="thead-dark">
<tr>
<th scope="col">SR.</th>
<th scope="col">FIRST NAME</th>
<th scope="col">LAST NAME</th>
    <th scope="col">ADDRESS</th>
    <th scope="col">PHONE</th>
    <th scope="col">EMAIL</th>
    <th scope="col">CLASS</th>
  </tr>
</thead>
<tbody id="table_data">
</tbody>
</table>`


let html2 = ""

let display = document.getElementById('display')
let display0 = document.getElementsByClassName('btn0')
for (let key of display0) {
  key.addEventListener('click', (e) => {
    display.innerHTML = html
    let num = key.parentElement.tagName.toLowerCase()
    let a
    switch (num) {
      case 'one':
        a = data.one
        break;
      case 'two':
        a = data.two
        break;
      case 'three':
        a = data.three
        break;
      case 'four':
        a = data.four
        break;
      case 'five':
        a = data.five
        break;
      case 'six':
        a = data.six
        break;
      case 'seven':
        a = data.seven
        break;
      case 'eight':
        a = data.eight
        break;
      case 'nine':
        a = data.nine
        break;
      case 'ten':
        a = data.ten
        break;
    }
    let table_body = document.getElementById('table_data')
    Array.from(a).forEach(function (key, index) {
      html2 += `<tr>
      <th scope="row">${index+1}</th>
      <td>${key.First_name}</td>
      <td>${key.Last_name}</td>
      <td style="width: 230px">${key.Address}</td>
      <td>${key.Phone}</td>
      <td>${key.Email}</td>
      <td>${key.Class}</td>
    </tr>`
    })
    table_body.innerHTML = html2
  })
}


let signout = document.getElementById('signout')
signout.addEventListener('click', (e) => {
  signout.href = 'index.html'
})