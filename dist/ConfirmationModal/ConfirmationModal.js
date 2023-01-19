"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Modal_1 = __importDefault(require("../Modal/Modal"));
function ConfirmationModal(props) {
    const { isVisible, onClose, title = "Are you sure?", body = "This action can not be undone", confirmText = "Yes", cancelText = "No", } = props;
    return (react_1.default.createElement(Modal_1.default, { body: body, onClose: onClose, isVisible: isVisible, title: title, confirmText: confirmText, cancelText: cancelText }));
}
exports.default = ConfirmationModal;
