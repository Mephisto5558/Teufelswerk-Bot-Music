module.exports = {
  name: 'clearqueue',
  aliases: [],
  description: 'Clear all songs from the queue',
  permissions: { client: ['EmbedLinks'], user: [] },
  cooldowns: { client: 0, user: 5000 },
  category: 'Music',
  needsVC: true,
  needsQueue: true,

  run: async (player, _, { functions }) => {
    await player.queue.delete();
    functions.editPlayer(player, 'Queue cleared', { asEmbed: true });
  }
}