const dictionary = {
  "ANCHOR": "A heavy object used to moor a vessel.",
  "CABIN": "A small room on a ship.",
  "HELM": "A device used to steer the ship.",
  "SAIL": "A piece of fabric used to catch wind and propel a boat.",
  "HULL": "The main body of a boat or ship.",
  "MAST": "A tall vertical pole on a ship that supports the sails.",
  "PIER": "A platform extending from shore over water, used for docking boats."
};

// Create crossword grid layout
const words = [
  ["A", "N", "C", "H", "O", "R"],
  ["C", "A", "B", "I", "N"],
  ["H", "E", "L", "M"],
  ["S", "A", "I", "L"],
  ["H", "U", "L", "L"],
  ["M", "A", "S", "T"],
  ["P", "I", "E", "R"]
];
const gridElement = document.getElementById('crossword-grid');

// Populate grid with cells
for (let row = 0; row < 7; row++) {
  for (let col = 0; col < 6; col++) {
      const letter = words[row]?.[col] || ""; // Default to empty if cell doesn't exist
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = letter;
      cell.dataset.letter = letter;
      gridElement.appendChild(cell);
  }
}

let selectedCells = [];
let selectedWord = "";

// Handle cell click events
gridElement.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('cell')) {
      // Start selecting
      selectedCells = [event.target];
      event.target.classList.add('selected');
  }
});

gridElement.addEventListener('mouseover', (event) => {
  if (event.buttons === 1 && event.target.classList.contains('cell') && !selectedCells.includes(event.target)) {
      // Continue selecting
      selectedCells.push(event.target);
      event.target.classList.add('selected');
  }
});

gridElement.addEventListener('mouseup', () => {
  // Form the selected word
  selectedWord = selectedCells.map(cell => cell.dataset.letter).join('');
  
  // Show meaning if the selected word is valid
  if (dictionary[selectedWord]) {
      alert(`Meaning of ${selectedWord}: ${dictionary[selectedWord]}`);
  } else {
      alert(`${selectedWord} is not a valid word.`);
  }
  
  // Clear selection
  selectedCells.forEach(cell => cell.classList.remove('selected'));
  selectedCells = [];
  selectedWord = "";
});
