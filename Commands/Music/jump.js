module.exports = {
  name: 'jump',
  aliases: [],
  description: 'Jump to a song',
  permissions: { client: ['EmbedLinks'], user: [] },
  cooldowns: { client: 1000, user: 2000 },
  category: 'Music',
  needsVC: true,
  needsQueue: true,
  options: [{
    name: 'position',
    description: 'Jump to a Song Number in the queue',
    type: 'Number',
    required: true
  }],

  run: async (player, { options }, { functions }) => {
    await player.queue.jump(options.getNumber('position'));

    await functions.editPlayer(player, `Jumped to ${player.queue.songs[0].name}`, { asEmbed: true });
  }
}