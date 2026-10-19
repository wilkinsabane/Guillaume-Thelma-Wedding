/**
 * ====================================================================
 * WEDDING FEATURES ENGINE (Option A + WhatsApp RSVP + Calendar Sync)
 * ====================================================================
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
        // Formats as YYYYMMDDTHHMMSS
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
            'PRODID:-//Wedding Invitation//EN',
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
        link.setAttribute('download', `${eventId}-${cal.title.replace(/[^a-zA-Z0-9]/g, '_')}.ics`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Expose helpers globally
    window.openGoogleCalendar = openGoogleCalendar;
    window.downloadIcsCalendar = downloadIcsCalendar;

    /* ====================================================
       2. WHATSAPP RSVP DISPATCHER
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

            const selectedEvents = Array.from(document.querySelectorAll('input[name="event"]:checked'))
                .map(input => {
                    const label = input.closest('.event-option')?.querySelector('span')?.textContent || input.value;
                    return label.replace(/\s+/g, ' ').trim();
                });

            if (selectedEvents.length === 0 && attendance === 'yes') {
                alert('Please select at least one celebration you plan to attend.');
                return;
            }

            const attendanceLabel = attendance === 'yes'
                ? 'Joyfully Accepts (Will Attend) 🎉'
                : 'Regretfully Declines (Sending Love)';

            const eventsList = selectedEvents.length > 0 ? selectedEvents.join(', ') : 'N/A';

            // Construct structured WhatsApp message
            const lines = [
                `💌 *WEDDING RSVP - GUILLAUME & THELMA*`,
                `------------------------------------`,
                `👤 *Guest Name:* ${guestName}`,
                `✨ *Attendance:* ${attendanceLabel}`,
                `📅 *Celebrations:* ${eventsList}`,
                `👥 *Number of Guests:* ${guestCount}`,
            ];

            if (guestMessage) {
                lines.push(`💬 *Message:* "${guestMessage}"`);
            }
            lines.push(`------------------------------------`);
            lines.push(`Sent via wedding invitation website.`);

            const fullText = lines.join('\n');
            const targetPhone = config.rsvp?.whatsappNumber || '237670000000';
            const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(fullText)}`;

            // Hide form and display custom confirmation card with direct action buttons
            rsvpForm.style.display = 'none';

            if (rsvpSuccess) {
                rsvpSuccess.innerHTML = `
                    <div class="success-mark">✓</div>
                    <h3>RSVP Prepared!</h3>
                    <p style="margin-bottom: 20px;">
                        Thank you, <strong>${guestName}</strong>! Please tap below to deliver your confirmation directly to Guillaume & Thelma via WhatsApp.
                    </p>
                    <div class="wa-action-buttons">
                        <a href="${waUrl}" target="_blank" class="wa-send-btn" id="waOpenBtn">
                            <span class="wa-icon">💬</span> OPEN IN WHATSAPP
                        </a>
                        <button type="button" class="wa-copy-btn" id="waCopyBtn">
                            📋 COPY RSVP TEXT
                        </button>
                    </div>
                    <div id="copyFeedback" class="copy-feedback" style="display: none; margin-top: 12px; font-size: 11px; letter-spacing: 1px; color: #d4af37;">
                        ✓ Text copied to clipboard!
                    </div>
                `;
                rsvpSuccess.classList.add('show');

                const copyBtn = document.getElementById('waCopyBtn');
                if (copyBtn) {
                    copyBtn.addEventListener('click', function () {
                        navigator.clipboard.writeText(fullText).then(function () {
                            const feedback = document.getElementById('copyFeedback');
                            if (feedback) feedback.style.display = 'block';
                            setTimeout(() => { if (feedback) feedback.style.display = 'none'; }, 3000);
                        });
                    });
                }
            }

            // Automatically open WhatsApp in a new tab/app after short delay
            setTimeout(() => {
                window.open(waUrl, '_blank', 'noopener,noreferrer');
            }, 300);
        });
    }

    /* ====================================================
       3. STICKY THUMB NAVIGATION
    ==================================================== */

    function initStickyNavigation() {
        if (document.querySelector('.sticky-thumb-nav')) return;

        const nav = document.createElement('nav');
        nav.className = 'sticky-thumb-nav';
        nav.setAttribute('aria-label', 'Quick Navigation');

        nav.innerHTML = `
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

        // Show/hide sticky nav based on opening screen
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
       INITIALIZE
    ==================================================== */

    document.addEventListener('DOMContentLoaded', function () {
        initWhatsAppRsvp();
        initStickyNavigation();
    });

})();
