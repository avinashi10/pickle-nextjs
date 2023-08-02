// LIBRARY IMPORTS
import Link from "next/link";
import Image from 'next/image';

// LOCAL IMPORTS
import NavigationBar from './NavigationBar.jsx';
import logo from '../PickleballLogo.png';

const Header = ()=>{
  return (
    <div className="flex justify-between items-center p-1 w-full">
      <Link href="/">
        <div className="w-48 sm:w-32 md:w-24 lg:w-16">
          <Image
            src={logo}
            alt="Logo"
          />
        </div>
      </Link>
      <h1>Pickleball With Dar</h1>
      <NavigationBar />
    </div>
  )
}

export default Header;
