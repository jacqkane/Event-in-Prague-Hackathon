export const formPost = async (event_id, data) => {
    const url = `https://test-api.codingbootcamp.cz/api/c4c1138b/events/${event_id}/registrations`
    const myResponse = await fetch(url, {
        "method": "POST",
        "body": JSON.stringify(data),
        "headers": {
          'Content-Type': 'application/json'},
        })
        const myUsableResponse = await myResponse.json()
        console.log(myUsableResponse)
}
