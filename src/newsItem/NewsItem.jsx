
import React from 'react'
import './NewsItem.scss'
function NewsItem({image,title,publishedAt,url}) {
  return (
    
    <div className='news_item'>
        <img className='news_img' src={image?image:'https://cdn3.vectorstock.com/i/1000x1000/37/07/not-available-sign-or-stamp-vector-22523707.jpg'} alt="image" />
        <a className='links' href={url} target='_blank'>

        <div className="details">
        <h1 className='title'>{title.slice(0,95)+'...'}</h1>
        <h3 className='time' >{new Date(publishedAt).toGMTString()}</h3>
        </div>

    </a>
    </div>

  )
}

export default NewsItem
