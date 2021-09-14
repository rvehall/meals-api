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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const admin = __importStar(require("firebase-admin"));
const fs = __importStar(require("fs"));
const app_module_1 = require("./app.module");
const adminConfig_json_1 = __importDefault(require("./config/adminConfig.json"));
async function bootstrap() {
    const ssl = process.env.SSL === 'true' ? true : false;
    let httpsOptions = null;
    if (ssl) {
        const keyPath = process.env.SSL_KEY_PATH || '';
        const certPath = process.env.SSL_CERT_PATH || '';
        httpsOptions = {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certPath),
        };
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { httpsOptions });
    const port = Number(process.env.PORT) || 3000;
    const hostname = process.env.HOSTNAME || 'localhost';
    const adminConfig = adminConfig_json_1.default;
    admin.initializeApp({
        credential: admin.credential.cert(adminConfig),
        databaseURL: 'meals-97d2d.firebaseapp.com',
    });
    app.enableCors();
    await app.listen(port, hostname, () => {
        const address = 'http' + (ssl ? 's' : '') + '://' + hostname + ':' + port + '/';
        console.log('Listening at ' + address);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map