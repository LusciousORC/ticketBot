module.exports = {
    name: "ban",
    category: "Moderation",
    description: "Bans a user",
    usage: "ban <@user> [reason]",
    code: `
    
    $ban[$guildID;$findMember[$message[1];false];0;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No reason provided];false;$messageSlice[1]]]


    $title[1;User banned!]
    $description[<@$replaceText[$replaceText[$findMember[$message[1];false];<@;];>;]> has been **banned by <@$authorID>**
    Reason: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;\`No reason provided\`];false;\`$messageSlice[1]\`] 
    $color[1;Red]

       
    $onlyIf[$rolePosition[$userHighestRole[$clientID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true]]];{newEmbed:{description:I can't ban someone who is higher than me}{color:Red}}]
    $onlyIf[$rolePosition[$userHighestRole[$authorID]]<$rolePosition[$userHighestRole[$findMember[$message[1];true]]];{newEmbed:{description:I can't ban someone who is higher than you}{color:Red}}]

    $onlyIf[$findMember[$message[1]]!=$ownerID;{newEmbed:{description:You can't ban owner}{color:Red}}]
    $onlyIf[$findMember[$message[1]]!=$clientID;{newEmbed:{description:I can't ban myself}{color:Red}}]
    
    $onlyIf[$findMember[$message[1]]!=$authorID;{newEmbed:{description:You cannot ban yourself!}{color:Red}}]
    $onlyIf[$isBanned[$guildID;$findMember[$message[1]]]==false;{newEmbed:{description:This user is banned from this server}{color:Red}}] 
    
    $onlyIf[$message[1]!=;{newEmbed:{description:Too few arguments.\n Usage:\n \`$getGuildVar[prefix]$commandName <user> [reason]\`}{color:Red}}]
    $onlyIf[$hasPerms[$guildID;$authorID;banmembers]==true;{newEmbed:{title:Critical Error}{description:You don't have permision: \`BAN\`}{color:Red}}]
    $onlyIf[$hasPerms[$guildID;$clientID;banmembers]==true;{newEmbed:{title:Critical Error}{description:I don't have permision: \`BAN\`}{color:Red}}]


    

    `
   }