import React from 'react'
import Head from 'next/head'
import { Counter } from 'my-comp' // TRY tree shake
// import Counter from 'my-comp/dist/lib/Counter' // TRY relative import
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
