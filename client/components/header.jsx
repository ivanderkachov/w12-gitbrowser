import React from 'react'
import { useParams, Link } from 'react-router-dom'


const Header = () => {
  const { userName } = useParams()
  return (
    <div>
    <div className="flex justify-center items-center w-screen">
      <div>
        <div id = "repository-name">{ userName }</div>
        <div id = "go-back"><Link to = "/"> Go Back </Link></div>
        <div id = "go-repository-list"><Link to = {`/${ userName }`}> Go Repository List </Link></div>
      </div>
    </div>
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)
