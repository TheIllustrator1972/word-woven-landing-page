import { appData } from "./constants";
import DownloadOnTheAppStore from "./Download/DownloadOnTheAppStore";

const AppTitleAndDescription = () => {
  return (
    <div className="flex flex-col items-center p-4 text-center sm:p-6 md:p-8 lg:p-10">
      <h1 className="mb-3 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        <span className="text-word-mint drop-shadow-[0_0_24px_rgba(94,219,165,0.35)]">
          Word
        </span>{" "}
        <span className="text-word-tile">Woven</span>
      </h1>
      <p className="max-w-2xl text-lg font-medium leading-relaxed text-light-app-name-text sm:text-xl md:text-2xl">
        {appData.description}
      </p>
      {appData?.isLaunched ? (
        <DownloadOnTheAppStore />
      ) : (
        <p className="pt-4 text-base font-semibold text-light-coming-soon-text sm:text-lg md:text-xl">
          Coming soon on the App Store
        </p>
      )}
    </div>
  );
};

export default AppTitleAndDescription;
