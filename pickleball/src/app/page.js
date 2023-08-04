// LIBRARY IMPORTS
import Link from "next/link";
import Image from 'next/image';

// LOCAL IMPORTS
import Header from './components/Header.jsx';
import paddle from './images/paddleBallBenHershey.png';
import court from './images/openPlay-AmirAziz.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 bg-custom-white">
      <Header />
      <div className="flex flex-col justify-center flex-grow">
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Link
            href="/pickleball101"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={paddle}
              alt="Two pickleball paddles and balls"
              width={64}
              height={40}
              className="w-64 h-40 object-cover rounded-lg mb-4"
            />
            <h2 className={`mb-3 text-xl font-semibold text-custom-blue`}>
              Pickleball 101{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn the basics of pickleball.
            </p>
          </Link>

          <Link
            href="/openPlay"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={court}
              alt="Players on a pickleball court"
              width={64}
              height={40}
              className="w-64 h-40 object-cover rounded-lg mb-4"
            />
            <h2 className={`mb-3 text-xl font-semibold text-custom-blue`}>
              Open Play{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find open play times in Oakland for all levels!
            </p>
          </Link>

          <Link
            href="/privateLessons"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-semibold text-custom-blue`}>
              Private Lessons{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Sign up to improve your play with personalized techniques.
            </p>
          </Link>

          <Link
            href="/aboutDar"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-semibold text-custom-blue`}>
              About Darlene{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Get to know Pickleball Dar!
            </p>
          </Link>
        </div>
      </div>
    </main>
  )
}
