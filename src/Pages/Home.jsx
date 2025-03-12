import React, { useEffect } from 'react'


const Home = ()=> {
    useEffect(()=>{
        document.title = "About page"
    },[])

  return (
    <div>
        <h1>Home page</h1>
        <p>A home page is the main web page that a visitor will view when they navigate to a website via a search engine, and it may also function as a landing page to attract visitors. In some cases, the home page is a site directory, particularly when a website has multiple home pages.</p>
    </div>
  )
}

export default Home