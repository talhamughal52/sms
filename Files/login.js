
let uname = document.getElementById('u_name')
let upassword = document.getElementById('u_password')

let signin = document.getElementById('button')
let signin_a = document.getElementById('login_a_tag')
let error = document.getElementById('error')

signin.addEventListener('click', async (e) => {
  let params = {
    method: 'POST',
    body: JSON.stringify({
      username: uname.value,
      password: upassword.value
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }
  if (uname.value != '' && upassword.value != '') {
    fetch('http://localhost:4500/admin_login', params)
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "True") {
          window.location.href = 'dashboard.html'
          error.innerHTML = ''
        } else {
          error.innerHTML = '<h6 style="color: maroon; font-size: small; margin-left: 10px; margin-top: 3px;" >Invalid Username or Password!</h6>'
        }
      })
  } else {
    error.innerHTML = '<h6 style="color: maroon; font-size: small; margin-left: 10px; margin-top: 3px;" >Invalid Username or Password!</h6>'
  }
})