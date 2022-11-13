import React, { useEffect, useState } from 'react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <svg onClick={scrollToTop}
            className=" inline-block mb-6 md:mb-8 lg:mb-10 text-gray-200 
        md:duration-500 md:hover:opacity-40"
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 511.7 511.7"
            height="60"
            width="328"
        >
            <path d="M369,382.7c-1.1,0-2.1-0.6-2.6-1.7L255.9,138.7L145.3,381c-0.6,1.4-2.3,2-3.8,1.4c-1.4-0.7-2.1-2.3-1.4-3.8l113.2-248
        c0.5-1,1.5-1.7,2.6-1.7l0,0c1.1,0,2.1,0.6,2.6,1.7l113.1,248c0.6,1.4,0,3.1-1.4,3.8C369.8,382.6,369.4,382.7,369,382.7z"/></svg>
    );
}