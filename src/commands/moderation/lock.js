module.exports = [{
    name: "lock",
    category: "Moderation",
    description: "Locks a channel",
    usage: "lock <@role> <@user>",
    code:`
    
    $modifyChannelPerms[$channelID;$mentionedRoles[1];-sendmessages]
    $description[1;Channel: **<#$channelID>**, locked for **<@&$mentionedRoles[1]> role**]
    
    $argsCheck[>1;{newEmbed:{description:Try#COLON# **$getGuildVar[prefix]$commandName \`@role\` \`#channel\`**}{color:Red}}]
    $onlyIf[$hasPerms[$guildID;$authorID;managechannels]==true;{newEmbed:{title:Critical Error}{description:You need permission: \`MANAGE_CHANNELS\`}{color:Red}}]
    $onlyIf[$hasPerms[$guildID;$clientID;managechannels]==true;{newEmbed:{title:Critical Error}{description:I need permission: \`MANAGE_CHANNELS\`}{color:Red}}]
    

    `},{
        name: "unlock",
        category: "Moderation",
        description: "Unlocks a channel",
        usage: "unlock <@role> <@user>",
        code:`
       
        $modifyChannelPerms[$channelID;$mentionedRoles[1];+sendmessages]
        $description[1;Channel: **<#$channelID>**, unlocked for **<@&$mentionedRoles[1]> role**]
        
        $argsCheck[>1;{newEmbed:{description:Try#COLON# **$getGuildVar[prefix]$commandName \`@role\` \`#channel\`**}{color:Red}}]
        $onlyIf[$hasPerms[$guildID;$authorID;managechannels]==true;{newEmbed:{title:Critical Error}{description:You need permission: \`MANAGE_CHANNELS\`}{color:Red}}]
        $onlyIf[$hasPerms[$guildID;$clientID;managechannels]==true;{newEmbed:{title:Critical Error}{description:I need permission: \`MANAGE_CHANNELS\`}{color:Red}}]
        
        `
    }]