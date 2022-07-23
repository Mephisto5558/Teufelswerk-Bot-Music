const { Command } = require('reconlx');
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = new Command({
  name: 'join',
  aliases: [],
  description: 'Joins the voice channel you are in',
  permissions: { client: [], user: [] },
  cooldowns: { client: 0, user: 3000 },
  category: 'Music',

  run: async (player, { member, guild }) => {
    if (member.voice.channelId == guild.me.voice.channelId) return client.functions.editPlayer(player, "I'm already in your voice channel!", true);

    joinVoiceChannel({
      channelId: member.voice.channelId,
      guildId: guild.id,
      adapterCreator: guild.voiceAdapterCreator
    });

   client.functions.editPlayer(player, 'I joined your voice channel.', true);
  }
})