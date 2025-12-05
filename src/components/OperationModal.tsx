"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

interface OperationModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

export default function OperationModal({
    isOpen,
    onClose,
    title,
    subtitle,
    description,
    image,
}: OperationModalProps) {
    // Handle ESC key press
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-md hover:shadow-lg transition-all duration-200"
                    aria-label="Close modal"
                >
                    <X className="w-6 h-6 text-gray-600" />
                </button>

                {/* Content */}
                <div className="p-8 md:p-12">
                    {/* Header with Logo */}
                    <div className="flex items-start gap-6 mb-6">
                        {/* Logo */}
                        <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative rounded-lg overflow-hidden bg-white p-4">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Title Section */}
                        <div className="flex-1 pt-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                                {title} GmbH
                            </h2>
                            <p className="text-xl font-semibold text-secondary">
                                {subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
