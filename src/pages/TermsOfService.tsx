import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Calendar, Shield } from 'lucide-react';


function TermsOfService() {
  const scrollToSection = (sectionId: string) => {
    // This function won't work on this page since sections don't exist
    // But we need it for the Navigation component
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Helmet>
        <title>Terms of Service - RetainSure | Legal Terms and Conditions</title>
        <meta name="description" content="RetainSure's Terms of Service govern your use of our AI-powered customer success platform. Read our legal terms and conditions." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.retainsure.com/terms-of-service" />
      </Helmet>
      
      

      {/* Header Section */}
      <header className="py-16 bg-gradient-to-r from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#039143' }}>
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold" style={{ color: '#022610' }} itemProp="headline">
                  Terms of Service
                </h1>
                <p className="text-lg font-medium mt-2" style={{ color: '#039143' }}>
                  Effective Date: May 14, 2025
                </p>
                <div className="flex items-center space-x-4 mt-2 text-sm" style={{ color: '#022610', opacity: 0.6 }}>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Last updated: Nov 10, 2025</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xl leading-relaxed" style={{ color: '#022610', opacity: 0.7 }}>
              These Terms of Service ("Terms") govern your access to and use of the services provided by RetainSure Technologies Pvt. Ltd. ("RetainSure", "we", "our", or "us"). By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
            </p>
          </div>
        </div>
      </header>

      {/* Terms Content */}
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
              
              <div className="prose prose-lg max-w-none space-y-8">
                
                {/* Section 1 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    1. Eligibility
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    You must be at least 18 years old and have the authority to enter into these Terms on behalf of yourself or the entity you represent.
                  </p>
                </section>

                {/* Section 2 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    2. Account Registration
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    You agree to provide accurate, complete, and current information when registering for the Services. You are responsible for maintaining the confidentiality of your login credentials and all activity under your account
                  </p>
                </section>

                {/* Section 3 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    3. Use of Services
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    You may only use the Services for lawful, internal business purposes. You agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    <li>Copy, modify, reverse-engineer, or decompile the platform</li>
                    <li>Transmit harmful or illegal content</li>
                    <li>Interfere with the functionality or security of the Services</li>
                  </ul>
                </section>

                {/* Section 4 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    4. Data and Privacy
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    You retain ownership of your data. By using our Services, you grant RetainSure a license to use, process, and store your data to operate and improve the Services. Refer to our Privacy Policy for more information.
                  </p>
                </section>

                {/* Section 5 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    5. Intellectual Property
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    All intellectual property in the platform (including software, trademarks, and content) belongs to RetainSure or its licensors. You may not use this IP except as permitted under these Terms.
                  </p>
                </section>

                {/* Section 6 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    6. Third-Party Services
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    We integrate with third-party tools (e.g., CRMs, analytics, billing, support systems). We are not responsible for these third-party services and disclaim liability for any issues arising from their use.
                  </p>
                </section>

                {/* Section 7 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    7. Fees and Payment
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    If applicable, subscription fees, billing cycles, and payment terms will be outlined in a separate agreement or order form. Fees are non-refundable unless otherwise stated. You are responsible for applicable taxes.
                  </p>
                </section>

                {/* Section 8 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    8. Termination
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    We may suspend or terminate your access to the Services if you violate these Terms. Upon termination, your access will cease, and we may delete your data per our data retention policy.
                  </p>
                </section>

                {/* Section 9 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    9. Disclaimers
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    The Services are provided "as is" and "as available." We make no warranties, express or implied, and disclaim liability for loss, errors, interruptions, or inaccuracies in the Services.
                  </p>
                </section>

                {/* Section 10 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    10. Limitation of Liability
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    To the maximum extent permitted by law, RetainSure is not liable for indirect, incidental, or consequential damages, including loss of profits, data, or business interruption.
                  </p>
                </section>

                {/* Section 11 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    11. Indemnification
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    You agree to indemnify and hold harmless RetainSure from any claims, losses, or damages arising out of your misuse of the Services or violation of these Terms.
                  </p>
                </section>

                {/* Section 12 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    12. Governing Law
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    These Terms are governed by the laws of India. Any disputes will be resolved in the courts of Bengaluru, Karnataka, India, unless otherwise required by law.
                  </p>
                </section>

                {/* Section 13 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    13. Modifications
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    We may revise these Terms at any time. We will post the updated Terms on our website with the updated effective date. Continued use of the Services constitutes acceptance of the revised Terms.
                  </p>
                </section>

                {/* Section 14 */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    14. Data Processing Agreement
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    Customers who subscribe to RetainSure's product or services automatically accept Data Processing Agreement found here: <a href="https://www.retainsure.com/data-processing-agreement" className="underline hover:opacity-70 transition-opacity" style={{ color: '#039143' }}>https://www.retainsure.com/data-processing-agreement</a>
                  </p>
                </section>

                {/* Section 15 */}
                <section id="contact">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    15. Contact Us
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="space-y-2 text-base" style={{ color: '#022610', opacity: 0.8 }}>
                      <p><strong>RetainSure Technologies Pvt. Ltd.</strong></p>
                      <p>support@retainsure.com</p>
                      <p>#17, 2nd floor, 7th Main Road</p>
                      <p>ll Stage Indiranagar, Bangalore - 560038</p>
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

export default TermsOfService;