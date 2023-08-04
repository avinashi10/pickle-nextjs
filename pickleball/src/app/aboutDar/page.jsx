// LIBRARY IMPORTS
import Link from "next/link";
import Image from 'next/image';
import { EnvelopeIcon } from '@heroicons/react/24/solid';


// LOCAL IMPORTS
import Header from '../components/Header.jsx';
import logo from '../images/PickleballLogo.png';
import backgroundImage from '../images/landingPage.png';

const AboutDar = ()=>{
  return (
    <div
    className="bg-cover bg-center w-full h-screen flex flex-col justify-between items-center"
    >
      <Image
        alt="Mountains"
        src={backgroundImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
      <nav className="w-full flex justify-between items-center p-5">
        <Link href="/">
          <div className="w-48 sm:w-32 md:w-24 lg:w-16">
            <Image
              src={logo}
              alt="Logo"
            />
          </div>
        </Link>
        <div className="flex space-x-4">
          {['Pickleball 101', 'Open Play', 'Private Lessons', 'About Darlene'].map((item, index) => (
            <button
              key={index}
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-transparent border border-transparent rounded-md hover:bg-white hover:text-black"
            >
              {item}
            </button>
          ))}
        </div>
        <EnvelopeIcon className="h-6 w-6 text-white" />
      </nav>

      <div className="text-center">
        <p className="text-8xl">Pickleball</p>
        <p className="text-4xl">to the</p>
        <p className="text-8xl">People</p>
      </div>

      <button className="w-3/4 py-4 bg-transparent border border-white rounded-full text-white font-bold mb-10 hover:bg-white hover:text-black">
        Start Playing Now
      </button>
    </div>
  );
}

export default AboutDar;
