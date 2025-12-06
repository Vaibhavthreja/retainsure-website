import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { supabase, CaseStudy } from '../lib/supabase';

function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      setCaseStudies(data || []);
    } catch (err) {
      setError('Failed to load case studies. Please try again later.');
      console.error('Error fetching case studies:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
      <Helmet>
        <title>Customer Success Stories | RetainSure Case Studies</title>
        <meta name="description" content="Explore how leading companies use RetainSure to reduce churn, increase retention, and drive customer success. Real case studies with proven results." />
        <meta name="keywords" content="customer success case studies, churn reduction, retention stories, RetainSure customers, customer success examples" />
        <link rel="canonical" href="https://www.retainsure.com/case-studies" />
      </Helmet>

      {/* Header Section */}
      <header className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base font-semibold tracking-wide uppercase" style={{ color: '#039143' }}>
              CASE STUDIES
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight" style={{ color: '#022610' }}>
              Customer success stories that drive results
            </h1>
            <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto" style={{ color: '#022610', opacity: 0.7 }}>
              Discover how customer success teams are using RetainSure to predict churn, identify upsell opportunities, and take action at scale
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-2 sm:pt-4">
            <button
              onClick={() => window.location.href = '/book-a-demo'}
              className="group text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2 hover:opacity-90"
              style={{ backgroundColor: '#039143' }}
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </header>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 sm:p-8 animate-pulse"
                style={{ minHeight: '400px' }}
              >
                <div className="space-y-4">
                  <div className="h-32 bg-gray-300 rounded-lg"></div>
                  <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-12">
            <p className="text-lg" style={{ color: '#022610', opacity: 0.7 }}>
              {error}
            </p>
          </div>
        )}

        {!loading && !error && caseStudies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg" style={{ color: '#022610', opacity: 0.7 }}>
              No case studies available at the moment. Check back soon!
            </p>
          </div>
        )}

        {!loading && !error && caseStudies.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((caseStudy) => (
              <article
                key={caseStudy.id}
                className={`bg-gradient-to-br ${caseStudy.background_color} rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col space-y-6`}
              >
                {/* Image Section */}
                <div className="flex items-center justify-center bg-white rounded-xl p-6 min-h-[180px]">
                  <img
                    src={caseStudy.image_url}
                    alt={caseStudy.company_name}
                    className="max-h-24 w-auto object-contain px-4"
                  />
                </div>

                {/* Metric Section */}
                <div className="text-center space-y-2">
                  <div className="text-4xl sm:text-5xl font-bold" style={{ color: '#039143' }}>
                    {caseStudy.metric_value}
                  </div>
                  <p className="text-sm sm:text-base font-semibold" style={{ color: '#022610', opacity: 0.8 }}>
                    {caseStudy.metric_label}
                  </p>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight" style={{ color: '#022610' }}>
                    {caseStudy.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#022610', opacity: 0.7 }}>
                    {caseStudy.subtitle}
                  </p>
                </div>

                {/* Company Name Badge */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold" style={{ color: '#039143' }}>
                    {caseStudy.company_name}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-50 to-white py-12 sm:py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#022610' }}>
            Ready to write your success story?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto" style={{ color: '#022610', opacity: 0.7 }}>
            Join leading customer success teams who are transforming their retention and expansion strategies with RetainSure
          </p>
          <button
            onClick={() => window.location.href = '/book-a-demo'}
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

export default CaseStudies;
