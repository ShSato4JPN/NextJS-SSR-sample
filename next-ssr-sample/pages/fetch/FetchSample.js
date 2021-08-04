import React, { useState } from 'react'

export default function FetchSample() {

  const [response, setResopnse] = useState([])

  const handleOnClick = () => {
    getJsonData().then( result => {
      console.log( result )
      setResopnse( result )
    })
  }

  const getJsonData = async () => {
    // const res = await fetch( 'https://jsonplaceholder.typicode.com/todos/' )
    const res = await fetch( 'https://jsonplaceholder.typicode.com/posts' )
    const data = await res.json()
    return data
  }

  return (
    <div>
      <h1>ボタン押下時にJSONデータを取得する</h1>
      <input type='button' onClick={handleOnClick} value='データ取得' />
      <div>
        <h2>取得件数：{response.length}</h2>
        <h2>取得データ：</h2>
        <div>
          {response.map( (data, index ) => (
            <p key={index}>userId:{data['userId']}, id:{data['id']}, title:{data['title']}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
