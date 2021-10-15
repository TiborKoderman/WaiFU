module.exports = {
    name: `interactionCreate`,
    async execute(interaction) {
        if (!interaction.isButton()) return;

        //console.log(interaction);
        //console.log(`in`);

        switch (interaction.customId) {
            case `toggleGroupWatch`:
                //const role = interaction.guild.roles.cache.find(r=>r.name==`Group Watch`);
                console.log(interaction.member.roles);
                //console.log(interaction.member.roles.some(role => role.name === 'Group Watch'));
                if(!interaction.user.roles.cache.some(role))
                    interaction.user.roles.add(role)
                else
                    interaction.user.roles.remove(role);
                console.log(`giving role to: ${interaction.user.username}#${interaction.user.discriminator}`);
                await interaction.reply({content:`given role`, ephermal:true});
                await interaction.message.channel.send("button green")
                break;
        
            default:
                break;
        }

        // if(interaction.customId === "toggleGroupWatch"){
        //     console.log(`in`);
        //     await interaction.reply();
        //     await interaction.message.channel.send("button green")
        // }
    },
};