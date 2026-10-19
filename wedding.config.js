/**
 * ====================================================================
 * WEDDING INVITATION CONFIGURATION
 * ====================================================================
 * Customize this single file to completely transform the wedding website
 * for any couple! All texts, dates, events, venues, and media are managed here.
 */

const WEDDING_CONFIG = {
    // Couple Information
    couple: {
        partner1: "Guillaume",
        partner2: "Thelma",
        partner1Full: "Guillaume Abane",
        partner2Full: "Thelma Ndoh",
        title: "Guillaume & Thelma | Wedding Celebration",
        openingSubtitle: "TOGETHER WITH THEIR FAMILIES",
        heroEyebrow: "WE ARE GETTING MARRIED",
        storyHeading: "Two hearts,<br>one beautiful journey.",
        storyText: "With grateful hearts and immense joy, we invite you to witness and celebrate the beginning of our forever together. Your presence, love, and prayers mean the world to us as we unite as one.",
        closingHeading: "Thank you for being<br>part of our story.",
        footerTagline: "OUR BEGINNING. OUR FOREVER.",
        footerCopy: "With love, always."
    },

    // Dates & Countdown
    dates: {
        displayRange: "27 — 28 NOVEMBER 2026",
        // Format: YYYY-MM-DDTHH:mm:ss+Timezone
        countdownTarget: "2026-11-27T10:00:00+01:00",
        countdownDisplayDate: "27 NOVEMBER 2026",
        countdownMessageBefore: "Until we begin our forever.",
        countdownMessageAfter: "The celebration has begun!"
    },

    // Visual Palette & Theme
    theme: {
        paletteName: "Noir & Champagne Gold",
        primaryBg: "#11100f",
        cardBg: "rgba(255, 255, 255, 0.04)",
        cardBorder: "rgba(255, 255, 255, 0.12)",
        accentColor: "#d4af37",
        textPrimary: "#ffffff",
        textMuted: "rgba(255, 255, 255, 0.72)"
    },

    // Dress Code & Palette Guide for Guests
    dressCode: {
        enabled: true,
        title: "DRESS CODE & PALETTE",
        subtitle: "We would love for you to celebrate in elegance with us.",
        note: "Formal / Traditional attire. Feel free to incorporate our wedding tones:",
        colors: [
            { name: "Onyx Black", hex: "#11100F", textDark: false },
            { name: "Champagne Gold", hex: "#D4AF37", textDark: true },
            { name: "Warm Ivory", hex: "#F5F0E6", textDark: true },
            { name: "Royal Burgundy", hex: "#6E1B3B", textDark: false }
        ]
    },

    // Multi-Day Itinerary / Events
    events: [
        {
            id: "cultural-rites",
            number: "01",
            type: "CULTURAL RITES",
            title: "Our Cultural Celebration",
            dateDisplay: "27 November 2026",
            dayOfWeek: "Friday",
            timeDisplay: "Please arrive early",
            city: "Limbe",
            venue: "Limbe Cultural Grounds",
            mapUrl: "https://maps.google.com/?q=Limbe,+Cameroon",
            calendar: {
                title: "Guillaume & Thelma - Cultural Rites",
                startIso: "2026-11-27T10:00:00",
                endIso: "2026-11-27T18:00:00",
                location: "Limbe, Cameroon",
                description: "Join Guillaume & Thelma for their traditional cultural rites in Limbe."
            }
        },
        {
            id: "civil-wedding",
            number: "02",
            type: "CIVIL WEDDING & RECEPTION",
            title: "A New Beginning & Reception",
            dateDisplay: "28 November 2026",
            dayOfWeek: "Saturday",
            timeDisplay: "1:00 PM (Ceremony) • Reception to Follow",
            city: "Limbe",
            venue: "Limbe Celebration Hall",
            mapUrl: "https://maps.google.com/?q=Limbe,+Cameroon",
            calendar: {
                title: "Guillaume & Thelma - Civil Wedding & Reception",
                startIso: "2026-11-28T13:00:00",
                endIso: "2026-11-28T23:00:00",
                location: "Limbe, Cameroon",
                description: "Civil wedding ceremony followed by celebration banquet for Guillaume & Thelma."
            }
        }
    ],

    // Photo Gallery (Optimized WebP images with fallbacks)
    gallery: [
        {
            id: "photo-1",
            src: "images/gallery-1.webp",
            fallback: "images/gallery-1.png",
            aspectClass: "gallery-large",
            alt: "Guillaume and Thelma - Regal Portrait"
        },
        {
            id: "photo-2",
            src: "images/gallery-2.webp",
            fallback: "images/gallery-2.png",
            aspectClass: "gallery-small",
            alt: "Guillaume and Thelma - Laughing on Sofa"
        },
        {
            id: "photo-3",
            src: "images/gallery-3.webp",
            fallback: "images/gallery-3.png",
            aspectClass: "gallery-medium",
            alt: "Guillaume and Thelma - Intimate Gaze"
        },
        {
            id: "photo-4",
            src: "images/gallery-4.webp",
            fallback: "images/gallery-4.png",
            aspectClass: "gallery-wide",
            alt: "Guillaume and Thelma - Showing the Ring"
        },
        {
            id: "photo-5",
            src: "images/gallery-5.webp",
            fallback: "images/gallery-5.png",
            aspectClass: "gallery-medium",
            alt: "Guillaume and Thelma - Formal Standing"
        },
        {
            id: "photo-6",
            src: "images/gallery-6.webp",
            fallback: "images/gallery-6.png",
            aspectClass: "gallery-small",
            alt: "Thelma and Guillaume - Elegant Pose"
        },
        {
            id: "photo-7",
            src: "images/gallery-7.webp",
            fallback: "images/gallery-7.png",
            aspectClass: "gallery-medium",
            alt: "Guillaume and Thelma - Casual Joy"
        },
        {
            id: "photo-8",
            src: "images/save-the-date.webp",
            fallback: "images/save-the-date.png",
            aspectClass: "gallery-wide",
            alt: "Guillaume and Thelma - Save The Date Limbe"
        }
    ],

    // WhatsApp RSVP Configuration
    rsvp: {
        // Change to the couple's or wedding planner's WhatsApp number (country code + number without plus or spaces)
        whatsappNumber: "237670000000",
        weddingNameHeader: "Guillaume & Thelma Wedding Celebration",
        successMessage: "Thank you! Opening WhatsApp to send your confirmation...",
        allowMessage: true
    },

    // Audio & Soundtrack
    audio: {
        enabled: true,
        source: "audio/wedding-song.mp3",
        initialVolume: 0.25
    }
};

// Export for module systems or attach to window
if (typeof module !== "undefined" && module.exports) {
    module.exports = WEDDING_CONFIG;
} else {
    window.WEDDING_CONFIG = WEDDING_CONFIG;
}
