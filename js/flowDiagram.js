document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".toggle-structure-three");
    var icons = document.querySelectorAll(".sub-arrow");
    var blocks = document.querySelectorAll(".structure-three-ul");

    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            var targetId = button.getAttribute("data-target");

            // Toggle the visibility of the targeted block and remove active class from other blocks and buttons
            blocks.forEach(function (block) {
                if (block.id === targetId) {
                    block.classList.toggle("hidden");
                } else {
                    block.classList.add("hidden");
                }
                block.classList.remove("active"); // Remove active class from all blocks
            });

            // Toggle the visibility of the corresponding icon
            icons.forEach(function (icon, iconIndex) {
                if (index === iconIndex) {
                    icon.classList.toggle("hidden");
                } else {
                    icon.classList.add("hidden");
                }
            });

            // Remove active class from all buttons except the clicked one
            buttons.forEach(function (otherButton) {
                if (otherButton !== button) {
                    otherButton.classList.remove("active");
                }
            });

            // Toggle the active class for the clicked button
            button.classList.toggle("active");

            // Add or remove additional class based on the index
            if (button.classList.contains("active")) {
                button.classList.add("active-style-" + index); // Add unique style class
            } else {
                button.classList.remove("active-style-" + index); // Remove style class if button is not active
            }
        });
    });
});
