const { success3, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'pasebatalla',
  description: 'Establece el nivel de Battlepass del Cliente.',
  category: 'general',
  aliases: ['bp'],
  usage: '<level>',
  example: '1000',

  run: async (client, bot, message, args, getCosmetic) => {
    const bp = args[0];
    if (!bp || isNaN(bp)) return error2('❌│ Proporcione un nivel; el nivel no es un número.', message);

    bot.party.me.setBattlepass(true, parseInt(bp), 100, 100);
    success3(`✅│ El nivel del pase de batalla se ha establecido en **${bp}**.`, message);
  }
}

