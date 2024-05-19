import React from 'react'
import style from '../components/styles/scss/Home.module.scss';
import Apresentation from '../components/templates/Apresentation'

const Home = () => {
  return (
    <div className={style.container}>
      <div>
        <Apresentation/>
      </div>
    </div>
  )
}

export default Home