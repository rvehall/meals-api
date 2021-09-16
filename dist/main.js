"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const admin = __importStar(require("firebase-admin"));
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app.module");
config_1.ConfigModule.forRoot();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const adminConfig = {
        "type": process.env.TYPE,
        "project_id": process.env.PROJECT_ID,
        "private_key_id": process.env.PRIVATE_KEY_ID,
        "private_key": process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
        "client_email": process.env.CLIENT_EMAIL,
        "client_id": process.env.CLIENT_ID,
        "auth_uri": process.env.AUTH_URI,
        "token_uri": process.env.TOKEN_URL,
        "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_x509_CERT_URL,
        "client_x509_cert_url": process.env.CLIENT_x509_CERT_URL
    };
    admin.initializeApp({
        credential: admin.credential.cert(adminConfig),
        databaseURL: 'meals-97d2d.firebaseapp.com',
    });
    app.enableCors();
    const port = process.env.PORT ? process.env.PORT : '3000';
    const hostname = '0.0.0.0';
    await app.listen(port, hostname, () => {
        console.error(`server listening on ${hostname}:${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map