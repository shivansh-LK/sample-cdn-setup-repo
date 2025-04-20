(function () {
    const componentId = "simple-widget-container"; // ID of the target div
  
    function renderSimpleMessage() {
      const targetElement = document.getElementById(componentId);
      if (targetElement) {
        targetElement.textContent = "Hello from your embedded component!";
      } else {
        console.error(`Target element with ID '${componentId}' not found.`);
      }
    }
  
    // Call the render function when the script loads
    renderSimpleMessage();
  })();
  