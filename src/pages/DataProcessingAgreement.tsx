import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Calendar, Shield } from 'lucide-react';


function DataProcessingAgreement() {
  const scrollToSection = (sectionId: string) => {
    // This function won't work on this page since sections don't exist
    // But we need it for the Navigation component
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Helmet>
        <title>Data Processing Agreement - RetainSure | GDPR Compliance and Data Protection</title>
        <meta name="description" content="RetainSure's Data Processing Agreement outlines our GDPR compliance and data protection measures for EU customers and data subjects." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.retainsure.com/data-processing-agreement" />
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
                  Data Processing Agreement
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
              This Data Processing Agreement ("DPA") forms part of the Terms of Use (or other similarly titled written or electronic agreement addressing the same subject matter) ("Agreement") between Customer (as defined in the Agreement) and RetainSure Technologies Private Limited under which the Processor provides the Controller with the software and services (the "Services"). The Controller and the Processor are individually referred to as a "Party" and collectively as the "Parties".
            </p>
          </div>
        </div>
      </header>

      {/* DPA Content */}
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
              
              <div className="prose prose-lg max-w-none space-y-8">
                
                {/* Introduction */}
                <section>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    The Parties seek to implement this DPA to comply with the requirements of EU GDPR (defined hereunder) in relation to Processor's processing of Personal Data (as defined under the EU GDPR) as part of its obligations under the Agreement.
                  </p>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    This DPA shall apply to Processor's processing of Personal Data, provided by the Controller as part of Processor's obligations under the Agreement.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    Except as modified below, the terms of the Agreement shall remain in full force and effect.
                  </p>
                </section>

                {/* Section 1 - Definitions */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    1. Definitions
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                    Terms not otherwise defined herein shall have the meaning given to them in the EU GDPR or the Agreement. The following terms shall have the corresponding meanings assigned to them below:
                  </p>
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>1.1.</strong> "Data Transfer" means a transfer of the Personal Data from the Controller to the Processor, or between two establishments of the Processor, or with a Sub-processor by the Processor.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>1.2.</strong> "EU GDPR" means the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC (General Data Protection Regulation).
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>1.3.</strong> "Standard Contractual Clauses" means the contractual clauses attached hereto as Schedule 1 pursuant to the European Commission's Implementing Decision (EU) 2021/914 of 4 June 2021 on Standard Contractual Clauses for the transfer of Personal Data to processors established in third countries which do not ensure an adequate level of data protection.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>1.4.</strong> "Controller" means the natural or legal person, public authority, agency, or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>1.5.</strong> "Processor" means a natural or legal person, public authority, agency, or other body which processes personal data on behalf of the controller.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>1.6.</strong> "Sub-processor" means a processor/ sub-contractor appointed by the Processor for the provision of all or parts of the Services and Processes the Personal Data as provided by the Controller.
                    </p>
                  </div>
                </section>

                {/* Section 2 - Purpose */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    2. Purpose of this Agreement
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    This DPA sets out various obligations of the Processor in relation to the Processing of Personal Data and shall be limited to the Processor's obligations under the Agreement. If there is a conflict between the provisions of the Agreement and this DPA, the provisions of this DPA shall prevail.
                  </p>
                </section>

                {/* Section 3 - Categories */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    3. Categories of Personal Data and Data Subjects
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    The Controller authorizes permission to the Processor to process the Personal Data to the extent of which is determined and regulated by the Controller. The current nature of the Personal Data is specified in Annex I to Schedule 1 to this DPA.
                  </p>
                </section>

                {/* Section 4 - Purpose of Processing */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    4. Purpose of Processing
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    The objective of Processing of Personal Data by the Processor shall be limited to the Processor's provision of the Services to the Controller and or its Client, pursuant to the Agreement.
                  </p>
                </section>

                {/* Section 5 - Duration */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    5. Duration of Processing
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    The Processor will Process Personal Data for the duration of the Agreement, unless otherwise agreed upon in writing by the Controller.
                  </p>
                </section>

                {/* Section 6 - Data Controller's Obligations */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    6. Data Controller's Obligations
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>6.1.</strong> The Data Controller shall warrant that it has all necessary rights to provide the Personal Data to the Data Processor for the Processing to be performed in relation to the agreed services. To the extent required by Data Privacy Laws, Data Controller is responsible for ensuring that it provides such Personal Data to Data Processor based on an appropriate legal basis allowing lawful processing activities, including any necessary Data Subject consents to this Processing are obtained, and for ensuring that a record of such consents is maintained. Should such consent be revoked by the Data Subject, the Data Controller is responsible for communicating the fact of such revocation to the Data Processor.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>6.2.</strong> The Data Controller shall provide all natural persons from whom it collects Personal Data with the relevant privacy notice.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>6.3.</strong> The Data Controller shall request the Data Processor to purge Personal Data when required by the Data Controller or any Data Subject whom it collects Personal Data unless the Data Processor is otherwise required to retain the Personal Data by applicable law.
                    </p>
                    <p className="text-base leading-relaxed mb-2" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>6.4.</strong> The Data Controller shall immediately advise the Data Processor in writing if it receives or learns of any:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-base" style={{ color: '#022610', opacity: 0.8 }}>
                      <li><strong>6.4.1.</strong> Complaint or allegation indicating a violation of Data Privacy Laws regarding Personal Data;</li>
                      <li><strong>6.4.2.</strong> Request from one or more individuals seeking to access, correct, or delete Personal Data;</li>
                      <li><strong>6.4.3.</strong> Inquiry or complaint from one or more individuals relating to the collection, processing, use, or transfer of Personal Data; and</li>
                      <li><strong>6.4.4.</strong> Any regulatory request, search warrant, or other legal, regulatory, administrative, or governmental process seeking Personal Data</li>
                    </ul>
                  </div>
                </section>

                {/* Section 7 - Data Processor's Obligations */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    7. Data Processor's Obligations
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>7.1.</strong> The Processor will follow written and documented instructions received, including email, from the Controller, its affiliate, agents, or personnel, with respect to the Processing of Personal Data (each, an "Instruction").
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>7.2.</strong> The Processing described in the Agreement and the relating documentation shall be considered as Instruction from the Controller.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>7.3.</strong> At the Data Controller's request, the Data Processor will provide reasonable assistance to the Data Controller in responding to/ complying with requests/ directions by Data Subject in exercising their rights or of the applicable regulatory authorities regarding Data Processor's Processing of Personal Data.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>7.4.</strong> In relation to the Personal Data, Data Processor shall obtain consent (where necessary) and/or provide notice to the Data Subject in accordance with Data Protection Laws to enable shared Personal Data to be provided to, and used by, the other Party as contemplated by this Agreement.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>7.5.</strong> Where shared Personal Data is transferred outside the Data Processor's territorial boundaries, the transferor shall ensure that the recipient of such data is under contractual obligations to protect such Personal Data to the same or higher standards as those imposed under this Addendum and the Data Protection Laws.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>7.6.</strong> The processor shall inform the controller if, in its opinion, a processing instruction infringes applicable legislation or regulation.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>7.7.</strong> As A Data Processor ,taking into account the nature of the processing and the information available to the Data Processor, the Data Processor shall assist the data controller in conducting any necessary Data Protection Impact Assessments (DPIAs), as required under GDPR.
                    </p>
                  </div>
                </section>

                {/* Section 8 - Data Secrecy */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    8. Data Secrecy
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed mb-2" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>8.1.</strong> To Process the Personal Data, the Processor will use personnel who are
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-base mb-4" style={{ color: '#022610', opacity: 0.8 }}>
                      <li><strong>8.1.1.</strong> Informed of the confidential nature of the Personal Data, and</li>
                      <li><strong>8.1.2.</strong> Perform the Services in accordance with the Agreement.</li>
                    </ul>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>8.2.</strong> The Processor will regularly train individuals having access to Personal Data in data security and data privacy in accordance with accepted industry practice and shall ensure that all the Personal Data is kept strictly confidential.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>8.3.</strong> The Processor will maintain appropriate technical and organizational measures for protection of the security, confidentiality, and integrity of the Personal Data as per the specifications as per the standards mutually agreed in writing by the Parties.
                    </p>
                  </div>
                </section>

                {/* Section 9 - Audit Rights */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    9. Audit Rights
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>9.1.</strong> Upon Controller's reasonable request, the Processor will make available to the Controller, information as is reasonably necessary to demonstrate Processor's compliance with its obligations under the EU GDPR or other applicable laws in respect of its Processing of the Personal Data.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>9.2.</strong> When the Controller wishes to conduct the audit (by itself or through a representative) at Processor's site, it shall provide at least fifteen (15) days' prior written notice to the Processor; the Processor will provide reasonable cooperation and assistance in relation to audits, including inspections, conducted by the Controller or its representative.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>9.3.</strong> The Controller shall bear the expense of such an audit.
                    </p>
                  </div>
                </section>

                {/* Section 10 - Data Transfers */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    10. Mechanism of Data Transfers
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    Any Data Transfer for the purpose of Processing by the Processor in a country outside the European Economic Area (the "EEA") shall only take place in compliance as detailed in Schedule 1 to the DPA. Where such model clauses have not been executed at the same time as this DPA, the Processor shall not unduly withhold the execution of such template model clauses, where the transfer of Personal Data outside of the EEA is required for the performance of the Agreement.
                  </p>
                </section>

                {/* Section 11 - Sub-processors */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    11. Sub-processors
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>11.1.</strong> The Controller acknowledges and agrees that the Processor, may engage a third-party Sub-processor(s) in connection with the performance of the Services, provided such Sub-processor(s) take technical and organizational measures to ensure confidentiality of Personal Data shared with them; The current Sub-processors engaged by the Processors and approved by the Controller are listed in Annex III of Schedule 1 hereto. The processor shall notify the controller at least thirty (30) calendar days in advance of any intended changes or additions to its Sub-processors listed in Annex III by emailing notice of the intended change to Customer. In accordance with Article 28(4) of the GDPR, the Processor shall remain liable to Controller for any failure on behalf of a Sub-processor to fulfil its data protection obligations under the DPA in connection with the performance of the Services.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>11.2.</strong> If the Controller has a concern that the Sub-processor(s) Processing of Personal Data is reasonably likely to cause the Controller to breach its data protection obligations under the GDPR, the Controller may object to Processor's use of such Sub-processor and the Processor and Controller shall confer in good faith to address such concern.
                    </p>
                  </div>
                </section>

                {/* Section 12 - Breach Notification */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    12. Personal Data Breach Notification
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>12.1.</strong> The Processor shall maintain defined procedures in case of a Personal Data Breach (as defined under the GDPR) and shall without undue delay notify Controller if it becomes aware of any Personal Data Breach unless such Data Breach is unlikely to result in a risk to the rights and freedoms of natural persons.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>12.2.</strong> The Processor shall provide the Controller with all reasonable assistance to comply with the notification of Personal Data Breach to Supervisory Authority and/or the Data Subject, to identify the cause of such Data Breach and take such commercially reasonable steps as reasonably required to mitigate and remedy such Data Breach.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>12.3.</strong> No Acknowledgement of Fault by Processor. Processor's notification of or response to a Personal Data Breach under this DPA will not be construed as an acknowledgement by Processor of any fault or liability with respect to the data incident.
                    </p>
                  </div>
                </section>

                {/* Section 13 - Return and Deletion */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    13. Return and Deletion of Personal Data
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>13.1.</strong> The Processor shall at least ninty (90) days from the end of the Agreement or cessation of the Processor's Services under the Agreement, whichever occurs earlier, shall return to the Controller all the Personal Data, or if the Controller so instructs, the Processor shall have the Personal Data deleted. The Processor shall return such Personal Data in a commonly used format or in the current format in which it was stored at discretion of the Controller, soon as reasonably practicable following receipt of Controller's notification.
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                      <strong>13.2.</strong> In any case, the Processor shall delete Personal Data including all the copies of it as soon as reasonably practicable following the end of the Agreement.
                    </p>
                  </div>
                </section>

                {/* Section 14 - Technical Measures */}
                <section>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#022610' }}>
                    14. Technical and Organizational Measures
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    Having regard to the state of technological development and the cost of implementing any measures, the Processor will take appropriate technical and organizational measures against the unauthorized or unlawful processing of Personal Data and against the accidental loss or destruction of, or damage to, Personal Data to ensure a level of security appropriate to: (a) the harm that might result from unauthorized or unlawful processing or accidental loss, destruction or damage; and (b) the nature of the data to be protected [including the measures stated in Annex II of Schedule 1]
                  </p>
                </section>

                {/* Schedule 1 */}
                <section>
                  <h2 className="text-2xl font-bold mb-6" style={{ color: '#022610' }}>
                    SCHEDULE 1
                  </h2>
                  
                  {/* Annex I */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#022610' }}>
                      ANNEX I
                    </h3>
                    <h4 className="text-lg font-semibold mb-4" style={{ color: '#022610' }}>
                      A. LIST OF PARTIES
                    </h4>
                    
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold mb-2" style={{ color: '#022610' }}>Data exporter(s):</h5>
                        <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm" style={{ color: '#022610', opacity: 0.8 }}>
                          <p><strong>Name:</strong> Customer (As set forth in the relevant Order Form).</p>
                          <p><strong>Address:</strong> As set forth in the relevant Order Form.</p>
                          <p><strong>Contact person's name, position, and contact details:</strong> As set forth in the relevant Order Form.</p>
                          <p><strong>Activities relevant to the data transferred under these Clauses:</strong> Recipient of the Services provided by RetainSure Technologies Private Limited in accordance with the Order Form.</p>
                          <p><strong>Signature and date:</strong> Signature and date are set out in the Order form.</p>
                          <p><strong>Role (Controller/ Processor):</strong> Controller</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2" style={{ color: '#022610' }}>Data importer(s):</h5>
                        <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm" style={{ color: '#022610', opacity: 0.8 }}>
                          <p><strong>Name:</strong> RetainSure Technologies Private Limited</p>
                          <p><strong>Address:</strong> #17, 2nd floor, 7th Main Road, ll Stage Indiranagar, Bangalore - 560038</p>
                          <p><strong>Contact person's name, position, and contact details:</strong> Dhiraj Patel, Co-Founder and CEO, dhiraj@retainsure.com</p>
                          <p><strong>Activities relevant to the data transferred under these Clauses:</strong> Provision of the Services to the Customer in accordance with the Agreement.</p>
                          <p><strong>Signature and date:</strong> Signature and date are set out in the order form.</p>
                          <p><strong>Role (controller/processor):</strong> Processor.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section B */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4" style={{ color: '#022610' }}>
                      B. DESCRIPTION OF TRANSFER
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2" style={{ color: '#022610' }}>Categories of data subjects whose personal data is transferred</h5>
                        <p className="text-base" style={{ color: '#022610', opacity: 0.8 }}>
                          Customer's authorized users of the Services, Customer's customer data synced via source integration that they have enabled on the RetainSure product
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2" style={{ color: '#022610' }}>Categories of personal data transferred</h5>
                        <p className="text-base" style={{ color: '#022610', opacity: 0.8 }}>
                          Name, Address, Date of Birth, Age, Education, Email, Gender, Image, Job, Language, Phone, Related person, Related URL, User ID, Username.
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2" style={{ color: '#022610' }}>Sensitive data transferred (if applicable) and applied restrictions or safeguards</h5>
                        <p className="text-base" style={{ color: '#022610', opacity: 0.8 }}>
                          No sensitive data collected.
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2" style={{ color: '#022610' }}>The frequency of the transfer</h5>
                        <p className="text-base" style={{ color: '#022610', opacity: 0.8 }}>
                          Continuous basis
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2" style={{ color: '#022610' }}>Nature of the processing</h5>
                        <p className="text-base" style={{ color: '#022610', opacity: 0.8 }}>
                          Providing access to the platform, analytics, better offering and fulfilling services mentioned in the order form
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2" style={{ color: '#022610' }}>Purpose(s) of the data transfer and further processing</h5>
                        <p className="text-base" style={{ color: '#022610', opacity: 0.8 }}>
                          The purpose of the transfer is to facilitate the performance of the Services more fully described in the Agreement and accompanying order forms.
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2" style={{ color: '#022610' }}>The period for which the personal data will be retained</h5>
                        <p className="text-base" style={{ color: '#022610', opacity: 0.8 }}>
                          The period for which the Customer Personal Data will be retained is more fully described in the Agreement, Addendum, and accompanying order forms.
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2" style={{ color: '#022610' }}>For transfers to (sub-) processors</h5>
                        <p className="text-base" style={{ color: '#022610', opacity: 0.8 }}>
                          The subject matter, nature, and duration of the Processing more fully described in the Agreement, Addendum, and accompanying order forms.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section C */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4" style={{ color: '#022610' }}>
                      C. COMPETENT SUPERVISORY AUTHORITY
                    </h4>
                    <p className="text-base mb-2" style={{ color: '#022610', opacity: 0.8 }}>
                      Data exporter is established in an EEA country.
                    </p>
                    <p className="text-base" style={{ color: '#022610', opacity: 0.8 }}>
                      The competent supervisory authority is as determined by application of Clause 13 of the EU SCCs.
                    </p>
                  </div>

                  {/* Annex II */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#022610' }}>
                      ANNEX II
                    </h3>
                    <h4 className="text-lg font-semibold mb-4" style={{ color: '#022610' }}>
                      TECHNICAL AND ORGANISATIONAL MEASURES INCLUDING TECHNICAL AND ORGANISATIONAL MEASURES TO ENSURE THE SECURITY OF THE DATA
                    </h4>
                    
                    <p className="text-base mb-6" style={{ color: '#022610', opacity: 0.8 }}>
                      Description of the technical and organisational security measures implemented by RetainSure Technologies Private Limited as the data processor/data importer to ensure an appropriate level of security, taking into account the nature, scope, context, and purpose of the processing, and the risks for the rights and freedoms of natural persons.
                    </p>

                    <div className="space-y-6">
                      {/* Security Management */}
                      <div>
                        <h5 className="text-lg font-semibold mb-3" style={{ color: '#022610' }}>Security</h5>
                        <h6 className="font-semibold mb-2" style={{ color: '#022610' }}>Security Management System.</h6>
                        <div className="space-y-3 text-sm" style={{ color: '#022610', opacity: 0.8 }}>
                          <p><strong>Organization.</strong> RetainSure Technologies Private Limited designates qualified security personnel whose responsibilities include development, implementation, and ongoing maintenance of the Information Security Program.</p>
                          <p><strong>Policies.</strong> Management reviews and supports all security related policies to ensure the security, availability, integrity and confidentiality of Customer Personal Data. These policies are updated at least once annually.</p>
                          <p><strong>Assessments.</strong> RetainSure Technologies Private Limited engages a reputable independent third-party to perform risk assessments of all systems containing Customer Personal Data at least once annually.</p>
                          <p><strong>Risk Treatment.</strong> RetainSure Technologies Private Limited maintains a formal and effective risk treatment program that includes penetration testing, vulnerability management and patch management to identify and protect against potential threats to the security, integrity or confidentiality of Customer Personal Data.</p>
                          <p><strong>Vendor Management.</strong> RetainSure Technologies Private Limited maintains an effective vendor management program</p>
                          <p><strong>Incident Management.</strong> RetainSure Technologies Private Limited reviews security incidents regularly, including effective determination of root cause and corrective action.</p>
                          <p><strong>Standards.</strong> RetainSure Technologies Private Limited operates an information security management system that complies with the requirements of SOC 2 Type 2</p>
                        </div>
                      </div>

                      {/* Personnel Security */}
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#022610' }}>Personnel Security.</h6>
                        <div className="space-y-3 text-sm" style={{ color: '#022610', opacity: 0.8 }}>
                          <p>RetainSure Technologies Private Limited personnel are required to conduct themselves in a manner consistent with the company's guidelines regarding confidentiality, business ethics, appropriate usage, and professional standards. RetainSure Technologies Private Limited conducts reasonably appropriate background checks on any employees who will have access to client data under this Agreement, including in relation to employment history and criminal records, to the extent legally permissible and in accordance with applicable local labor law, customary practice and statutory regulations.</p>
                          <p>Personnel are required to execute a confidentiality agreement in writing at the time of hire and to protect Customer Personal Data at all times. Personnel must acknowledge receipt of, and compliance with, RetainSure Technologies Private Limited's confidentiality, privacy and security policies. Personnel are provided with privacy and security training on how to implement and comply with the Information Security Program. Personnel handling Customer Personal Data are required to complete additional requirements appropriate to their role (e.g., certifications). RetainSure Technologies Private Limited's personnel will not process Customer Personal Data without authorization.</p>
                        </div>
                      </div>

                      {/* Access Controls */}
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#022610' }}>Access Controls</h6>
                        <div className="space-y-3 text-sm" style={{ color: '#022610', opacity: 0.8 }}>
                          <p><strong>Access Management.</strong> RetainSure Technologies Private Limited maintains a formal access management process for the request, review, approval and provisioning of all personnel with access to Customer Personal Data to limit access to Customer Personal Data and systems storing, accessing or transmitting Customer Personal Data to properly authorized persons having a need for such access. Access reviews are conducted periodically to ensure that only those personnel with access to Customer Personal Data still require it.</p>
                          <p><strong>Infrastructure Security Personnel.</strong> RetainSure Technologies Private Limited has, and maintains, a security policy for its personnel, and requires security training as part of the training package for its personnel. RetainSure Technologies Private Limited's infrastructure security personnel are responsible for the ongoing monitoring of RetainSure Technologies Private Limited's security infrastructure, the review of the Services, and for responding to security incidents.</p>
                          <p><strong>Access Control and Privilege Management.</strong> RetainSure Technologies Private Limited's and Customer's administrators and end users must authenticate themselves via a Multi-Factor authentication system or via a single sign on system in order to use the Services</p>
                          <p><strong>Internal Data Access Processes and Policies – Access Policy.</strong> RetainSure Technologies Private Limited's internal data access processes and policies are designed to protect against unauthorized access, use, disclosure, alteration or destruction of Customer Personal Data. RetainSure Technologies Private Limited designs its systems to only allow authorized persons to access data they are authorized to access based on principles of "least privileged" and "need to know", and to prevent others who should not have access from obtaining access. RetainSure Technologies Private Limited requires the use of unique user IDs, strong passwords, two factor authentication and carefully monitored access lists to minimize the potential for unauthorized account use. The granting or modification of access rights is based on: the authorized personnel's job responsibilities; job duty requirements necessary to perform authorized tasks; a need to know basis; and must be in accordance with RetainSure Technologies Private Limited's internal data access policies and training. Approvals are managed by workflow tools that maintain audit records of all changes. Access to systems is logged to create an audit trail for accountability. Where passwords are employed for authentication (e.g., login to workstations), password policies follow industry standard practices. These standards include password complexity, password expiry, password lockout, restrictions on password reuse and re-prompt for password after a period of inactivity</p>
                        </div>
                      </div>

                      {/* Data Center and Network Security */}
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#022610' }}>Data Center and Network Security</h6>
                        <div className="space-y-3 text-sm" style={{ color: '#022610', opacity: 0.8 }}>
                          <p><strong>Data Centers.</strong></p>
                          <p><strong>Infrastructure.</strong> RetainSure Technologies Private Limited has AWS as its data center.</p>
                          <p><strong>Resiliency.</strong> RetainSure Technologies Private Limited conducts Backup Restoration Testing on regular basis to ensure resiliency.</p>
                          <p><strong>Server Operating Systems.</strong> RetainSure Technologies Private Limited's servers are customized for the application environment and the servers have been hardened for the security of the Services. RetainSure Technologies Private Limited employs a code review process to increase the security of the code used to provide the Services and enhance the security products in production environments.</p>
                          <p><strong>Disaster Recovery.</strong> RetainSure Technologies Private Limited backups data over multiple systems to help to protect against accidental destruction or loss. RetainSure Technologies Private Limited has designed and regularly plans and tests its disaster recovery programs.</p>
                          <p><strong>Security Logs.</strong> RetainSure Technologies Private Limited's systems have logging enabled to their respective system log facility in order to support the security audits, and monitor and detect actual and attempted attacks on, or intrusions into, RetainSure Technologies Private Limited's systems.</p>
                          <p><strong>Vulnerability Management.</strong> RetainSure Technologies Private Limited performs regular vulnerability scans on all infrastructure components of its production and development environment. Vulnerabilities are remediated on a risk basis, with Critical, High and Medium security patches for all components installed as soon as commercially possible.</p>
                        </div>
                      </div>

                      {/* Networks and Transmission */}
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#022610' }}>Networks and Transmission.</h6>
                        <div className="space-y-3 text-sm" style={{ color: '#022610', opacity: 0.8 }}>
                          <p><strong>Data Transmission.</strong> Transmissions on production environment are transmitted via Internet standard protocols.</p>
                          <p><strong>External Attack Surface.</strong> AWS Security Group which is equivalent to virtual firewall is in place for Production environment on AWS.</p>
                          <p><strong>Incident Response.</strong> RetainSure Technologies Private Limited maintains incident management policies and procedures, including detailed security incident escalation procedures. RetainSure Technologies Private Limited monitors a variety of communication channels for security incidents, and RetainSure Technologies Private Limited's security personnel will react promptly to suspected or known incidents, mitigate harmful effects of such security incidents, and document such security incidents and their outcomes.</p>
                          <p><strong>Encryption Technologies.</strong> RetainSure Technologies Private Limited makes HTTPS encryption (also referred to as SSL or TLS) available for data in transit.</p>
                        </div>
                      </div>

                      {/* Data Storage */}
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#022610' }}>Data Storage, Isolation, Authentication, and Destruction.</h6>
                        <p className="text-sm" style={{ color: '#022610', opacity: 0.8 }}>
                          RetainSure Technologies Private Limited stores data in a multi-tenant environment on AWS servers. RetainSure Technologies Private Limited logically isolates the data of different customers. A central authentication system is used across all Services to increase uniform security of data. RetainSure Technologies Private Limited ensures secure disposal of Client Data through the use of a series of data destruction processes.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Annex III */}
                  <div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#022610' }}>
                      ANNEX III
                    </h3>
                    <h4 className="text-lg font-semibold mb-4" style={{ color: '#022610' }}>
                      LIST OF SUB-PROCESSORS
                    </h4>
                    <p className="text-base" style={{ color: '#022610', opacity: 0.8 }}>
                      The controller has authorised the use of the following sub-processors:
                    </p>
                    
                    {/* Sub-processors Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 rounded-lg">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold" style={{ color: '#022610' }}>
                              Name of Sub-Processor
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold" style={{ color: '#022610' }}>
                              Description of Processing
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold" style={{ color: '#022610' }}>
                              Compliance Certificate
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="border border-gray-300 px-4 py-3 font-medium" style={{ color: '#022610' }}>
                              Amazon Web Services
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              Hosting the Production Environment
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              SOC 2 Type 2, ISO 27001, GDPR
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="border border-gray-300 px-4 py-3 font-medium" style={{ color: '#022610' }}>
                              Hubspot
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              Storing prospect/customer data and communications tracking - CRM
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              SOC 2 Type 2, ISO 27001, GDPR
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="border border-gray-300 px-4 py-3 font-medium" style={{ color: '#022610' }}>
                              Open AI
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              AI use cases to provide output on the product
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              SOC 2 Type 2, ISO 27001, GDPR
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="border border-gray-300 px-4 py-3 font-medium" style={{ color: '#022610' }}>
                              Anthropic
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              AI use cases to provide output on the product
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              SOC 2 Type 2, ISO 27001, GDPR
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="border border-gray-300 px-4 py-3 font-medium" style={{ color: '#022610' }}>
                              Google Gemini
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              AI use cases to provide output on the product
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              SOC 2 Type 2, ISO 27001, GDPR
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="border border-gray-300 px-4 py-3 font-medium" style={{ color: '#022610' }}>
                              Pinecone
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              For streamlining the RAG architecture for better output of AI answers
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              SOC 2 Type 2, ISO 27001, GDPR
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="border border-gray-300 px-4 py-3 font-medium" style={{ color: '#022610' }}>
                              SendGrid
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              For transactional email sending
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              SOC 2 Type 2
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="border border-gray-300 px-4 py-3 font-medium" style={{ color: '#022610' }}>
                              SendGrid
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              For transactional email sending
                            </td>
                            <td className="border border-gray-300 px-4 py-3" style={{ color: '#022610', opacity: 0.8 }}>
                              SOC 2 Type 2
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

export default DataProcessingAgreement;