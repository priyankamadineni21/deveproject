"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const fastify_1 = __importDefault(require("fastify"));
const app_1 = __importDefault(require("./app"));
const db_1 = require("./db");
let fastify = (0, fastify_1.default)({
    logger: true
});
// CommonJs
fastify = require('fastify')({
    logger: true
});
// Declare a route
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield db_1.AppDataSource.initialize();
        console.log('database connected');
        app_1.default.get('/', function (request, reply) {
            reply.send({ hello: 'world hi there' });
        });
        // Run the server!
        app_1.default.listen({ port: 3000, host: '127.0.0.1' }, function (err, address) {
            if (err) {
                fastify.log.error(err);
                process.exit(1);
            }
            app_1.default.log.info(`SERVE ON ${address}`);
            // Server is now listening on ${address}
            console.log('server is listening on the port', 3000);
        });
    });
}
main();
