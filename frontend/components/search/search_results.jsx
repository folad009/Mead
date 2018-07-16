import React from 'react'
import UserSearchItem from './user_search_item'
import StorySearchItem from './story_search_item'

export default ({ query, stories, users }) => {

  if (query === '') return <div></div>

  const reg = new RegExp(query.toLowerCase())

  const userMatches = users.filter(user => {
    return (user.name.toLowerCase().match(reg) || user.bio.toLowerCase().match(reg))
  })

  const storyMatches = stories.filter(story => {
    return (story.title.toLowerCase().match(reg) || story.subtitle.toLowerCase().match(reg))
  })

  const userResults = userMatches.map((user, i) => <UserSearchItem key={i} user={user} />)
  const storyResults = storyMatches.map((story, i) => <StorySearchItem key={i} story={story} />)

  return (
    <div className="search-results">
      <h1 className="search-results-title">People</h1>
      {userResults}

      <h1 className="search-results-title">Stories</h1>
      {storyResults}
    </div>
  )
}