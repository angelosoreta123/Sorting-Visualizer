// Function to visualize the insertion sort process
const visualizeInsertionSort = async (heights, barsContainer) => {
    const bars = barsContainer.querySelectorAll('.bar'); // Get all bar elements

    // Loop through the array to perform insertion sort
    for (let i = 1; i < heights.length; i++) {
        let key = heights[i]; // The element to be positioned
        let j = i - 1;

        // Change the color of the "key" element being compared
        bars[i].style.backgroundColor = '#FF0000'; // Red for the element being sorted

        // Add a delay to visualize the comparison
        await new Promise(resolve => setTimeout(resolve, 200));

        // Move elements of heights[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && heights[j] > key) {
            // Change the color to indicate the comparison
            bars[j].style.backgroundColor = '#FF0000'; // Red for the compared element
            bars[j + 1].style.backgroundColor = '#FFFF00'; // Yellow for the shifting element

            // Shift the element
            heights[j + 1] = heights[j];
            bars[j + 1].style.height = `${heights[j + 1] * 4}px`;

            // Add a delay to visualize the shift
            await new Promise(resolve => setTimeout(resolve, 200));

            // Reset the color
            bars[j].style.backgroundColor = '#FFFF00'; // Reset to yellow after comparison
            j--;
        }

        // Insert the key element in the correct position
        heights[j + 1] = key;
        bars[j + 1].style.height = `${heights[j + 1] * 4}px`;

        // Mark the sorted section
        bars[i].style.backgroundColor = '#008000'; // Green for the sorted element

        // Add a delay to visualize the insertion
        await new Promise(resolve => setTimeout(resolve, 200));

        // Mark the rest of the sorted section with green
        for (let k = 0; k <= i; k++) {
            bars[k].style.backgroundColor = '#008000'; // Mark all sorted elements as green
        }
    }
};

// Export the function for use in other modules
export { visualizeInsertionSort };
