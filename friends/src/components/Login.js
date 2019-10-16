import React, { useState }from "react";
import axiosWithAuth from "../utils/axiosWithAuth.js";


class Login extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    login = e => {
      e.preventDefault();
      axiosWithAuth()
        .post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            console.log(res)
          localStorage.setItem('token', res.data.payload);
          this.props.history.push('/friends');
        })
        .catch(err => console.log(err.response));
    };
  
    render() {
      return (
        <div>
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      );
    }
  }
  
  export default Login;
  














// const Login = props => {
//   const[userCredentials, setUserCredentials] = useState({username:'', password:''})

//   const handleChange = e => {
//     setUserCredentials(
//       {
//         ...userCredentials,
//         [e.target.name]: e.target.value
//       }
//     )
//   }

//   const onSubmit = e => {
//     e.preventDefault();
//     axiosWithAuth()
//     .post('/login', userCredentials)
//     .then(res => {
//       localStorage.setItem('token', res.data.payload)
//       props.history.push('/Friends')
//     })
//     .catch(err => console.error(err))
//   }

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input type="text" name="username" value={userCredentials.username} onChange={handleChange} />
//         <input type="password" name="password" value={userCredentials.password} onChange={handleChange} />
//         <button> Log In </button>
//       </form>
//     </div>
//   );
// };

// export default Login;