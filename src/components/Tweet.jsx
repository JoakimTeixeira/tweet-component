import React from 'react'

const Tweet = ({
	id,
	name,
	handle,
	tweet,
	likes,
	handleUpVote,
	handleDownVote,
}) => {
	return (
		<section className="card">
			<div className="card-body">
				<div className="float-left">
					<h5 className="card-title mb-1">{name}</h5>
					<a href="#" className="card-link">
						{handle}
					</a>
					<p className="card-text mt-3">{tweet}</p>
				</div>
				<div className="float-right ">
					<button
						onClick={() => handleDownVote(id)}
						className="card-link btn btn-danger"
					>
						<i className="fas fa-arrow-down"></i>
					</button>
					<span className="card-link badge badge-info">{likes}</span>
					<button
						onClick={() => handleUpVote(id)}
						className="card-link btn btn-primary"
					>
						<i className="fas fa-arrow-up"></i>
					</button>
				</div>
			</div>
		</section>
	)
}

export default Tweet
