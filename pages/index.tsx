import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'

export default function Home({repositories, date}) {
  return (
    <>
      <h1>{date}</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo} >{repo}</li>
          
        ))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const reponse = await fetch('https://api.github.com/users/NanyA3/repos')
    const data = await reponse.json();
    const repositoryNames = data.map((item) => item.name)
    return {
      props: {
        repositories: repositoryNames,
        date: new Date().toISOString()
      },
      revalidate: 60 * 60 * 4,
    }
}