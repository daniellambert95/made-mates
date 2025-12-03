import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { Target, Globe, Users } from "lucide-react";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="bg-white py-20 text-center">
                <h1 className="text-5xl font-bold text-primary mb-6">About Us</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
                    We are dedicated to helping your brand shine while keeping our planet green.
                </p>
            </section>

            {/* Mission Section */}
            <section className="bg-dark-grey text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center space-x-4 mb-6">
                                <Target className="w-12 h-12 text-secondary" />
                                <h2 className="text-3xl font-bold">Our Mission</h2>
                            </div>
                            <p className="text-2xl font-light leading-relaxed mb-8">
                                "Our mission is simple: boost your visibility while caring for our planet."
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start space-x-3">
                                    <Globe className="w-6 h-6 text-secondary mt-1" />
                                    <p className="text-gray-300">Global Reach, Local Impact</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Users className="w-6 h-6 text-secondary mt-1" />
                                    <p className="text-gray-300">Community Driven</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop"
                                alt="Mission"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="relative py-32">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop"
                        alt="Crowd"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                        "Imagine your brand in stadiums, festivals, city streets, and shared thousands of times across social media, giving you authentic visibility where it matters most. The best part? It all happens without a single paid ad."
                    </h2>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="relative py-24 bg-white">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2669&auto=format&fit=crop"
                        alt="CTA Background"
                        fill
                        className="object-cover opacity-10"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-primary mb-6">
                        The crowd&apos;s waiting. Let&apos;s put your brand in it.
                    </h2>
                    <Link href="/contact">
                        <Button variant="primary" className="text-lg px-10 py-4 shadow-lg">
                            Get Started Now
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
