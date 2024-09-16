function shuffle() {
    const container = document.getElementById('card');
    for (let counter = container.children.length; counter >= 0; counter--) {
      container.appendChild(container.children[Math.random() * counter | 0]);
    }
  }

 
  function cancelShuffle() {
    const container = document.getElementById('card');
    const children = Array.from(container.children); // Convert a collection of elements into an array

  // Sort elements by the last two characters of the identifier converted to numbers
  children.sort((a, b) => {
    const numA = parseInt(a.id.slice(-2), 10); // Get the last 2 characters and convert to a number for element a
    const numB = parseInt(b.id.slice(-2), 10); // Get the last 2 characters and convert to a number for element b
    return numA - numB; // Comparing numbers
  });

  // Move items into the container in the correct order
  children.forEach(child => container.appendChild(child));
 }


 function handleMouseMove(event) {
    const targetElement = event.target; // Get the element on which the mouse is located
    if (targetElement.id === 'card') { // Check if the element is card
        shuffle();
    } else {
        cancelShuffle();
    }
}

// Add the mousemove event handler to the entire document
document.addEventListener('mousemove', handleMouseMove);
