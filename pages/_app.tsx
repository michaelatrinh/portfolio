import '@/styles/globals.scss';
import '@/styles/locomotive-scroll.css';
import type { AppProps } from 'next/app';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

function MyApp({ Component, pageProps }: AppProps) {
  const containerRef = useRef(null);
  const { route } = useRouter();

  return (
    <LocomotiveScrollProvider 
      options={{ smooth: true, multiplier: 1, lerp: 0.015 }}
      watch={[ route ]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Component {...pageProps} />
      </main>
    </LocomotiveScrollProvider>
  ) 
}

export default MyApp;
