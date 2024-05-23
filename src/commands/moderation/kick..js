module.exports = {
    name: "kick",
    category: "Moderation",
    description: "Kicks a user",
    usage: "kick <@user> [reason]",
    code: `
    
    
    $kick[$guildID;$get[user];$if[$noMentionMessage==;Not privided;$noMentionMessage] ]  
  
  
  
    $title[1;User kicked!]
    $description[1;> <@$authorID> kicked **$userTag[$get[user]]**
    > Powód: $if[$noMentionMessage==;\`Not provided\`;\`$noMentionMessage\`]    
    $color[1;Red]
    $onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$get[user]]];{newEmbed:{description:I can't kick someone who is higher than me}{color:Red}}]
    $onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$get[user]]];{newEmbed:{description:I can't kick someone who is higher than you}{color:Red}}]
    $onlyIf[$get[user]!=$ownerID;{newEmbed:{description:U can't kick owner}{color:Red}}]
    $onlyIf[$get[user]!=$authorID;{newEmbed:{description:Too few arguments.\n Usage:\n \`$getGuildVar[prefix]$commandName <user> [reason]\`}{color:Red}}]
    $onlyIf[$get[user]!=$clientID;{newEmbed:{description:I can't kick myself}{color:Red}}]
    $onlyIf[$memberExists[$get[user];$guildID]==true;{newEmbed:{description:User not found}{color:Red}}]
    $onlyIf[$hasPerms[$guildID;$authorID;kickmembers]==true;{newEmbed:{title:Critical Error}{description:You don't have permision: \`KICK\`}{color:Red}}]
    $onlyIf[$hasPerms[$guildID;$clientID;kickmembers]==true;{newEmbed:{title:Critical Error}{description:I don't have permision: \`KICK\`}{color:Red}}]]
    $textSplit[$message;/]
    $let[user;$findUser[$message[1]]]
  
    `
   }