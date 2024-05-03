// from https://antoinevastel.com/bot/2020/05/10/express-middleware-bot.html

const knownBotsToPattern = new Map([
    ['Amazonbot', /Amazonbot/],
    ['ImagesiftBot', /ImagesiftBot/],
    ['DataForSeoBot', /DataForSeoBot/]
]);

// Detect if an incoming request belongs to a bot using its user agent
function isKnownBotUserAgent(userAgent) {
    for (const [knownBot, pattern] of knownBotsToPattern.entries()) {
        if (userAgent.match(pattern)) {
            return {
                isBot: true,
                nameBot: knownBot
            }
        }
    }

    return {
        isBot: false
    }
}


export default function isBot(req, res, next) {
    req.botInfo = isKnownBotUserAgent(req.header('User-Agent'));
    if (req.botInfo.isBot) {
        res.status(403);
    }
    next();
}
