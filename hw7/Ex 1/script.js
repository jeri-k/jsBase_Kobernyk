const emailValid = /^\w+([-.\w+])*@([a-z]+)\.(com|ru|net|ua|org)$/;
const btnGo = document.querySelector('.btn-modal')

btnGo.addEventListener('click', () => {
    showModalBox()
    btnGo.style.display = 'none'
})

function showModalBox() {
    let modalBox = createModalBox()
    document.body.appendChild(modalBox)

}


function createModalBox() {

    let modalBox = document.createElement('div')
    modalBox.classList.add('the-modal-box')

    let inputName = document.createElement('input')
    inputName.classList.add('inputName')
    inputName.type = 'text'
    inputName.name = 'name'
    inputName.id = 'name'
    inputName.placeholder = 'Name'


    let inputEmail = document.createElement('input')
    inputEmail.classList.add('inputEmail')
    inputEmail.type = 'text'
    inputEmail.name = 'name'
    inputEmail.id = 'name'
    inputEmail.placeholder = 'Email'


    let btnSend = document.createElement('button')
    btnSend.classList.add('btn-send')
    btnSend.innerText = 'Send'

    btnSend.addEventListener('click', () => {
        let userDate = []
        if (emailValid.test(inputEmail.value)) {
            userDate.push({Name: inputName.value, Email: inputEmail.value})
            modalBox.style.display = 'none'
            btnGo.style.display = 'block'

        }
        else {
            alert('Please enter a valid email address')
        }
        inputName.value = ''
        inputEmail.value = ''
        console.log(userDate)
    })


    let btnCancel = document.createElement('button')
    btnCancel.classList.add('btn-cancel')
    btnCancel.innerText = 'Cancel'
    btnCancel.addEventListener('click', () => {


        document.body.removeChild(modalBox)
        btnGo.style.display = 'block'
    })


    modalBox.appendChild(inputName)
    modalBox.appendChild(inputEmail)
    modalBox.appendChild(btnSend)
    modalBox.appendChild(btnCancel)


    return modalBox
}

