import Head from "next/head";
import React, { useState } from "react";
import QueLayout from "../../components/QueLayout";

const GlossaryTable = () => {
  const termsData = [
    {
      que: "What is the difference between padding and margin in CSS?",
      ans: "Padding is the space inside an element between the element's content and its border, while margin is the space outside the element, between the element's border and surrounding elements.",
    },

    {
      que: "Explain the 'box model' in CSS.",
      ans: "The box model is a fundamental concept in CSS that describes how elements are rendered on a web page. It consists of content, padding, border, and margin, which collectively determine the element's total size and appearance.",
    },

    {
      que: "What is the difference between inline and block elements?",
      ans: "Inline elements flow within the content and do not force a line break after them, while block elements take up the full width available and create a new line before and after them by default.",
    },

    {
      que: "What is the CSS 'float' property used for?",
      ans: "The 'float' property is used to specify whether an element should float to the left, right, or none. It's commonly used for creating layouts where elements can be positioned side by side.",
    },

    {
      que: "What is the purpose of CSS preprocessors like SASS and LESS?",
      ans: "CSS preprocessors extend CSS with features like variables, nesting, and mixins, making CSS more maintainable and efficient to write. They allow for modular and reusable code, speeding up development.",
    },

    {
      que: "Explain the difference between 'em' and 'rem' units in CSS.",
      ans: "'em' units are relative to the font size of the parent element, while 'rem' units are relative to the font size of the root element (usually the <html> element). 'rem' units provide a more predictable and consistent way to size elements.",
    },
    {
      que: "What is the CSS specificity and how does it work?",
      ans: "CSS specificity determines which style rules are applied to an element when multiple conflicting rules exist. It is calculated based on the selector's type, class, ID, and inline styles, with more specific selectors overriding less specific ones.",
    },

    {
      que: "How can you vertically center an element in CSS?",
      ans: "You can vertically center an element by setting its parent container's display property to flex and using the align-items and justify-content properties with a value of 'center', or by using the 'transform' property with 'translateY(-50%)' combined with absolute positioning and a top value of 50%.",
    },

    {
      que: "What is the 'box-sizing' property in CSS?",
      ans: "The 'box-sizing' property controls how the width and height of an element are calculated. The default value is 'content-box', where the width and height only include the content. Setting it to 'border-box' includes the padding and border in the element's total size.",
    },

    {
      que: "What is the difference between 'display: none' and 'visibility: hidden'?",
      ans: "'display: none' removes the element from the document flow, making it invisible and not taking up any space, while 'visibility: hidden' hides the element but still reserves its space in the layout.",
    },

    {
      que: "How do you create a responsive website in CSS?",
      ans: "You can create a responsive website by using media queries to apply different styles based on the viewport size, employing fluid layouts with percentages or viewport units, and optimizing images and other media for various devices.",
    },

    {
      que: "What are CSS pseudo-elements?",
      ans: "CSS pseudo-elements are keywords that allow you to style certain parts of an element, such as ::before and ::after, which insert content before and after the element's content, respectively. They are used to add decorative elements or generate content dynamically.",
    },

    {
      que: "Explain the 'z-index' property in CSS.",
      ans: "The 'z-index' property controls the stacking order of positioned elements along the z-axis. Elements with a higher 'z-index' value appear above elements with a lower value. It only applies to positioned elements (position: absolute, position: relative, position: fixed).",
    },

    {
      que: "What is the CSS 'transition' property used for?",
      ans: "The 'transition' property allows you to smoothly animate the changes in CSS properties over a specified duration. It's commonly used to create effects like hover states, fade-ins, and slide transitions.",
    },

    {
      que: "How can you include CSS in your HTML document?",
      ans: "You can include CSS in your HTML document using the <link> element to link an external CSS file, or by using the <style> element to embed CSS directly within the HTML document. Additionally, you can apply inline styles directly to HTML elements using the 'style' attribute.",
    },

    {
      que: "What is the difference between 'normalize.css' and 'reset.css'?",
      ans: "'normalize.css' is a CSS file that aims to make the default styles consistent across different browsers, providing a baseline for styling, while 'reset.css' aims to reset all styles to a consistent baseline, removing default browser styling completely.",
    },
    {
      que: "What is the 'flexbox' layout model in CSS?",
      ans: "Flexbox is a layout model in CSS that allows you to create flexible and responsive layouts more easily. It enables you to align and distribute space among items within a container, making it ideal for building dynamic and complex layouts.",
    },

    {
      que: "What is the purpose of CSS grid layout?",
      ans: "CSS grid layout is a two-dimensional layout system that allows you to create complex grid-based layouts with rows and columns. It provides precise control over the placement and sizing of elements, making it well-suited for designing responsive web pages.",
    },

    {
      que: "Explain the concept of 'media queries' in CSS.",
      ans: "Media queries in CSS allow you to apply different styles based on the characteristics of the device or viewport, such as screen size, resolution, and orientation. They enable you to create responsive designs that adapt to various devices and screen sizes.",
    },

    {
      que: "What are CSS sprites and how are they used?",
      ans: "CSS sprites are a technique used to combine multiple images into a single image file and then use CSS to display specific parts of the image as needed. This reduces the number of server requests, improving website performance and loading times.",
    },

    {
      que: "How do you create a fixed navigation bar in CSS?",
      ans: "You can create a fixed navigation bar by setting the position property of the navigation element to 'fixed' and specifying its top, bottom, left, or right position. This will keep the navigation bar fixed in place as the user scrolls down the page.",
    },

    {
      que: "What is the CSS 'transform' property used for?",
      ans: "The 'transform' property in CSS allows you to apply various transformations to an element, such as scaling, rotating, skewing, and translating (moving). It's commonly used for creating visual effects and animations on web pages.",
    },

    {
      que: "What is the purpose of the 'currentColor' keyword in CSS?",
      ans: "The 'currentColor' keyword in CSS is used to refer to the value of the 'color' property of the element on which it's used. It's particularly useful for setting the color of an element's border, background, or text to match its font color dynamically.",
    },

    {
      que: "Explain the concept of 'CSS variables' (custom properties).",
      ans: "CSS variables, also known as custom properties, allow you to define reusable values that can be used throughout your CSS code. They provide a way to store and reuse values like colors, sizes, and font families, making CSS more maintainable and easier to update.",
    },

    {
      que: "What is the 'will-change' property in CSS and when should it be used?",
      ans: "The 'will-change' property in CSS allows you to hint to the browser that an element is going to change in a specific way, such as its position or opacity, enabling the browser to optimize its rendering performance. It should be used sparingly and only on elements that are expected to undergo significant changes.",
    },

    {
      que: "How do you create a responsive image gallery in CSS?",
      ans: "You can create a responsive image gallery by using CSS grid or flexbox to layout the images in a grid, setting their width to a percentage or viewport unit, and applying media queries to adjust the layout and size of the images based on the viewport size.",
    },

    {
      que: "What is the 'clip-path' property in CSS?",
      ans: "The 'clip-path' property in CSS allows you to specify a clipping region for an element, defining which parts of the element are visible and which are hidden. It's commonly used for creating non-rectangular shapes and image masks.",
    },

    {
      que: "Explain the difference between 'inline-block' and 'inline' display properties in CSS.",
      ans: "'inline-block' elements are displayed as inline elements but behave like block-level elements, allowing you to set a width, height, margins, and padding. 'inline' elements, on the other hand, only take up as much width as necessary and do not allow setting a width or height.",
    },

    {
      que: "What is the 'currentColor' keyword in CSS?",
      ans: "The 'currentColor' keyword in CSS is used to refer to the computed value of the 'color' property. It allows for dynamic styling, where an element's border, background, or other properties can automatically inherit the current text color.",
    },

    {
      que: "How do you create a diagonal gradient background in CSS?",
      ans: "You can create a diagonal gradient background in CSS by using the 'linear-gradient' function and specifying the angle of the gradient. By setting the background to a linear gradient with appropriate color stops, you can achieve a diagonal gradient effect.",
    },

    {
      que: "What are vendor prefixes in CSS and why are they used?",
      ans: "Vendor prefixes are prefixes added to CSS property names to identify which browser vendor (e.g., -webkit- for WebKit-based browsers like Chrome and Safari) implemented the property. They are used to apply experimental or non-standard CSS features that haven't been standardized yet, allowing developers to use them while ensuring backward compatibility.",
    },
    {
      que: "What is the CSS 'filter' property used for?",
      ans: "The 'filter' property in CSS allows you to apply graphical effects like blur, grayscale, brightness adjustment, and more to elements. It's commonly used for creating visual effects and enhancing images or backgrounds.",
    },

    {
      que: "Explain the concept of 'CSS specificity' and its importance in styling.",
      ans: "CSS specificity determines which style rules take precedence when multiple conflicting rules are applied to an element. It's calculated based on the selector's type, class, ID, and inline styles, and understanding it is crucial for writing maintainable and predictable CSS.",
    },

    {
      que: "What is the purpose of the 'display: flex' property value in CSS?",
      ans: "The 'display: flex' property value in CSS is used to create a flex container, enabling flexbox layout mode for its child elements. It allows for easy alignment and distribution of space along the main axis and cross axis of the container.",
    },

    {
      que: "Explain the difference between 'margin: auto' and 'text-align: center' for centering elements horizontally.",
      ans: "'margin: auto' centers a block-level element horizontally within its containing block by evenly distributing the available space on its left and right margins, while 'text-align: center' centers inline or inline-block elements within their parent element along the horizontal axis.",
    },

    {
      que: "What is the 'content-visibility' property in CSS and how does it improve performance?",
      ans: "The 'content-visibility' property in CSS allows you to control whether an element's content is rendered immediately or deferred until it's needed. It improves performance by reducing rendering and layout costs for off-screen or hidden content, particularly useful for large datasets or dynamically generated content.",
    },

    {
      que: "How do you create a responsive navbar with dropdown menus in CSS?",
      ans: "You can create a responsive navbar with dropdown menus by using a combination of HTML for the structure, CSS for styling and positioning, and JavaScript for interactivity. Media queries can be used to adjust the layout and appearance for different screen sizes.",
    },

    {
      que: "What is the CSS 'counter' property used for?",
      ans: "The 'counter' property in CSS is used in conjunction with the 'counter-increment' and 'counter-reset' properties to create and manipulate counters, which are used to generate and display custom numerical or string values for elements, such as numbered lists or section headings.",
    },

    {
      que: "Explain the purpose of the 'will-change' property in CSS.",
      ans: "The 'will-change' property in CSS is used to inform the browser of an element's expected changes, allowing it to optimize rendering performance by preparing resources or allocating memory in advance. It's particularly useful for elements that are expected to undergo significant changes or animations.",
    },

    {
      que: "What is the 'overflow' property in CSS and how is it used?",
      ans: "The 'overflow' property in CSS controls how content that exceeds the dimensions of an element's box is handled. It can be set to 'visible' (default), 'hidden', 'scroll', or 'auto', determining whether content is clipped, shown with a scrollbar, or automatically displayed based on the container's dimensions.",
    },

    {
      que: "What is the purpose of the 'aspect-ratio' property in CSS?",
      ans: "The 'aspect-ratio' property in CSS allows you to specify the aspect ratio of an element's box, ensuring that it maintains a particular width-to-height ratio even as its size changes. It's useful for creating responsive designs with consistent aspect ratios for images, videos, or containers.",
    },

    {
      que: "Explain the concept of 'CSS variables' and their benefits.",
      ans: "CSS variables, also known as custom properties, allow you to define reusable values that can be used throughout your CSS code. They provide a way to store and reuse values like colors, sizes, and font families, making CSS more maintainable and easier to update.",
    },

    {
      que: "How do you create a sticky footer in CSS?",
      ans: "You can create a sticky footer in CSS by setting the footer element's position to 'fixed' or 'absolute' and then using appropriate values for 'bottom', 'left', 'right', or 'margin'. This ensures that the footer remains at the bottom of the viewport or container, regardless of the content height.",
    },

    {
      que: "What is the purpose of the 'unicode-bidi' property in CSS?",
      ans: "The 'unicode-bidi' property in CSS controls the direction of text and its handling of bidirectional text, such as text containing both left-to-right and right-to-left scripts. It's commonly used in multilingual or internationalized web pages to ensure proper text rendering and readability.",
    },
    {
      que: "What is the 'mask' property in CSS used for?",
      ans: "The 'mask' property in CSS is used to apply an image or SVG element as a mask to another element, defining which parts of the element are visible and which are hidden. It's commonly used for creating complex shapes, image effects, and revealing content dynamically.",
    },

    {
      que: "Explain the concept of 'pointer-events' property in CSS.",
      ans: "The 'pointer-events' property in CSS controls whether an element can be the target of pointer events like mouse clicks and touches. It can be set to 'none' to make an element non-interactive or 'auto' to restore its default behavior.",
    },

    {
      que: "What is the purpose of the 'mix-blend-mode' property in CSS?",
      ans: "The 'mix-blend-mode' property in CSS allows you to specify how an element's content should blend with the content of its parent element or the content behind it. It's commonly used for creating artistic effects, overlays, and visual enhancements.",
    },

    {
      que: "How do you create a custom checkbox or radio button in CSS?",
      ans: "You can create a custom checkbox or radio button in CSS by hiding the default input element and styling its associated label or using pseudo-elements like ::before or ::after to create custom visuals. CSS techniques like transitions and animations can be applied to enhance the user experience.",
    },

    {
      que: "What is the 'isolation' property in CSS and how is it used?",
      ans: "The 'isolation' property in CSS controls how an element's content is rendered in relation to the rest of the document, allowing you to create stacking contexts and manage the rendering order of overlapping elements. It's particularly useful for controlling the visibility and interaction of elements in complex layouts.",
    },

    {
      que: "Explain the concept of 'aspect-ratio' in CSS and how it's used.",
      ans: "The 'aspect-ratio' property in CSS allows you to specify the aspect ratio of an element's box, ensuring that it maintains a particular width-to-height ratio even as its size changes. It's useful for creating responsive designs with consistent aspect ratios for images, videos, or containers.",
    },

    // Add more terms as needed
  ];

  return (
    <>
      <Head>
      <title>CSS Interview Question | Unstop Computer</title>
        <meta name="description" content="Here, you'll find a treasure trove of questions covering everything from programming languages to data structures and algorithms." />

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
          href="https://unstopcomputer.vercel.app/interview-question/css"
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
          content="CSS Interview Question | Unstop Computer"
        />
       <meta property="og:description" content="Here, you'll find a treasure trove of questions covering everything from programming languages to data structures and algorithms." />
      </Head>
      <QueLayout>
        <section id="content-wrapper">
          <div className="row">
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col">
                <div className="lg:flex-grow lg:pr-24 md:pr-14 flex flex-col md:items-start md:text-left md:mb-0">
                  <div className="relative xl:container">
                    <h2 className=" text-blue-700 text-2xl sm:text-xl md:text-5xl lg:text-center xl:text-4l dark:text-blue">
                      CSS Interview Questions and Answer{" "}
                    </h2>{" "}
                    <br className="lg:block hidden" />
                  </div>
                  <p className="mt-2">
                    Here are CSS Top interview questions along with their
                    correct answers..{" "}
                  </p>
                </div>
              </div>
              <div className="max-w-screen-lg mx-auto p-4">
                <div className="w-full table-auto">
                  {termsData.map((term, index) => (
                    <div
                      key={index + 1}
                      class="flex flex-col gap-4 p-3 mt-7 shadow-xl"
                    >
                      <div class="flex justify justify-between">
                        <div class="flex gap-auto">
                          <div class="w-7 h-7 text-center rounded-full bg-blue-700 mr-6 text-white">
                            {index + 1}
                          </div>
                          <span className="font-bold">{term.que}</span>
                        </div>
                      </div>
                      <div className="m-3">
                        Ans.
                        <span className="ml-2">{term.ans}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </QueLayout>
    </>
  );
};

export default GlossaryTable;
