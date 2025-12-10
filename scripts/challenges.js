

// UPDAT
const contentSchedule = [
        {
            date: '2025-12-15',
            content: '<h2>Special Offer!</h2><p>Today only, get 20% off all items.</p>'
        },
        {
            date: '2025-12-16',
            content: '<h2>Webinar Announcement</h2><p>Join our live webinar tomorrow at 10 AM.</p>'
        },
        {
            date: '2025-12-25',
            content: '<h2>Merry Christmas!</h2><p>Wishing you a joyful holiday season.</p>'
        }
    ];

    // The standard message to show before any content is scheduled
    const standardMessage = '<h2>Coming Soon!</h2><p>Check back later for exciting new content.</p>';
    
    // The default message if no content is scheduled for the current day
    const defaultMessage = '<h2>Welcome!</h2><p>Thanks for visiting. Explore our site to learn more.</p>';

    // --- LOGIC ---

    const contentDiv = document.getElementById('content-container');

    // Get today's date and set the time to midnight for accurate comparison
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // Get the first date from your schedule
    const firstDate = new Date(contentSchedule[0].date);
    // The date from the string needs a time zone adjustment to match midnight local time
    firstDate.setMinutes(firstDate.getMinutes() + firstDate.getTimezoneOffset());


    // 2. Check if the current date is before the first scheduled date
    if (currentDate < firstDate) {
        contentDiv.innerHTML = standardMessage;
    } else {
        // 3. Find the content for the current day
        const todaysContent = contentSchedule.find(item => {
            const itemDate = new Date(item.date);
            // Adjust for time zone to ensure it's compared to local midnight
            itemDate.setMinutes(itemDate.getMinutes() + itemDate.getTimezoneOffset());
            return itemDate.getTime() === currentDate.getTime();
        });

        // 4. Display the content if found, otherwise show a default message
        if (todaysContent) {
            contentDiv.innerHTML = todaysContent.content;
        } else {
            contentDiv.innerHTML = defaultMessage;
        }
    }