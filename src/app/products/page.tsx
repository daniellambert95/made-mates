"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Products() {
    const [openSection, setOpenSection] = useState<string | null>("materials");

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-white py-20 text-center px-4">
                <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                    Visibility shouldn&apos;t cost the planet.
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Sustainable, impactful, and designed for your brand.
                </p>
            </section>

            {/* Product Details Section */}
            <section className="bg-white pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl font-bold text-primary mb-6">
                                Your brand. Your way.
                            </h2>
                            <p className="text-gray-600 mb-12 leading-relaxed">
                                Choose your logo, colours, and finish — then leave the rest to us. We&apos;ll tailor every order to reflect your brand&apos;s personality and purpose, ensuring consistency, quality, and impact at scale.
                            </p>

                            {/* Dropdowns */}
                            <div className="border-t border-gray-200">
                                {/* Materials */}
                                <div className="border-b border-gray-200">
                                    <button
                                        onClick={() => toggleSection("materials")}
                                        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                                    >
                                        <span className="text-xl font-medium text-primary">Materials</span>
                                        {openSection === "materials" ? (
                                            <ChevronUp className="text-secondary" />
                                        ) : (
                                            <ChevronDown className="text-gray-400" />
                                        )}
                                    </button>
                                    {openSection === "materials" && (
                                        <div className="pb-6 text-gray-600">
                                            We use 100% recycled and biodegradable materials. Our paper is sourced from sustainable forests, and our inks are soy-based, ensuring that your brand leaves a mark on people, not the planet.
                                        </div>
                                    )}
                                </div>

                                {/* Delivery Options */}
                                <div className="border-b border-gray-200">
                                    <button
                                        onClick={() => toggleSection("delivery")}
                                        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                                    >
                                        <span className="text-xl font-medium text-primary">Delivery options</span>
                                        {openSection === "delivery" ? (
                                            <ChevronUp className="text-secondary" />
                                        ) : (
                                            <ChevronDown className="text-gray-400" />
                                        )}
                                    </button>
                                    {openSection === "delivery" && (
                                        <div className="pb-6 text-gray-600">
                                            We offer worldwide shipping with carbon-neutral options. Standard delivery takes 5-7 business days, while express options are available for urgent campaigns.
                                        </div>
                                    )}
                                </div>

                                {/* Customization */}
                                <div className="border-b border-gray-200">
                                    <button
                                        onClick={() => toggleSection("customization")}
                                        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                                    >
                                        <span className="text-xl font-medium text-primary">Customization</span>
                                        {openSection === "customization" ? (
                                            <ChevronUp className="text-secondary" />
                                        ) : (
                                            <ChevronDown className="text-gray-400" />
                                        )}
                                    </button>
                                    {openSection === "customization" && (
                                        <div className="pb-6 text-gray-600">
                                            From full-color printing to custom shapes and sizes, we can bring any vision to life. Our design team is available to help you create the perfect look for your brand.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-1/2 relative h-[600px] bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                                src="/product-sample.jpg"
                                alt="Product Sample"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="relative py-24 bg-primary">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
                        alt="CTA Background"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Take the first step towards standing out.
                    </h2>
                    <Link href="/contact">
                        <Button variant="secondary" className="text-lg px-10 py-4 shadow-lg">
                            Get a Quote
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
