$.ajax({
    url: 'https://valorant-api.com/v1/agents'
}).then(
    (data) => {
        console.log(data.displayName);
    },
    (error) => {
        console.log('Oops, something went wrong:', error);
    }
)