"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { BarChart3, Brain, Building, Briefcase, Globe, HeadphonesIcon, Plane, Shield, Star, TrendingUp, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="HQ Travel"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Global Ground Transportation at Your Fingertips"
          description="Built for Enterprises | Powered by AI | Loved by People. Transform your corporate travel with intelligent ground transportation solutions worldwide."
          tag="Enterprise Transport"
          tagIcon={Plane}
          buttons={[
            {
              text: "Get Started",
              href: "contact"
            },
            {
              text: "View Demo",
              href: "features"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/1381415/pexels-photo-1381415.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Global transportation network"
          imagePosition="right"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="AI-Powered Transportation Solutions"
          description="Experience the future of ground transportation with our intelligent platform designed for enterprise needs"
          tag="Features"
          tagIcon={Zap}
          features={[
            {
              title: "AI Route Optimization",
              description: "Smart algorithms optimize routes in real-time, reducing travel time and costs while ensuring reliability",
              icon: Brain
            },
            {
              title: "Global Coverage",
              description: "Access ground transportation in over 100 countries with consistent quality and service standards",
              icon: Globe
            },
            {
              title: "Enterprise Dashboard",
              description: "Centralized control panel for managing corporate travel policies, bookings, and expense tracking",
              icon: BarChart3
            },
            {
              title: "24/7 Support",
              description: "Round-the-clock customer support with dedicated enterprise account management",
              icon: HeadphonesIcon
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Trusted by Enterprise Leaders"
          description="See what our corporate clients say about their HQ Travel experience"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "VP of Operations",
              testimonial: "HQ Travel has revolutionized our corporate ground transportation. The AI optimization saves us 30% on travel costs while improving employee satisfaction.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: Building
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Manager",
              testimonial: "The global coverage and consistent service quality make HQ Travel our go-to solution for international business travel. Exceptional reliability.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: Briefcase
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Chief Financial Officer",
              testimonial: "The cost savings and operational efficiency we've achieved with HQ Travel have been remarkable. The ROI is clear and measurable.",
              imageSrc: "https://images.pexels.com/photos/8370868/pexels-photo-8370868.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: TrendingUp
            },
            {
              id: "4",
              name: "David Kim",
              role: "Director of Corporate Services",
              testimonial: "From booking to billing, everything is seamless. The enterprise dashboard gives us the control and visibility we need for corporate travel.",
              imageSrc: "https://images.pexels.com/photos/5716042/pexels-photo-5716042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: Shield
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Transform Your Corporate Travel?"
          description="Get in touch with our enterprise solutions team to discuss your ground transportation needs and discover how HQ Travel can optimize your business travel."
          inputs={[
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: true
            },
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Business Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "requirements",
            placeholder: "Tell us about your transportation requirements...",
            rows: 4,
            required: false
          }}
          buttonText="Contact Sales Team"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="HQ Travel"
          columns={[
            {
              items: [
                {
                  label: "Features",
                  href: "features"
                },
                {
                  label: "Enterprise Solutions",
                  href: "enterprise"
                },
                {
                  label: "Global Coverage",
                  href: "coverage"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "careers"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Support Center",
                  href: "support"
                },
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Terms of Service",
                  href: "terms"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}