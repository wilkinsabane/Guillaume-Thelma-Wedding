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
        title: "Thelma & Guillaume | #TG2026 • 28 November 2026",
        openingSubtitle: "TOGETHER WITH THEIR FAMILIES",
        heroEyebrow: "WE ARE GETTING MARRIED",
        locationSummary: "LIMBE, CAMEROON • #TG2026",
        storyHeadline: "The Day I Met My Forever",
        storySubheadline: "The Story of Thelma & Guillaume",
        storyPullQuote: "“We went to Teacher Training College to prepare for our careers. Little did we know that, somewhere between the lessons and the dreams, life was preparing one of its most beautiful lessons for us. The lesson was love. The blessing from God. And the journey ahead is forever.”",
        storySignoff: "Forever yours, Thelma ❤️ Guillaume",
        closingHeading: "The lesson was love.<br>The blessing from God.",
        footerTagline: "THE LESSON WAS LOVE • THE BLESSING FROM GOD",
        footerCopy: "Thelma & Guillaume • #TG2026 • 28 November 2026 • Limbe"
    },

    dates: {
        displayRange: "28 NOVEMBER 2026",
        countdownTarget: "2026-11-28T10:00:00+01:00",
        countdownDisplayDate: "SATURDAY, 28 NOVEMBER 2026 • 10:00 AM",
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
            id: "civil-wedding",
            number: "01",
            dayBadge: "SATURDAY • 28 NOVEMBER 2026",
            type: "CIVIL WEDDING, BLESSINGS & RECEPTION",
            title: "Civil Signing, Nuptial Blessings & Grand Reception",
            dateDisplay: "Saturday, 28th November 2026",
            timeDisplay: "10:00 AM (Civil) • 12:00 PM (Blessings followed immediately by Reception)",
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
                    place: "Followed immediately by the Grand Reception"
                },
                {
                    time: "Followed Immediately",
                    activity: "Grand Reception",
                    place: "Ace Event Center, Mile 2 Limbe"
                }
            ],
            calendar: {
                title: "Thelma & Guillaume (#TG2026) — Civil Wedding, Blessings & Reception",
                startIso: "2026-11-28T10:00:00",
                endIso: "2026-11-28T22:00:00",
                location: "Limbe 1 Council (10:00 AM) & Ace Event Center, Mile 2 Limbe (After 12:00 PM Blessings)",
                description: "Thelma & Guillaume (#TG2026) — 10:00 AM: Civil Signing at Limbe 1 Council | 12:00 PM: Nuptial Blessings followed immediately by the Grand Reception at Ace Event Center, Mile 2 Limbe."
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
