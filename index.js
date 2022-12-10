


function submitData(name, email){
  const users ={
    name : name,
    email : email
}
  const config = {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
      Accept: "application/json",
    },
    body: JSON.stringify(users)
  };
     return fetch('http://localhost:3000/users',config)
    .then(res=>{
      return res.json()
    }).then(data=>{
      document.querySelector('#id').textContent = data.id
      document.querySelector('#name').textContent = data.name
      document.querySelector('#email').textContent = data.email
      //console.log(data)
    }).catch(error=>{
      let p = document.querySelector('#state')
      p.textContent = error.message
      //alert(error.message)
    })
}
//submitData(users);
document.querySelector('form').addEventListener('submit',(e)=>{
  //const username = document.querySelector('#username')
  submitData(e.target.name.value,e.target.email.value)
})


