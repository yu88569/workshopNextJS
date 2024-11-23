import Logo from "./Logo"
import { Darkmode } from "./Darkmode"
import Search from "./Search"
import DropdownListMenu from "./DropdownListMenu"

const Navbar = () => {
  return (
    <nav>
        <div className="container flex flex-col justify-between py-8 sm:flex-row"
        >
            <Logo/>
            <Search/>
            <div className="flex gap-4">
                <Darkmode/>
                <DropdownListMenu/>
            </div>
        </div>
    </nav>
  )
}
export default Navbar