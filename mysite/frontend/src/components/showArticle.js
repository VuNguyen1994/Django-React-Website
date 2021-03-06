import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import avatar from '../profile.png';


function ShowDetails(article_id){

    let url="http://localhost:8000/articles/" + article_id;
    fetch(url,{
        'method':'GET',
        headers: {
        'Content-Type':'application/json',
        }
    })
    .then(resp => resp.json())
    .catch(error => console.log(error))
    return(
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="profile">
          <div className="centered">
            <img src={avatar} className="Profile-logo" alt=""/>    
            <h2>Vu nguyen</h2>
            <a
              className="App-link"
              href="https://www.linkedin.com/in/vu-nguyen-60b8b182/"
              target="_blank"
              rel="noopener noreferrer"
            >
              More on Linkedin
            </a> 
          </div>
        </div>
        <h2>
          Django-React App
        </h2>
        <h3>
          Welcome to My Page!
        </h3>
        <a
          className="App-link"
          href="https://github.com/VuNguyen1994"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a> 
      </header>
      <header className="App-content">
        <h1>Projects</h1>
        <h1>Check this</h1>
      </header>
    </div>
    );
}

export default ShowDetails;