import Container from '../components/Reusable/Container'
import GigCard from '../components/Card/GigCard'
import Filter from '../components/Filter/Filter'

export default function HomePage() {
  return (
    <div className=''>
      <Filter/>
     <Container>
      <div className='grid grid-cols-1 xl:grid-cols-4 gap-6.5'>
        <GigCard/>
        <GigCard/>
        <GigCard/>
        <GigCard/>
      </div>
     </Container>
    </div>
  )
}
