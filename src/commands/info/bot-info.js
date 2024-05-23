module.exports = {
    name:"botinfo",
    aliases: ["info","bot","bi","boti","Info","Bot","Bi","Boti"],
    description: "Informations about Bot",
    category: "Info",
    code:`
    
        
    
    
    $title[1;TicketBot - informations]
    $description[1;

        ・ID: **$ClientID**
        ・Owner: **$userTag[$clientOwnerIDs]**
        ・Server: **$guildCount**
        ・Ping: **$ping ms**
        ・UpTime: **$djsEval[Math.floor(client.uptime / 86400000);;true] Days, $djsEval[Math.floor(client.uptime / 3600000) % 24;;true] Hours, $djsEval[Math.floor(client.uptime / 60000) % 60;;true] minutes, $djsEval[Math.floor(client.uptime / 1000) % 60;;true] seconds**
        ・Commands: **$commandsCount**
        ]
    
    $thumbnail[1;$userAvatar[$clientID]]
    $footer[1;$formatDate[$dateStamp;LLLL]]
    $color[1;Orange]
    
    `
    }