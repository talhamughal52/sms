let old_password = document.getElementById('old_password')
let new_password = document.getElementById('new_password')
let new_password_a = document.getElementById('new_password_again')
let change_button = document.getElementById('change_button')
let notify = document.getElementById('notify')

let data

let a = async () => {
    let params = {
        method: 'PUT',
        body: JSON.stringify({}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    let response = await fetch(`http://localhost:4500/settings`, params)
    data = await response.json()
}

a()

change_button.addEventListener('click', async () => {
    if (old_password.value == data[0].password && new_password.value == new_password_a.value) {
        let params = {
            method: 'PUT',
            body: JSON.stringify({
                username: data[0].username,
                password: new_password.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
        let response = await fetch(`http://localhost:4500/change_password`, params)
        data = await response.json()
        old_password.value = ""
        new_password.value = ""
        new_password_a.value = ""
        notify.style.background = 'rgb(54 130 88)'
        notify.innerHTML = `<h5 style="margin-top: 9px">Password Changed Successfully!</h5>`
        setTimeout(() => {
            notify.style.background = ''
            notify.innerHTML = ''
            window.location.reload()
        }, 3000)
    } else {
        notify.style.backgroundColor = 'rgb(190 89 89)'
        notify.innerHTML = `<h5 style="margin-top: 9px">Incorrect Credentials!</h5>`
        setTimeout(() => {
            notify.style.background = ''
            notify.innerHTML = ''
        }, 3000)
    }
})

let signout = document.getElementById('signout')
signout.addEventListener('click', (e) => {
    signout.href = 'index.html'
})