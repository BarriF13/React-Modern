import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

const App =() =>{

  return (
  <div className="ui container comments">
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt={"avatar"}/>
      </a>
      <div className="content">
        <a href="" className="author">
          Zarthan
        </a>
        <div className="metadata">
          <span className="date">Today at 5:00 PM</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
    
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt={"avatar"}/>
      </a>
      <div className="content">
        <a href="" className="author">
          Zarthan
        </a>
        <div className="metadata">
          <span className="date">Today at 5:00 PM</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
    
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt={"avatar"}/>
      </a>
      <div className="content">
        <a href="" className="author">
          Zarthan
        </a>
        <div className="metadata">
          <span className="date">Today at 5:00 PM</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  </div> 
  );
};
ReactDOM.render(<App />, document.querySelector('#root'))