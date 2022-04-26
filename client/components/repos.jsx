import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import Header from './header'

const Repos = () => {
  const { userName } = useParams()
  const [user, setUser] = useState([])
  const url = `https://api.github.com/users/${userName}/repos`

  useEffect(() => {
    axios.get(url).then(it => {
      setUser(it.data)
    })
  }, [])
  return (
    <div>
    <Head title="Hello" />
    <Header />
    <div className="flex justify-center items-center h-screen">
      <div>
        <div>Repos { userName }</div>
        <div> { user.map((it) => {
          return ( <div key = {it.name}> <Link to = {`/${userName}/${it.name}`}>{it.name} </Link> </div>)}) 
          }  
        </div>
      </div>
    </div>
    </div>

  )
}

Repos.propTypes = {}

export default React.memo(Repos)
