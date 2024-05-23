module.exports = {
    name: "user-info",
    category: "Info",
    aliases: ['user', 'whois'],
    description: "User's information",
    usage: "user-info [user]",
    code: `$author[$userTag[$get[user]]]
    $thumbnail[1;$userAvatar[$get[user]]]
  $description[<@$get[user]>]
  $addField[1;Joined; <t:$truncate[$math[$memberJoinDate[$get[user];$guildID]/1000]]> (<t:$truncate[$math[$memberJoinDate[$get[user];$guildID]/1000]]:R>)
  $addField[1;Highest role;$userHighestRole[$get[user];$guildID;mention]]
  $addField[1;Roles; $userRoles[$get[user];$guildID;mention;,]
  $addField[1;Account created; <t:$truncate[$math[$creationDate[$get[user];Ms]/1000]]> (<t:$truncate[$math[$creationDate[$get[user];Ms]/1000]]:R>)
  
  $addField[1;ID;$get[user]]
  $color[1;$userRoleColor[$get[user]]]
  $footer[$formatDate[$dateStamp;LLLL]]
  $let[user;$findMember[$message]]
  
  `
   }