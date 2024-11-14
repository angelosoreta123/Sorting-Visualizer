const visualizeMergeSort = async (arr, barsContainer) => {
    const bars = barsContainer.querySelectorAll('.bar');

    // Helper function to merge two sorted subarrays
    const merge = async (left, right) => {
        let i = 0, j = 0, k = 0;
        const merged = [];
        const leftBars = Array.from(bars).slice(left, left + left.length);
        const rightBars = Array.from(bars).slice(right, right + right.length);

        // Merge the two subarrays
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                merged.push(left[i++]);
            } else {
                merged.push(right[j++]);
            }
        }

        // Add any remaining elements
        while (i < left.length) merged.push(left[i++]);
        while (j < right.length) merged.push(right[j++]);

        // Visualize the merging
        for (let n = 0; n < merged.length; n++) {
            bars[k].style.height = `${merged[n] * 4}px`;
            bars[k].style.backgroundColor = '#FF0000'; // Blue for merged bars
            k++;
        }

        await new Promise(resolve => setTimeout(resolve, 200)); // Add a delay for visualization

        return merged;
    };

    // Recursive merge sort function
    const mergeSortRecursive = async (arr) => {
        if (arr.length <= 1) return arr;

        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        // Recursively sort and merge
        const sortedLeft = await mergeSortRecursive(left);
        const sortedRight = await mergeSortRecursive(right);

        return await merge(sortedLeft, sortedRight);
    };

    // Start the sorting process
    await mergeSortRecursive(arr);
};

// Export the functions for use in other modules
export { visualizeMergeSort };