import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Home() {
    const titleRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
        );
    }, []);

    return (
        <section className="h-screen flex items-center justify-center">
            <h1
                ref={titleRef}
                className="text-5xl font-bold text-center"
            >
                Bienvenido al Hotel
            </h1>
        </section>
    );
}

export default Home;
