const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'level',
  description: 'Sets the level of the client.',
  category: 'general',
  aliases: ['l'],
  usage: '<level>',
  example: '1000',

  run: async (client, bot, message, args, getCosmetic) => {
    const level = args[0];
    if (!level || isNaN(level)) return error2('❌│ Proporcione un nivel; el nivel no es un número.', message);

    bot.party.me.setLevel(parseInt(level));
    success3(`✅│ El nivel se ha establecido en **${level}**.`, message);
  }
}