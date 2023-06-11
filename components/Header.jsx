import Image from "next/image"
import world from '../public/world.svg'

export default function Header(){
    return(
        <header className="header-container">
            <Image src={world} alt="small image of globe" height={30} width={30}/>
            <h1>My Travel Journal</h1>
        </header>
    )
}