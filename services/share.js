export function shareHighlight(highlight) {
  if (navigator.share) {
    navigator
      .share({
        title: highlight.title,
        url: highlight.videoUrl,
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    // fallback
  }
}
