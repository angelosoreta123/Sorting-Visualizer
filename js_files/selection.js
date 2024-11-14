// Function to visualize the selection sort process
const visualizeSelectionSort = async (arr, barsContainer) => {
  const bars = barsContainer.querySelectorAll(".bar");

  // Loop through all elements in the array
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i; // Assume the minimum element is at the current index

    // Loop through the unsorted part of the array
    for (let j = i + 1; j < arr.length; j++) {
      // Change background color to red for the bars being compared
      bars[j].style.backgroundColor = "#FF0000";
      bars[minIdx].style.backgroundColor = "#FF0000"; // Highlight the current min bar
      await new Promise((resolve) => setTimeout(resolve, 200)); // Add delay to visualize the comparison

      // If a smaller element is found, update the minimum index
      if (arr[j] < arr[minIdx]) {
        minIdx = j; // Update the index of the smallest element
      }

      // Reset the background color after the comparison
      bars[j].style.backgroundColor = "#FFFF00";
      bars[minIdx].style.backgroundColor = "#FFFF00";
    }

    // Swap the found minimum element with the first element of the unsorted part
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; // Swap values
      bars[i].style.height = `${arr[i] * 4}px`; // Update visual height of the swapped bars
      bars[minIdx].style.height = `${arr[minIdx] * 4}px`;
    }

    // Change the color of the sorted part to green (elements before i)
    bars[i].style.backgroundColor = "#008000";

    // Add delay to visualize the sorting step
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
};

// Export the functions for use in other modules
export { visualizeSelectionSort };
