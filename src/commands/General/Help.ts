import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['h']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/help.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
        const mn=`
Greetings im a anime bot created by Savage God! 
 My usable commands are listed below
   
        *━━━━❰ Sections ❱━━━━*

```1 - Bots 🤖
2 - Config ⚙️
3- Dev 🌟
4 - Fun 💘
5 - Educative 👨‍🏫
6- General 🍀
7 - Media 🖤
8- Moderation 🧛‍♂️
9- Weeb 💀
10- Nsfw (18+)🍑 ```
 
         *━━━━❰ Details ❱━━━━*

*│- User: ${M.sender.username}*
*│- Name: Cole*
*│- Prefix: ${this.client.config.prefix}*
*│- Owner: Savage God*

          *━━━━❰ Bio ❱━━━━*
              
```My name is Cole and I am I anime bot that was
created by Savage God. Don't abuse me or there will be consequences.
Have a great day```
     
     
`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
