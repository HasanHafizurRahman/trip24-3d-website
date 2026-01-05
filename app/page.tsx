"use client";

import dynamic from 'next/dynamic';
import Hero from '@/components/dom/Hero';
import Navbar from '@/components/dom/Navbar';
import About from '@/components/dom/About';
import Services from '@/components/dom/Services';
import TruckFleet from '@/components/dom/TruckFleet';
import Testimonials from '@/components/dom/Testimonials';
import FAQ from '@/components/dom/FAQ';
import Contact from '@/components/dom/Contact';
import Footer from '@/components/dom/Footer';
import AmbientSound from '@/components/dom/AmbientSound';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false });

export default function Home() {
  return (
    <main className="relative w-full h-screen bg-bg-dark text-text-primary">
      {/* 3D Scene - Fixed Background */}
      <div className="fixed inset-0 z-0">
        <Scene />
      </div>

      {/* UI Overlay - Scrollable */}
      <div className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <TruckFleet />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>

      {/* Ambient Sound Control */}
      <AmbientSound />
    </main>
  );
}
