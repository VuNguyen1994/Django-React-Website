import React, { Component } from 'react';
import tensorLogo from '../tensorflow.jpg';
import vehicleLogo from '../arduino123.png';
import dataclusterLogo from '../datacluster.jpg';
import ftpLogo from '../ftp.jpg';
import nessusLogo from '../nessus.jpg';
// import ShowDetails from './showArticle';

class ArticleList extends Component {

  handleclick(id){
    // ShowDetails(id)
    // // .then(resp => console.log(resp))
    alert("The web is under construction. Sorry for any inconvenience.")
  }

    render(){
      return(
        <div>
        {this.props.articles && this.props.articles.map(article => {
          return(
            <div key={article.id}>
              <h2><a href = "#" onClick={this.handleclick.bind(this, article.id)}>{article.title}</a></h2>
              { article.id=="1" &&
                <img src={tensorLogo} className="Project-logo" alt=""/>  
              }
              { article.id == "2" &&
                <img src={vehicleLogo} className="Project-logo" alt=""/>  
              }
              { article.id == "3" &&
                <img src={dataclusterLogo} className="Project-logo" alt=""/>  
              }
              { article.id == "4" &&
                <img src={ftpLogo} className="Project-logo" alt=""/>  
              }
              { article.id == "5" &&
                <img src={nessusLogo} className="Project-logo" alt=""/>  
              }
              <p>{article.description}</p>
              <hr/>
            </div>
          )
        })}
        </div>
      )
    }
}

export default ArticleList;

