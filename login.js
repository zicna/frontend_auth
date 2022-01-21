const loginForm = document.getElementById('login-form')
const loginPassword = document.getElementById('login-password')
const loginUsername = document.getElementById('login-username')

loginForm.addEventListener('submit', loginFunction)

function loginFunction(event) {
  event.preventDefault()
  const userObj = {
    user: {
      username: loginUsername.value,
      password: loginPassword.value,
    },
  }
  fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userObj),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      localStorage.setItem('jwt', data.jwt)
    })
}
