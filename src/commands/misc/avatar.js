module.exports = {
    name: "avatar",
    category: "Misc",
    description: "User's profile image",
    usage: "avatar [user]",
      $if: "old",
    code:`$if[$message!=server]
    $title[1;Avatar $username[$findmember[$message;true]]]
$description[1;**Links**\n[PNG]($replaceText[$userAvatar[$findmember[$message;true]];webp;png]) | [WEBP]($replaceText[$userAvatar[$findmember[$message;true]];png;webp]) | [JPEG]($replaceText[$replaceText[$userAvatar[$findmember[$message;true]];webp;jpeg];png;jpeg])]    $description[1;**Links**\n[PNG]($replaceText[$userAvatar[$findmember[$message;true]];webp;png]) | [WEBP]($replaceText[$userAvatar[$findmember[$message;true]];png;webp]) | [JPEG]($replaceText[$replaceText[$userAvatar[$findmember[$message;true]];webp;jpeg];png;jpeg])]
    $image[1;$userAvatar[$findmember[$message;true]]]
    $color[1;Blue]
    $elseif[$message==server]
    $title[1;Avatar $guildname]
    $addfield[1;Avatar;[PNG]($replaceText[$guildicon;webp;png]) | [WEBP]($replaceText[$guildicon;png;webp]) | [JPEG]($replaceText[$replaceText[$guildicon;webp;jpeg];png;jpeg]);false]
    $image[1;$guildicon]
    $color[1;Blue]
    $endelseif
    $endif
    

    `}
