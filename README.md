# Site Under Maintenance Page

This project is a fully responsive "Site Under Maintenance" page designed for quick maintenance updates, typically lasting 5-10 minutes. The page includes a countdown timer, logo placement, and a modern design featuring a black, gray, and white gradient background.

## Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop screens.
- **Countdown Timer:** Displays the remaining time until the site is back online.
- **Gradient Background:** A sleek gradient transitioning from black to gray to white.
- **Logo Placement:** A designated area for a company logo at the top of the content.
- **Animations and Hover Effects:** Smooth animations and interactive hover effects to enhance the user experience.

## Setup and Usage

Follow these steps to set up the "Site Under Maintenance" page:

### 1. Clone the Repository

First, clone the repository from GitHub to your local machine:

```bash
git clone https://github.com/mrokonuzzaman040/maintenance-page.git
cd maintenance-page
```

### 2. Replace the Logo

Update the placeholder logo with your own company logo:

- **Step 1:** Replace the `logo.png` file in the root directory with your logo.
- **Step 2:** Ensure the logo file is named `logo.png`. If you use a different name, update the `src` attribute in the `index.html` file:

```html
<img src="your-logo-name.png" alt="Logo" class="logo">
```

### 3. Customize the Countdown Timer

The countdown timer is initially set for a 10-minute countdown. To adjust this:

- **Step 1:** Open the `script.js` file.
- **Step 2:** Locate the following code:

```javascript
// Set the countdown time (e.g., 10 minutes from now)
let countdownTime = new Date(new Date().getTime() + 10 * 60000).getTime();
```

- **Step 3:** Modify the `10 * 60000` value to your desired duration in minutes. For example, to set the timer for 5 minutes:

```javascript
let countdownTime = new Date(new Date().getTime() + 5 * 60000).getTime();
```

### 4. Customize the Page Content

You can personalize the text content to match your maintenance message:

- **Step 1:** Open the `index.html` file.
- **Step 2:** Update the `<h1>` and `<p>` tags with your own message:

```html
<h1>Your Custom Maintenance Message</h1>
<p>Your detailed explanation here.</p>
```

### 5. Adjust the Background Gradient

To change the gradient colors used in the background:

- **Step 1:** Open the `styles.css` file.
- **Step 2:** Locate the `body` selector and modify the `background` property:

```css
body {
    background: linear-gradient(135deg, #000000, #555555, #ffffff);
}
```

- **Step 3:** Replace `#000000`, `#555555`, and `#ffffff` with your desired colors.

### 6. Run the Page

After making the necessary adjustments:

- **Step 1:** Open the `index.html` file in your web browser to view and test the page.
- **Step 2:** Upload the files to your server to replace the existing "Site Under Maintenance" page.

## Author

- **Md Rokon Uzzaman**
  - **Email:** [mdrokonuzzamanmail@gmail.com](mailto:mdrokonuzzamanmail@gmail.com)
  - **GitHub:** [mrokonuzzaman040](https://github.com/mrokonuzzaman040)

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project.

---

Developed by Md Rokon Uzzaman. For inquiries or support, please reach out via email or GitHub.

### Overview:
- **Setup Instructions:** Detailed, step-by-step instructions for cloning the repository, replacing the logo, customizing the timer and content, and adjusting the background gradient.
- **Customization Guidance:** Provides clear instructions on how to personalize the page to suit your specific needs.
- **Author Information:** Includes your contact details for easy reference.
