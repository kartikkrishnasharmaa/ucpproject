import Head from "next/head";
import React, { useState } from "react";

const GlossaryTable = () => {
  const termsData = [
    {
      keyword: "Access Control",
      description:
        "Deals with policies and mechanism to prohibit a user/process from accessing ant resource that he/she is not authourised to access",
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
      keyword: "Alpha testing",
      description:
        "After completion of integrated testing of software, it is released for further testing to a very select user group within or outside the organisation.",
    },
    {
      keyword: "ANSI",
      description:
        "American Standard Code for Information Interchange - A US based national organization that establishes uniform standard in several field.",
    },
    {
      keyword: "Analog computer",
      description:
        "A computer that operates on data, which is in the form of continously variable physical quantities such as electrical current.",
    },
    {
      keyword: "Animation",
      description:
        "A multimedia component that contain a set of images displayed at a reasonable speed to create an effect of visual change or motion, similar to a movie film.",
    },
    {
      keyword: "Archiving",
      description:
        "Organization and interconnection of various components of a computer system.",
    },
    {
      keyword: "Array",
      description:
        "A data type that is collection of elements in which all elements are of the same type. It has a fixed number of elements, called its length or size, given at the time of its declaration.",
    },
    {
      keyword: "Artificial Intelligence",
      description:
        "A branch of computer science that deals with possessing, reasoning, learning and thinking capabilities of computers thar resemble those of human beings.",
    },
    {
      keyword: "Assembler",
      description:
        "A computer program that translate an assembly language program to its machine language equivalent.",
    },
    {
      keyword: "Assembly language",
      description:
        "A programming language that allow instruction and storage location to be represented by letters and symbol instead of number.",
    },
    {
      keyword: "Authentication",
      description:
        "Process by which a system verifies the identity of a user befor it permits the user to access a requested resources.",
    },
    {
      keyword: "Authorization",
      description:
        "Once a system authenticate a user / process successfully, the system should next have ways to prohibit the user/process from accessing those resources/information that he/she is not authorized to access. This issue is called authorization.",
    },
    {
      keyword: "Backup",
      description:
        "Alternate facilities of programs, data file, hardware equipment, etc. Which are used in case the original one is destroyed, lost or fails to operate.",
    },
    {
      keyword: "Bandwidth",
      description:
        "Range of frequencies available for data transmission. Wider the bandwidth of a communication system the more data it can transmit in a given period.",
    },
    {
      keyword: "Batch processing",
      description:
        "Running of several computer programs one after another without the need of a huma operator to run each program individually.",
    },
    {
      keyword: "Beta Testing",
      description:
        "Use of beta version of software by a selected group of users for identifying errors that might have been overlooked during regular testing phase.",
    },
    {
      keyword: "Binary",
      description:
        "A number system based on two digits 0 and 1, used by computers to represent data and perform operations.",
    },
    {
      keyword: "Biometric device",
      description:
        "A device used for user authentication that verifies some physical characteristic of a user such as the person apperance, fingerprint, hand geometry, voice or signature.",
    },
    { keyword: "Bit", description: "It stand for Binary Digit 0 or 1" },
    {
      keyword: "Bluetooth",
      description:
        "A wireless technology standard used for exchanging data over short distances.",
    },
    {
      keyword: "Booting",
      description:
        "Process of automation loading of operating system to primary storage, and readying a computer system for use.",
    },
    {
      keyword: "Browser",
      description:
        "Software tool that provide several navigation facilities to help user to internet suffering easily and effectively.",
    },
    { keyword: "Bug", description: "A error in a computer program" },
    { keyword: "Bus", description: "A set of wires, which carries " },
    {
      keyword: "Cloud Computing",
      description:
        "The delivery of computing services (such as servers, storage, databases, networking, software) over the internet (the cloud) to offer faster innovation, flexible resources, and economies of scale.",
    },
    {
      keyword: "CPU",
      description:
        "Central Processing Unit, the primary component of a computer that performs instructions.",
    },
    {
      keyword: "Data Mining",
      description:
        "The process of discovering patterns and extracting knowledge from large amounts of data using algorithms and techniques from statistics, machine learning, and database systems.",
    },
    {
      keyword: "DNS",
      description:
        "Domain Name System, a system that translates domain names to IP addresses.",
    },
    {
      keyword: "Encryption",
      description:
        "The process of encoding information in such a way that only authorized parties can access it.",
    },
    {
      keyword: "Ethernet",
      description:
        "A common method of networking computers in a LAN (Local Area Network).",
    },
    {
      keyword: "Firmware",
      description:
        "Software that is embedded into hardware devices, providing low-level control over the devices functionality.",
    },
    {
      keyword: "Firewall",
      description:
        "A security system that monitors and controls incoming and outgoing network traffic.",
    },
    {
      keyword: "GUI",
      description:
        "Graphical User Interface, a visual way of interacting with a computer using icons, menus, and other graphical elements.",
    },
    {
      keyword: "HTML",
      description:
        "Hypertext Markup Language, the standard markup language for creating web pages.",
    },
    {
      keyword: "HTTP",
      description:
        "Hypertext Transfer Protocol, the foundation of data communication for the World Wide Web.",
    },
    {
      keyword: "IoT",
      description:
        "Internet of Things, a network of physical objects (devices, vehicles, appliances) embedded with sensors, software, and connectivity to enable them to collect and exchange data.",
    },
    {
      keyword: "ISP",
      description:
        "Internet Service Provider, a company that provides access to the internet.",
    },
    {
      keyword: "JavaScript",
      description:
        "A high-level programming language used primarily to create dynamic and interactive effects within web browsers.",
    },
    {
      keyword: "Kernel",
      description:
        "The core component of an operating system that manages system resources and provides the lowest-level abstraction layer for hardware.",
    },
    { keyword: "Laptop", description: "A portable computer." },
    {
      keyword: "Linux",
      description:
        "A family of open-source Unix-like operating systems based on the Linux kernel.",
    },
    {
      keyword: "Machine Learning",
      description:
        "A subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.",
    },
    {
      keyword: "Malware",
      description:
        "Malicious software designed to disrupt, damage, or gain unauthorized access to a computer system.",
    },
    {
      keyword: "Network Protocol",
      description:
        "A set of rules governing communication between devices over a network.",
    },
    {
      keyword: "OpenGL",
      description:
        "Open Graphics Library, a cross-language, cross-platform API for rendering 2D and 3D vector graphics.",
    },
    {
      keyword: "Packet",
      description:
        "A formatted unit of data carried by a packet-switched network.",
    },
    {
      keyword: "Python",
      description:
        "A high-level programming language known for its readability and simplicity, used for web development, data analysis, artificial intelligence, and more.",
    },
    {
      keyword: "RAM",
      description:
        "Random Access Memory, a type of computer memory that can be accessed randomly.",
    },
    {
      keyword: "Regression",
      description:
        "A statistical technique used in machine learning and data analysis to model the relationship between variables.",
    },
    {
      keyword: "Router",
      description:
        "A device that forwards data packets between computer networks.",
    },
    {
      keyword: "Server",
      description:
        "A computer or system that provides resources, data, or services to other computers, known as clients, over a network.",
    },
    {
      keyword: "Solid State Drive (SSD)",
      description:
        "A storage device that uses integrated circuit assemblies to store data persistently.",
    },
    {
      keyword: "SQL",
      description:
        "Structured Query Language, a domain-specific language used in programming and managing relational databases.",
    },
    {
      keyword: "TCP/IP",
      description:
        "Transmission Control Protocol/Internet Protocol, the fundamental suite of protocols that powers the internet and network communication.",
    },
    {
      keyword: "Unicode",
      description:
        "A computing industry standard for consistent encoding, representation, and handling of text expressed in most of the world writing systems.",
    },
    {
      keyword: "Virtualization",
      description:
        "The creation of a virtual (rather than actual) version of something, such as a virtual machine, operating system, storage device, or network resource.",
    },
    {
      keyword: "Virtual Private Network (VPN)",
      description:
        "A secure connection between a user and a private network over the internet.",
    },
    {
      keyword: "Web Server",
      description:
        "A software application that serves web pages to clients over the internet.",
    },
    {
      keyword: "XML",
      description:
        "Extensible Markup Language, a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.",
    },

    // Add more terms as needed
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = termsData.filter((term) =>
    term.keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>
          Computer Dictionary - All Computer related terms| Unstop Computer
        </title>
        <meta
          name="description"
          content="Explore a comprehensive computer dictionary featuring all computer-related terms. Unstop Computer offers a wealth of definitions and explanations to enhance your understanding of technology and computing. Dive into the world of computers with our expansive dictionary"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="Keywords"
          content="HTML,Unstop Computer.in,UnstopComputers, Unstop Computer, UnstopComputers.in Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, XML, MySQL, Icons, Node.js, React, Vue, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website"
        />
        <link
          rel="canonical"
          href="https://unstopcomputer.vercel.app/glossary"
        />
        <meta
          property="og:image"
          content="https://unstopcomputer.vercel.app/Images/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta
          property="og:title"
          content="Computer Dictionary - ALl computer related terms | Unstop Computer"
        />
        <meta
          name="description"
          content="Explore a comprehensive computer dictionary featuring all computer-related terms. Unstop Computer offers a wealth of definitions and explanations to enhance your understanding of technology and computing. Dive into the world of computers with our expansive dictionary"
        />
      </Head>
      <div className="container text-center mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <div className="relative xl:container">
            <h2 className=" text-blue-700 text-4xl text-center sm:text-xl md:text-6xl lg:text-center xl:text-5xl dark:text-blue">
              Computer Dictionary{" "}
            </h2>{" "}
            <br className="lg:block hidden" />
          </div>
          <p className="mt-2">
            Explore a comprehensive computer dictionary featuring all
            computer-related terms. Here you can search various keyword related
            to computer science, such as programming languages, data structures,
            algorithms, operating systems, databases, and more.{" "}
          </p>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 transition-colors duration-300"
          />
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Keyword</th>
              <th className="px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredTerms.map((term, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 font-semibold">{term.keyword}</td>
                <td className="px-4 py-2">{term.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GlossaryTable;
