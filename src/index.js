import React from 'react'
import ReactDOM from 'react-dom'
// import faker from 'faker'
import CommentDetail from './CommentDetail'
const App =() =>{

  return (
  <div className="ui container comments">
   <CommentDetail author="Barri"/>
   <CommentDetail author="Alice"/>
   <CommentDetail author="Zarthani"/>
    </div>
    
    

  );
};
ReactDOM.render(<App />, document.querySelector('#root'))