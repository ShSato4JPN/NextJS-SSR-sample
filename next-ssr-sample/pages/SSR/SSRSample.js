import React, { useState, useEffect } from 'react'

export default function SSRSample({ data }) {

  const [response, setResponse] = useState( [] )

  useEffect( () => {
    setResponse( data )
  }, [])

  return (
    <div>
      <h1>SSRによりJSONデータを取得する</h1>
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

export async function getServerSideProps() {
  const res = await fetch( 'https://jsonplaceholder.typicode.com/posts' )
  const data = await res.json()
  return { props: { data } }
}
