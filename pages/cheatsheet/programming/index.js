import CheatLayout from "../../../components/cheatLayout";
import Head from "next/head";
import Link from 'next/link';

export default function Home() {

    const mcqsubjects = [
        { id: 1, name: 'Angular Js', link: '/cheatsheet/programming/angularjs' },
        { id: 2, name: 'Asp.Net', link: '/cheatsheet/programming/aspnet' },
        { id: 3, name: 'Bootstrap', link: '/cheatsheet/programming/bootstrap' },
        { id: 4, name: 'CSS', link: '/cheatsheet/programming/css' },
        { id: 5, name: 'Express Js', link: '/cheatsheet/programming/express' },
        { id: 6, name: 'Go Language', link: '/cheatsheet/programming/go-language' },



        // Add more subjects here as needed
    ];

    return (
        <CheatLayout>
            <Head>
                <title>Programming Cheat Sheet - Home | Unstop Computer</title>
                <meta name="description" content="An Online place where you can write code and test your code in real time without installing any additional softwares." />
                <link rel="icon" href="/Images/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="website template" />
            </Head>
            <section id="content-wrapper">
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div className="container text-center mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                            <div className="relative xl:container">
                                <h2 className=" text-blue-700 text-4xl text-center sm:text-xl md:text-6xl lg:text-left xl:text-5xl dark:text-blue">Programming Cheat Sheet </h2> <br className="lg:block hidden" />
                            </div>
                            <p className="mt-2 items-center">Over 100+ Free Cheat Sheets </p>
                        </div>
                    </div>
                    { mcqsubjects.map( ( subject ) => (
                        <div key={ subject.id } className="p-2 sm:w-1/2 w-full">
                            <Link href={ subject.link }>
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center cursor-pointer">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-blue-700 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">{ subject.name } MCQ</span>
                                </div>
                            </Link>
                        </div>
                    ) ) }
                </div>
            </section>
        </CheatLayout>
    );
}
