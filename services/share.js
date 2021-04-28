export function shareHighlight(highlight) {
  if (navigator.share) {
    navigator
      .share({
        title: highlight.title,
        url: highlight.url,
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    // fallback
  }
}
