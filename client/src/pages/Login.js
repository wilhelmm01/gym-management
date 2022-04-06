// import React, {useState} from 'react'; 
// import {useMutation} from '@apollo-server/client';
// import  {Link} from 'react-router-dom';
// import {LOGIN} from '../utils/mutations';
// import Auth from '../utils/auth';

// function Login (props) {
//     const [fromState, setFormState] = useState({email: '', password: ''});
//     const [login, {error}] = useMutation(login);

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const mutationResponse = await Login({
//                 variables: {email: fromState.email, password: fromState.password}
//             });
//             const token = mutationResponse.data.login.token;
//             Auth.login(token);
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     const handleChange = (event) => {
//         const {name, value} = event.target;
//         setFormState({
//             ...fromState,
//             [name]: value,
//         });
//     };

//     return (
//         <div className= "container my-1">
//             <link to="/signup"> Go sign up</link>
//             <h2>Login</h2>
//             <form onSubmit={handleFormSubmit}>
//                 <div className="flex-row space-between my-2">
//                     <label htmlFor="email">Email address</label>
//                     <input 
//                     placeholder="youremail@test.com"
//                     name="email"
//                     type="email"
//                     id="email"
//                     onChange={handleChange}
//                     />
//                 </div>
//                 <div className="flex-row space-between my-2">
//                     <label htmlFor="pwd">Password:</label>
//                     <input 
//                     placeholder="**********"
//                     name="password"
//                     type="password"
//                     id="password"
//                     onChange={handleChange}
//                     />
//                 </div>
//                 {error ? (
//                     <div>
//                         <p className="error-text">The provided credentials are not correct</p>
//                     </div>
//                 ) : null}
//                 <div className="flex-row flex-end">
//                     <button type="submit">Submit</button>
//                 </div>
//             </form>
//         </div>
//     );

// };

// export default Login;