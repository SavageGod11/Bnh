import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'nsfw',
            description: 'shows nsfw section',
            category: 'nsfw',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['9']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/help/nsfw.mp4'
        ]
        let bnh = n[Math.floor(Math.random() * n.length)]
if (!(await this.client.getGroupData(M.from)).nsfw)
			return void M.reply(
				`Don't be a pervert, bra! This is not an NSFW group.`
			);
        const mn=`
Greetings ${M.sender.username}
    You requested ${this.client.config.prefix}nsfw command
 \`\`\`👾Available commands👾\`\`\`
   
        *━━━━❰ Nsfw🔞 ❱━━━━*
 *- ${this.client.config.prefix}bj*
 *- ${this.client.config.prefix}darkjoke*
 *- ${this.client.config.prefix}lesbian*
 *- ${this.client.config.prefix}nneko*
 *- ${this.client.config.prefix}nwaifu*
 *- ${this.client.config.prefix}trap*

  *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*`
        return void this.client.sendMessage(M.from, { url: bnh }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
