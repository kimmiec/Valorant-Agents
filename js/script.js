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

            const agentList = $('#agent-order')
            //create an empty object
            const agentDictionary = {};
            console.log(agentData[16])
            //write a loop to grab all the agents name
            agentData.forEach((agent,a) => {
                //if the agent isnt in the dictionary, add to list
                if (a !== 5) {
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

                    // click on the agent names and have it grab their specific info
                    $li.on('click', () => (specificAgent(agent.uuid)))
    
    // ======================== grab the agents description ===========================
                    const $div = $('<div>')
                    $div.html(`${agent.description}`)

    // ===================== grab agent abilities/description ==========================
                    agent.abilities.forEach((ability) => {
                        
                    })

                }

            });
        }

    );

}

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
            // display ability icons
            const icon1 = $('#iconImg1')
            const icon2 = $('#iconImg2')
            const icon3 = $('#iconImg3')
            const icon4 = $('#iconImg4')
            const icon5 = $('#iconImg5')
            icon5.attr('src', ' ')
            icon5.attr('alt', ' ')
            icon5.addClass('hidden')
            let iconArray = [icon1, icon2, icon3, icon4, icon5];
            
            abilities.forEach((ability,p) => {
                iconArray[p].attr('src', ability.displayIcon)
                iconArray[p].attr('alt', ability.displayName)
                // only remove class if there is an display icon otherwise leave it hidden
                if(ability.displayIcon) iconArray[p].removeClass('hidden')
                console.log(ability.displayIcon)
            })


            // display ability description in modal
            const desc1 = $('#ability1')
            const desc2 = $('#ability2')
            const desc3 = $('#grenade')
            const desc4 = $('#ult')
            const desc5 = $('#pass')
            desc5.text(' ')

            let descArray = [desc1, desc2, desc3, desc4, desc5];

            abilities.forEach((ability,d) => {
                descArray[d].text(ability.description)
            })

            // display agent image
            const agentImg = $('#agentImg')
            agentImg.attr('src', info.data.fullPortrait)
            agentImg.attr('alt', info.data.displayName)
            agentImg.removeClass('hidden')

            // ability button
            const abilityBtn = $('#abilityBtn')
            abilityBtn.removeClass('hidden')

            //stupid ass description column that decided to break
            const desc = $('.card-panel2')
            desc.removeClass('hidden')
        
        }

    )

}

getAgents()

// ============== modal pop up for abilities description =============

// get modal element
let modal = $('#smallModal');
// get open modal button
let abilityBtn = $('#abilityBtn');
// get close button
let closeBtn = $('.closeBtn');

// another attempt at open click
abilityBtn.on('click', () => {
    $('.modal, .modal-content').addClass('active');
    console.log('hi')
});

// close click
closeBtn.on('click', () => {
    $('.modal, .modal-content').removeClass('active');
    console.log('hi')
});

