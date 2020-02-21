const SSEServer = require('sse-fake-server');

let i = 0;

// Pass callback to SSEServer
SSEServer(client => {
    // Every 2 seconds send data to client

    setInterval(() => {
        i++;
        client.send(JSON.stringify({id: i, start: i, end: i + 1}))
    }, 5000);

  });
