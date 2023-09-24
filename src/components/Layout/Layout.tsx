import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { ReactNode, useRef } from 'react';

export default function Layout({children}: {children: ReactNode}) {
    const containerRef = useRef<any>(null);

    return (
        <LocomotiveScrollProvider options={{
            smooth: true,
            mobile: {
                smooth: true,
            },
            tablet: {
                smooth: true,
            },
            smartphone: {
                smooth: true,
            },
            scrollFromAnywhere: true,
        }} containerRef={containerRef}>
            <div data-scroll-container ref={containerRef} className="layout-container">
                {children}
            </div>
        </LocomotiveScrollProvider>
    );
}
