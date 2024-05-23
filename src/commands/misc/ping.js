module.exports = {
    name: "ping",
    aliases: ['p'],
    $if: "old",
    description: "Checks ping",
    category: "Main",
    code: `$if[$ping<50]
$author[1;Bot Ping;$userAvatar[$clientid]]
$image[1;https://somlicab.sirv.com/New%20Projects.png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44]
$color[1;Green]
 
$elseif[$ping<250]
$author[1;Bot ping;$userAvatar[$clientid]]
$image[1;https://somlicab.sirv.com/New%20Project%20(2).png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44]
$color[1;Yellow]
$endelseif
 
 
$elseif[$ping<350]
$author[1;Bot ping;$userAvatar[$clientid]]
$image[1;https://somlicab.sirv.com/New%20Project%20(1).png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44]
$color[1;Orange]
$endelseif
 
 
$elseif[$ping<600]
$author[1;Bot ping;$userAvatar[$clientid]]
$image[1;https://somlicab.sirv.com/New%20Project.png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44]
$color[1;Red]
$endelseif
$endif

    `
}




