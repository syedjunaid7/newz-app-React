import React from 'react'
import { useState,useEffect } from 'react'
import './Home.scss'
import NewsItem from '../../newsItem/NewsItem'
import axios from 'axios'
import { news } from './homeData'

// API Key-1 733667d1d930459c948046f5cfd596b8
// API Key-2 7318709066c146dd9db6f91b76d0b583
function Home() {
  // const [news, setNews] = useState([])
  const [totalResults, setTotalResults] = useState('')

  useEffect(()=>{


  //   const fetchData1 = async ()=>{
  //     await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=7318709066c146dd9db6f91b76d0b583&categoty=general')
  //      .then((res)=>setTotalResults(res.data.totalResults))
  // }
  // fetchData1()



  //  const fetchData = async ()=>{
  //       await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=733667d1d930459c948046f5cfd596b8&categoty=general&pageSize=${'50'}`)
  //        .then((res)=>setNews(res.data.articles,'Result'))
  //  }
  //  fetchData()
  },[])

  return (
    <div className='home'>
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

export default Home
