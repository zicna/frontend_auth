const btnSubmit = document.getElementById('btn-submit')
const username = document.getElementById('username')
const password = document.getElementById('password')
const bio = document.getElementById('bio')
const avatar = document.getElementById('avatar')
const form = document.getElementById('new-acc-form')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const userObj = {
    user: {
      username: username.value,
      password: password.value,
      bio: bio.value,
      avatar: avatar.value,
    },
  }
  fetch('http://localhost:3000/api/v1/users', {
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
      // setUser(data.user)
    })

  form.reset()
})
