const loadData = async () => {
    const response = await fetch('https://test-api.codingbootcamp.cz/api/3b3c9ea1/events');
    const eventsList = await response.json();
    console.log(eventsList);

    const eventDetails = [];
    eventsList.forEach(element => {
        eventDetails.push({ id: element.id, name: element.name });
    });

    return eventDetails;
}

loadData().then(eventDetails => {
    console.log(eventDetails);
    // Do something with the eventDetails array
});

const saveTheEvent = async (event) => {
    
    const url = 'https://test-api.codingbootcamp.cz/api/3b3c9ea1/events';

    // Prepare the data to be sent in the request body
    const eventData = {
        id: event.id,
        name: event.name,
        date: event.date,
        description: event.description,
        image_url: event.image_url
       
    };

    // Configure the request options
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // Add any additional headers here
        },
        body: JSON.stringify(eventData)
    };

    try {
        // Send the POST request
        const response = await fetch(url, options);

        if (!response.ok) {
            // Handle the case where the request was not successful
            throw new Error('Failed to save the event');
        }

        // Event saved successfully
        console.log('Event saved successfully');
    } catch (error) {
        // Handle errors
        console.error('Error saving the event:', error.message);
    }
};


const event1 = {
    
    name: 'Event Name',
    date: '2024-02-10',
    description: 'Event description',
    image_url: 'https://example.com/image.jpg'
    
};

saveTheEvent(event1);