import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Calendar, Eye, Lock } from 'lucide-react';


function PrivacyPolicy() {
  const scrollToSection = (sectionId: string) => {
    // This function won't work on this page since sections don't exist
    // But we need it for the Navigation component
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Helmet>
        <title>Privacy Policy - RetainSure | Data Protection and Privacy Practices</title>
        <meta name="description" content="RetainSure's Privacy Policy explains how we collect, use, and protect your data. Learn about our commitment to data security and your privacy rights." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.retainsure.com/privacy-policy" />
      </Helmet>
      
      

      {/* Header Section */}
      <header className="py-16 bg-gradient-to-r from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#039143' }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold" style={{ color: '#022610' }} itemProp="headline">
                  Privacy Policy
                </h1>
                <p className="text-lg font-medium mt-2" style={{ color: '#039143' }}>
                  Effective Date: May 14, 2025
                </p>
                <div className="flex items-center space-x-4 mt-2 text-sm" style={{ color: '#022610', opacity: 0.6 }}>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Last updated: May 14, 2025</span>
                  </div>
                 
                </div>
              </div>
            </div>
            <p className="text-xl leading-relaxed" style={{ color: '#022610', opacity: 0.7 }}>
              RetainSure Technologies Private Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and safeguard your information when you use our services, including our website, platform, and any related applications (collectively, the "Services").
            </p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#022610', opacity: 0.7 }}>
              By using our Services, you agree to the practices described in this Privacy Policy.
            </p>
          </div>
        </div>
      </header>

      {/* Privacy Content */}
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
              
              <div className="prose prose-lg max-w-none space-y-8">
                
                {/* Section 1 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    1. Information We Collect
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    We collect the following types of information:
                  </p>
                  <p className="text-base leading-relaxed mb-2" style={{ color: '#022610', opacity: 0.8 }}>
                    <strong>Product Activity Data:</strong> Information about how users interact with our platform and integrated tools (e.g., logins, feature usage, time spent).
                  </p>
                  <p className="text-base leading-relaxed mb-2" style={{ color: '#022610', opacity: 0.8 }}>
                    <strong>Demographic Data:</strong> Names, email addresses, roles, and other contact or account-related details.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    <strong>Conversations Data:</strong> Interaction logs, messages, or other communication data shared within the platform.
                  </p>
                </section>

                {/* Section 2 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    2. How We Use Your Information
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    We use the data we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base" style={{ color: '#022610', opacity: 0.8 }}>
                    <li>Deliver and improve our Services</li>
                    <li>Analyse product usage and generate insights for customer success teams</li>
                    <li>Personalise user experiences</li>
                    <li>Monitor platform health and security</li>
                    <li>Comply with legal obligations and protect our rights</li>
                    <li>Provide customer support and respond to inquiries</li>
                  </ul>
                </section>

                {/* Section 3 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    3. Data Sharing and Disclosure
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    We do not sell your personal data. We may share data with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base" style={{ color: '#022610', opacity: 0.8 }}>
                    <li><strong>Sub Processor:</strong> For example, cloud infrastructure via AWS, and AI services via OpenAI</li>
                    <li><strong>Authorised Integrations:</strong> When you connect third-party tools, we access relevant data as per their API permissions</li>
                    <li><strong>Legal or Regulatory Bodies:</strong> Where required to comply with applicable laws, regulations, or legal processes</li>
                  </ul>
                </section>

                {/* Section 4 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    4. Data Storage and Security
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    We do not sell your personal data. We may share data with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base" style={{ color: '#022610', opacity: 0.8 }}>
                    <li><strong>Sub Processor:</strong> For example, cloud infrastructure via AWS, and AI services via OpenAI</li>
                    <li><strong>Authorised Integrations:</strong> When you connect third-party tools, we access relevant data as per their API permissions</li>
                    <li><strong>Legal or Regulatory Bodies:</strong> Where required to comply with applicable laws, regulations, or legal processes</li>
                  </ul>
                </section>

                {/* Section 5 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    5. International Data Transfers
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    As we serve customers in multiple countries, your data may be processed and stored in the United States, India, or Europe, where we or our service providers operate. We ensure appropriate safeguards are in place when transferring data internationally, including Standard Contractual Clauses where required.
                  </p>
                </section>

                {/* Section 6 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    6. Your Rights
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base" style={{ color: '#022610', opacity: 0.8 }}>
                    <li>Access the data we hold about you</li>
                    <li>Request correction or deletion of your data</li>
                    <li>Object to or restrict certain data processing</li>
                    <li>Data portability</li>
                    <li>Withdraw consent (where processing is based on consent)</li>
                  </ul>
                  <p className="text-base leading-relaxed mt-4" style={{ color: '#022610', opacity: 0.8 }}>
                    To exercise these rights, please contact us at privacy@retainsure.com to reach our Data Protection Officer Anand Thakkar
                  </p>
                  <p className="text-base leading-relaxed mt-4" style={{ color: '#022610', opacity: 0.8 }}>
                    For EU residents, you can reach out to our EU GDPR representative at below given address or email:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <p className="text-base" style={{ color: '#022610', opacity: 0.8 }}>
                      Rickert Rechtsanwaltsgesellschaft mbH<br/>
                      RetainSure Technologies Private Limited<br/>
                      Colmantstraße 15<br/>
                      53115 Bonn<br/>
                      Germany<br/>
                      email: art-27-rep-retainsure@rickert.law
                    </p>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="cookies">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    7. Cookie Policy
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website. It also explains the types of cookies we use, why we use them, and how you can control your preferences.
                  </p>

                  <h3 className="text-xl font-bold mb-3 mt-6" style={{ color: '#022610' }}>
                    1. Necessary Cookies
                  </h3>
                  <p className="text-base leading-relaxed mb-2" style={{ color: '#022610', opacity: 0.8 }}>
                    These cookies are essential for the website to function properly. They enable basic features such as page navigation, secure access, and load balancing.
                  </p>
                  <p className="text-base leading-relaxed mb-2" style={{ color: '#022610', opacity: 0.8 }}>
                    Without these cookies, the website cannot operate correctly.
                  </p>
                  <p className="text-base leading-relaxed mb-2" style={{ color: '#022610', opacity: 0.8 }}>
                    <strong>Purpose:</strong> To ensure the website and its services function securely and as intended.
                  </p>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    <strong>Example:</strong> Session management, authentication, and security-related cookies.
                  </p>

                  <h3 className="text-xl font-bold mb-3 mt-6" style={{ color: '#022610' }}>
                    2. Analytics Cookies
                  </h3>
                  <p className="text-base leading-relaxed mb-2" style={{ color: '#022610', opacity: 0.8 }}>
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <p className="text-base leading-relaxed mb-2" style={{ color: '#022610', opacity: 0.8 }}>
                    <strong>Purpose:</strong> To improve website performance and user experience by analyzing traffic patterns, usage data, and user behavior.
                  </p>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    <strong>Example:</strong> Cookies used by tools like Google Analytics or similar analytics platforms.
                  </p>

                  <h3 className="text-xl font-bold mb-3 mt-6" style={{ color: '#022610' }}>
                    3. Marketing Cookies
                  </h3>
                  <p className="text-base leading-relaxed mb-2" style={{ color: '#022610', opacity: 0.8 }}>
                    These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and therefore more valuable for publishers and third-party advertisers.
                  </p>
                  <p className="text-base leading-relaxed mb-2" style={{ color: '#022610', opacity: 0.8 }}>
                    <strong>Purpose:</strong> To deliver personalized advertisements and promotional content based on user interests and browsing activity.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    <strong>Example:</strong> Cookies from advertising networks or social media platforms.
                  </p>
                </section>

                {/* Section 8 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    8. Data Retention
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    We retain our customer/prospect data as long as necessary for the purposes described in this policy or to meet legal obligations. You can exercise your right to get your data deleted by reaching out to us at support@retainsure.com.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    For data shared by our customer for us to meet the purpose of the contract via source integrations for the RetainSure's product functioning will be deleted within 90 days of subscription cancellation.
                  </p>
                </section>

                {/* Section 9 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    9. Children's Privacy
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    Our Services are not intended for individuals under the age of 13 (or equivalent minimum age in relevant jurisdictions). We do not knowingly collect personal data from children.
                  </p>
                </section>

                {/* Section 10 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    10. Changes to This Policy
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    We may update this Privacy Policy periodically. We will notify you of significant changes by posting the updated version on our website and updating the "Effective Date" at the top.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    We take the best security practices to avoid any kind of incidents or breach. In case of any breach or incident, we would let our customers and concerned parties know about the incident within 72 hours of the incident occurrence.
                  </p>
                </section>

                {/* Section 11 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    11. Incident Management
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    We take the best security practices to avoid any kind of incidents or breach. In case of any breach or incident, we would let our customers and concerned parties know about the incident within 72 hours of the incident's occurrence.
                  </p>
                </section>

                {/* Section 12 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    12. Contact Us
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="space-y-2 text-base" style={{ color: '#022610', opacity: 0.8 }}>
                      <p><strong>RetainSure Technologies Pvt. Ltd.</strong></p>
                      <p>support@retainsure.com</p>
                      <p>17, 2nd floor, 7th Main Road, ll Stage Indiranagar, Bangalore - 560038</p>
                    </div>
                  </div>
                </section>

              </div>
            </article>
          </div>
        </div>
      </main>

      
    </div>
  );
}

export default PrivacyPolicy;