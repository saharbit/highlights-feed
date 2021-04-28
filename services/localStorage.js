export function saveHighlightToLocalStorage(highlight) {
  const savedHighlights =
    JSON.parse(localStorage.getItem("savedHighlights")) || [];
  const updatedHighlights = [...savedHighlights, highlight];
  localStorage.setItem("savedHighlights", JSON.stringify(updatedHighlights));
}
