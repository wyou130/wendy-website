import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <div>NavBar</div>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </>
    )
}

export default NavBar 