const {SlashCommandBuilder} = require(`@discordjs/builders`);
const {Permissions, MessageActionRow, MessageButton, Message} = require(`discord.js`);

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

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId(`toggleGroupWatch`)
                .setLabel(`Group Watch`)
                .setStyle(`PRIMARY`)
            ); 
            
            
            await interaction.channel.send({content: `Click here to add or remove your role`, components: [row] })
            await interaction.reply({content: `sucess!`, ephemeral:true});

    },
};