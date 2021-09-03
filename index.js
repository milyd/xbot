const { Client, Attachment, Message, MessageEmbed } = require("discord.js");
const client = new Client();
const Canvas = require("canvas")
const { MessageAttachment } = require("discord.js")
//let wszyscyUserzy = client.guilds.cache.get('847547693782007858').members.cache.filter(m => !m.user.bot).size; //wersja bez botów
client.on('ready', () => {
let wszyscyUserzy = client.guilds.cache.get('847547693782007858').members.cache.size;
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
      activity: {
          type: "WATCHING",
          name: `X World | ${wszyscyUserzy} osób`,
      },
  });
}); client.on('message', async msg => {
  if (msg.content === '*ping') {
    console.log(`${msg.author.tag} wykonał(a): *ping`)
    msg.channel.send(':badminton: Pong! ms');
  }

if (msg.content === '*banner') {
    console.log(`${msg.author.tag} wykonał(a): *banner`)
    const canvas = Canvas.createCanvas(650, 250)
    const ctx = canvas.getContext("2d")

    ctx.font = "35px Whitney"
    ctx.fillStyle = "white"
    ctx.fillText(msg.member.displayName, 275, 75)

    ctx.beginPath()
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    const avatar = await Canvas.loadImage(msg.member.user.displayAvatarURL({ format: "jpg" }))

    ctx.drawImage(avatar, 25, 25, 200, 200)
    
    const attachment = new MessageAttachment(canvas.toBuffer(), "userimg.jpg")

    msg.channel.send("Oto Twój banner:", attachment)
    // const exampleEmbed = new MessageEmbed()
    // .setColor('#0099ff')
    // .setTitle('${msg.author.tag} wykonał(a):')
    // .setAuthor('Logi X Bot', 'https://cdn.discordapp.com/icons/847547693782007858/a_2eb15e8b7ca7ea167618132ddc7a3f61.webp?size=128')
    // .setDescription('*banner')
    // .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    // .addFields(
    //     { name: 'Regular field title', value: 'Some value here' },
    //     { name: '\u200B', value: '\u200B' },
    //     { name: 'Inline field title', value: 'Some value here', inline: true },
    //     { name: 'Inline field title', value: 'Some value here', inline: true },
    // )
    // .addField('Inline field title', 'Some value here', true)
    // .setImage('https://i.imgur.com/wSTFkRM.png')
    // .setTimestamp()
    // .setFooter('X Bot by SleepyPikachu', 'https://cdn.discordapp.com/avatars/678218230883549216/a_0ead24af99169227d512b8533fa83db7.webp?size=128');

  }
});

client.login('ej no kurde');
