(function () {
    const componentId = "simple-widget-container";
  
    function renderSimpleMessage() {
      const targetElement = document.getElementById(componentId);
      if (targetElement) {
        targetElement.textContent = "Hello from your embedded component!";
      } else {
        console.error(`Target element with ID '${componentId}' not found.`);
      }
    }
  
    // Delay execution until DOM is ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", renderSimpleMessage);
    } else {
      renderSimpleMessage();
    }
  })();
  