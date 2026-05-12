import Link from "next/link"

export default function CookiesPolicyPage() {
  return (
    <section className="bg-white py-16 pt-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 border-b border-gray-200 pb-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">COOKIES POLICY</h1>

            <p className="text-sm font-medium uppercase tracking-wide text-gray-500">Last updated: May 4, 2026</p>

            <div className="space-y-4 text-base leading-8 text-gray-700">
              <p>
                At Marhaba Marbella, we use cookies and similar technologies to improve your browsing experience,
                remember your preferences (such as language and right-to-left reading - RTL), and analyze traffic on our
                platform{" "}
                <Link
                  href="https://marhaba-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-900 underline underline-offset-4 transition-colors hover:text-primary-gold">
                  https://marhaba-app.vercel.app/
                </Link>
                .
              </p>

              <p>
                This Cookies Policy explains what these technologies are, how we use them, and your rights to control
                their use.
              </p>
            </div>
          </div>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">1. WHAT ARE COOKIES?</h2>

            <p className="text-base leading-8 text-gray-700">
              Cookies are small data files stored on your browser or device when you visit a website. They allow the
              website to “remember” your actions or preferences over time, providing a smoother and more personalized
              browsing experience.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">2. HOW DO WE MANAGE CONSENT?</h2>

            <p className="text-base leading-8 text-gray-700">
              In compliance with European Union regulations, Marhaba Marbella uses a Cookie Configuration Panel (managed
              by CookieYes) that appears when you first visit our website.
            </p>

            <p className="text-base leading-8 text-gray-700">Through this panel, you may:</p>

            <ul className="space-y-4 pl-6 text-base leading-8 text-gray-700 list-disc marker:text-gray-400">
              <li>Accept all cookies.</li>

              <li>Reject all cookies (except technical/necessary cookies).</li>

              <li>
                Configure your preferences in a granular way, accepting only certain categories (e.g. analytics but not
                advertising).
              </li>
            </ul>

            <p className="text-base leading-8 text-gray-700">
              You may change your consent preferences at any time by clicking the configuration icon (located in the
              lower corner of the screen).
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">3. TYPES OF COOKIES WE USE</h2>

            <p className="text-base leading-8 text-gray-700">
              Our platform classifies cookies into the following categories:
            </p>

            <div className="space-y-6">
              <section className="space-y-3 rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Necessary (Technical) Cookies</h3>

                <p className="text-base leading-8 text-gray-700">
                  These are essential for the website to function properly. They include cookies for session management
                  on Vercel, website security, and storage of your own privacy settings. These cookies cannot be
                  disabled.
                </p>
              </section>

              <section className="space-y-3 rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Preference Cookies</h3>

                <p className="text-base leading-8 text-gray-700">
                  These cookies allow the website to remember information that changes the appearance or behavior of the
                  site, such as your preferred language (Spanish, English or Arabic) and reading orientation (RTL).
                </p>
              </section>

              <section className="space-y-3 rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Analytics Cookies</h3>

                <p className="text-base leading-8 text-gray-700">
                  These cookies help us understand how visitors interact with the website (most visited pages, time
                  spent on site), providing anonymous information to improve the platform.
                </p>
              </section>

              <section className="space-y-3 rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Marketing/Advertising Cookies</h3>

                <p className="text-base leading-8 text-gray-700">
                  These cookies are used to track visitors across websites in order to display ads that are relevant and
                  attractive to the individual user.
                </p>
              </section>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">4. TECHNICAL DETAILS OF COOKIES (UPDATED TABLE)</h2>

            <div className="space-y-4 text-base leading-8 text-gray-700">
              <p>Below is a detailed list of the cookies used on this platform.</p>

              <p>
                Note for the administrator: CookieYes will automatically generate a table with the scan results. You
                must paste the “Cookie List” or the shortcode provided by the tool here.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cookie</th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Domain</th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose</th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">cookieyes-consent</td>

                    <td className="px-6 py-4 text-sm text-gray-700">marhaba-app.vercel.app</td>

                    <td className="px-6 py-4 text-sm text-gray-700">Stores the user's consent status.</td>

                    <td className="px-6 py-4 text-sm text-gray-700">1 year</td>

                    <td className="px-6 py-4 text-sm text-gray-700">Necessary</td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">i18next</td>

                    <td className="px-6 py-4 text-sm text-gray-700">marhaba-app.vercel.app</td>

                    <td className="px-6 py-4 text-sm text-gray-700">Remembers the selected language (ES/EN/AR).</td>

                    <td className="px-6 py-4 text-sm text-gray-700">Session</td>

                    <td className="px-6 py-4 text-sm text-gray-700">Preferences</td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">_ga</td>

                    <td className="px-6 py-4 text-sm text-gray-700">google.com</td>

                    <td className="px-6 py-4 text-sm text-gray-700">Google Analytics: Unique user identification.</td>

                    <td className="px-6 py-4 text-sm text-gray-700">2 years</td>

                    <td className="px-6 py-4 text-sm text-gray-700">Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">5. INTERNATIONAL DATA TRANSFERS</h2>

            <p className="text-base leading-8 text-gray-700">
              By using third-party services such as Vercel (hosting) or Google Analytics, some data may be processed on
              servers located outside the European Economic Area (usually in the United States). Marhaba Marbella
              ensures that these providers comply with current data protection frameworks (Data Privacy Framework) or
              use Standard Contractual Clauses approved by the European Commission.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">6. HOW TO CONTROL COOKIES FROM YOUR BROWSER</h2>

            <p className="text-base leading-8 text-gray-700">
              In addition to our CookieYes panel, you may restrict or block cookies through your browser settings:
            </p>

            <ul className="space-y-4 pl-6 text-base leading-8 text-gray-700 list-disc marker:text-gray-400">
              <li>Google Chrome</li>
              <li>Safari</li>
              <li>Firefox</li>
              <li>Microsoft Edge</li>
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">7. CONTACT</h2>

            <p className="text-base leading-8 text-gray-700">
              If you have any questions regarding our use of cookies, you may contact us at:{" "}
              <Link
                href="mailto:info@marhabamarbella.com"
                className="font-medium text-gray-900 underline underline-offset-4 transition-colors hover:text-primary-gold">
                info@marhabamarbella.com
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
