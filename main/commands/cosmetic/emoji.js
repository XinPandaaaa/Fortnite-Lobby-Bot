const { success, error, error2 } = require('../../utils/functions.js');

module.exports = {
  name: 'emoji',
  description: 'Equipa cualquier emoji por su nombre usando parámetros.',
  category: 'cosmetic',
  usage: '<emoji>',
  example: '1 HP',

  run: async (client, bot, message, args, getCosmetic) => {
    if (!args[0]) return error2('❌│ Proporcione un emoji.', message);
    const cosmetic = await getCosmetic(args.slice(0).join(' '), 'AthenaEmoji');

    if (cosmetic.status === 404) return error('❌│ emoji', message);

    bot.party.me.setEmoji(cosmetic.data.id);
    success(cosmetic, message);
  }
}