import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';

const CodeMirror = dynamic(() => import('react-codemirror2').then(mod => mod.Controlled), {
  ssr: false,
});

const HTMLCompiler = () => {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    h1 { color: blue; }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a simple HTML compiler.</p>
</body>
</html>`);
  const [srcDoc, setSrcDoc] = useState(code);

  useEffect(() => {
    import('codemirror/mode/htmlmixed/htmlmixed').then(() => {
      console.log("CodeMirror HTML mode loaded");
    });
  }, []);

  const handleRunCode = () => {
    setSrcDoc(code);
  };

  return (
    <div>
      <Head>
        <title>Online HTML Compiler | Unstop Computer</title>
        <meta name="description" content="An online HTML compiler where you can test your code in real-time." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unstopcomputer.tech/html-compiler" />
      </Head>

      <section className="box-border h-full w-auto p-6 md:p-10 m-4 md:m-6 border-4 shadow-xl shadow-cyan-600 hover:shadow-indigo-700 rounded-lg">
        <h1 className='title-font sm:text-4xl text-center text-2xl mb-6 font-medium text-blue-700'>Online HTML Compiler</h1>
        <div className="flex flex-col md:flex-row gap-4 p-4 h-auto md:h-screen relative">
          <div className="flex flex-col w-full md:w-1/2 space-y-2">
            <CodeMirror
              className="border rounded shadow-md"
              value={code}
              options={{
                mode: 'htmlmixed',
                theme: 'dracula',
                lineNumbers: true,
                tabSize: 2,
                indentWithTabs: true,
              }}
              onBeforeChange={(editor, data, value) => {
                setCode(value);
              }}
              onChange={(editor, data, value) => {
                setCode(value);
              }}
            />
            <button 
              onClick={handleRunCode} 
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Run Code
            </button>
          </div>
          <div className="w-full md:w-1/2 border rounded shadow-lg overflow-hidden bg-white">
            <iframe
              className="w-full h-80 md:h-full"
              srcDoc={srcDoc}
              title="Output"
              sandbox="allow-scripts"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HTMLCompiler;
