import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import App from './App';
import { DemoAccessProvider } from './contexts/DemoAccessContext';

interface RenderResult {
  html: string;
  helmet: HelmetServerState;
}

export function render(url: string): RenderResult {
  const helmetContext = {} as { helmet: HelmetServerState };

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <DemoAccessProvider>
          <App />
        </DemoAccessProvider>
      </StaticRouter>
    </HelmetProvider>
  );

  return {
    html,
    helmet: helmetContext.helmet,
  };
}
