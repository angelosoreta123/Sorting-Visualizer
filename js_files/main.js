import { visualizeBubbleSort } from "./bubbles.js";
import { visualizeInsertionSort } from "./insertion.js";
import { visualizeMergeSort } from "./merge.js";
import { visualizeQuickSort } from "./quick.js";
import { visualizeSelectionSort } from "./selection.js";

// Select the container where the bars will be displayed
const barsContainer = document.getElementById("bars-container");

// Function to create random bar heights and display them
const createBars = () => {
  const barHeights = []; // Array to hold the heights of the bars

  // Generate 100 random heights between 0 and 100
  for (let i = 0; i < 100; i++) {
    const randomHeight = Math.floor(Math.random() * 101);
    barHeights.push(randomHeight); // Add the random height to the array
  }

  // Clear the previous bars from the container
  barsContainer.innerHTML = "";

  // Create visual bar elements from the heights array
  barHeights.forEach((height) => {
    const bar = document.createElement("div"); // Create a new div for the bar
    bar.classList.add("bar"); // Add a class for styling
    bar.style.height = `${height * 4}px`; // Set the height of the bar (scaled for visibility)
    bar.style.width = "0.625rem"; // Set the width of the bar
    bar.style.backgroundColor = "#FFFF00"; // Set the default bar color
    bar.style.margin = "0 0.065rem"; // Set margin between bars
    barsContainer.appendChild(bar); // Append the bar to the container
  });

  return barHeights; // Return the heights for sorting
};

// Initial call to create bars when the page loads
let barHeights = createBars();

// Event listener for creating a new array of bars
const newArrayButton = document.querySelector(".new-array");
newArrayButton.addEventListener("click", () => {
  barHeights = createBars(); // Generate new bars when the button is clicked
});

// Event listener for starting the bubble sort visualization
const bubbleSortButton = document.querySelector(".bubble-sort");
bubbleSortButton.addEventListener("click", () =>
  visualizeBubbleSort(barHeights, barsContainer)
);

const insertionSortButton = document.querySelector(".insertion-sort");
insertionSortButton.addEventListener("click", () =>
  visualizeInsertionSort(barHeights, barsContainer)
);

// Event listener for starting the merge sort visualization
const mergeSortButton = document.querySelector(".merge-sort");
mergeSortButton.addEventListener("click", () =>
  visualizeMergeSort(barHeights, barsContainer)
);

// Event listener for starting the quick sort visualization
const quickSortButton = document.querySelector(".quick-sort");
quickSortButton.addEventListener("click", () =>
  visualizeQuickSort(barHeights, barsContainer)
);

// Event listener for starting the selection sort visualization
const selectionSortButton = document.querySelector(".selection-sort");
selectionSortButton.addEventListener("click", () =>
  visualizeSelectionSort(barHeights, barsContainer)
);
