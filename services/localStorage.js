export function saveHighlightToLocalStorage(highlight) {
  const savedHighlights =
    JSON.parse(localStorage.getItem("savedHighlights")) || [];

  let savedHighlight = savedHighlights.find(
    (x) => x.videoUrl === highlight.videoUrl
  );

  if (savedHighlight) {
    const updatedHighlights = savedHighlights.filter(
      (x) => x.videoUrl !== highlight.videoUrl
    );
    localStorage.setItem("savedHighlights", JSON.stringify(updatedHighlights));
  } else {
    const updatedHighlights = [...savedHighlights, highlight];
    localStorage.setItem("savedHighlights", JSON.stringify(updatedHighlights));
  }
}
