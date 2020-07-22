import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
const App =() =>{

  return (
  <div className="ui container comments">
   <CommentDetail author="Barri" timeAgo="Today at 5:00 pm" commentText ='please write more blogs' avatarImg = {faker.image.avatar()}/>
   <CommentDetail author="Alice" timeAgo="Today at 4:00 pm" commentText ='Clever ideas' avatarImg = {faker.image.avatar()}/>
   <CommentDetail author="Zarthani" timeAgo="Today at 12:00 pm" commentText ='Fantastic blog' avatarImg = {faker.image.avatar()}/>
    </div>
    
    

  );
};
ReactDOM.render(<App />, document.querySelector('#root'))