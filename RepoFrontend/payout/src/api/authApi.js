// ESTO LO HICIMOS EN CADA COMPONENTE

// import { navigate } from "react-router-dom"


// const urlSignUp = 'https://payout.redromsolutions.com/register'
// const urlLogin = 'https://payout.redromsolutions.com/login'

/* FETCH SIGN UP */
export const fetchSignUp = (email, rEmail, password) => {
    fetch(urlSignUp, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({              
          email: {email},
          repeatEmail: {rEmail},
          password: {password}
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const token = data.token
          localStorage.setItem('token', token)
          navigate('/home')
        })
        .catch (error =>{
          console.log(error)              
        })    
}

// /* LOGIN */
// export const fetchLogin = (email, password) => {
//     fetch(urlLogin, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({              
//           email: {email},          
//           password: {password}
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           const token = data.token
//           localStorage.setItem('token', token)
//           navigate('/home')
//         })
//         .catch (error =>{
//           console.log(error)              
//         })    
// }
