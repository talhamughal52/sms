
let mail = document.getElementById('mail')
let code = document.getElementById('code')
let delete_button = document.getElementById('delete_button')

let notify = document.getElementById('notify')

delete_button.addEventListener('click', () => {
    if (mail.value != '' && code.value != '') {

        let params = {
            method: 'DELETE',
            body: JSON.stringify({
                Email: mail.value,
                Code: code.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
        fetch('http://localhost:4500/delete_teacher', params)
            .then((response) => response.json())
            .then((data) => {
                if (data.status == 'Deleted') {
                    mail.value = ''
                    code.value = ''
                    notify.style.backgroundColor = 'rgb(54 130 88)'
                    notify.innerHTML = `<h5 style="margin-top: 9px">Teacher Deleted Succesfully!</h5>`
                    setTimeout(() => {
                        notify.style.backgroundColor = ''
                        notify.innerHTML = ``
                    }, 3000)
                } else {
                    notify.style.backgroundColor = 'rgb(190 89 89)'
                    notify.innerHTML = `<h5 style="margin-top: 9px">Teacher not FOUND!</h5>`
                    setTimeout(() => {
                        notify.style.backgroundColor = ''
                        notify.innerHTML = ``
                    }, 3000)
                }
            })
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