// LIBRARY IMPORTS
import Link from "next/link";
import Image from "next/legacy/image";
import { EnvelopeIcon } from '@heroicons/react/24/solid';

// LOCAL IMPORTS
import Header from './components/Header.jsx';
import paddle from './images/paddleBallBenHershey.png';
import court from './images/openPlay-AmirAziz.png';
import logo from './images/PickleballLogo.png';
import backgroundImage from './images/landingPage.png';

export default function Home() {
  return (
    <div
    className="relative w-full h-screen flex flex-col justify-between items-center"
    >
      <div className="absolute inset-0 -z-1">
        <Image
          alt="Person holding pickleball and paddle"
          src={backgroundImage}
          placeholder="blur"
          quality={100}
          layout="fill"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: "top"
          }}
        />
      </div>
      <nav className="relative w-full flex justify-between items-center p-5 z-10">
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
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black bg-transparent border border-transparent rounded-md hover:bg-black hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>
        <EnvelopeIcon className="h-6 w-6 text-black" />
      </nav>

      <div className="relative text-center z-10">
        <p className="text-8xl text-black">Pickleball</p>
        <p className="text-4xl text-black">to the</p>
        <p className="text-8xl text-black">People</p>
      </div>

      <button className="relative w-3/4 py-4 bg-transparent border border-black rounded-full text-black font-bold mb-10 hover:bg-black hover:text-white z-10">
        Start Playing Now
      </button>
    </div>
  );
}
