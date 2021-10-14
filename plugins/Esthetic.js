/* Copyright (C) 2021 ws virus Fucker.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
VIRUS - FUCKER
*/

const Stefanie = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const Ln = "Esthetic Photos"
const axios = require('axios');
const Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('amazone');


if (Config.WORKTYPE == 'public') {

    Stefanie.addCommand({ pattern: 'esthetic ?(.*)', fromMe: false, desc: Lang.WALL }, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/estetikpic?apikey=THEVINDUapi`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

}

else if (Config.WORKTYPE == 'private') {

    Stefanie.addCommand({ pattern: 'esthetic ?(.*)', fromMe: true, desc: Lang.WALL }, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/estetikpic?apikey=THEVINDUapi`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

}
