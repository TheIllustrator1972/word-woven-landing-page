const screenshots = [
  {
    src: "/AppScreenshots/practice.png",
    alt: "Word Woven practice board with letter columns lined up to spell CARE",
  },
  {
    src: "/AppScreenshots/stars.png",
    alt: "Word Woven celebrating a found word with three stars over PAIR",
  },
  {
    src: "/AppScreenshots/clue.png",
    alt: "Word Woven clue and letter feedback while spelling BORE",
  },
  {
    src: "/AppScreenshots/daily.png",
    alt: "Word Woven daily puzzle with a seven day streak",
  },
  {
    src: "/AppScreenshots/complete.png",
    alt: "Word Woven puzzle complete screen after finding every word",
  },
  {
    src: "/AppScreenshots/settings.png",
    alt: "Word Woven settings for difficulty, goals, and word length",
  },
];

const AppScreenshots = () => {
  return (
    <div className="w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-6">
        {screenshots.map((screenshot) => (
          <div key={screenshot.src} className="relative overflow-visible rounded-lg">
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              className="max-h-[45vh] w-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppScreenshots;
