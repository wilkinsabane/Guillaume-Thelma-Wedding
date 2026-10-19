/**
 * ====================================================================
 * WEDDING INVITATION CONFIGURATION — THELMA & GUILLAUME (TG2026)
 * ====================================================================
 * Central configuration file for Thelma & Guillaume's Wedding Website.
 */

const WEDDING_CONFIG = {
    couple: {
        partner1: "Thelma",
        partner2: "Guillaume",
        monogram: "T & G",
        shortMonogram: "TG",
        hashtag: "#TG2026",
        code: "TG2026",
        title: "Thelma & Guillaume | #TG2026 • 27 — 28 November 2026",
        openingSubtitle: "TOGETHER WITH THEIR FAMILIES",
        heroEyebrow: "WE ARE GETTING MARRIED",
        locationSummary: "LIMBE, CAMEROON • #TG2026",
        storyHeadline: "The Day I Met My Forever",
        storySubheadline: "The Story of Thelma & Guillaume",
        storyPullQuote: "“We went to Teacher Training College to prepare for our careers. Little did we know that, somewhere between the lessons and the dreams, life was preparing one of its most beautiful lessons for us. The lesson was love. The blessing was you. And the journey ahead is forever.”",
        storySignoff: "Forever yours, Thelma ❤️ Guillaume",
        closingHeading: "Thank you for being<br>part of our forever.",
        footerTagline: "THE LESSON WAS LOVE • THE BLESSING WAS YOU",
        footerCopy: "Thelma & Guillaume • #TG2026 • 27–28 November 2026 • Limbe"
    },

    dates: {
        displayRange: "27 — 28 NOVEMBER 2026",
        countdownTarget: "2026-11-27T16:00:00+01:00",
        countdownDisplayDate: "27 NOVEMBER 2026 • 4:00 PM",
        countdownMessageBefore: "Until we begin our forever in Limbe.",
        countdownMessageAfter: "Our forever has begun!"
    },

    theme: {
        paletteName: "Burgundy, Champagne Gold & Sage Green",
        colors: [
            {
                name: "Burgundy",
                hex: "#6E1B33",
                role: "Deep Romance & Passion"
            },
            {
                name: "Champagne Gold",
                hex: "#D4AF37",
                role: "Timeless Celebration"
            },
            {
                name: "Sage Green",
                hex: "#849B82",
                role: "Grace & New Beginnings"
            }
        ]
    },

    events: [
        {
            id: "cultural-rites",
            number: "01",
            dayBadge: "DAY ONE • FRIDAY",
            type: "CULTURAL CELEBRATION",
            title: "Traditional & Cultural Rites",
            dateDisplay: "Friday, 27th November 2026",
            timeDisplay: "4:00 PM Prompt",
            city: "Limbe",
            venue: "Family Residence, Mile 4 Promise Land",
            mapUrl: "https://maps.google.com/?q=Mile+4+Limbe,+Cameroon",
            calendar: {
                title: "Thelma & Guillaume (#TG2026) — Cultural Rites",
                startIso: "2026-11-27T16:00:00",
                endIso: "2026-11-27T22:00:00",
                location: "Family Residence, Mile 4 Promise Land, Limbe",
                description: "Cultural Rites celebration for Thelma & Guillaume (#TG2026) at the Family Residence, Mile 4 Promise Land, Limbe (4:00 PM)."
            }
        },
        {
            id: "civil-wedding",
            number: "02",
            dayBadge: "DAY TWO • SATURDAY",
            type: "CIVIL WEDDING, BLESSINGS & RECEPTION",
            title: "Civil Signing, Nuptial Blessings & Grand Reception",
            dateDisplay: "Saturday, 28th November 2026",
            timeDisplay: "10:00 AM • 12:00 PM • 4:00 PM",
            city: "Limbe",
            venue: "Limbe 1 Council & Ace Event Center, Mile 2 Limbe",
            mapUrl: "https://maps.google.com/?q=Ace+Event+Center+Mile+2+Limbe,+Cameroon",
            scheduleBreakdown: [
                {
                    time: "10:00 AM",
                    activity: "Civil Signing",
                    place: "Limbe 1 Council"
                },
                {
                    time: "12:00 PM",
                    activity: "Nuptial Blessings",
                    place: "Blessing Ceremony"
                },
                {
                    time: "4:00 PM",
                    activity: "Grand Reception",
                    place: "Ace Event Center, Mile 2 Limbe"
                }
            ],
            calendar: {
                title: "Thelma & Guillaume (#TG2026) — Civil Wedding, Blessings & Reception",
                startIso: "2026-11-28T10:00:00",
                endIso: "2026-11-28T23:00:00",
                location: "Limbe 1 Council (10:00 AM) & Ace Event Center, Mile 2 Limbe (4:00 PM)",
                description: "Thelma & Guillaume (#TG2026) — 10:00 AM: Civil Signing at Limbe 1 Council | 12:00 PM: Blessings | 4:00 PM: Reception at Ace Event Center, Mile 2 Limbe."
            }
        }
    ],

    rsvp: {
        whatsappNumber: "237683532487",
        whatsappNumberSecondary: "237674663789",
        contacts: [
            { label: "RSVP Line 1 (+237 683 532 487)", phone: "237683532487", display: "+237 683 532 487" },
            { label: "RSVP Line 2 (+237 674 663 789)", phone: "237674663789", display: "+237 674 663 789" }
        ]
    },

    audio: {
        enabled: true,
        trackTitle: "Shane Filan — Beautiful In White",
        source: "audio/wedding-song.mp3",
        initialVolume: 0.35
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = WEDDING_CONFIG;
} else {
    window.WEDDING_CONFIG = WEDDING_CONFIG;
}
