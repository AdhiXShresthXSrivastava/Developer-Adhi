// This script simulates a desktop view on mobile devices by changing the viewport meta tag.
// It is generally NOT a recommended practice for a good user experience.

(function() {
  // Check if a viewport meta tag already exists.
  const viewportMetaTag = document.querySelector('meta[name="viewport"]');

  // Define a function to set the viewport for a desktop-like view.
  function setDesktopViewport() {
    // A typical desktop width is 1200px or more. Setting this forces the browser
    // to render the page as if it were that wide.
    const desktopContent = "width=1200";

    // If a viewport meta tag exists, update its content.
    if (viewportMetaTag) {
      viewportMetaTag.setAttribute("content", desktopContent);
    } else {
      // If no viewport meta tag exists, create one and append it to the head.
      const newMetaTag = document.createElement("meta");
      newMetaTag.name = "viewport";
      newMetaTag.content = desktopContent;
      document.head.appendChild(newMetaTag);
    }
  }

  // Define a function to check if the device is likely a mobile device.
  // We'll use a simple screen width check as a heuristic.
  function isMobileDevice() {
    // Devices with a width less than 768px are generally considered mobile.
    return window.innerWidth < 768;
  }

  // Run the logic when the page loads.
  window.addEventListener('load', () => {
    if (isMobileDevice()) {
      setDesktopViewport();
      console.log("Desktop-like viewport has been applied for this mobile device.");
    } else {
      console.log("Device is not mobile. No changes to the viewport were made.");
    }
  });

})();
