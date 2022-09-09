const { MessageEmbed } = require('discord.js');

const good = new MessageEmbed()
.setColor('GREEN')
.setAuthor('Success')
.setFooter('XinPanda', 'https://cdn.discordapp.com/attachments/897209823500861462/1015924957005480027/a_453dc99701569898375412b6a5093cc3.gif');

const bad = new MessageEmbed()
.setColor('RED')
.setAuthor('Error')
.setFooter('XinPanda', 'https://cdn.discordapp.com/attachments/897209823500861462/1015924957005480027/a_453dc99701569898375412b6a5093cc3.gif');

function success(cosmetic, message) {
  good.setDescription(`**${cosmetic.data.name}** [**${cosmetic.data.id}**] ha sido equipado.`);
  message.channel.send(good);
}

function success2(cosmetic, message) {
  good.setDescription(`**${cosmetic}** ha sido equipado.`);
  message.channel.send(good);
}

function success3(content, message) {
  good.setDescription(content);
  message.channel.send(good);
}

function error(cosmetic, message) {
  bad.setDescription(`No ${cosmetic} se encontró utilizando los parámetros actuales.`);
  message.channel.send(bad);
}

function error2(content, message) {
  bad.setDescription(content);
  message.channel.send(bad);
}

module.exports = {
  success: success,
  success2: success2,
  success3: success3,
  error: error,
  error2: error2
}
