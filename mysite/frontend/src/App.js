import logo from './logo.jpg';
import './App.css';
import {useState, useEffect} from 'react';
import React from 'react';
import ArticleList from './components/ArticleList';
import avatar from './profile.png';

function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/articles/',{
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="profile">
          <div className="centered">
            <img src={avatar} className="Profile-logo" alt=""/>  
            <h3>Vu Nguyen</h3>   
          </div>
        </div>
        <h2>
          Welcome to My Page!
        </h2>
        <a
              className="App-link"
              href="https://www.linkedin.com/in/vu-nguyen-60b8b182/"
              target="_blank"
              rel="noopener noreferrer"
            >
              More on Linkedin
            </a>
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
        <ArticleList articles = {articles}/>
      </header>
      <a>Django-React App by Vu Nguyen</a>
    </div>
  );
}

export default App;
