const qrCode = document.getElementById("qrCode");
const linkInput = document.getElementById("linkInput");
const generateBtn = document.getElementById("generateBtn");
const downloadWithLogoBtn = document.getElementById("downloadWithLogoBtn");
const downloadWithoutLogoBtn = document.getElementById("downloadWithoutLogoBtn");

generateBtn.addEventListener("click", () => {
    const link = linkInput.value.trim();

    if (!link) {
        alert("Please enter a valid link!");
        return;
    }

    // Clear existing QR code
    qrCode.innerHTML = "";

    // Generate QR code
    const qr = new QRCode(qrCode, {
        text: link,
        width: 300,
        height: 300,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });

    // Wait for the QR code to render
    setTimeout(() => {
        const canvas = qrCode.querySelector("canvas");

        if (!canvas) {
            alert("QR Code generation failed. Please try again.");
            return;
        }

        // Show download buttons
        downloadWithLogoBtn.hidden = false;
        downloadWithoutLogoBtn.hidden = false;

        // Download without logo
        downloadWithoutLogoBtn.addEventListener("click", () => {
            const qrImage = canvas.toDataURL("image/png");

            // Create a temporary download link
            const tempLink = document.createElement("a");
            tempLink.href = qrImage;
            tempLink.download = "qr-code.png";
            tempLink.click();
        });

        // Download with logo
        downloadWithLogoBtn.addEventListener("click", () => {
            const newCanvas = document.createElement("canvas");
            newCanvas.width = canvas.width;
            newCanvas.height = canvas.height;

            const ctx = newCanvas.getContext("2d");

            // Copy the existing QR code onto the new canvas
            ctx.drawImage(canvas, 0, 0);

            const logo = new Image();
            logo.src = "logo.png"; // Replace with your logo path
            logo.onload = () => {
                const logoSize = newCanvas.width * 0.2; // Logo size (20% of QR code size)
                const x = (newCanvas.width - logoSize) / 2; // Center x
                const y = (newCanvas.height - logoSize) / 2; // Center y
                ctx.drawImage(logo, x, y, logoSize, logoSize);

                // Generate QR code with logo as a downloadable image
                const qrWithLogo = newCanvas.toDataURL("image/png");

                // Create a temporary download link
                const tempLink = document.createElement("a");
                tempLink.href = qrWithLogo;
                tempLink.download = "qr-code-with-logo.png";
                tempLink.click();
            };
        });
    }, 500); // Wait for QR code generation
});
