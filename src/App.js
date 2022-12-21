import React, {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [news,setNews] = useState([])
  useEffect(()=>{
      axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=70bb0b52dcdc4be7b0754f55f8542bed").then((res)=>{
        console.log(res.data.articles);
        setNews(res.data.articles)
      })
  },[])
  return (
    <>
      <div className="container my-5">
      
  <div class="container">
    <a class="navbar-brand" href="/">
      <img src="https://clipground.com/images/png-latest-news-update-6.png" alt="Bootstrap" width="1000" height="350"/>
    </a>
  </div>

        <h1 className="Heading">Hello NewsSeekers</h1>


        <div className="row text-center">
          {
            news.map((val)=>{
              
              return(
                <div className="col">
          <div className="card" style={{width: "50px;"}}>
  <img src={val.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{val.title
}</h5>
    <p className="card-text">{val.description

}</p>
{/* <button type="button" class="btn btn-primary">{val.url}</button> */}
<a href={val.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
          </div>
              )
            })
          }
          
        </div>
      </div>
    </>
  )
}

export default App
