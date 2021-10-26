module.exports = {
    name: `interactionCreate`,
    async execute(interaction) {
        if (!interaction.isSelectMenu()) return;

        //console.log(interaction);
        //console.log(`in`);

        switch (interaction.customId) {
            case `createselfrole`:
                //const role = interaction.guild.roles.cache.find(r=>r.name==interaction.);
                const role = interaction.member.roles.cache.some(r => r.id === role.id);
                console.log(role)
                //console.log(interaction.member.roles.cache.some(r => r.id === role.id));
                //console.log(interaction.member.roles.some(role => role.name === 'Group Watch'));
                if(!interaction.member.roles.cache.some(r => r.id === role.value)){
                    interaction.member.roles.add(role);
                    await interaction.reply({content:`given role`, ephemeral: true});
                }
                else{
                    interaction.member.roles.remove(role);
                    await interaction.reply({content:`removed role`, ephemeral: true});
                }

                //console.log(`giving role to: ${interaction.user.username}#${interaction.user.discriminator}`);
                //await interaction.reply({content:`given role`, ephermal:true});
                //await interaction.message.channel.send("button green")
                break;
        
            default:
                break;
        }


    },
};