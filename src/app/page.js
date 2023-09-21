"use client";
import { useState } from "react";
import NavBar from "./layoutComponents/NavBar";
import HeroCTA from "./layoutComponents/HeroCTA";
import About from "./layoutComponents/About";
import HowItWorks from "./layoutComponents/HowItWorks";
import Testimonials from "./layoutComponents/Testimonials";
import TertiaryCTA from "./layoutComponents/TertiaryCTA";
import HypeSection from "./layoutComponents/HypeSection";
import Contact from "./layoutComponents/Contact";
import Footer from "./layoutComponents/Footer";
import StepByStep from "./layoutComponents/StepByStep";
import FAQComponent from "./layoutComponents/FAQComponent";
import EmailModal from "./layoutComponents/EmailModal";

const faqs = [
  {
    question: "What is Do?",
    answer: `Do is an all-in-one platform and personalized service that connects brides and beauty professionals, then handles all the logistical details and communications from day one to day of. From inquiry management to contracts to invoices and more, think of Do as your very own virtual assistant and CRM rolled into one.`,
  },
  {
    question: "Is Do right for you?",
    answer: `- You’re an experienced independent hair or makeup artist looking to grow your business<br/> - You’re willing to put in the work it takes to show up as your best self online and in person<br/> - You trust our professional expertise and communication processes<br/> - You treat all clients with kindness, respect, and dignity`,
  },
  {
    question: "When is Do launching?",
    answer: `Fall 2023... so very soon! By joining the waitlist, you will be the first to find out when it officially drops.`,
  },
  {
    question: "Who benefits from Do?",
    answer: `Specifically - bridal beauty pros (hairstylists and makeup artists) + brides.`,
  },
  {
    question: "I am a bride, how can Do help me?",
    answer: `Browse and book your stylists with a few easy clicks, then we’ll promptly communicate with you throughout the weeks and months leading up to your wedding. And the best part? <strong>We’ve eliminated the dreaded back-and-forth email waiting game</strong> by sending a stylist’s pricing and availability right away. Who says true love isn’t real? <strong>With a wide variety of styles, aesthetics, and specialties</strong>, you can rest easy knowing you’re choosing from a directory of trained and vetted professionals dedicated to bringing your vision to life.`,
  },
];

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <NavBar />
      <HeroCTA handleToggleModal={handleToggleModal} />
      <About handleToggleModal={handleToggleModal} />
      <HowItWorks />
      <Testimonials />
      <TertiaryCTA handleToggleModal={handleToggleModal} />
      <HypeSection />
      <StepByStep />
      <FAQComponent faqs={faqs} />
      <Contact />
      <EmailModal open={showModal} handleToggleModal={handleToggleModal} />
      <Footer />
    </>
  );
}
