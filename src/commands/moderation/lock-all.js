module.exports = [{
    name: "lock-all",
category: "Moderation",
description: "Locks all channels",
    code: `
$forEachGuildChannel[1;{};L1;]
$author[1;$userTag;$userAvatar[$authorID]]
$title[1;Lock All]
$description[1;All channels have been locked]
$color[1;Blue]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$onlyIf[$hasPerms[$guildID;$authorID;managechannels]==true;{newEmbed:{title:Critical Error}{description:You need permission: \`MANAGE_CHANNELS\`}{color:Red}}]

`}, {
    name: "L1",
    type: "awaited",
    code: `
$modifyChannelPerms[$channelID;$guildID;-sendmessages]
$onlyIf[$hasPerms[$guildID;$authorID;managechannels]==true;{newEmbed:{title:Critical Error}{description:You need permission: \`MANAGE_CHANNELS\`}{color:Red}}]

`}, {
    name: "unlock-all",
category: "Moderation",
description: "Unocks all channels", 
    code: `
$forEachGuildChannel[1;{};L2;]
$author[1;$userTag;$userAvatar[$authorID]]
$title[1;Unlock All]
$description[1;All channels have been unlocked]
$color[1;Blue]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$onlyIf[$hasPerms[$guildID;$authorID;managechannels]==true;{newEmbed:{title:Critical Error}{description:You need permission: \`MANAGE_CHANNELS\`}{color:Red}}]

`}, {
    name: "L2",
    type: "awaited",
    code: `
$modifyChannelPerms[$channelID;$guildID;/sendmessages]
$onlyIf[$hasPerms[$guildID;$authorID;managechannels]==true;{newEmbed:{title:Critical Error}{description:You need permission: \`MANAGE_CHANNELS\`}{color:Red}}]

`}]