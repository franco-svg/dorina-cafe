import { useEffect } from "react";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Benefits } from "./components/sections/Benefits";
import { Contact } from "./components/sections/Contact";
import { FeaturedProducts } from "./components/sections/FeaturedProducts";
import { Gallery } from "./components/sections/Gallery";
import { Hero } from "./components/sections/Hero";
import { Location } from "./components/sections/Location";
import { Testimonials } from "./components/sections/Testimonials";
import { siteConfig } from "./config/siteConfig";
import { benefits } from "./data/benefits";
import { galleryImages } from "./data/gallery";
import { products } from "./data/products";
import { testimonials } from "./data/testimonials";

function App() {
  useEffect(() => {
    document.title = siteConfig.seo.title;
    const description = document.querySelector<HTMLMetaElement>("meta[name='description']");

    if (description) {
      description.content = siteConfig.seo.description;
    }
  }, []);

  return (
    <>
      <Navbar
        business={siteConfig.business}
        links={siteConfig.navigation}
      />
      <main>
        <Hero
          businessTagline={siteConfig.business.tagline}
          hero={siteConfig.hero}
        />
        <FeaturedProducts products={products} section={siteConfig.sections.products} />
        <About about={siteConfig.about} />
        <Benefits benefits={benefits} section={siteConfig.sections.benefits} />
        <Gallery images={galleryImages} section={siteConfig.sections.gallery} />
        <Testimonials testimonials={testimonials} section={siteConfig.sections.testimonials} />
        <Location
          contact={siteConfig.contact}
          ctaLabel={siteConfig.hero.primaryCtaLabel}
          section={siteConfig.sections.location}
        />
        <Contact contact={siteConfig.contact} section={siteConfig.sections.contact} />
      </main>
      <Footer
        business={siteConfig.business}
        contact={siteConfig.contact}
        links={siteConfig.footerLinks}
      />
    </>
  );
}

export default App;
