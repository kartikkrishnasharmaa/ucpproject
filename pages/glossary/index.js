import Head from "next/head";
import React, { useState } from "react";

const GlossaryTable = () => {
  const termsData = [
    {
      keyword: "Access Control",
      description:
        "Policies and mechanisms to prevent unauthorized access to resources by users or processes.",
    },
    {
      keyword: "Adder",
      description:
        "A logic circuit capable of calculating the sum of two or more quantities.",
    },
    {
      keyword: "Algorithm",
      description:
        "A step-by-step procedure or formula for solving a problem or accomplishing a task in computer science.",
    },
    {
      keyword: "Alpha Testing",
      description:
        "Initial testing of software by a select group within or outside the organization before beta release.",
    },
    {
      keyword: "ANSI",
      description:
        "American National Standards Institute - a U.S.-based organization that establishes uniform standards in various fields.",
    },
    {
      keyword: "Analog Computer",
      description:
        "A computer that operates on data in the form of continuously variable physical quantities such as electrical current.",
    },
    {
      keyword: "Animation",
      description:
        "A multimedia component consisting of a sequence of images shown rapidly to simulate motion.",
    },
    {
      keyword: "Archiving",
      description:
        "The process of storing and organizing data for long-term preservation.",
    },
    {
      keyword: "Array",
      description:
        "A data type representing a collection of elements of the same type, with a fixed size.",
    },
    {
      keyword: "Artificial Intelligence",
      description:
        "A branch of computer science focused on creating systems with reasoning, learning, and decision-making capabilities similar to humans.",
    },
    {
      keyword: "Assembler",
      description:
        "A computer program that translates assembly language into machine language.",
    },
    {
      keyword: "Assembly Language",
      description:
        "A low-level programming language using symbolic codes and labels instead of binary.",
    },
    {
      keyword: "Authentication",
      description:
        "The process of verifying a user's identity before granting access to a system.",
    },
    {
      keyword: "Authorization",
      description:
        "The process of granting or denying access to specific resources after successful authentication.",
    },
    {
      keyword: "Backup",
      description:
        "A copy of data, programs, or hardware used in case the original is lost, destroyed, or fails.",
    },
    {
      keyword: "Bandwidth",
      description:
        "The range of frequencies available for data transmission; higher bandwidth allows more data transfer.",
    },
    {
      keyword: "Batch Processing",
      description:
        "Executing a series of programs or jobs without manual intervention.",
    },
    {
      keyword: "Beta Testing",
      description:
        "Testing of software by external users to identify bugs before the final release.",
    },
    {
      keyword: "Binary",
      description:
        "A number system based on two digits: 0 and 1, used by computers to process data.",
    },
    {
      keyword: "Biometric Device",
      description:
        "A device that authenticates a user's identity based on physical characteristics like fingerprint or face.",
    },
    {
      keyword: "Bit",
      description: "Short for Binary Digit; either 0 or 1.",
    },
    {
      keyword: "Bluetooth",
      description:
        "A wireless technology for short-distance data exchange between devices.",
    },
    {
      keyword: "Booting",
      description:
        "The process of loading an operating system into memory when a computer is started.",
    },
    {
      keyword: "Browser",
      description:
        "Software used to access and navigate websites on the internet.",
    },
    {
      keyword: "Bug",
      description: "An error or flaw in a software program.",
    },
    {
      keyword: "Bus",
      description: "A set of wires used for data transfer between components in a computer.",
    },
    {
      keyword: "Cloud Computing",
      description:
        "The delivery of computing services like servers, databases, and storage over the internet.",
    },
    {
      keyword: "CPU",
      description:
        "Central Processing Unit; the brain of a computer where most calculations take place.",
    },
    {
      keyword: "Data Mining",
      description:
        "The process of discovering patterns and extracting useful information from large datasets.",
    },
    {
      keyword: "DNS",
      description:
        "Domain Name System; translates domain names into IP addresses.",
    },
    {
      keyword: "Encryption",
      description:
        "The process of converting data into a coded format to prevent unauthorized access.",
    },
    {
      keyword: "Ethernet",
      description:
        "A standard method of connecting computers in a local area network (LAN).",
    },
    {
      keyword: "Firmware",
      description:
        "Software programmed into hardware devices to control their functions.",
    },
    {
      keyword: "Firewall",
      description:
        "A security system that monitors and controls network traffic based on predefined rules.",
    },
    {
      keyword: "GUI",
      description:
        "Graphical User Interface; allows users to interact with devices using graphical icons.",
    },
    {
      keyword: "HTML",
      description:
        "Hypertext Markup Language; used to structure content on the web.",
    },
    {
      keyword: "HTTP",
      description:
        "Hypertext Transfer Protocol; the protocol used for transferring web pages on the internet.",
    },
    {
      keyword: "IoT",
      description:
        "Internet of Things; network of physical devices that communicate via the internet.",
    },
    {
      keyword: "ISP",
      description:
        "Internet Service Provider; offers internet access to customers.",
    },
    {
      keyword: "JavaScript",
      description:
        "A programming language used to create interactive effects within web browsers.",
    },
    {
      keyword: "Kernel",
      description:
        "The core of an operating system, managing resources and communication between hardware and software.",
    },
    {
      keyword: "Laptop",
      description: "A portable personal computer.",
    },
    {
      keyword: "Linux",
      description:
        "An open-source operating system based on the Unix architecture.",
    },
    {
      keyword: "Machine Learning",
      description:
        "A branch of AI that enables systems to learn and make decisions from data.",
    },
    {
      keyword: "Malware",
      description:
        "Malicious software designed to damage or gain unauthorized access to systems.",
    },
    {
      keyword: "Network Protocol",
      description:
        "A set of rules defining how data is transmitted and received over a network.",
    },
    {
      keyword: "OpenGL",
      description:
        "Open Graphics Library; an API for rendering 2D and 3D vector graphics.",
    },
    {
      keyword: "Packet",
      description:
        "A small segment of data sent over a network.",
    },
    {
      keyword: "Python",
      description:
        "A high-level programming language known for readability and versatility.",
    },
    {
      keyword: "RAM",
      description:
        "Random Access Memory; temporary memory used to store data for quick access by the CPU.",
    },
    {
      keyword: "Regression",
      description:
        "A statistical method for modeling the relationship between variables.",
    },
    {
      keyword: "Router",
      description:
        "A device that forwards data packets between networks.",
    },
    {
      keyword: "Server",
      description:
        "A system that provides data, services, or programs to other computers, called clients.",
    },
    {
      keyword: "Solid State Drive (SSD)",
      description:
        "A data storage device using flash memory for faster performance compared to hard drives.",
    },
    {
      keyword: "SQL",
      description:
        "Structured Query Language; used to manage and manipulate relational databases.",
    },
    {
      keyword: "TCP/IP",
      description:
        "Transmission Control Protocol/Internet Protocol; the suite of communication protocols used on the internet.",
    },
    {
      keyword: "Unicode",
      description:
        "A standard for encoding text expressed in most of the world's writing systems.",
    },
    {
      keyword: "Virtualization",
      description:
        "Creating virtual versions of physical resources like servers, storage, or networks.",
    },
    {
      keyword: "Virtual Private Network (VPN)",
      description:
        "A secure connection that allows users to access a private network over the internet.",
    },
    {
      keyword: "Web Server",
      description:
        "Software that delivers web pages to users over the internet.",
    },
    {
      keyword: "XML",
      description:
        "Extensible Markup Language; used to define rules for encoding documents in a readable format.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");

  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  const filteredTerms = termsData.filter((term) => {
    const matchesLetter = selectedLetter ? term.keyword.startsWith(selectedLetter) : true;
    const matchesSearch = term.keyword.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLetter && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Computer Dictionary | Unstop Computer</title>
        <meta name="description" content="Explore a comprehensive computer dictionary with definitions of key computing and tech terms. Enhance your knowledge with Unstop Computer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Computer Dictionary, Glossary, Programming, Web Development, Data Science, Cybersecurity, Software, Hardware, Unstop Computer" />
        <link rel="canonical" href="https://unstopcomputer.vercel.app/glossary" />
        <meta property="og:image" content="https://unstopcomputer.vercel.app/Images/logo.png" />
        <meta property="og:title" content="Computer Dictionary | Unstop Computer" />
      </Head>

      <div className="container text-center mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Computer Dictionary
        </h1>
        <p className="text-lg text-gray-700">
          Search and explore key computer science terms including programming,
          hardware, networking, databases, AI, and more.
        </p>
      </div>

      <div className="max-w-screen-lg mx-auto px-4 pb-16">
        {/* A-Z Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() =>
                setSelectedLetter(letter === selectedLetter ? "" : letter)
              }
              className={`px-3 py-1 rounded-md border ${
                selectedLetter === letter
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-blue-100"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search term..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 mb-6 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        {/* Glossary Table */}
        <table className="w-full table-auto border border-collapse">
          <thead>
            <tr className="bg-blue-100">
              <th className="text-left px-4 py-2 border">Keyword</th>
              <th className="text-left px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredTerms.length > 0 ? (
              filteredTerms.map((term, index) => (
                <tr key={index} className="border-t hover:bg-gray-100">
                  <td className="px-4 py-2 border font-medium">
                    {term.keyword}
                  </td>
                  <td className="px-4 py-2 border">{term.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center py-4">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GlossaryTable;