// LIBRARY IMPORTS
import Link from "next/link";
import Image from 'next/image';

// LOCAL IMPORTS
import NavigationBar from './NavigationBar.jsx';
import logo from '../logo.png';

const Header = ()=>{
  return (
    <div className="flex justify-between items-center p-4 w-full">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          width={50}
          height={50}
        />
      </Link>
      <NavigationBar />
    </div>
  )
}

export default Header;
