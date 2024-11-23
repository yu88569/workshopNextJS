import { Search } from "lucide-react"
import Logo from "./Logo"
import { Darkmode } from "./Darkmode"

const Navbar = () => {
  return (
    <nav>
        <div className="container flex flex-col justify-between py-8 sm:flex-row"
        >
            <Logo/>
            <Search/>
            <div className="flex gap-4">
                <Darkmode/>
                <h1>Profile</h1>
            </div>
        </div>
    </nav>
  )
}
export default Navbar