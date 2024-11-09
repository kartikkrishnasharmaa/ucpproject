import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const currentDate = new Date();
  const lastUpdated = new Date( currentDate.getTime() - 4 * 60 * 60 * 1000 );

  const formatLastUpdated = ( lastUpdated ) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', };
    return lastUpdated.toLocaleString( 'en-US', options );
  };
  return (
    <footer className="body-font">
      <hr className="h-px bg-gray-200 border-1  dark:bg-blue-700"></hr>
      <div className="container py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex-wrap  md:pr-20 lg:ml-80 md:text-left text-left">
          <div className="lg:w-2/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-blue-700 tracking-widest text-sm-b mb-3">UnstopComputer</h2>
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <Link href="/main/about" className="text-blue-700">About us</Link>
                </li>
                <li>
                  <Link href="/main/advertise" className="text-blue-700">Advertise with us</Link>
                </li>
                <li>
                  <Link href="/main/career" className="text-blue-700">Career</Link>
                </li>
                <li>
                  <Link href="/main/contact" className="text-blue-700">Contact us</Link>
                </li>
                <li>
                  <Link href="/main/privacy-policy" className="text-blue-700">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/main/terms-and-condition" className="text-blue-700">Terms Condition</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-blue-900">
            <Image alt='logo' src="/Images/logo.png" height={ 100 } width={ 160 }></Image>
          </Link>
          <p className="mt-2 text-sm text-blue-700">Learn the essentials of computer programming technologies from the Basic to Advanced topics, along with real life practice examples and useful references at free of cost.</p>

        </div>

      </div>
      <hr />
      <b className=' mt-6 float-right text-white mr-2 sm:text-center'>Site Last updated: <span className='font-normal'>{ formatLastUpdated( lastUpdated ) }</span> </b>

      <div className="bg-blue-700">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">

            <Link href="https://www.instagram.com/unstopcomputer" className="ml-3 text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link href="https://www.youtube.com/@unstopcomputer44" className="ml-3 text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path

                  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm4.474 12.436s-.15 1.056-.594 1.494c-.638.594-1.638.594-2.05.625-.95.083-2.386.083-3.35.083s-2.4 0-3.35-.083c-.412-.031-1.413-.031-2.05-.625-.444-.438-.594-1.494-.594-1.494s-.094-.85-.094-1.894v-1.25c0-1.044.094-1.894.094-1.894s.15-1.056.594-1.494c.638-.563 1.619-.563 2.038-.625.85-.094 2.238-.094 3.35-.094s2.494 0 3.35.094c.412.031 1.4.063 2.05.625.444.438.594 1.494.594 1.494s.094.85.094 1.894v1.25c0 1.044-.094 1.894-.094 1.894zm-6.474-4.436v4l3.856-2-3.856-2z"
                />
              </svg>
            </Link>
            <Link href="/" className="ml-3 text-white">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;