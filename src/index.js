import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<h4>Warning</h4>Are you sure you want to do this?
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Sam" timeAgo="5 Days ago" content="I like it!" avatar={faker.image.avatar()} />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Alex"
					timeAgo="2 Days ago"
					content="I like it 2!"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Jane"
					timeAgo="3 Days ago"
					content="I like it 3!"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Steven"
					timeAgo="4 Days ago"
					content="I like it 4!"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail author="Matt" timeAgo="Yesterday" content="I like it 5!" avatar={faker.image.avatar()} />
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
