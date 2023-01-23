"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Text_1 = __importDefault(require("../Text/Text"));
function Modal(props) {
    const { isVisible, onClose, title, body, confirmText = "OK", cancelText = "Cancel", } = props;
    return (<div className={`modal modal-bottom sm:modal-middle 
      ${isVisible ? "modal-open" : ""}
    `}>
      <div className="modal-box">
        <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => onClose(false)}>
          x
        </button>
        {typeof title === "string" ? (<Text_1.default size="lg" weight="bold">
            {title}
          </Text_1.default>) : (title)}
        {typeof body === "string" ? <Text_1.default className="py-4">{body}</Text_1.default> : body}
        <div className="modal-action justify-center sm:justify-end">
          <button className="btn btn-primary flex-1 sm:flex-none sm:w-40" onClick={() => onClose(true)}>
            {confirmText}
          </button>
          <button className="btn btn-neutral btn-outline flex-1 sm:flex-none sm:w-40" onClick={() => onClose(false)}>
            {cancelText}
          </button>
        </div>
      </div>
    </div>);
}
exports.default = Modal;
