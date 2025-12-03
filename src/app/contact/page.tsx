"use client";

import Button from "@/components/Button";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="bg-primary py-20 text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl text-blue-100">
                    We&apos;d love to hear from you. Let&apos;s start a conversation.
                </p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
                        <p className="text-gray-600 mb-12 leading-relaxed">
                            Whether you have a question about our products, pricing, or just want to say hello, our team is ready to answer all your questions.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-light-grey p-3 rounded-full">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary">Email</h3>
                                    <p className="text-gray-600">hello@mademates.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-light-grey p-3 rounded-full">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary">Phone</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-light-grey p-3 rounded-full">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary">Office</h3>
                                    <p className="text-gray-600">
                                        123 Brand Street, Creative City<br />
                                        London, UK
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-lg font-semibold text-primary mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition-colors">
                                    <Instagram size={24} />
                                </a>
                                <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition-colors">
                                    <Facebook size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-light-grey p-8 md:p-12 rounded-lg">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option>General Inquiry</option>
                                    <option>Product Support</option>
                                    <option>Sales</option>
                                    <option>Partnership</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <Button variant="primary" className="w-full py-4 text-lg">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
