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

const registerUserForEvent = async (eventId, email) => {
    const url = `https://test-api.codingbootcamp.cz/api/3b3c9ea1/events/${eventId}/register`;

    const requestData = {
        email: email
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    };

    try {
        const response = await fetch(url, requestOptions);
        const responseData = await response.json();

        if (response.ok) {
            // Registration successful
            console.log('Registration successful');
            console.log(responseData); // Optional: Log response data
        } else if (response.status === 404) {
            // Event not found
            console.error('Event not found');
            console.log(responseData); // Optional: Log response data
        } else if (response.status === 422) {
            // Validation failed
            console.error('Validation failed');
            console.log(responseData); // Optional: Log response data
        } else {
            // Handle other errors
            console.error('Error:', responseData.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

// Example usage:
const eventId = 3; // Replace with the actual event ID
const userEmail = 'nedeljkodanilovic@gmail.com'; // Replace with the user's email
registerUserForEvent(eventId, userEmail);