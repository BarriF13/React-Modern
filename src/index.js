import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
const App = () => {

  return (
    <div className="ui container comments">
<ApprovalCard>
  <div>
    <h4>Warning!</h4>
  Are you sure you want to do this?
  </div>
 
  </ApprovalCard>

      <ApprovalCard >
        <CommentDetail
          author="Barri"
          timeAgo="Today at 5:00 pm"
          commentText='please write more blogs'
          avatarImg={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alice"
          timeAgo="Today at 4:00 pm"
          commentText='Clever ideas'
          avatarImg={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Zarthani"
          timeAgo="Today at 12:00 pm"
          commentText='Fantastic blog'
          avatarImg={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>



  );
};
ReactDOM.render(<App />, document.querySelector('#root'))