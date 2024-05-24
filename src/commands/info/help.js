module.exports = [{
  name: "help", 
  $if: "old",
  description: "Command info and guidance",
  code: `
  $if[$message==;]
  $reply[$messageID;false]
  $author[1;TicketBot help menu;$userAvatar[$clientID]]
  $description[1;> • Prefix: \`$getGuildVar[prefix]\`
  >   • Total commands: \`$commandsCount\`
  >   • Developer: [$userTag[$clientOwnerIds]](https://discord.com/users/$clientOwnerIds)
  >   • Type: \`$getGuildVar[prefix]$commandName < command >\` for more information
  > 
  >  **Command Usage** 
  > • <> - required ex, $getGuildVar[prefix]ban <user> 
  > • [] - optional ex. $getGuildVar[prefix]ban <user> [reason]
  ]
 
  $footer[1;Called up $usertag[$authorID]]
  $color[1;Orange]
  $addSelectMenu[1;string;menu;Select category;1;1;false;Moderation commands:List of all commands for moderating the server:helpValue0:false:<#COLON#admin#COLON#1040680731803930776>;Tickets:List of commands for tickets:helpValue1:false:<#COLON#info#COLON#1040680817048956948>;Information commands:Providing important information to users:helpValue2:false:<#COLON#level#COLON#1040680884384305162>;Misc:View all other commands.:helpValue3:false:<#COLON#welcome#COLON#1040681050541662280>]
  $addButton[2;Invite;link;https://discord.com/oauth2/authorize?client_id=813745606241026078&permissions=1788854921326&scope=bot+applications.commands;false]
  
  $else
  $if[$commandInfo[$message[1];name]!=;]
  $reply[$messageID;false]
  $author[$toLocaleUpperCase[$commandInfo[$message[1];name]] Command information.;$userAvatar[$clientID]]
  $addField[**:scroll: Usage:** ; $if[$commandInfo[$message[1];usage]!=;] 
  \`$commandInfo[$message[1];usage]\` $else\`Not found!\` $endif]
  $addField[**:gear: Aliases:** ;$if[$commandInfo[$message[1];aliases]!=;] 
  \`$commandInfo[$message[1];aliases]\` $else \`Not found!\` $endif]
  $addField[**:books: Description:** ;$if[$commandInfo[$message[1];description]!=;] 
  \`$commandInfo[$message[1];description]\` $else \`Not found!\` $endif]
  $addField[**🏷️ Command Name:** ;\`$commandInfo[$message[1];name]\`]
  $footer[1;Type $getGuildVar[prefix]help to get more commands;$userAvatar[$authorID]]
  $addTimestamp
  $else
      $reply[$messageID;false]
      $title[1;Error]
      $description[1;Command not found: \`$message[1]\`]
      $color[1;Red]
  $endif
$endif



  `
  //    $addButton[2;Page;link;https://xtraction.top/;false]
},{
  type : 'interaction',
  prototype : 'selectMenu',
code: `
$interactionUpdate[;{newEmbed:{description:\`$getGuildVar[prefix]ban\` - $commandInfo[ban;description]
\`$getGuildVar[prefix]clear\` - $commandInfo[clear;description]
\`$getGuildVar[prefix]kick\` - $commandInfo[kick;description]
\`$getGuildVar[prefix]lock-all\` - $commandInfo[lock-all;description]
\`$getGuildVar[prefix]unlock-all\` - $commandInfo[unlock-all;description]
\`$getGuildVar[prefix]lock\` - $commandInfo[lock;description]
\`$getGuildVar[prefix]unlock\` - $commandInfo[unlock;description]
\`$getGuildVar[prefix]slowmode\` - $commandInfo[slowmode;description]
\`$getGuildVar[prefix]unban\` - $commandInfo[unban;description]
}{footer:Called up $usertag[$authorID]}{author:• Moderation Commands:$userAvatar[$clientID]}{color:Orange}};
{actionRow:
{selectMenu:menu:Select category:1:1:false:
  {stringInput:Tickets:helpValue1:List of commands for tickets:false:<#COLON#level#COLON#1040680884384305162>}
  {stringInput:Information commands:helpValue2:Providing important information to users:false:<#COLON#info#COLON#1040680817048956948>}
  {stringInput:Misc:helpValue3:View all other commands:false:<#COLON#welcome#COLON#1040681050541662280>}
}
}]

$onlyIf[$interactionData[values[0]]==helpValue0;]

`
}
/*$getGuildVar[prefix]bd\` - uruchamia AntiBadWord system
\`$getGuildVar[prefix]add-bw\` - dodaje zakazane słowo
\`$getGuildVar[prefix]banned-word-list\` - wyświetla zakazane słowa
\`$getGuildVar[prefix]remove-bw\` - usuwa zakazane słowa z listy*/
,{
  type : 'interaction',
  prototype : 'selectMenu',
code: `
$interactionUpdate[;{newEmbed:{description:\`$getGuildVar[prefix]panel\` - $commandInfo[panel;description]
\`$getGuildVar[prefix]transcript\` - $commandInfo[transcript;description]
}{footer:Called $usertag[$authorID]}
{author:• Tickets Commands:$userAvatar[$clientID]}
{color:Orange}};
{actionRow: {selectMenu:menu:Select Category:1:1:false:
  {stringInput:Moderation Commands:helpValue0:List of all commands to moderate the server:false:<#COLON#admin#COLON#1040680731803930776>}
  {stringInput:Information commands:helpValue2:Providing important information to users:false:<#COLON#info#COLON#1040680817048956948>}
  {stringInput:Misc:helpValue3:View all other commands:false:<#COLON#welcome#COLON#1040681050541662280>}
}}]

$onlyIf[$interactionData[values[0]]==helpValue1;]

`
},{type : 'interaction',
prototype : 'selectMenu',
code: `
$interactionUpdate[;{newEmbed:{description:\`$getGuildVar[prefix]botinfo\` - $commandInfo[botinfo;description]
\`$getGuildVar[prefix]help\`  - $commandInfo[help;description]
\`$getGuildVar[prefix]serverinfo\` - $commandInfo[serverinfo;description]
\`$getGuildVar[prefix]user-info\` - $commandInfo[user-info;description]}{footer:Called $usertag[$authorID]}{author:• Information commands:$userAvatar[$clientID] }{color:Orange}};
{actionRow:{selectMenu:menu:Select category:1:1:false:
  {stringInput:Moderation Commands:helpValue0:List of all commands to moderate the server:false:<#COLON#admin#COLON#1040680731803930776>}
  {stringInput:Tickets:helpValue1:List of commands for tickets:false:<#COLON#level#COLON#1040680884384305162>}
  {stringInput:Misc:helpValue3:View all other commands:false:<#COLON#welcome#COLON#1040681050541662280>}
}}]

$onlyIf[$interactionData[values[0]]==helpValue2;]

`
},{
  type : 'interaction',
  prototype : 'selectMenu',
code: `
$interactionUpdate[;{newEmbed:{description:
\`$getGuildVar[prefix]avatar\` - $commandInfo[avatar;description]
\`$getGuildVar[prefix]ping\` - $commandInfo[ping;description]
\`$getGuildVar[prefix]poll\` - $commandInfo[poll;description]
\`$getGuildVar[prefix]prefix\` - $commandInfo[prefix;description]
}{footer:Called $usertag[$authorID]}{author:• Misc commands:$userAvatar[$clientID]}{color:Orange}};{actionRow:{selectMenu:menu:Select category:1:1:false:
  {stringInput:Moderation Commands:helpValue0:List of all commands to moderate the server:false:<#COLON#admin#COLON#1040680731803930776>}
  {stringInput:Tickets:helpValue1:List of commands for tickets:false:<#COLON#level#COLON#1040680884384305162>}
  {stringInput:Information commands:helpValue3:Providing important information to users:false:<#COLON#info#COLON#1040680817048956948>}

  }}]

$onlyIf[$interactionData[values[0]]==helpValue3;]

`
}]