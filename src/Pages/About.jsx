import React, { useEffect } from 'react'
import axios from "axios"


const About = () => {
  useEffect(async () => {
    document.title = "About page"
    const res = await axios.get('https://67c91cea0acf98d07088d9be.mockapi.io/Product');  
    console.log(res.data)
  },[])
 
  return (
    <div>
        <h1>About page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reiciendis magnam ad, provident architecto aliquam alias ipsam doloribus illum tempore, deserunt pariatur quis quas voluptatum deleniti sequi, dolores ut rem odio itaque odit perspiciatis nulla? Dolorum amet repellendus architecto alias, quibusdam vero illum repudiandae dolore voluptatum, aut, distinctio a sequi?</p>
    </div>
  )
}

export default About