"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const multer_1 = require("multer");
const path = require("path");
exports.storage = {
    storage: multer_1.diskStorage({
        destination: './upload',
        filename: (req, file, cb) => {
            const filename = path.parse(file.originalname).name.replace(/\s/g, '');
            const extension = path.parse(file.originalname).ext;
            cb(null, `${filename}${extension}`);
        },
    }),
    limits: { fileSize: 1024 * 1024 },
};
//# sourceMappingURL=storage.config.js.map