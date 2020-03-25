import React, { Component } from 'react'
import './style/login.css'
import Navbar from './navbar'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'

export class Container extends Component {
    

    render() {
        
      const ForgotPassword = () => {
           alert('This functionallity is currently unavailable')
       }
        return (
            
           <div>
           <Navbar/>
           <Helmet>
           <title>College Facemash - Login</title>
           <meta
             name="description"
             content="Login to college Facemash  "
            />
           <body className="bg-img">
           
           </body>
           </Helmet>
           <div className="login">
    
           <div className="container">
    
           <div className="form">
    
           <form>
				<div className="header-text">Login</div>
            
                <div className="username">Username: 
					
					<br/>
						<input placeholder="Enter your Email or Username" autocomplete="false" type="text"/>
						</div>
						<div className="password">Password: 
							
							<br/>
								<input placeholder="Enter your Password" type="password"/>
								</div>
								<div onClick={ForgotPassword} className="forgot-pwd">Forgot Password?</div>
								<button type="disabled" className="login-button">Get In</button>
							<Link to="/signup"><div className="register">Dont have Account? Register here</div></Link>
							</form>
						</div>
					</div>
				</div>
           </div>
        )
    }
}

export default Container
