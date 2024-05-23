module.exports = ({
    name:"slowmode",
    category:"Moderation",
    usage:"slowmode <time> [channel]",
    description: "Sets slow mode in a channel",
    code:`
    $slowmode[$message[1];$channelID]
    $description[1;> Slowmode is set to <#$channelID> with interval \`$message[1]\`]
    $footer[1;To delete slowmode type: $getGuildVar[prefix]slowmode 0s <channel> ]
    $color[1;Green]
    $onlyIf[$message[1]!=;{newEmbed:{description:Try#COLON# **$getGuildVar[prefix]$commandName \`<time>\` \`#channel\`**}{footer:To delete slowmode type -> $getGuildVar[prefix]slowmode 0s <channel>}{color:FF0000}}]
    $onlyIf[$message[1]<=6h;{newEmbed:{description:> You can't set more than 6 hours}{color:FF0000}]
    $onlyIf[$stringEndsWith[$message[1];s]==true||$stringEndsWith[$message[1];m]==true||$stringEndsWith[$message[1];h]==true;{newEmbed:{description:Wrong syntax!\nUsage#COLON#\n\`$getGuildVar[prefix]$commandName <time> (1s, 5m, 1h)\`}{color:Red}}]
    $onlyIf[$hasPerms[$guildID;$authorID;managechannels]==true;{newEmbed:{title:Critical Error}{description:You don't have permission: \`MANAGE_CHANNELS\`}{color:Red}}]
    $onlyIf[$hasPerms[$guildID;$clientID;managechannels]==true;{newEmbed:{title:Critical Error}{description:I don't have permission: \`MANAGE_CHANNELS\`}{color:Red}}]
    
    `})