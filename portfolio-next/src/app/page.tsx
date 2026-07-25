import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NewsTimeline from '@/components/NewsTimeline';
import ResearchCards from '@/components/ResearchCards';
import EducationTimeline from '@/components/EducationTimeline';
import ProjectsGrid from '@/components/ProjectsGrid';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <NewsTimeline />
        <ResearchCards />
        <EducationTimeline />
        <ProjectsGrid />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
