/**
 * ====================================================================
 * WEDDING FEATURES ENGINE — THELMA & GUILLAUME (TG2026)
 * ====================================================================
 * Handles:
 * 1. Google Calendar & Apple/Outlook (.ics) 1-Tap Sync
 * 2. Dual-Line WhatsApp RSVP Dispatcher (+237683532487 / +237674663789)
 * 3. Interactive Love Story Reader Toggle
 * 4. Mobile Sticky Thumb-Zone Navigation
 */

(function () {
    'use strict';

    const config = window.WEDDING_CONFIG || {};

    /* ====================================================
       1. CALENDAR SYNC (Google Calendar & .ics Download)
    ==================================================== */

    function formatIsoToCalendarUtc(isoString) {
        const d = new Date(isoString);
        return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    }

    function formatIsoToLocalIcs(isoString) {
        return isoString.replace(/[-:]/g, '').split('.')[0];
    }

    function openGoogleCalendar(eventId) {
        const eventData = (config.events || []).find(e => e.id === eventId);
        if (!eventData || !eventData.calendar) return;

        const cal = eventData.calendar;
        const start = formatIsoToCalendarUtc(cal.startIso);
        const end = formatIsoToCalendarUtc(cal.endIso);

        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE` +
            `&text=${encodeURIComponent(cal.title)}` +
            `&dates=${start}/${end}` +
            `&details=${encodeURIComponent(cal.description)}` +
            `&location=${encodeURIComponent(cal.location)}`;

        window.open(url, '_blank', 'noopener,noreferrer');
    }

    function downloadIcsCalendar(eventId) {
        const eventData = (config.events || []).find(e => e.id === eventId);
        if (!eventData || !eventData.calendar) return;

        const cal = eventData.calendar;
        const start = formatIsoToLocalIcs(cal.startIso);
        const end = formatIsoToLocalIcs(cal.endIso);

        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Thelma and Guillaume Wedding TG2026//EN',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            'BEGIN:VEVENT',
            `SUMMARY:${cal.title}`,
            `DESCRIPTION:${cal.description}`,
            `LOCATION:${cal.location}`,
            `DTSTART:${start}`,
            `DTEND:${end}`,
            'STATUS:CONFIRMED',
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n');

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', `Thelma-Guillaume-TG2026-${eventId}.ics`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    window.openGoogleCalendar = openGoogleCalendar;
    window.downloadIcsCalendar = downloadIcsCalendar;

    /* ====================================================
       2. INTERACTIVE LOVE STORY READER
    ==================================================== */

    function initStoryReader() {
        const toggleBtn = document.getElementById('storyToggleBtn');
        const expandableStory = document.getElementById('storyExpandable');

        if (!toggleBtn || !expandableStory) return;

        toggleBtn.addEventListener('click', function () {
            const isExpanded = expandableStory.classList.toggle('expanded');
            toggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
            toggleBtn.innerHTML = isExpanded
                ? '<span>Read Less</span> <i class="toggle-arrow">↑</i>'
                : '<span>Continue Reading Full Story</span> <i class="toggle-arrow">↓</i>';

            if (!isExpanded) {
                document.getElementById('story')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    /* ====================================================
       3. DUAL-NUMBER WHATSAPP RSVP DISPATCHER
    ==================================================== */

    function initWhatsAppRsvp() {
        const rsvpForm = document.getElementById('rsvpForm');
        const rsvpSuccess = document.getElementById('rsvpSuccess');
        if (!rsvpForm) return;

        rsvpForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const guestName = (document.getElementById('guestName')?.value || '').trim();
            const attendanceEl = document.querySelector('input[name="attendance"]:checked');
            const attendance = attendanceEl ? attendanceEl.value : 'yes';
            const guestCount = document.getElementById('guestCount')?.value || '1';
            const guestMessage = (document.getElementById('guestMessage')?.value || '').trim();
            const selectedRecipientEl = document.querySelector('input[name="rsvpRecipient"]:checked');
            const primaryPhone = selectedRecipientEl ? selectedRecipientEl.value : '237683532487';

            const selectedEvents = Array.from(document.querySelectorAll('input[name="event"]:checked'))
                .map(input => {
                    const titleEl = input.closest('.event-option')?.querySelector('.event-opt-title');
                    return titleEl ? titleEl.textContent.trim() : input.value;
                });

            if (selectedEvents.length === 0 && attendance === 'yes') {
                alert('Please select at least one celebration you will attend.');
                return;
            }

            const attendanceLabel = attendance === 'yes'
                ? 'Joyfully Accepts (Will Attend) 🥂✨'
                : 'Regretfully Declines (Sending Warm Wishes) 🤍';

            const eventsList = selectedEvents.length > 0 ? selectedEvents.join(' • ') : 'None selected';

            const lines = [
                `❤️ *WEDDING RSVP — THELMA & GUILLAUME (#TG2026)*`,
                `━━━━━━━━━━━━━━━━━━━━`,
                `👤 *Guest:* ${guestName}`,
                `✨ *Response:* ${attendanceLabel}`,
                `📅 *Events:* ${eventsList}`,
                `👥 *Guests:* ${guestCount}`,
            ];

            if (guestMessage) {
                lines.push(`💌 *Note:* "${guestMessage}"`);
            }
            lines.push(`━━━━━━━━━━━━━━━━━━━━`);
            lines.push(`📍 *27–28 Nov 2026 • Limbe • #TG2026*`);

            const fullText = lines.join('\n');
            const encodedText = encodeURIComponent(fullText);

            const waUrl1 = `https://wa.me/237683532487?text=${encodedText}`;
            const waUrl2 = `https://wa.me/237674663789?text=${encodedText}`;
            const chosenUrl = `https://wa.me/${primaryPhone}?text=${encodedText}`;

            rsvpForm.style.display = 'none';

            if (rsvpSuccess) {
                rsvpSuccess.innerHTML = `
                    <div class="success-mark">✓</div>
                    <h3>Your RSVP is Ready, ${guestName}!</h3>
                    <p class="rsvp-confirm-sub">
                        WhatsApp is opening to send your #TG2026 confirmation. You can also tap either RSVP line below:
                    </p>
                    <div class="wa-action-buttons">
                        <a href="${waUrl1}" target="_blank" rel="noopener noreferrer" class="wa-send-btn">
                            <span class="wa-icon">💬</span> SEND TO LINE 1 (+237 683 532 487)
                        </a>
                        <a href="${waUrl2}" target="_blank" rel="noopener noreferrer" class="wa-send-btn wa-send-btn-alt">
                            <span class="wa-icon">💬</span> SEND TO LINE 2 (+237 674 663 789)
                        </a>
                        <button type="button" class="wa-copy-btn" id="waCopyBtn">
                            📋 COPY RSVP MESSAGE
                        </button>
                        <button type="button" class="wa-reset-btn" id="waEditBtn">
                            ✎ Edit Response
                        </button>
                    </div>
                    <div id="copyFeedback" class="copy-feedback" style="display: none;">
                        ✓ RSVP details copied to clipboard!
                    </div>
                `;
                rsvpSuccess.classList.add('show');

                const copyBtn = document.getElementById('waCopyBtn');
                if (copyBtn) {
                    copyBtn.addEventListener('click', function () {
                        navigator.clipboard.writeText(fullText).then(function () {
                            const feedback = document.getElementById('copyFeedback');
                            if (feedback) feedback.style.display = 'block';
                            setTimeout(() => { if (feedback) feedback.style.display = 'none'; }, 3500);
                        });
                    });
                }

                const editBtn = document.getElementById('waEditBtn');
                if (editBtn) {
                    editBtn.addEventListener('click', function () {
                        rsvpSuccess.classList.remove('show');
                        rsvpForm.style.display = 'block';
                    });
                }
            }

            setTimeout(() => {
                window.open(chosenUrl, '_blank', 'noopener,noreferrer');
            }, 250);
        });
    }

    /* ====================================================
       4. STICKY THUMB NAVIGATION
    ==================================================== */

    function initStickyNavigation() {
        if (document.querySelector('.sticky-thumb-nav')) return;

        const nav = document.createElement('nav');
        nav.className = 'sticky-thumb-nav';
        nav.setAttribute('aria-label', 'Quick Wedding Navigation');

        nav.innerHTML = `
            <a href="#story" class="thumb-nav-item">
                <span class="thumb-icon">❤️</span>
                <span class="thumb-label">Our Story</span>
            </a>
            <a href="#schedule" class="thumb-nav-item">
                <span class="thumb-icon">📅</span>
                <span class="thumb-label">Schedule</span>
            </a>
            <a href="#locations" class="thumb-nav-item">
                <span class="thumb-icon">📍</span>
                <span class="thumb-label">Venues</span>
            </a>
            <a href="#gallery" class="thumb-nav-item">
                <span class="thumb-icon">✨</span>
                <span class="thumb-label">Photos</span>
            </a>
            <a href="#rsvp" class="thumb-nav-item thumb-nav-rsvp">
                <span class="thumb-icon">💌</span>
                <span class="thumb-label">RSVP</span>
            </a>
        `;

        document.body.appendChild(nav);

        const openingScreen = document.querySelector('.opening-screen');
        if (openingScreen && !openingScreen.classList.contains('hide')) {
            nav.classList.add('hidden-during-opening');
        }

        const openingBtn = document.querySelector('.opening-button');
        if (openingBtn) {
            openingBtn.addEventListener('click', function () {
                nav.classList.remove('hidden-during-opening');
            });
        }
    }

    /* ====================================================
       INITIALIZE ALL
    ==================================================== */

    document.addEventListener('DOMContentLoaded', function () {
        initStoryReader();
        initWhatsAppRsvp();
        initStickyNavigation();
    });

})();
