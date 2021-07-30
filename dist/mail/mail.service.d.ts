import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '../config/config.service';
import { SentMessageInfo } from 'nodemailer';
export interface SendMailData {
    to: string;
    from: string;
    subject: string;
    template: string;
    context: Record<string, any>;
}
export declare class MailService {
    private readonly config;
    private readonly mailerService;
    constructor(config: ConfigService, mailerService: MailerService);
    sendMail(data: SendMailData): Promise<SentMessageInfo>;
}
