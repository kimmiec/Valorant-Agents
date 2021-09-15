// connect api
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
                    $li.html(`${agent.displayName}`)
                    // grab specific agent ids
                    $li.attr('id', agent.uuid) 
                    // add it to the list
                    agentList.append($li)
                    //add the agent names to the dictionary
                    agentDictionary[agent.displayName] = '1';
                    
                    // click on the agent names and have it grab their specific info
                    $li.on('click',() => (specificAgent(agent.uuid)))
                    
                    // grab the agents description
                    const $div = $('<div>')
                    $div.html(`${agent.description}`)
                    // display description 
                    agentList.append($div)

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
            abilityData = info.data[0].abilities;
            // console.log(abilityData);
        // create loop to grab abilities
            abilityData.forEach(ability => {
                const $div = $('<div>')
                $div.html(ability.displayName)
                console.log($div)
            })
        }
    )
}

getAbilities()
