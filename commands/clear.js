module.exports = {
    name: 'clear',
    description: 'Clears messages',
    execute(message, args){
        if(!args[0]) return message.reply("Enter the ammount of numbers needed to clear the channel of!");
        if(isNaN(args[0])) return message.reply('That is not a number ' + {member} + ' !!!');

        if(args[0] > 100) return message.reply('That is to high of a number you cant do more than 100!!');
        if(args[0] < 1) return message.reply('Are you trying to delete negative messages? come on smh');


            message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}
