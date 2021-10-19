# Adrian's Headless Personal Site

## About
This is the front end for my personal site. It's created using NextJS (React) and is tailored for reading data from my [Cockpit CMS](https://getcockpit.com/) backend. I am using [Tailwind CSS](https://tailwindcss.com/), along with Sass for styling to make the process easier.

## Structure
My project is set up so the content for a given URL is wrapped in a "layout" component which itself contains the header, footer, etc. These are themselves separate React components. I tried to emulate the setup of other CMS systems, like WordPress, where all the page sections are separated into template files. I am using a component based system similar to some page builders available on certain CMS systems or online site builder services. Each component is a React component which is [dynamically imported](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) based on the page content when a page is requested. This ensures we dont load any components not needed.
