/*module.exports = [{
    name: "panel",
    description: "Tickets panel",
    usage: "<prefix>panel <#channel>",
    code: `
    $channelSendMessage[$findChannel[$message;true];{newEmbed:{title:Support Ticket}{description:To create a ticket react with 🎫}}{actionRow:{button:Button:primary:newTicket:false:🎫}}]
    `
},{
    name: "newTicket",
    type: "interaction",
    prototype: "button",
    code:` $interactionReply[;{newEmbed:{title:Ticket}{description:Opened new ticket#COLON# <#$findChannel[ticket-$username]>}{color:Green}{footer:$username:$userAvatar}{timestamp}};;;;true;]
    $modifyChannelPerms[$findChannel[ticket-$username];$authorID;+viewchannel;+sendmessages]
    $newTicket[ticket-$username;{newEmbed:{title:Hello $username!}{description:Thank you for contacting with support.
        Describe your issue and wait for a response.}{footer:$username:$userAvatar}{timestamp}}{actionRow:{button:Button:danger:closeTicket:false:🔒}{button:Transcript:primary:transcript:false:📖}};$channelCategoryID;false;Error!]
        
        $modifyChannelPerms[$get[id];$guildID;-viewchannel]
        $modifyChannelPerms[$get[id];$authorID;+viewchannel;+sendmessages]
        $let[id;$findChannel[ticket-$username]]
        $setUserVar[channel;$channelID]
    `
},{
    name: "closeTicket",
    type: "interaction",
    prototype: "button",
    code:` $interactionReply[Closing ticket;;;;;true;]
    
    $closeTicket[Something gone wrong!]
    `
},{
    name: "transcript",
    type: "interaction",
    prototype: "button",
    code:` 
    
    $interactionReply[ok;;;$transcript[$channelID];;true;]
    `
}]*/