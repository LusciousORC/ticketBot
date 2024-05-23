module.exports = {
    name: "serverinfo",
    category: "Info",
    aliases: ["serverprofile", "server", "server-info", "server-profile"],
    description: "Server details overview",
    code: `
    $author[1;$guildName[$guildID];$guildIcon]
    $description[1;\`MAIN\`
        ・ID: **$guildID**
        ・Server created at: <t:$truncate[$math[$creationDate[$guildID;Ms]/1000]]> ( <t:$truncate[$math[$creationDate[$guildID;Ms]/1000]]:R>)
        ・Owner: **<@$guildOwnerID> (679373559382016020)**
        \`NUMBERS\`
        ・Role amount: **$roleCount**
        ・Members: **$membersCount**
        ・Text channel: **$channelCount[$guildID;Text]**
        ・Voice channel: **$channelCount[$guildID;Voice]**
        ・Emoji: **$emojiCount[$guildID]** ]
    $thumbnail[1;$guildIcon[$guildID]]
   
    $color[1;Orange]
    `
    }