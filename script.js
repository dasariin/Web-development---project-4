// Select filter buttons and gallery items
const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".item");

// Add click event to each button
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach(button => button.classList.remove("active"));
    // Add active class to clicked button
    btn.classList.add("active");

    // Get category from button
    const category = btn.getAttribute("data-category");

    // Show/Hide images based on category
    items.forEach(item => {
      if (category === "all" || item.getAttribute("data-category") === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
