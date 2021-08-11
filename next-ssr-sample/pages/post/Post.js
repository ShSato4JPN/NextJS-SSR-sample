import React, { useState } from 'react'

export default function Post() {
  return (
    <div>
      <form action='http://192.168.1.30:3500/api/vi/post' method='POST'>
        <input type='text' name='item1' />
        <input type='text' name='item2' />
        <input type='text' name='item3' />
        <input type='text' name='item4' />
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}