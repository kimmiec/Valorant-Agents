// connect api

// const $mainContent = $('main')

// const $displayName = $('#agent-order');

// const $agentList = (list) => {

//     $.ajax({
//         url: 'https://valorant-api.com/v1/agents'
//     }).then(
//         (data) => {
// console.log(data);
// const $agents = $('#agents-order')
// $agents.addClass('agents')
// $mainContent.append($agents)

// list.displayName.forEach((names) => {

// const $li = $('<li>')
// $li.text(names)
// $agents.append($li)

// console.log($agentList)
// $.Each(data.displayName); {
//     $('#agent-order').append(`<li>${$agentList}</li>`);
// }
// console.log(data);   
// })

// $displayName.text(data.displayName);
// console.log($displayName)
// })

// (error) => {
//     console.log('Oops, something went wrong:', error);
// }
// }

// }

//connect api
function getData(event) {
    event.preventDefault();
    $.ajax({
        url: 'https://valorant-api.com/v1/agents'
    }).then(
        (info) => {
            // grab the agent name from the object
            agentData = info;
            // console.log(info.data[0].displayName)
            //write a loop to grab all the agents name
        },
        (error) => {
            console.log('bad request: ', error);

        
        }
    );
        
}

$.Each(info.data[0].displayName, function () {
    console.log(info.data[0].displayName);
});

getData();