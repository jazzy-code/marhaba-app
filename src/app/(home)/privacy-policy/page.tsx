import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 pt-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 border-b border-gray-200 pb-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">PRIVACY POLICY</h1>

            <p className="text-sm font-medium uppercase tracking-wide text-gray-500">Last updated: May 4, 2026</p>

            <div className="space-y-4 text-base leading-8 text-gray-700">
              <p>
                At Marhaba Marbella, we value the trust of our users and providers. This Privacy Policy transparently
                describes how we collect, use and protect your personal data through our platform{" "}
                <Link
                  href="https://marhabamarbella.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-900 underline underline-offset-4 transition-colors hover:text-primary-gold">
                  https://marhabamarbella.com/
                </Link>
                .
              </p>
            </div>
          </div>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">1. DATA CONTROLLER</h2>

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
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">2. DATA WE COLLECT</h2>

            <p className="text-base leading-8 text-gray-700">
              We collect the minimum information necessary to provide a luxury and efficient experience:
            </p>

            <ul className="space-y-6 pl-6 text-base leading-8 text-gray-700 list-disc marker:text-gray-400">
              <li>
                <span className="font-semibold text-gray-900">Identification Data:</span> Full name.
              </li>

              <li>
                <span className="font-semibold text-gray-900">Contact Data:</span> Email address and phone number.
              </li>

              <li>
                <span className="font-semibold text-gray-900">Browsing Data:</span> IP address, cookies and usage data
                collected through Vercel (our hosting provider).
              </li>

              <li>
                <span className="font-semibold text-gray-900">Special Categories:</span> In requests for security or
                emergency medical services, we process the information voluntarily provided by the user (exact location
                or basic health information) in order to facilitate immediate assistance.
              </li>
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">3. PURPOSE OF PROCESSING</h2>

            <p className="text-base leading-8 text-gray-700">We process your data for the following purposes:</p>

            <ul className="space-y-6 pl-6 text-base leading-8 text-gray-700 list-disc marker:text-gray-400">
              <li>
                <span className="font-semibold text-gray-900">Request Management:</span> Connecting the user with the
                selected service provider (Living, Mobility, Lifestyle or Services).
              </li>

              <li>
                <span className="font-semibold text-gray-900">User and Provider Registration:</span> Creating and
                managing accounts on the platform.
              </li>

              <li>
                <span className="font-semibold text-gray-900">Direct Communication:</span> Responding to inquiries
                through our integrated WhatsApp channel.
              </li>

              <li>
                <span className="font-semibold text-gray-900">Experience Improvement:</span> Personalizing the interface
                according to the user’s language and preferences (including RTL support for Arabic reading).
              </li>

              <li>
                <span className="font-semibold text-gray-900">Exclusive Marketing:</span> Only if expressly authorized
                by you, we will send updates regarding premium services in Marbella.
              </li>
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">4. LEGAL BASIS</h2>

            <p className="text-base leading-8 text-gray-700">The legal basis for processing your data is:</p>

            <ul className="space-y-6 pl-6 text-base leading-8 text-gray-700 list-disc marker:text-gray-400">
              <li>
                <span className="font-semibold text-gray-900">
                  Performance of a contract or pre-contractual measures:
                </span>{" "}
                To process your service requests with providers.
              </li>

              <li>
                <span className="font-semibold text-gray-900">Consent:</span> By checking the registration boxes or
                initiating a WhatsApp conversation.
              </li>

              <li>
                <span className="font-semibold text-gray-900">Legitimate Interest:</span> To ensure the security of the
                platform and improve our technical services.
              </li>
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">5. DATA SHARING (IMPORTANT)</h2>

            <div className="space-y-4 text-base leading-8 text-gray-700">
              <p>
                Marhaba Marbella is an intermediary platform. In order for the requested service to be carried out, your
                contact details (name, email and phone number) will be communicated to the Final Provider you have
                selected.
              </p>

              <p>
                The provider will process your data as an independent Controller for the purpose of delivering the
                service.
              </p>

              <p>
                We do not sell or rent your data to third parties unrelated to the operation of the requested service.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">6. WHATSAPP CHANNEL</h2>

            <div className="space-y-4 text-base leading-8 text-gray-700">
              <p>By using the WhatsApp chat integrated into the website, you initiate direct communication with us.</p>

              <p>Your data will be processed in accordance with Meta’s (WhatsApp) Privacy Policy.</p>

              <p>
                Marhaba Marbella uses this information exclusively to provide support and manage your request
                immediately.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">7. INTERNATIONAL TRANSFERS AND PROVIDERS</h2>

            <p className="text-base leading-8 text-gray-700">
              Our platform is hosted on Vercel. Data may be stored or processed on servers located outside the European
              Economic Area (EEA), under security frameworks that guarantee an adequate level of protection (Standard
              Contractual Clauses).
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">8. DATA RETENTION</h2>

            <ul className="space-y-6 pl-6 text-base leading-8 text-gray-700 list-disc marker:text-gray-400">
              <li>
                <span className="font-semibold text-gray-900">Registration Data:</span> Until you request its deletion.
              </li>

              <li>
                <span className="font-semibold text-gray-900">Inquiry Data:</span> For the time necessary to resolve the
                request and subsequently during the legal limitation periods for liabilities (generally 5 years).
              </li>
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">9. INFORMATION SECURITY</h2>

            <p className="text-base leading-8 text-gray-700">
              Given the exclusive nature of our clientele, we apply high-level technical and organizational measures
              (SSL encryption on Vercel and restricted access protocols) to prevent unauthorized access or loss of data
              integrity.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">10. YOUR RIGHTS</h2>

            <p className="text-base leading-8 text-gray-700">You have the right to:</p>

            <ul className="space-y-4 pl-6 text-base leading-8 text-gray-700 list-disc marker:text-gray-400">
              <li>Access your personal data.</li>
              <li>Rectify inaccurate data.</li>
              <li>Delete your data (right to be forgotten).</li>
              <li>Object to processing or request restriction of processing.</li>
              <li>Data portability.</li>
            </ul>

            <p className="text-base leading-8 text-gray-700">
              To exercise these rights, send an email to{" "}
              <Link
                href="mailto:[Insertar Email]"
                className="font-medium text-gray-900 underline underline-offset-4 transition-colors hover:text-primary-gold">
                [Insertar Email]
              </Link>{" "}
              attaching a copy of your ID card or equivalent document and indicating the right you wish to exercise.
              Likewise, you have the right to lodge a complaint with the Spanish Data Protection Agency (
              <Link
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 underline underline-offset-4 transition-colors hover:text-primary-gold">
                www.aepd.es
              </Link>
              ).
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">11. LANGUAGE AND PREVALENCE</h2>

            <p className="text-base leading-8 text-gray-700">
              In the event of discrepancies between the versions of this Policy in different languages (English or
              Arabic), the Spanish version shall prevail for legal purposes.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
