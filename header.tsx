import Link from "next/link"


export default function Header () {
    return(
        <div className="header">
           <h1 className="main">MySite</h1>
                <ul className="headerButtons">
                <br />
                <Link href= "/">
                <li>Home</li>
                </Link>
                <Link href= "portfolio">
                <li>Portfolio</li>
                </Link>
                <Link href= "about">
                <li>About</li>
                </Link>
                <Link href= "contact">
                <li>Contact</li>
                </Link>
            </ul>
        </div>
    )
}