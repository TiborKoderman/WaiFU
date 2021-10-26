const {SlashCommandBuilder} = require(`@discordjs/builders`);
const {Permissions, MessageActionRow, MessageButton, MessageSelectMenu} = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`createselfrole`)
        .setDescription(`Creates a popup for self roles`),
    async execute(interaction){
        // if(!interaction.permissions.has([Permissions.FLAGS.ADMINISTRATOR]))
        // {
        //     await interaction.reply({content:`No permission!`, ephemeral: true});
        //     return;
        // }

        let allRoles = [];
        //console.log(interaction.guild.roles.cache)
        interaction.guild.roles.cache.forEach(element => {
            console.log(element)
            if(!element.tags || !element.tags.botId){
                console.log({label: element.name, value: element.id})
                allRoles.push({label: element.name, value: element.id})
            }
        });
        console.log(allRoles);

        const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                        .setCustomId(`SelfRole`)
                        .setPlaceholder(`Nothing selected`)
                        .addOptions(allRoles)
                )
                
            
            
            //await interaction.channel.send({content: `Click here to add or remove your role`, components: [row], ephemeral:true })
            await interaction.reply({content: `Click here to select the role`, components: [row], ephemeral:true })
            //await interaction.reply({content: `sucess!`, ephemeral:true});

    },
};