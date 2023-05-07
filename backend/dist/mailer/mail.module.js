"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailModule = void 0;
const path = require("path");
const common_1 = require("@nestjs/common");
const nest_bull_1 = require("nest-bull");
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const mail_1 = require("../../config/mail");
const mail_service_1 = require("./mail.service");
const mail_queue_1 = require("./mail.queue");
const bullModule = nest_bull_1.BullModule.forRoot(mail_1.mailBullConfig);
let MailModule = class MailModule {
};
MailModule = __decorate([
    common_1.Module({
        imports: [
            bullModule,
            mailer_1.MailerModule.forRoot({
                defaults: {
                    from: '"No Reply" <noreply@example.com>',
                },
                template: {
                    dir: path.join(process.env.PWD, 'templates/pages'),
                    adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
                options: {
                    partials: {
                        dir: path.join(process.env.PWD, 'templates/partials'),
                        options: {
                            strict: true,
                        },
                    },
                },
            }),
        ],
        providers: [mail_service_1.MailService, mail_queue_1.MailQueue],
        exports: [bullModule],
    })
], MailModule);
exports.MailModule = MailModule;
//# sourceMappingURL=mail.module.js.map