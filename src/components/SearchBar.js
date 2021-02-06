import React, { useState } from 'react'

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('')
  // Define what happens when video is search
  // const onInputChange = (e) => setTerm(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()

    onFormSubmit(term)
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
