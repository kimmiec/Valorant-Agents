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
            // console.log(agentData);
            // console.log(agentData[0].displayName)

            const agentList = $('#agent-order')
            //create an empty object
            const agentDictionary = {};
            //write a loop to grab all the agents name
            agentData.forEach(agent => {
                //if the agent isnt in the dictionary, add to list
                if (!agentDictionary[agent.displayName]) {
                    // create a list for agent names
                    const $li = $('<li>')
                    // display agent names
                    $li.html(agent.displayName)
                    // grab specific agent ids
                    $li.attr('id', agent.uuid)
                    $li.attr('class', 'names')
                    // add it to the list
                    agentList.append($li)
                    //add the agent names to the dictionary
                    agentDictionary[agent.displayName] = '1';

                    //hover over names and the description appears
                    // $li.addClass('desc')

                    // click on the agent names and have it grab their specific info
                    $li.on('click', () => (specificAgent(agent.uuid)))

                    // ======================== grab the agents description =================
                    const $div = $('<div>')
                    $div.html(`${agent.description}`)
                    // hide description
                    // $div.addClass('hide')
                    // display description 
                    // agentList.append($div)
                    // console.log(agent.abilities)
                    // ===================== grab agent abilities/description ==========================
                    agent.abilities.forEach((ability) => {

                        //  console.log(ability.slot)
                        // ^would it be better to have all the slot names appear? or just the passive?
                        // console.log(ability.displayName)
                        // console.log(ability.description)
                        // agentList.append($li)
                        // const $modal = $('#modal-description')
                        // $modal.html(agent.abilities)


                        // insert abilities into modal pop

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

// const agentInfo = $('.agent-info')
// create function to grab one specific agent and their info
function specificAgent(id) {
    $.ajax({
        url: `https://valorant-api.com/v1/agents/${id}`
    }).then(
        (info) => {
            // display agent name/description
            const agentInfo = $('.agent-info')
            const agentName = $('.agent-name')
            agentName.text(info.data.displayName)
            agentInfo.text(info.data.description)
            // display agent role/description
            const agentRole = $('.role')
            const roleDesc = $('.desc')
            agentRole.text(info.data.role.displayName)
            roleDesc.text(info.data.role.description)
            // display abilities
            const abilitiesTitle = $('.abilities')
            abilitiesTitle.text('Abilities')
            const abilities = info.data.abilities
            const abilityOne = $('.ability-1')
            // console.log(info.data.abilities[0].displayName)
            // abilityOne.text(info.data.abilities)
            const abilityTwo = $('.ability-2')
            const grenade = $('.grenade')
            const ult = $('.ultimate')
            const pass = $('.passive')
            pass.text(' ')
            let abilityArray = [abilityOne, abilityTwo, grenade, ult, pass];

            abilities.forEach((ability,i) => {
                abilityArray[i].text(ability.displayName)
                // console.log(ability,i)

            })



            // console.log(info.data.displayName);
        }

    )

}

getAgents()

// ============== modal pop up for abilities description =============

// get modal element
let modal = $('#smallModal');
// get open modal button
let abilityBtn = $('#abilities-list');
// get close button
let closeBtn = $('.closeBtn');

// listen for open click
abilityBtn.on('click', (openModal) => {
    modal.style.display = 'block';
    console.log('hi')
});
// listen for close click
closeBtn.on('click', (closeModal) => {
    // modal.style.display = 'none';
    console.log('hi')
});

// function to open modal
// function openModal() {
//     modal.style.display = 'block';
// }

// function to close modal
// function closeModal() {
//     modal.style.display = 'none';
// }

// create modal pop up clicks
                    // $li.on('click', () => {
                    //     $('.modal, .modal-content').addClass('active');
                    // })
                    // $('.close, .modal').on('click', () => {
                    //     $('.modal, .modal-content').removeClass('active');
                    // })