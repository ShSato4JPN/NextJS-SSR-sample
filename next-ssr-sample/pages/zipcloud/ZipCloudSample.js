import React, { useState } from 'react'

export default function ZipCloudSample() {
  
  const [message, setMessage] = useState( '' )
  const [value, setValue] = useState( '' )
  const [response, setResponse] = useState( {} )

  // Handle function
  const handleKeyUp = ( event ) => {
    console.log( event.target.value )
    setValue( event.target.value.toString() )
  }

  const handleOnClick = ( event ) => {
    const postNo = value
    if ( !validateInputValue( postNo ) ) { 
      return
    }
    getAddressFromZipCloud( postNo )
      .then( response => {
        if ( response.results ) {
          setResponse( {...response.results[0]} )
        } else {
          setMessage( 'データが存在しません' )
          setResponse( {} )
        }
    })
  }

  // validation check
  const validateInputValue = ( postNo ) => {
    if ( postNo == '' || postNo == undefined ) {
      alert( '郵便番号を入力してください。' )
      return false
    }

    if ( postNo.match(/\D/g) ) {
      alert( '半角数値で入力してください。' )
      return false
    }

    if ( postNo.length != 7 ) {
      console.log( postNo )
      console.log( postNo.length )
      alert( '郵便番号に誤りがあります。再度見直してください。' )
      return false
    }

    return true
  }

  // REST
  // zipcloudを使って住所を取得する
  const getAddressFromZipCloud = async ( postNo ) => {
    const res = await fetch( 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + postNo )
    return await res.json()
  }

  // rendering
  return(
    <div>
      <h1>zipcloudを使ったWebAPI連携</h1>
      <input type='text' onKeyUp={handleKeyUp} />
      <input type='button' onClick={handleOnClick} value='送信' />
      <div>
        {0 < Object.keys(response).length ?
          <div>
            <h2>address1</h2>
            <p>{response.address1}</p>
            <h2>address2</h2>
            <p>{response.address2}</p>
            <h2>address3</h2>
            <p>{response.address3}</p>
            <h2>kana1</h2>
            <p>{response.kana1}</p>
            <h2>kana2</h2>
            <p>{response.kana2}</p>
            <h2>kana3</h2>
            <p>{response.kana3}</p>
            <h2>prefcode </h2>
            <p>{response.prefcode}</p>
            <h2>zipcode</h2>
            <p>{response.zipcode}</p>
          </div>
        :
          <div>
            <h1>{message}</h1>
          </div>
        }
      </div>
    </div>
  )
}
