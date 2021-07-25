const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', ()=>{
    consol.log("봇이 준비되었습니다.")
})
client.on('message',msg=>{
    if(msg.content === '레온'){
        msg.reply('왜?')
    }
})

client.login('ODY4ODAwMTkyOTA2OTMyMjY0.YP07Ow.015kFkChXK3a_WX2VQPIbZPsmhg')



client.on('ready', ()=>{
    consol.log("봇이 준비되었습니다.")
})
client.on('message',msg=>{
    if(msg.content === '레온 바보'){
        msg.reply('난 바보가아니야!..')
    }
})

client.on('ready', ()=>{
    consol.log("봇이 준비되었습니다.")
})
client.on('message',msg=>{
    if(msg.content === '레온 안녕'){
        msg.reply('안녕!')
    }
})

client.on('ready', ()=>{
    consol.log("봇이 준비되었습니다.")
})
client.on('message',msg=>{
    if(msg.content === '레온 잘가'){
        msg.reply('보내지마!..')
    }
})

client.on('ready', ()=>{
    consol.log("봇이 준비되었습니다.")
})
client.on('message',msg=>{
    if(msg.content === '레온 도움말'){
        msg.reply('레온 , 레온 바보 , 레온 안녕 , 잘가')
    }
})