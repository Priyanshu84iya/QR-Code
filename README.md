# QR Code Generator Website

## Overview
This project is a responsive QR Code Generator website that allows users to:
- Generate QR codes for any link.
- Download the QR code with or without a logo.
- View a modern, user-friendly interface with 3D buttons for social links.
- Enjoy a fully responsive design that works seamlessly on laptops, desktops, and mobile devices.

---

## Features
1. **QR Code Generation**:
   - Users can input a URL and generate a QR code instantly.

2. **Download Options**:
   - Download the QR code **with a logo** in the center.
   - Download the QR code **without a logo**.

3. **Modern Design**:
   - Includes 3D-style social buttons for GitHub, LinkedIn, Instagram, and Portfolio links.
   - Styled with a custom background image (`bg.png`) and a clean interface.

4. **Responsive Layout**:
   - Adapts to any screen size, providing an excellent user experience on both desktops and mobile devices.

---

## Technologies Used
- **HTML**: Structure of the webpage.
- **CSS**: Styling, including responsive design and 3D effects for buttons.
- **JavaScript**: Logic for QR code generation and download functionality.
- **External Libraries**:
  - [qrcode.js](https://davidshimjs.github.io/qrcodejs/) for generating QR codes.

---

## How to Run

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A local server (optional) for testing, such as VS Code with Live Server extension.

### Steps
1. Clone this repository or download the project files.
2. Ensure the `bg.png` file is in the same directory as the HTML file for the background.
3. Open the `index.html` file in your browser to use the application.
4. Input a URL in the text box and click the "Generate QR Code" button.
5. Use the "Download With Logo" or "Download Without Logo" buttons to save the QR code.

---

## File Structure
```
project-folder/
|-- index.html          # Main HTML file
|-- style.css           # CSS for styling
|-- script.js           # JavaScript for functionality
|-- qrcode.min.js       # External library for QR code generation
|-- bg.png              # Background image file
```

---

## Demo
A live demo of the project can be hosted on [Vercel](https://vercel.com/) or any static hosting service.

---


## Future Improvements
1. Add an option to customize QR code colors.
2. Include support for more data types (e.g., text, Wi-Fi credentials).
3. Enable direct sharing of QR codes on social platforms.

---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

## Credits
Special thanks to the developers of [qrcode.js](https://github.com/davidshimjs/qrcodejs) for their excellent library used in this project.

