# Responsive First

Check out the project [Live Site](https://silviasaverino.github.io/Responsive-First/)

This project is a demonstration of responsive web design principles and interactive features using HTML, CSS, and JavaScript. The blog allows users to explore dynamic content, view detailed post information, and experience a responsive layout on various devices.

## Features
### Dynamic Content Rendering
The blog content is sourced from the posts.js file, providing a flexible and easily maintainable structure. Each post is dynamically generated and displayed on the page.

### Responsive Design
The blog layout adapts seamlessly to different screen sizes, ensuring a consistent and user-friendly experience across desktops, tablets, and mobile devices.

### Modal Popups
Clicking on individual blog posts triggers a modal popup, presenting the full post content in a focused and visually appealing manner.

### Interactive Navigation
Users can navigate between different sections of the blog, and a "Recent Posts" button dynamically loads and reveals the latest blog posts.

## Usage
To explore the blog:

- Open the index.html file in your preferred web browser.
- Navigate through the "Home" and "About" sections using the navigation menu.
- Click on individual blog posts to open modal popups with detailed content.
- Click the "Recent Posts" button to load and reveal the latest blog posts.
- Feel free to customize and extend the project to suit your needs. Happy coding!

## Code Structure
### posts.js: 
Contains an array of post objects with information such as title, preview, content, and image.

### script.js: 
Implements the core functionality of rendering posts, handling click events, and managing modal popups.

## Css
The project's CSS utilizes a mobile-first approach, employing the following key features:

### Box Sizing: 
Ensures consistent box sizing with the border-box model.

### Navigation and Layout: 
Implements a fixed navigation bar at the top for easy access. The layout adjusts based on the screen size, offering a comfortable viewing experience.

### Typography: 
Defines clear and readable typography for headers, paragraphs, and links. Uses responsive font sizes to enhance legibility on different devices.

### Color Scheme: 
Utilizes a cohesive color scheme with a background color of #E8CBAE for headers and footers. The modal adopts a darker background (#212529) for improved contrast.

### Flexbox Layout: 
Leverages flexbox to structure the hero section, blog container, and bio section. The layout dynamically adapts to different screen sizes.

### Media Queries: 
Implements media queries to optimize the layout for larger screens, adjusting font sizes, spacing, and the arrangement of elements for an improved desktop experience.