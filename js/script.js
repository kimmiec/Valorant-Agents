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
                    $li.html(agent.displayName)
                    // grab specific agent ids
                    $li.attr('id', agent.uuid) 
                    // add it to the list
                    agentList.append($li)
                    //add the agent names to the dictionary
                    agentDictionary[agent.displayName] = '1';
                    
                    // click on the agent names and have it grab their specific info
                    $li.on('click',() => (specificAgent(agent.uuid)))
                    
// ======================== grab the agents description =================
                    const $div = $('<div>')
                    $div.html(`${agent.description}`)
                    // display description 
                    agentList.append($div)
        
// ===================== grab agent abilities/description ==========================
                    agentData.forEach((agentAbility) => {
                        if(agentAbility && agentAbility.abilities) {
                            agentAbility.abilities.forEach((ability) => { 
                                if(agentAbility.slot !== 'passive') {
                                console.log(ability.slot)
                                // ^would it be better to have all the slot names appear? or just the passive?
                                console.log(ability.displayName)
                                console.log(ability.description)
                                }
                            })
                        }
                        // ability.data.abilities[0].displayName
                        // console.log('hi')
                    })


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
// function getAbilities () {
//     $.ajax({
//         url: 'https://valorant-api.com/v1/agents'
//     }).then(
//         (info) => {
//             abilityData = info.data.abilities;
//             // ability = info.data[0].abilities; 
//             // ^ this shows ONLY breachs' abilities
//             // console.log(abilityData);

//             const abilityList = $('.ability-list')
//             // const abilityDictionary = {};
//         // create loop to grab abilities
//             abilityData.forEach((ability) => {
//                 if ()
//                 ability.forEach(valAbility => {
                    
//                 const $div = $('<div>')
//                 $div.html(abilityData.displayName)
//                 console.log(abilityData)
//                 // display for now 
//                 abilityList.append($div)
//                 // only displays^ when using element value
//                 console.log($div)
//                 // ^works, shows all the agents' abilities but written in a weird way     
//                 })
//             })
//         }
//     )
// }

// getAbilities()
