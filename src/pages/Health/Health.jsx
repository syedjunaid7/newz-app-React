import React from 'react'
import NewsItem from '../../newsItem/NewsItem'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { news } from './healthData'

function Health() {
  // const [news, setNews] = useState([])
  const [totalResults, setTotalResults] = useState('')

  useEffect(()=>{
  //  const fetchData = async ()=>{
  //       await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=7318709066c146dd9db6f91b76d0b583&category=health&pageSize=${'70'}`)
  //        .then((res)=>console.log(res.data.articles,'Result'))
  //  }
  //  fetchData()
  },[news])
  return (
    <div className='health'>
        {
        news.map((item)=>(
          <NewsItem image={item.urlToImage
          } title={item.title} publishedAt={item.publishedAt
          } url={item.url} />
        ))
      }
    </div>
  )
}

export default Health
