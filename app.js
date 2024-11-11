// A basic dictionary of words and meanings
const dictionary = {
  "anchor": "A heavy object used to moor a vessel.",
  "cabin": "A small room on a ship.",
  "helm": "A device used to steer the ship.",
  "sail": "A piece of fabric used to catch wind and propel a boat.",
  "hull": "The main body of a boat or ship.",
  "mast": "A tall vertical pole on a ship that supports the sails.",
  "pier": "A platform extending from shore over water, used for docking boats."
  // Add more words here
};

// Show meaning when a word is clicked
function showMeaning(word) {
  const meaning = dictionary[word];
  if (meaning) {
      alert(`Meaning of ${word}: ${meaning}`);
  } else {
      alert("Meaning not found.");
  }
}