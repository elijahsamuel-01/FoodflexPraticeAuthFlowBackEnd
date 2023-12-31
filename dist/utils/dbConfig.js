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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainConnection = void 0;
const mongoose_1 = require("mongoose");
const URL = process.env.DATABASE_STRING;
const mainConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, mongoose_1.connect)("mongodb://localhost:27017/MainAuthFlow").then(() => {
            console.log("Database is now connected..🚀🚀🚀!");
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.mainConnection = mainConnection;
