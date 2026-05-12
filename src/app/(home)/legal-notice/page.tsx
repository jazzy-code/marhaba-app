import Link from "next/link"

export default function LegalNoticePage() {
  return (
    <section className="bg-white py-16 pt-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 border-b border-gray-200 pb-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">LEGAL NOTICE</h1>

            <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
              Last updated: [Insert Date, e.g. May 4, 2026]
            </p>

            <div className="space-y-4 text-base leading-8 text-gray-700">
              <p>
                In compliance with Article 10 of Law 34/2002 of July 11 on Information Society Services and Electronic
                Commerce (LSSI-CE), the identifying details of the owner of this platform are set out below:
              </p>

              <div className="space-y-2 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <p className="text-base text-gray-700">
                  <span className="font-semibold text-gray-900">Owner:</span> Sara El Amimi Chteoua.
                </p>

                <p className="text-base text-gray-700">
                  <span className="font-semibold text-gray-900">NIF/CIF:</span> 61428280H
                </p>

                <p className="text-base text-gray-700">
                  <span className="font-semibold text-gray-900">Address:</span> Calle del Alba 21 / piso 1 / puerta 5,
                  29601 Marbella, Málaga.
                </p>

                <p className="text-base text-gray-700">
                  <span className="font-semibold text-gray-900">Contact Email:</span>{" "}
                  <Link
                    href="mailto:info@marhabamarbella.com"
                    className="font-medium text-gray-900 underline underline-offset-4 transition-colors hover:text-primary-gold">
                    info@marhabamarbella.com
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">1. PURPOSE AND SCOPE OF APPLICATION</h2>

            <div className="space-y-4 text-base leading-8 text-gray-700">
              <p>
                This Legal Notice governs the access, navigation and use of the Marhaba Marbella web platform
                (hereinafter, “the Platform”), accessible through the URL{" "}
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
                Marhaba Marbella is a luxury concierge and directory technology platform designed to connect users with
                external service providers. Marhaba Marbella is NOT the provider of the final services (real estate,
                nautical, medical, security or leisure services), acting exclusively as an intermediary and lead
                generation channel (Lead-Gen).
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">2. TERMS OF USE</h2>

            <p className="text-base leading-8 text-gray-700">
              Access to the Platform grants you the status of User, which implies full acceptance of all provisions
              included in this Legal Notice. The User undertakes to:
            </p>

            <ul className="space-y-4 pl-6 text-base leading-8 text-gray-700 list-disc marker:text-gray-400">
              <li>Make lawful and diligent use of the website, in accordance with the law and good faith.</li>

              <li>Not carry out actions that may damage, disable or overload the Platform’s systems.</li>

              <li>Provide truthful information in registration and contact forms.</li>
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">3. DISCLAIMER OF LIABILITY</h2>

            <p className="text-base leading-8 text-gray-700">
              Due to the intermediary nature of the Platform, the Owner declines any liability in the following cases:
            </p>

            <ul className="space-y-6 pl-6 text-base leading-8 text-gray-700 list-disc marker:text-gray-400">
              <li>
                <span className="font-semibold text-gray-900">Third-Party Services:</span> The contractual relationship
                is established directly between the User and the Provider. Marhaba Marbella is not responsible for
                breaches, defects, damages or malpractice arising from services provided by third parties (especially in
                the areas of Private Security and Health, where responsibility lies entirely with the licensed
                professional).
              </li>

              <li>
                <span className="font-semibold text-gray-900">Accuracy of Content:</span> We do not guarantee the total
                accuracy of prices, availability or descriptions of assets published by providers, although we carry out
                periodic verification efforts.
              </li>

              <li>
                <span className="font-semibold text-gray-900">Technical Failures:</span> We are not responsible for
                service interruptions, viruses or cyberattacks beyond our reasonable control.
              </li>
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">4. INTELLECTUAL AND INDUSTRIAL PROPERTY</h2>

            <div className="space-y-4 text-base leading-8 text-gray-700">
              <p>
                All intellectual property rights relating to the website design, logos, texts, source code and, in
                particular, the interface system adapted to the Arabic language (RTL), belong to the Owner or its
                licensors.
              </p>

              <p>
                The reproduction, distribution or transformation of any content without the prior written authorization
                of the Owner is prohibited.
              </p>

              <p>Trade names and trademarks (including “Marhaba Marbella”) are protected by law.</p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">5. LINKS POLICY</h2>

            <ul className="space-y-6 pl-6 text-base leading-8 text-gray-700 list-disc marker:text-gray-400">
              <li>
                <span className="font-semibold text-gray-900">External Links:</span> The Platform may contain links to
                third-party websites (provider social networks, corporate websites, etc.). Marhaba Marbella exercises no
                control over and assumes no responsibility for the content, privacy policies or practices of such
                external websites.
              </li>

              <li>
                <span className="font-semibold text-gray-900">Links to Marhaba:</span> It is prohibited to establish
                links to this website using framing techniques or in any way that may mislead users regarding the origin
                of the content.
              </li>
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">6. SECURITY AND HEALTH: SPECIAL WARNING</h2>

            <p className="text-base leading-8 text-gray-700">For the “Services” sections:</p>

            <ul className="space-y-6 pl-6 text-base leading-8 text-gray-700 list-disc marker:text-gray-400">
              <li>
                <span className="font-semibold text-gray-900">Emergencies:</span> Marhaba Marbella is NOT an emergency
                service. In the event of a life-threatening situation or medical emergency, the user must contact 112.
              </li>

              <li>
                <span className="font-semibold text-gray-900">Licensing:</span> The Owner acts solely as an
                intermediary. It is the User’s responsibility to verify the professional’s licenses before effectively
                contracting the service.
              </li>
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">7. DATA PROTECTION</h2>

            <p className="text-base leading-8 text-gray-700">
              The processing of personal data collected through the Platform is governed by the provisions of our{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-gray-900 underline underline-offset-4 transition-colors hover:text-primary-gold">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">8. ONLINE DISPUTE RESOLUTION (ODR)</h2>

            <p className="text-base leading-8 text-gray-700">
              In compliance with Regulation (EU) 524/2013, we inform you of the existence of an online dispute
              resolution platform provided by the European Commission for consumers, available at the following link:{" "}
              <Link
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 underline underline-offset-4 transition-colors hover:text-primary-gold">
                https://ec.europa.eu/consumers/odr/
              </Link>
              .
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">9. GOVERNING LAW AND JURISDICTION</h2>

            <p className="text-base leading-8 text-gray-700">
              This Legal Notice is governed by Spanish law. For any dispute related to the use of the Platform, the
              parties submit to the Courts and Tribunals of Marbella (Spain), unless consumer regulations mandatorily
              establish a different jurisdiction.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
