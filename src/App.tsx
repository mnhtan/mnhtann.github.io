import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import WaterWaves from './components/WaterWaves';
import CustomCursor from './components/CustomCursor';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <LanguageProvider>
            {isLoading ? (
                <LoadingScreen onComplete={handleLoadingComplete} />
            ) : (
                <div className="App gradient-bg dark:bg-navy-950 text-navy-800 dark:text-water-50 min-h-screen relative wave-bottom">
                    <CustomCursor enabled={true} glowEffect={true} />
                    <WaterWaves intensity="low" />
                    <Header />
                    <main>
                        <Hero />
                        <About />
                        <Skills />
                        <Projects />
                        <Education />
                        <Contact />
                    </main>
                    <Footer />
                </div>
            )}
        </LanguageProvider>
    );
}

export default App;
