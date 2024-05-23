module.exports = {
 
    name: "poll",
    category: "Misc",
    description: "Conducts a poll or survey",
    usage: "poll <message> [channel]",
    code: `
    $useChannel[$get[channel]]
    $title[1;Poll Time!]
   $addClientReactions[👍;👎;❔]
   $description[1;$if[$checkContains[$message;$findChannel[$message]]==true;$messageSlice[1];$message]] 
   $footer[1;👍 Yes - 👎 - No - ❔ Maybe]
   $color[1;Random]
   $argsCheck[>0;{newEmbed:{description:> Try this:\n> \`$getGuildVar[prefix]poll <your message>\`}{color:Red}}]
   $onlyPerms[administrator;{newEmbed:{description:> You don't have \`ADMIN\` perms !}{color:Red}}]
   $let[channel;$findChannel[$mentionedChannels[1];true]]

   `
   }
   