import React, { useState } from 'react'
import Tweet from '../components/Tweet'

const Tweets = () => {
	const [tweets, setTweets] = useState([
		{
			id: 1,
			name: 'Harry Wilson',
			handle: '@harryNotPotter',
			tweet: "This season of Grey's Anatomy was tense",
			likes: 0,
		},
		{
			id: 2,
			name: 'Clement Wilson',
			handle: '@cw1970',
			tweet: 'How many tabs do you currently have open?',
			likes: 0,
		},
		{
			id: 3,
			name: 'Diane Richardson',
			handle: '@princessDiane',
			tweet: 'Happy birthday Harry!!!',
			likes: 0,
		},
		{
			id: 4,
			name: 'Juanito Xavier',
			handle: '@elJuan',
			tweet: 'Viva la revolución',
			likes: 0,
		},
	])

	const getStateAndIndex = (id) => {
		const newState = [...tweets]
		const index = tweets.findIndex((user) => user.id === id)

		return { newState, index }
	}

	const handleUpVote = (id) => {
		const { newState, index } = getStateAndIndex(id)
		newState[index].likes += 1
		setTweets(newState)
	}

	const handleDownVote = (id) => {
		const { newState, index } = getStateAndIndex(id)

		if (newState[index].likes > 0) {
			newState[index].likes -= 1
		}
		setTweets(newState)
	}

	const renderTweets = () => {
		return tweets.map((user) => {
			return (
				<Tweet
					key={user.id}
					id={user.id}
					name={user.name}
					handle={user.handle}
					tweet={user.tweet}
					likes={user.likes}
					handleUpVote={handleUpVote}
					handleDownVote={handleDownVote}
				/>
			)
		})
	}

	return <div>{renderTweets()}</div>
}

export default Tweets
