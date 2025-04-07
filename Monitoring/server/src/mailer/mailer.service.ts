import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailerService {
  private readonly transporter: nodemailer.Transporter;
  private readonly from: string;

  constructor(private configService: ConfigService) {
    this.from = configService.get<string>("EMAIL_FROM");
    this.transporter = nodemailer.createTransport({
      host: configService.get<string>("EMAIL_HOST"),
      port: configService.get<number>("EMAIL_PORT"),
      secure: false,
      auth: {
        user: configService.get<string>("EMAIL_USER"),
        pass: configService.get<string>("EMAIL_PASS"),
      },
      tls: { rejectUnauthorized: false },
    });
  }

  async sendMail({ to, html, subject }: IMailerSend) {
    await this.transporter.sendMail({
      from: this.from,
      to,
      html,
      subject: `Веб-приложение Monitoring.`,
    });
    return {
      message: `Сообщение доставлено: ${to}`,
    };
  }
}
