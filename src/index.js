import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <div>
        <h4> warning!
        </h4>
        Are you sure you want to do this?
      </div>
    </ApprovalCard>



      <ApprovalCard>
        <CommentDetail
          author ="sam"
          timeAgo="today at 4:45pm"
          text="hey there"
          avatar={faker.image.avatar()}
          />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail
        author ="alex"
        timeAgo="today at 4:45pm"
        text="sup dude"
        avatar={faker.image.avatar()}
         />

       </ApprovalCard>

       <ApprovalCard>

       <CommentDetail
         author ="jane"
         timeAgo="today at 4:45pm"
         text="what up dawg"
         avatar={faker.image.avatar()}
         />
        </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

// http://semantic-ui.com let's install it!
// https://cdnjs.com/libraries/semantic-ui
// https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css
