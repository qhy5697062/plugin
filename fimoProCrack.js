/***********************************

> ScriptName        fimo最新版解锁会员
> Author            @ddgksf2013
> WechatID          墨鱼手记
> TgChannel         https://t.me/ddgksf2021
> Contribute        https://t.me/ddgksf2013_bot
> Feedback          📮 ddgksf2013@163.com 📮
> UpdateTime        2023-04-13
> ScriptURL         fimoProCrack.js

[rewrite_local]

^https?:\/\/server\.zbisq\.com\/fimo-user url script-response-body fimoProCrack.js

[mitm] 

hostname = server.zbisq.com

***********************************/




var obj=JSON.parse($response.body);obj.subscribe={valid:!0,forever:1,endTime:4000000000},$done({body:JSON.stringify(obj)});