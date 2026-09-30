import type { Metadata } from "next";
import Header from "../common/Header";
import Copyright from "../common/Copytight/Copyright";
import { appData } from "../common/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${appData.name}`,
  description: `Privacy policy for the ${appData.name} iOS app (Google AdMob banner ads and Remove Ads) and this website.`,
};

const sectionClass = "space-y-3";
const headingClass = "text-xl font-semibold tracking-tight text-white";
const linkClass = "underline underline-offset-4 hover:opacity-80";

export default function Privacy() {
  return (
    <div className="flex h-dvh w-full flex-col items-center overflow-y-auto bg-dark-background text-light-app-name-text">
      <Header />
      <main className="w-full max-w-3xl flex-grow px-6 py-10 sm:px-8">
        <article className="space-y-8 leading-relaxed text-white/80">
          <header className="space-y-2 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-light-app-name-text sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="text-sm text-white/50">
              Last updated: September 29, 2026
            </p>
          </header>

          <section className={sectionClass}>
            <h2 className={headingClass}>Who we are</h2>
            <p>
              This policy describes how Nilesh Kamble (&quot;I&quot;,
              &quot;me&quot;, or &quot;the developer&quot;), based in India,
              handles information for{" "}
              <strong className="text-light-app-name-text">{appData.name}</strong>
              , an iOS word game, and for this website.
            </p>
            <p>
              Contact:{" "}
              <a href={appData.socialLinks.email} className={linkClass}>
                {appData.contactEmail}
              </a>
              . I do not have a Data Protection Officer.
            </p>
            <p>
              Bundle ID:{" "}
              <code className="text-white/90">theIllustrator.Word-Find</code>.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>The product</h2>
            <p>
              Word Woven is a portrait iOS game. You swipe letter columns and
              spell the words hidden on the board. It is not a children&apos;s
              app. The game uses Google advertising (described below). It does
              not use Firebase, a crash-reporting SDK, or a separate analytics
              SDK in the app.
            </p>
            <p>
              I do not create an account for you. Puzzle progress and settings
              stay on your device.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Advertising in the app</h2>
            <p>
              The app uses Google AdMob (the Google Mobile Ads SDK) to show a
              banner ad. Ad requests are non-personalized. Google may still
              process technical data such as IP address, device and app
              information, and ad interactions (impressions and clicks) to
              deliver the banner, measure it, limit fraud, and cap how often an
              ad is shown. The app does not use the advertising identifier
              (IDFA) and does not ask you to allow tracking.
            </p>
            <h3 className="text-lg font-semibold text-white">Banner ads</h3>
            <p>
              A banner can appear along the bottom of the play screen, starting
              the third time you open the app. It is not shown during the
              tutorial. Buying{" "}
              <strong className="text-light-app-name-text">Remove Ads</strong>{" "}
              hides it. There are no rewarded video ads.
            </p>
            <p>
              Apple&apos;s SKAdNetwork may be used to measure ad performance
              without the advertising identifier.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Legal bases</h2>
            <p>
              Ad requests are marked non-personalized, so the app does not show
              a consent form for personalized advertising. Where the law allows
              it — including in the European Union, the European Economic Area
              (EEA, including Iceland, Liechtenstein, and Norway), and the
              United Kingdom — delivery and measurement of these ads is based
              on legitimate interests in keeping the game free.
            </p>
            <p>
              You can remove the banner with the Remove Ads purchase in
              Settings.
            </p>
            <p>
              If you email me, I use that correspondence to reply. This website
              uses Google Analytics as described below.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Who receives data, and transfers</h2>
            <p>Ad-related data may be received by:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Google LLC and its AdMob / advertising services</li>
              <li>
                advertising partners Google uses to fill the non-personalized
                banner
              </li>
            </ul>
            <p>
              This can include transfers outside your country, including to the
              United States. I do not operate those transfers myself. Google
              describes its international transfers (including any Standard
              Contractual Clauses or other tools it uses) in{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Google&apos;s privacy policy
              </a>
              .
            </p>
            <p>
              Apple processes App Store downloads and the Remove Ads in-app
              purchase under Apple&apos;s terms and privacy policy.
            </p>
            <p>
              If you email me, that message is received by me in India and by
              my email provider.
            </p>
            <p>
              I may disclose information if required by law, or if I believe in
              good faith that it is necessary to protect safety or respond to a
              lawful request.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Retention</h2>
            <p>
              I do not keep advertising profiles. The Google Mobile Ads SDK may
              store what it needs on your device to show the banner.
              Google&apos;s own retention periods apply to advertising data
              Google processes. See Google&apos;s privacy policy.
            </p>
            <p>
              Emails you send me are kept as long as needed to respond and for
              ordinary record-keeping. Website analytics is retained according
              to Google Analytics.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Your rights</h2>
            <p>
              Depending on where you live — especially in the EU, EEA, and UK —
              you may have the right to access personal data, delete it, object
              to processing, and withdraw consent.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                To hide the banner: buy{" "}
                <strong className="text-light-app-name-text">Remove Ads</strong>{" "}
                in Settings
              </li>
              <li>
                For data I hold (for example, an email you sent me): write to{" "}
                <a href={appData.socialLinks.email} className={linkClass}>
                  {appData.contactEmail}
                </a>
              </li>
              <li>
                For advertising data processed by Google: see Google&apos;s
                privacy policy and Google&apos;s ad settings
              </li>
            </ul>
            <p>
              You may also lodge a complaint with a supervisory authority in
              the EEA, or with the Information Commissioner&apos;s Office (ICO)
              in the United Kingdom.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Children</h2>
            <p>
              Word Woven is not directed at children under 13 in the United
              States, or at children under 16 in the EU, EEA, or UK (a typical
              digital-consent age). It is not a kids&apos; app. I do not
              knowingly collect personal information from children, and I do
              not run ads that I know are directed at children.
            </p>
            <p>
              If you believe a child has provided personal information to me,
              email me and I will delete it where I can.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Remove Ads in-app purchase</h2>
            <p>
              The Remove Ads product hides the banner at the bottom of the
              board. The app does not show rewarded ads, so Remove Ads removes
              the only advertising in the app. Apple processes the purchase.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>This website</h2>
            <p>
              This website uses Google Analytics to understand how people find
              and use the page. Google may collect pages you visit, how long
              you stay, approximate location derived from IP address, and
              browser, device, and operating system details. The site may set
              Analytics cookies. I do not collect names, emails, or accounts
              through this site unless you choose to email me.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Google&apos;s policies</h2>
            <p>
              Google&apos;s practices for AdMob, Analytics, and related
              services are described by Google:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  How Google uses information from sites or apps that use its
                  services
                </a>
              </li>
            </ul>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Changes</h2>
            <p>
              I may update this policy from time to time. The new version will
              be posted on this page with a new &quot;Last updated&quot; date.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Contact</h2>
            <p>
              Nilesh Kamble
              <br />
              Questions about this policy, the app, or this website:{" "}
              <a href={appData.socialLinks.email} className={linkClass}>
                {appData.contactEmail}
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <footer>
        <Copyright />
      </footer>
    </div>
  );
}
