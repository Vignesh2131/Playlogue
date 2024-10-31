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
exports.authRouter = void 0;
const PrismaClient_1 = require("../PrismaClient");
const express_1 = __importDefault(require("express"));
exports.authRouter = express_1.default.Router();
exports.authRouter.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { displayName, email, password } = req.body;
    try {
        const newUser = yield PrismaClient_1.prisma.user.create({
            data: {
                email: email,
                password: password,
                displayName: displayName,
                xp: 0,
            },
        });
        res.json(newUser);
    }
    catch (error) {
        res.json({ error: error });
    }
}));
exports.authRouter.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield PrismaClient_1.prisma.user.findFirst({
        where: {
            email: email
        }
    });
    if (!user)
        res.json({ error: "User" });
    if ((user === null || user === void 0 ? void 0 : user.password) === password)
        res.status(200).json({ message: 'user verified' });
}));
