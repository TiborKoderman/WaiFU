module.exports = {
    name: `interactionCreate`,
    async execute(interaction) {
        if (!interaction.isButton() || interaction.customId!=`ConfirmButton`) return;


        switch (interaction.customId) {
            case `selfRole`:
                
                break;
        
            default:
                break;
        }
    },
};