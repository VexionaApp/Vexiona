const Discord = require('discord.js')
const bot = new Discord.Client();

const token = 'NjgyNjQ4MDcyNTk3Mjc0NjM4.Xlq0eg.58qURYmdSkG89nAnZ_079troSQE';
const PREFIX = '!';

bot.on('ready', () => {
    console.log('this bot is now active!');
})

bot.on('message', message =>{
    let args= message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'help':
            message.channel.sendMessage('Here is a list of the commands you can use. The commmands can be written in lowercase, no need to use uppercase.')
            message.channel.sendMessage('!add class (enter class name for example: druid,paladin,warrior etc. (!add druid))')
            message.channel.sendMessage('!add role (enter your main role example : tank,healer or dps. (!add tank))')
            break;
        case 'info':
            message.channel.sendMessage('Vexiona is still being programmed, please be patient while we come with updates on a daily basis.')
            break;
        case 'clear':
            if(!args[1]) return message.reply('Error please define arg')
            message.channel.bulkDelete(args[1]);
            message.author.send('greetings, I have deleted the messages as requested');
            break;

    }
})
bot.on('message', message =>{
    if(message.content.toLowerCase().startsWith("!add"))
    {
        var args = message.content.toLowerCase().split(" ");
        console.log(args);
        if(args[1] === 'druid')
            {
            var role = message.guild.roles.find('name', 'Druid');
            console.log('Role found!');
            message.member.addRole(role.id);
            message.author.send('You have been added to the druid role');
            }
        else if(args[1] === 'paladin')
            {
            var role = message.guild.roles.find('name', 'Paladin');
            console.log('Role found!');
            message.member.addRole(role.id);
            message.author.send('You have been added to the paladin role');
            }
        else if(args[1] === 'warrior')
            {
            var role = message.guild.roles.find('name', 'Warrior');
            console.log('Role found!');
            message.member.addRole(role.id);
            message.author.send('You have been added to the warrior role');
            }
    }
})


//THIS MUST BE THIS WAY
bot.login(process.env.BOT_TOKEN);
bot.login(token);

