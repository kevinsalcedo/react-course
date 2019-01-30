import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker'; 

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Sam" timeAgo="Today at 4:45PM" text="Nice blog post!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()} author="Alex" timeAgo="Today at 2:00AM" text="Bad blog post."/>
            </ApprovalCard>
            <ApprovalCard>
                 <CommentDetail avatar={faker.image.avatar()} author="Jane"timeAgo="Yesterday at 5:00PM" text="Eh, it's alright."/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));