import { useState } from "react";
import CheatLayout from "../../../components/cheatLayout";
import Head from "next/head";
import Link from "next/link";

const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="mb-4">
      <div className="bg-gray-100 p-4 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{language}</h2>
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="overflow-auto">{code}</pre>
      </div>
    </div>
  );
};

export default function Home() {
  // Sample code blocks
  const codeBlocks = [
    {
      language: "General Query",
      code: `> Name Business Idea 
Can you suggest a creative name for my tech startup?
Help me come up with a catchy name for my bakery business.

> Create an outline for a course or training program
Please create an outline for a course on web development for beginners.
Can you make a training program outline for a customer service workshop?

> Ask you interview questions for a specific job
Please provide me with some common interview questions for a marketing manager role.
I'm interviewing for a software engineer position, can you give me some interview questions?


> Give you gift ideas for business partners, customers, or clients
I need gift ideas for my clients, can you help?
What are some unique gifts I can give to my business partners?

> Choose a random contest winner(s) from a long list of names or emails
I want to choose a winner from a list of 100 names, can you help?
Can you randomly pick 5 email addresses from a list of 1000 for a giveaway contest?

`,
    },
    {
      language: "Coding Query",
      code: `> Explain why a piece of code isn't working
Why this code is not working?
var x = 5;
var y = 0;
console.log(x/y);


> Explain what a piece of code means
What this code does?
function addNumbers(a, b) {
    return a + b;
}

> Rewrite the code using the specified language
Translate this code into Python:
function addNumbers(a, b) {
    return a + b;
}


> Code an entire software program
Write a program that calculates the factorial of a given number in python?
How do I make an HTTP request in Javascript?

`,
    },
    {
      language: "Email Query",
      code: `> Creating email campaigns
Email inviting Jack to dinner on the weekend
Create an email sequence for our new customer onboarding process

> `,
    },
    
    // Add more code blocks here
  ];

  return (
    <CheatLayout>
      <Head>
        <title>ChatGpt Cheat Sheet - Home | Unstop Computer</title>
        <meta
          name="description"
          content="This cheat sheet lists out prompts and tips from all over the world on how to use ChatGPT effectively"
        />
        <link rel="icon" href="/Images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="website template" />
      </Head>
      <section id="content-wrapper">
        <div className="lg:w-4/5 sm:mx-auto sm:mb-2 -mx-1">
          <div className="container px-2 py-8 md:flex-row">
            <div className="lg:flex-grow lg:pr-24 md:pr-16 md:mb-0">
              <h2 className=" text-blue-700 text-4xl text-center sm:text-xl md:text-4xl lg:text-left xl:text-4xl dark:text-blue">
                ChatGpt Cheat Sheet
              </h2>
              <br className="lg:block hidden" />
              <p>
                This cheat sheet lists out prompts and tips from all over the
                world on how to use ChatGPT effectively.
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {codeBlocks.map((block, index) => (
                <div key={index} className="col-span-1">
                  <CodeBlock language={block.language} code={block.code} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </CheatLayout>
  );
}
