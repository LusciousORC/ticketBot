const { AoiClient, LoadCommands } = require("aoi.js");
require('dotenv').config()

const client = new AoiClient({
  token: process.env.TOKEN,
  prefix: ["$getGuildVar[prefix]","<@!$clientID>","<@$clientID>"],
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "b2abc7b2af90961bfc1eea561c2dce99",
  }
});
require('./variables')(client);
const loader = new LoadCommands(client);
loader.load(client.cmd, "src/commands")




client.functionManager.createFunction({
  name: "$transcript",
  type: "djs",
  code: async d => {
    const discordTranscripts = require("discord-html-transcripts");
    const data = d.util.aoiFunc(d);
    const [channel = d.message.channel.id, logchannel = d.message.channel.id] = data.inside.splits;
    let channelid = await d.util.getChannel(d, channel);
    let loggingid = await d.util.getChannel(d, logchannel);
    const attachment = await discordTranscripts.createTranscript(channelid, {
      filename: "transcript.html",
      saveImages: true,
      poweredBy: false,
    });

    const f = await loggingid.send({
      files: [attachment],
    });

    data.result = f;
    return {
      code: d.util.setCode(data),
    };
  }
});