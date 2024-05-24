module.exports = [
    /*{
        name: "setrole",
        code: `
		$setGuildVar[ticketrole;$findRole[$message[1];$guildID]]

		$author[1;$username;$userAvatar[$authorID]]
		$description[1;The <@&$findRole[$message[1];$guildID]> role has been set as the ticket moderation role.]
		$color[1;Random]

		$onlyIf[$roleExists[$findRole[$message[1];$guildID];$guildID]==true;The chosen role was not found or does not exist]

		$onlyIf[$message[1]!=;You must mention or write the name/ID of the role you want to set as the ticket moderator.]
		
		$onlyPerms[manageroles;You do not have the necessary permissions to set the ticket role]

`
    }*/,{
        name: "panel",
        description: "Creates and sends a tickets panel to a channel",
        aliases: "p",
        usage: "panel [#channel]",
        code: `
		$author[1;Ticket Panel]
		$description[1;Click on the 🎫 button to create a new ticket.]
		$color[1;Random]
		$addButton[1;Create Ticket;success;createticket;false;🎫]


		$onlyPerms[manageguild;{newEmbed:{description:You do not have the necessary permissions to set the ticket panel}{color:Red}}]
`
    },{
        name: "createticket",
        type: "interaction",
    	prototype: "button",
        code: `
		$interactionReply[Ticket created successfully <#$get[id]>;;;;everyone;true]		

		$channelSendMessage[$get[id];{newEmbed:{author:$username:$userAvatar[$authorID]}{description:Ticket created by: $username}{color:Green}}{actionRow:{button:Close Ticket:danger:closeticket:false}{button:Claim:primary:claim:false:🖐}{button:Transcript:primary:transcript:false:📖}};returnID?]

		$modifyChannelPerms[$get[id];$guildID;-viewchannel]

		$modifyChannelPerms[$get[id];$authorID;+viewchannel;+sendmessages]
		

		$let[id;$createChannel[$guildID;ticket-$username;Text;true;$channelCategoryID[$channelID]]]
`
    },{
        name: "closeticket",
        type: "interaction",
    	prototype: "button",
        code: `
		$deleteChannel[$channelID]
		$wait[10s]

		$interactionReply[The ticket will be closed in 10 seconds;;;;everyone;false]
`
    }
    ,{
        name: "claim",
        type: "interaction",
        prototype: "button",
        code:` 

        $interactionFollowUp[;{newEmbed:{title:Claimed Ticket}{description:Your ticket will be handled by <@$authorID> }{color:Green}{timestamp}}]

        $interactionUpdate[;{newEmbed:{author:$username:$userAvatar[$authorID]}{description:Ticket created by: $username}{color:Green}};{actionRow:{button:Close Ticket:danger:closeticket:false}{button:Transcript:primary:transcript:false:📖}}]
        $onlyPerms[manageguild;{newEmbed:{description:You do not have the necessary permissions to claim this ticket}{color:Red}} {interaction}{ephemeral}]

        `
    },{
        name: "transcript",
        description: "Gets the content of the channel ",
        aliases: "trans",
        usage: "transcript [#channel]",
        code:` 
        $description[1;Transcript from channel: <#$findChannel[$message;true]>]
        $transcript[$findChannel[$message;true]]
        $onlyPerms[manageguild;{newEmbed:{description:You do not have the necessary permissions to download transcript}{color:Red}} ]
        
        `
    }
];