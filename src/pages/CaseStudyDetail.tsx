import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { supabase, CaseStudy } from '../lib/supabase';

function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCaseStudy();
  }, [slug]);

  const fetchCaseStudy = async () => {
    if (!slug) {
      setError('Invalid case study URL');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        setError('Case study not found');
      } else {
        setCaseStudy(data);
      }
    } catch (err) {
      setError('Failed to load case study. Please try again later.');
      console.error('Error fetching case study:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto space-y-12 animate-pulse">
            <div className="h-16 bg-gray-200 rounded-lg w-3/4"></div>
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                  </div>
                  <div className="w-full lg:w-1/4">
                    <div className="h-48 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-green-50 flex items-center justify-center">
        <Helmet>
          <title>Case Study Not Found | RetainSure</title>
        </Helmet>
        <div className="text-center px-4 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#022610' }}>
            {error === 'Case study not found' ? 'Case Study Not Found' : 'Something Went Wrong'}
          </h1>
          <p className="text-lg mb-8" style={{ color: '#022610', opacity: 0.7 }}>
            {error || 'Unable to load this case study'}
          </p>
          <button
            onClick={() => navigate('/case-studies')}
            className="text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2 hover:opacity-90"
            style={{ backgroundColor: '#039143' }}
          >
            <span>Back to Case Studies</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
      <Helmet>
        <title>{caseStudy.heading || caseStudy.title} | RetainSure Case Study</title>
        <meta name="description" content={caseStudy.subtitle} />
        <meta name="keywords" content={`${caseStudy.company_name}, customer success, case study, churn reduction, retention`} />
        <link rel="canonical" href={`https://www.retainsure.com/case-studies/${slug}`} />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-8">
              {caseStudy.image_url && (
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <img
                    src={caseStudy.image_url}
                    alt={caseStudy.company_name}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight" style={{ color: '#022610' }}>
              {caseStudy.heading || caseStudy.title}
            </h1>

            {caseStudy.metric_value && (
              <div className="text-center space-y-2 mb-8">
                <div className="text-4xl sm:text-5xl font-bold" style={{ color: '#039143' }}>
                  {caseStudy.metric_value}
                </div>
                <p className="text-base sm:text-lg font-semibold" style={{ color: '#022610', opacity: 0.8 }}>
                  {caseStudy.metric_label}
                </p>
              </div>
            )}
          </header>

          <div className="space-y-16 sm:space-y-20">
            {caseStudy.goal_title && caseStudy.goal_content && (
              <section className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="flex-1 lg:w-3/4 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#039143' }}>
                    {caseStudy.goal_title}
                  </h2>
                  <div className="markdown-content text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {caseStudy.goal_content}
                    </ReactMarkdown>
                  </div>
                </div>
                {caseStudy.goal_image_url && (
                  <div className="lg:w-1/4 flex items-start">
                    <div className="bg-white rounded-xl p-4 shadow-md w-full">
                      <img
                        src={caseStudy.goal_image_url}
                        alt={`${caseStudy.goal_title} illustration`}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </section>
            )}

            {caseStudy.approach_title && caseStudy.approach_content && (
              <section className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="flex-1 lg:w-3/4 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#039143' }}>
                    {caseStudy.approach_title}
                  </h2>
                  <div className="markdown-content text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {caseStudy.approach_content}
                    </ReactMarkdown>
                  </div>
                </div>
                {caseStudy.approach_image_url && (
                  <div className="lg:w-1/4 flex items-start">
                    <div className="bg-white rounded-xl p-4 shadow-md w-full">
                      <img
                        src={caseStudy.approach_image_url}
                        alt={`${caseStudy.approach_title} illustration`}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </section>
            )}

            {caseStudy.outcome_title && caseStudy.outcome_content && (
              <section className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="flex-1 lg:w-3/4 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#039143' }}>
                    {caseStudy.outcome_title}
                  </h2>
                  <div className="markdown-content text-base sm:text-lg leading-relaxed" style={{ color: '#022610', opacity: 0.8 }}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {caseStudy.outcome_content}
                    </ReactMarkdown>
                  </div>
                </div>
                {caseStudy.outcome_image_url && (
                  <div className="lg:w-1/4 flex items-start">
                    <div className="bg-white rounded-xl p-4 shadow-md w-full">
                      <img
                        src={caseStudy.outcome_image_url}
                        alt={`${caseStudy.outcome_title} illustration`}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-green-50 to-white py-12 sm:py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#022610' }}>
            Ready to achieve similar results?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto" style={{ color: '#022610', opacity: 0.7 }}>
            Discover how RetainSure can transform your customer success strategy and drive measurable growth
          </p>
          <button
            onClick={() => navigate('/book-a-demo')}
            className="group text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2 hover:opacity-90"
            style={{ backgroundColor: '#039143' }}
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default CaseStudyDetail;
