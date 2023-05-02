
let f_name = document.getElementById('first_name')
let l_name = document.getElementById('last_name')
let classs = document.getElementById('class')
let address = document.getElementById('address')
let phone = document.getElementById('phone')
let mail = document.getElementById('mail')
let gender_m = document.getElementsByName('gender')
let code = document.getElementById('code')
let submit = document.getElementById('submit')

let notify = document.getElementById('notify')

submit.addEventListener('click', async () => {
  let ch = undefined
  for (let key of gender_m)
    if (key.checked) {
      ch = key.value
    }
  let regex = new RegExp('[a-z0-9]+@gmail.com')
  if (f_name.value != '' && l_name.value != '' && classs.value != '' && address.value != '' && phone.value != '' && mail.value != '' && ch != undefined && code.value != '' && regex.test(mail.value)) {

    let params = {
      method: 'POST',
      body: JSON.stringify({
        First_name: f_name.value,
        Last_name: l_name.value,
        Class: classs.value,
        Address: address.value,
        Phone: phone.value,
        Gender: ch,
        Email: mail.value,
        Code: code.value
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
    let response = await fetch('http://localhost:4500/submit_form_students', params)
    let a = await response.json()
    f_name.value = ""
    l_name.value = ""
    classs.value = "One"
    address.value = ""
    phone.value = ""
    mail.value = ""
    code.value = ""
    for (let key of gender_m) {
      key.checked = false
    }
    notify.style.backgroundColor = 'rgb(54 130 88)'
    notify.innerHTML = `<h5 style="margin-top: 9px">Student added Succesfully!</h5>`
    setTimeout(() => {
      notify.style.backgroundColor = ''
      notify.innerHTML = ``
    }, 3000)
  } else {
    notify.style.backgroundColor = 'rgb(190 89 89)'
    notify.innerHTML = `<h5 style="margin-top: 9px">Please enter correct credentials and complete!</h5>`
    setTimeout(() => {
      notify.style.backgroundColor = ''
      notify.innerHTML = ``
    }, 3000)
  }
})

let signout = document.getElementById('signout')
signout.addEventListener('click', (e) => {
  signout.href = 'index.html'
})