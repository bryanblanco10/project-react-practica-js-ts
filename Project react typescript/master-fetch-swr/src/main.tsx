import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { SWRConfig } from 'swr';

import { fetcher } from './api';
import { router } from './router';
import { PageSkeleton, DashboardBroken } from './components';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

function localStorageProvider(): any {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map(JSON.parse(localStorage.getItem('gentleman-cache') || '[]'));

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem('gentleman-cache', appCache);
  });

  // We still use the map for write & read for performance.
  return map;
}


root.render(
	<React.StrictMode>
		<ErrorBoundary fallback={<DashboardBroken />}>
			<Suspense fallback={<PageSkeleton />}>
				<SWRConfig
					value={{
						fetcher,
						suspense: true,
						provider: localStorageProvider,
					}}
				>
					<RouterProvider router={router} />
				</SWRConfig>
			</Suspense>
		</ErrorBoundary>
	</React.StrictMode>
);
