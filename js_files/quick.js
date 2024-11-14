// Function to visualize the quick sort process
const visualizeQuickSort = async (arr, barsContainer) => {
    const bars = barsContainer.querySelectorAll('.bar');

    // Helper function to visualize the partitioning process
    const partition = async (arr, low, high) => {
        let pivot = arr[high]; // Pivot element (last element)
        let i = low - 1; // Index of smaller element

        for (let j = low; j < high; j++) {
            // Change background color to red for the bars being compared
            bars[j].style.backgroundColor = '#FF0000';
            bars[high].style.backgroundColor = '#FF0000'; // Highlight pivot
            await new Promise(resolve => setTimeout(resolve, 200)); // Add delay to visualize the comparison

            // If current element is smaller than or equal to pivot
            if (arr[j] <= pivot) {
                i++;
                // Swap arr[i] and arr[j]
                [arr[i], arr[j]] = [arr[j], arr[i]];
                // Update visual bars
                bars[i].style.height = `${arr[i] * 4}px`;
                bars[j].style.height = `${arr[j] * 4}px`;
            }

            // Reset background color after comparison
            bars[j].style.backgroundColor = '#FFFF00';
        }

        // Swap the pivot element with arr[i + 1]
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        bars[i + 1].style.height = `${arr[i + 1] * 4}px`;
        bars[high].style.height = `${arr[high] * 4}px`;

        // Reset pivot color after swap
        bars[high].style.backgroundColor = '#FFFF00';

        return i + 1; // Return the partition index
    };

    // Recursive quick sort function
    const quickSortRecursive = async (arr, low, high) => {
        if (low < high) {
            // Partition the array
            const pi = await partition(arr, low, high);

            // Recursively sort the two subarrays
            await quickSortRecursive(arr, low, pi - 1);
            await quickSortRecursive(arr, pi + 1, high);
        }
    };

    // Start the sorting process
    await quickSortRecursive(arr, 0, arr.length - 1);
};

// Export the functions for use in other modules
export { visualizeQuickSort };