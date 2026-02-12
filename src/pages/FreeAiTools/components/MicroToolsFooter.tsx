import { Link } from 'react-router-dom';

function MicroToolsFooter() {
  return (
    <footer className="border-t border-gray-100 bg-white py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm" style={{ color: '#6b8575' }}>Powered by</span>
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img src="/RetainSureFullLogo.png" alt="RetainSure" className="h-4 w-auto" />
            </Link>
          </div>

          <div className="flex items-center gap-6 text-sm" style={{ color: '#6b8575' }}>
            <span>&copy; {new Date().getFullYear()} RetainSure</span>
            <Link
              to="/privacy-policy"
              className="hover:opacity-70 transition-opacity"
              style={{ color: '#6b8575' }}
            >
              Privacy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:opacity-70 transition-opacity"
              style={{ color: '#6b8575' }}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MicroToolsFooter;
