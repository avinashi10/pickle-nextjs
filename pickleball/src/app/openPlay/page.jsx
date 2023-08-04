// LIBRARY IMPORTS

// LOCAL IMPORTS
import Header from '../components/Header.jsx';

const OpenPlay = ()=>{
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Header />
      <div className="flex flex-col justify-center flex-grow">
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <h1>Open Play Schedule</h1>
        </div>
      </div>
    </main>
  )
}

export default OpenPlay;
