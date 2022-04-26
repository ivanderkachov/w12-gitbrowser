import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import Head from './head'
import Header from './header'

const Readme = () => {
  const { userName } = useParams()
  const { repositoryName } = useParams()
  const [readme, setReadme] = useState()
  const url1 = `https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`
  useEffect(() => {
    axios.get(url1).then(it => {
      setReadme(it.data)
    })
  }, [])
  console.log(readme)

  return (
    <div>
    <Head title="Hello" />
    <Header />
    <div>
    <div> Readme file of / { userName } / { repositoryName }</div> 
      <div id = "description"> <ReactMarkdown>{readme}</ReactMarkdown>
        {/* <div> Readme file of / { userName } / { repositoryName }</div> */}
         {/* <div id = "description"> <ReactMarkdown> {readme} </ReactMarkdown></div> */}
      </div>
    </div>
    </div>
  )
}

Readme.propTypes = {}

export default React.memo(Readme)
