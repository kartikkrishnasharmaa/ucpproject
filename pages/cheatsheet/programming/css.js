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
      language: "External Stylesheet",
      code: `<link href="./path/to/stylesheet/style.css" rel="stylesheet" type="text/css">
`,
    },
    {
      language: "Internal Stylesheet",
      code: `<style>
body {
    background-color: linen;
}
</style>
`,
    },
    {
      language: "Inline Styles",
      code: `<h2 style="text-align: center;">Centered text</h2>

<p style="color: blue; font-size: 18px;">Blue, 18-point text</p>
`,
    },
    {
      language: "Position",
      code: `.box {
    position: relative;
    top: 20px;
    left: 20px;
}
`,
    },
    {
      language: "Flex layout",
      code: `div {
    display: flex;
    justify-content: center;
}
div {
    display: flex;
    justify-content: flex-start;
}
`,
    },
    {
      language: "Add class",
      code: `<div class="classname"></div>
<div class="class1 ... classn"></div>
`,
    },
    {
      language: "Selector",
      code: `h1 { } 
#job-title { }
div.hero { }
div > p { }
`,
    },
    {
      language: "Background",
      code: `background-color: blue;
background-image: url("nyan-cat.gif");
background-image: url("../image.png");
`,
    },
    {
      language: "CSS Named Color",
      code: `color: red;
color: orange;
color: tan;
color: rebeccapurple;
`,
    },
    {
      language: "Hexadecimal color",
      code: `color: #090;
color: #009900;
color: #090a;
color: #009900aa;
`,
    },
    {
      language: "rgb() Colors",
      code: `color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.3);
color: rgb(34.0 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);
`,
    },
    {
      language: "Font properties",
      code: `font-family: Arial, sans-serif;
font-size: 12pt;
letter-spacing: 0.02em;
`,
    },
    {
      language: "Box Margin/Padding",
      code: `.block-one {
    margin: 20px;
    padding: 10px;
}
`,
    },
    {
      language: "Box Sizing",
      code: `.container {
    box-sizing: border-box;
}


`,
    },
    {
      language: "Box Overflow",
      code: `.small-block {
    overflow: scroll;
}


`,
    },
    {
      language: "CSS Flexbox",
      code: `.container {
  display: flex;
}
`,
    },
    {
      language: "CSS grid Layout",
      code: `#grid-container {
    display: grid;
    width: 100px;
    grid-template-columns: 20px 20% 60%;
}
`,
    },
    {
      language: "Grid Gap",
      code: `/*The distance between rows is 20px*/
/*The distance between columns is 10px*/
#grid-container {
    display: grid;
    grid-gap: 20px 10px;
}
`,
    },
    {
      language: "CSS Animation",
      code: `/* @keyframes duration | timing-function | delay |
   iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes duration | timing-function | delay | name */
animation: 3s linear 1s slidein;

/* @keyframes duration | name */
animation: 3s slidein;

animation: 4s linear 0s infinite alternate move_eye;
animation: bounce 300ms linear 0s infinite normal;
animation: bounce 300ms linear infinite;
animation: bounce 300ms linear infinite alternate-reverse;
animation: bounce 300ms linear 2s infinite alternate-reverse forwards normal;
`,
    },
    // Add more code blocks here
  ];

  return (
    <CheatLayout>
      <Head>
        <title>CSS Cheat Sheet - Home | Unstop Computer</title>
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
                CSS Cheat Sheet
              </h2>
              <br className="lg:block hidden" />
              <p>
                This is a reference cheat sheet for CSS goodness, listing
                selector syntax, properties, units and other useful bits of
                information.
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
