import Head from 'next/head';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Compiler from '../components/compiler';
import Mcq from '../components/Mcq';
import TiltCard from './TiltCard'; 
import styles from './Home.module.css'; // ✅ Add this line

export default function Home() {
  return (
    <>
      <Head>
        <title>Unstop Computer | Learn Coding Online</title>
        <meta name="description" content="Learn the essentials of computer programming technologies from the Basic to Advanced topics, along with real life practice examples and useful references at free of cost." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="Keywords" content="HTML,Unstop Computer.in,UnstopComputers, Unstop Computer, UnstopComputers.in Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, XML, MySQL, Icons, Node.js, React, Vue, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website" />
        <link rel="canonical" href="https://unstopcomputer.vercel.app" />
                <meta property="og:image" content="https://unstopcomputer.vercel.app/Images/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta property="og:title" content="Unstop Computer | Learn Coding Online" />
        <meta property="og:description" content="Learn the essentials of computer programming technologies from the Basic to Advanced topics, along with real life practice examples and useful references at free of cost." />
        <link rel="icon" href="/Images/favicon.ico" type="image/x-icon"></link>
      </Head>
      <Hero />
      <Feature />

      <main className={styles.mainContainer}>
      <TiltCard><Mcq /></TiltCard>
      <TiltCard><Compiler /></TiltCard>
      </main>
    </>
  );
}
