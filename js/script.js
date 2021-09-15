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
const $agentsName = $('#agents-name')
//connect api
function getAgents() {
    // event.preventDefault();
    $.ajax({
        url: 'https://valorant-api.com/v1/agents'
    }).then(
        (info) => {
            // grab the agent name from the object
            agentData = info.data;
            console.log(agentData);
            // console.log(agentData[0].displayName)
            
            const agentList = $('#agent-order')
            //create an empty object
            const agentDictionary = {};
            //write a loop to grab all the agents name
            agentData.forEach(agent => {
                //if the agent isnt in the dictionary, add to list
                if(!agentDictionary[agent.displayName]) {
                    // create a list for agent names
                    const $li = $('<li>')
                    // display agent names
                $li.html(agent.displayName)
                // grab specific agent ids
                $li.attr('id', agent.uuid) 
                // add it to the list
                agentList.append($li)
                //add the agent names to the dictionary
                agentDictionary[agent.displayName] = '1';
                // grab the agents description
                // display description next to agents name
                // click on the agent names and have it grab their specific info
                $li.on('click',() => (specificAgent(agent.uuid)))

                }
            
                // console.log(agent.displayName)
            });
        }
        // (error) => {
        //     console.log('bad request: ', error);

        
        // }
    );
    
}


// create function to grab one specific agent and their info
function specificAgent(id) {
    $.ajax({
        url: `https://valorant-api.com/v1/agents/${id}`
    }).then(
        (info) => {
            console.log(info);
        }

    )

}


getAgents()

// grab abilities from the object

function getAbilities () {
    $.ajax({
        url: 'https://valorant-api.com/v1/agents'
    }).then(
        (info) => {
            abilityData = info.data
            console.log
        }
    )
}


// console.log(info)

// $.Each(info.data[0].displayName, function () {
//     console.log(info.data[0].displayName);
// });

// $agentsName.on('click', getInfo);
// console.log(getInfo)
