import React, { useState } from 'react'

export default function MyServert() {
  
  const [ value, setValue ] = useState( '' )
  
  const handleOnClick =  async ( event ) => {
    const res = await fetch( 'http://192.168.1.30:3500/' )
    const data = await res.text()

    console.log( data )
    setValue( data )
  }

  return (
    <div>
      <input type='button' onClick={handleOnClick} value='submit' />
      <div>
        {value}
      </div>
    </div>
  )
}