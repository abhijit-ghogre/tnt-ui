"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Card(props) {
    const { className = "", children } = props;
    return (<div className={`card bg-base-300 shadow p-4 ${className}`}>{children}</div>);
}
exports.default = Card;
