import Card from '@/components/Card'
import {client} from '../lib/client'
export const revalidate = 20
async function getData(){
  const query = '*[_type == "journalEntries"]'
  const res = await client.fetch(query)
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
