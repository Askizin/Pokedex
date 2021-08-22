import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import ListPokemon from '../Components/Pokemon/List'

export default function Home() {
  return (
    <>
      <Head>
        <title>POKEMON</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
      </Head>
      <ListPokemon />
    </>
  )
}