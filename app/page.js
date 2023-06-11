import Image from 'next/image'
import Card from '@/components/Card'
import {client, urlFor} from '../lib/client'

async function getData(){
  const query = '*[_type == "journalEntries"]'
  const res = await client.fetch(query, {
      next: {revalidate: 30}
  })
  return res
}

export default async function Home() {
  const data = await getData()
  
  const cardElements = data.map(item => <Card key={item._id} {...item}/>)

  return (
    <>
    {cardElements}
    </>
  )
}
