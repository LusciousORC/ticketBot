module.exports = {
    name: "prefix",
    aliases: ['changeprefix', 'setprefix'],
    usage: "prefix <prefix>",
    description: "Sets command prefix",
    category: "Misc",
    code: `$description[1;✅ Changed server prefix to \`$message\`]
    $color[1;Green]
    
    $setGuildVar[prefix;$message]
    $onlyIf[$message[1]!=;{newEmbed:{description:> \`You have to specify a message to change the server prefix!\`\n> Example - \`$getGuildVar[prefix]$commandName [prefix]\`}}]
    $onlyPerms[administrator;{newEmbed:{description:> **You need to have "ADMINISTRATOR" role.**}{color:Red}]


`
    }