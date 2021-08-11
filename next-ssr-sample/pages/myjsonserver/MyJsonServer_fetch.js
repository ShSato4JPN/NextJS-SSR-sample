import React, { useState } from 'react'

export default function MyJsonServer_fetch() {

  const [jData, setJData] = useState({})

  const breakObjects = () => {
    
  }

  const handleOnClick = ( event => {
    fetch( 'https://my-json-server.typicode.com/ShSato4JPN/MyJsonServer/db' )
      .then( response => {
        return response.json()
      })
      .then( data => {
        console.log(data.infomation)
        setJData( ...data )
      })
  })

  return (
    <dvi>
      <input type='button' value='click' onClick={handleOnClick} />
      {jData ? <p>{jData.toString()}</p> : ''}
    </dvi>
  )
}