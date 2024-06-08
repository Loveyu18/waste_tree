document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".toggle-structure-three");
    var blocks = document.querySelectorAll(".structure-three-ul", "fa-solid");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Get the targeted block
            var targetId = button.getAttribute("data-target");
            var targetBlock = document.getElementById(targetId);

            // Toggle the visibility of the targeted block
            if (targetBlock.classList.contains("hidden")) {
                // Hide all blocks
                blocks.forEach(function(block) {
                    block.classList.add("hidden");
                });
                // Show the targeted block
                targetBlock.classList.remove("hidden");
            } else {
                // Hide the targeted block
                targetBlock.classList.add("hidden");
            }
        });
    });
});