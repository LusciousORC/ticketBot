module.exports = {
    name: "unban",
    category: "Moderation",
    description: "Unbans a user",
    usage: "unban <@user> [reason]",
    code: `
    
    
    $unban[$guildID;$get[user];if[$messageSlice[1]==;None;$messageSlice[1]]]
    $title[1;User Unbanned!]
    $description[1;> <@$authorID> unbanned **$userTag[$get[user]]**
    > Reason: $if[$messageSlice[1]==;\`No reason provided\`;\`$messageSlice[1]\`]]
    $color[1;Red]
    $onlyIf[$get[user]!=$ownerID;{newEmbed:{description:You can't unban the server owner}{color:Red}}]
    $onlyIf[$get[user]!=;{newEmbed:{description:You need to provide a user ID}{color:Red}}]
    $onlyIf[$isBanned[$guildID;$get[user]]==true;{newEmbed:{description:The user is already unbanned!}{color:Red}}]
    $onlyIf[$hasPerms[$guildID;$authorID;banmembers]==true;{newEmbed:{title:Critical Error}{description:You don't have the following permission: \`BAN\`}{color:Red}}]
    $onlyClientPerms[banmembers;{newEmbed:{title:Critical Error}{description:I don't have the following permission: \`BAN\`}{color:Red}}]
    $onlyIf[$message!=;{newEmbed:{description:Too few arguments.\n Usage:\n \`$getGuildVar[prefix]$commandName <user> [reason]\`}{color:Red}}]
    $suppressErrors[{newEmbed:{description:> Try this: \n > \`$getGuildVar[prefix]unban <user>\`}{color:Red}{footer:Unban with reason -> $getGuildVar[prefix]Unban <user> / \`reason\`}}]
    $textSplit[$message;/]
    $let[user;$findUser[$message[1]]]
    
    `
    
   }
   //    $unban[$guildID;$get[user];if[$messageSlice[1]==;None;$messageSlice[1]]]