import React from 'react'
import Head from 'next/head'
import { Counter } from 'my-comp'

const Home = () => (
  <>
    <Head>
      <title>React hooks test</title>
    </Head>

    <h1>React app</h1>
    <Counter />
  </>
)

export default Home
