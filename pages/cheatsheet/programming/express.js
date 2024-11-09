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
      language: "Hello World",
      code: `$ mkdir myapp # create directory
$ cd myapp    # enter the directory
$ npm init -y # Initialize a configuration
`,
    },
    {
        language: "Install",
        code: `$ npm install express
`,
      },
      {
        language: "Entry File",
        code: `const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res. send('Hello World!')
})
app. listen(port, () => {
  console.log("Server is running")
})
`,
      },
      {
        language: "Router",
        code: `router. use(function (req, res, next) {
  //.. some logic here .. like any other middleware
  next()
})
`,
      },
      {
        language: "Handle Request in events",
        code: `//depends on where the router "use()"
router. get('/events', (req, res, next) => {
  //..
})
`,
      },
      {
        language: "app.delete",
        code: `app.delete('/', function (req, res) {
  res.send('DELETE request to homepage')
})
`,
      },
      {
        language: "app.disable",
        code: `app.disable('trust proxy')
app.get('trust proxy')
// => false
`,
      },
      {
        language: "app.engine",
        code: `var engines = require('consolidate')

app.engine('haml', engines.haml)
app.engine('html', engines.hogan)
`,
      },
      {
        language: "app.listen",
        code: `var express = require('express')

var app = express()
app.listen(3000)
`,
      },
      {
        language: "Middleware",
        code: `function logOriginalUrl (req, res, next) {
  console.log('ReqURL:', req.originalUrl)
  next()
}

function logMethod (req, res, next) {
  console.log('Request Type:', req.method)
  next()
}

const log = [logOriginalUrl, logMethod]

app.get('/user/:id', log,
  (req, res, next)=>{
    res.send('User Info')
  }
)
`,
      },
      {
        language: "Using Template",
        code: `app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res. render('index', {
    title: 'Hey', message: 'Hello there!'
  })
})
`,
      },
     
                                                       
    // Add more code blocks here
  ];

  return (
    <CheatLayout>
      <Head>
        <title>Express Js Cheat Sheet - Home | Unstop Computer</title>
        <meta
          name="description"
          content="An Online place where you can write code and test your code in real time without installing any additional softwares."
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
                Express Js Cheat Sheet
              </h2>
              <br className="lg:block hidden" />
              <p>
                This is a reference cheat sheet for Express, a flexible and streamlined web framework for Node.js
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
