module.exports = {
    name: "clear",
    category:"Moderation",
aliases: ['purge'],
usage: "clear <amount>",
description:"Clear command",
code: `

$author[1;Clear;https://media.giphy.com/media/1jOoLUdkTYQhetVky1/giphy.gif
$description[1;> **Deleted** $noMentionMessage **last messages by** <@$authorID>] 

$color[1;Green]
$cooldown[10s;<@$authorID> **Wait %time% before you use this command again**]
$footer[1;Cleared by: $username[$authorID]#$discriminator[$authorID]]
$suppressErrors[1;**Try** \`$getGuildVar[prefix]clear <amount>\`]
$clear[$channelID;$message[1]]
$onlyIf[$noMentionMessage<=100;{newEmbed:{description: > **You can delete 2-99 messages**}{color:Red}}]
$onlyIf[$noMentionMessage>=2;{newEmbed:{description: > **You can delete 2-99 messages**}{color:Red}}]
$onlyIf[$isNumber[$noMentionMessage]==true;{newEmbed:{description:> Enter the number of messages to be deleted\n> **Try:** \`$getGuildVar[prefix]clear <amount>\`}{color:Red}}]
$onlyIf[$message[1]!=;{newEmbed:{description:> Enter the number of messages to be deleted\n> **Try:** \`$getGuildVar[prefix]clear <amount>\`}{color:Red}}]]
$onlyIf[$hasPerms[$guildID;$clientID;managemessages]==true;{newEmbed:{title:Critical error}{description:**I don't have permission: \`MANAGE_MESSAGES\`**}{color:Red}}]
$onlyIf[$hasPerms[$guildID;$authorID;managemessages]==true;{newEmbed:{title:Critic error}{description:**You don't have permission: \`MANAGE_MESSAGES\`**}{color:Red}}]

`
}