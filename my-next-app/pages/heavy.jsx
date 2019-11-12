import React from 'react'
import Head from 'next/head'
import { Useless } from 'my-comp' // TRY tree shake
// import Useless from 'my-comp/dist/lib/Useless' // TRY relative import
import Welcome from '../components/Welcome'

const Heavy = () => (
  <>
    <Head>
      <title>Next.js chunk test</title>
    </Head>

    <Welcome />
    <Useless />
  </>
)

export default Heavy
