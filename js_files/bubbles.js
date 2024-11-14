// Function to visualize the bubble sort process
const visualizeBubbleSort = async (heights, barsContainer) => {
    const bars = barsContainer.querySelectorAll('.bar'); // Get all bar elements

    // Loop through the array to perform bubble sort
    for (let i = 0; i < heights.length - 1; i++) {
        let swapped = false; // Flag to check if a swap occurred

        for (let j = 0; j < heights.length - 1 - i; j++) {
            // Change background color to red for the bars being compared
            bars[j].style.backgroundColor = '#FF0000';
            bars[j + 1].style.backgroundColor = '#FF0000';

            // Add a delay to visualize the comparison
            await new Promise(resolve => setTimeout(resolve, 200));

            // Compare and swap if needed
            if (heights[j] > heights[j + 1]) {
                // Swap heights
                [heights[j], heights[j + 1]] = [heights[j + 1], heights[j]];

                // Update the visual bars' heights
                bars[j].style.height = `${heights[j] * 4}px`;
                bars[j + 1].style.height = `${heights[j + 1] * 4}px`;
                swapped = true; // Set swapped to true as a swap occurred
            }

            // Reset background color after comparison
            bars[j].style.backgroundColor = '#FFFF00';
            bars[j + 1].style.backgroundColor = '#FFFF00';
        }

        // Mark the highest bar as sorted by changing its color to green
        bars[heights.length - 1 - i].style.backgroundColor = '#008000';

        // If no swaps occurred, the array is already sorted
        if (!swapped) break;

        // Add a delay to visualize the sorted position
        await new Promise(resolve => setTimeout(resolve, 200));
    }
};

// Export the functions for use in other modules
export { visualizeBubbleSort };