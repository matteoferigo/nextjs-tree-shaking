import React from 'react'
import Head from 'next/head'
import { Counter } from 'my-comp'
// import { Useless } from 'my-comp'
import Welcome from '../components/Welcome'

const Home = () => (
  <>
    <Head>
      <title>React hooks test</title>
    </Head>

    <Welcome />
    <Counter />
  </>
)

export default Home
