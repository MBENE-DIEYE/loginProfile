import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Navbar = () => {
    const user = useSelector(state => state.auth.user)
    return (
        <div className="flex p-2 gap-5 font-bold border rounded text-venter bg-gray-300 justify-center">
            {!user ?
                (<Link to="/">login</Link>) : (<Link to="/profile">Profile</Link>)}


        </div>
    )
}

export default Navbar