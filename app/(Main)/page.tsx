import React from 'react'
import Container from '../components/Reusable/Container'
import GigCard from '../components/Card/GigCard'

export default function HomePage() {
  return (
    <div className='py-20'>
     <Container>
      <div className='grid grid-cols-1 xl:grid-cols-4 gap-8'>
        <GigCard/>
        <GigCard/>
        <GigCard/>
        <GigCard/>
      </div>
     </Container>
    </div>
  )
}
