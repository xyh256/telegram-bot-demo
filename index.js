const TelegramBot = require('node-telegram-bot-api');

// 从Telegram Bot Father获取的机器人令牌
// const token = '7475600573:AAFcr_aUTEasnOLFQ_zp3V1QO89pCliTe2Q';
const token = '2200644244:AAHQ7GUsVqf_wDLsyQrSqJ_6dcgOodoU3P8';

// 创建一个新的机器人实例
const bot = new TelegramBot(token, {polling: true,testEnvironment:true});

// 当收到消息时触发
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    // 回复收到的消息
    bot.sendMessage(chatId, '您发送了一条消息：' + msg.text);
});
