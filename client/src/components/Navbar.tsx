import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
      <div className="flex justify-around items-center space-x-4 w-full px-8 py-4 my-2">
          <div className="w-full">
              <Input type="text" placeholder="Search for games" className=""/>
          </div>
          <div className="flex items-center gap-2">
              <div>Name</div>
              <div>
                  <Button>
                      <Link to='/login'>Login</Link>
                  </Button>
              </div>
          </div>

    </div>
  )
}

export default Navbar