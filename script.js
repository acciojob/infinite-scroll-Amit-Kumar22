const list = document.getElementById('infi-list');

const loadMoreThreshold = 200; // Adjust this threshold as needed

// Function to add two more list items
function addMoreItems() {
  for (let i = 0; i < 2; i++) {
  const moviecard=document.createElement("div");
        moviecard.classList.add("movie-item")
    moviecard.innerHTML = list.textContent;
    list.appendChild(moviecard);
  }
}

// Function to check if the user has reached the end of the list
function isNearBottom() {
  const scrollTop = list.scrollTop;
  const scrollHeight = list.scrollHeight;
  const clientHeight = list.clientHeight;

  return scrollHeight - scrollTop <= clientHeight + loadMoreThreshold;
}

// Event listener to continuously monitor the scroll position
list.addEventListener('scroll', () => {
  if (isNearBottom()) {
    addMoreItems();
  }
});

// Initially load two items to start
addMoreItems();
