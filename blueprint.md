# Project Blueprint

## Overview

This project is a modern, single-page portfolio website. It showcases the developer's skills and projects, and provides a clear way for potential clients or employers to get in touch.

The site is built with a focus on modern web standards, including HTML5, CSS3, and ES6 JavaScript. It leverages web components to create a modular and maintainable codebase. The design is clean, professional, and responsive, ensuring a great user experience across all devices.

## Project Structure

- `index.html`: The main entry point of the application.
- `style.css`: The global stylesheet for the application.
- `main.js`: The main JavaScript file, containing smooth scrolling and animation logic.
- `components/`: A directory containing all the web components used in the project.
  - `site-header.js`: The header component, including the logo and navigation.
  - `portfolio-item.js`: A component to display individual portfolio projects.
  - `contact-form.js`: A component for the contact form.
  - `projects-section.js`: A component that displays a grid of portfolio items.
- `images/`: A directory for storing images.

## Design and Style

### Color Palette

- **Background**: `hsl(240, 10%, 3.9%)` (dark blue)
- **Foreground**: `hsl(0, 0%, 98%)` (near white)
- **Primary**: `hsl(24, 95%, 53%)` (orange)
- **Muted**: `hsl(240, 3.7%, 15.9%)` (dark gray)
- **Card**: `hsl(240, 5%, 12%)` (darker gray)
- **Border**: `hsl(240, 3.7%, 25%)` (gray)

### Typography

- **Font Family**: 'Poppins', sans-serif
- **Headings**: Bold, with a larger font size to create emphasis.
- **Body Text**: Regular weight, with a comfortable line height for readability.

### Layout

- The layout is based on a 1200px container, with centered content.
- The sections are separated with ample padding to create a clean and uncluttered look.
- The portfolio section uses a responsive grid that adapts to different screen sizes.

## Features

- **Responsive Design**: The website is fully responsive and works well on all devices, from mobile phones to desktops.
- **Web Components**: The use of web components makes the code modular, reusable, and easy to maintain.
- **Smooth Scrolling**: Anchor links have a smooth scrolling effect for a better user experience.
- **Scroll Animations**: Elements fade in and up as the user scrolls down the page.
- **Contact Form**: A functional contact form allows users to send messages.

## Current Plan

- **Initial Refactor**: The project has been refactored from a previous state to a modern, component-based architecture. This involved creating a new `index.html`, updating the `style.css`, and creating several web components.
- **Next Steps**: The next step is to further enhance the website by adding more content, such as a more detailed 'About Me' section, and potentially adding more interactive elements.
