function TrackClick(children) {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  fetch('http://localhost:3000/writeToDocument', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: `${formattedTime} - clicked on ${children}\n`
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
};


export default TrackClick;
