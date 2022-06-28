"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToStream = exports.randInt = exports.getPostType = exports.isIgPostUrl = exports.shortcodeFormatter = exports.IGPostRegex = void 0;
const stream_1 = require("stream");
const index_1 = require("../types/index");
/** Instagram post regex */
exports.IGPostRegex = /(?:https?:\/\/)?(?:www\.)?(?:instagram\.com(?:\/.+?)?\/(p|reel|tv)\/)([\w-]+)(?:\/)?(\?.*)?$/gim;
/**
 * format instagram long url to get shortcode
 * @param url a instagram post url
 * @returns {formattedShortcode}
 */
const shortcodeFormatter = (url) => {
    const re = /(?:https?:\/\/)?(?:www\.)?(?:instagram\.com(?:\/.+?)?\/(p|reel|tv)\/)([\w-]+)(?:\/)?(\?.*)?$/gim.exec(url) || '';
    return {
        type: re[1],
        shortcode: re[2],
        url: 'https://www.instagram.com/' + re[1] + '/' + re[2]
    };
};
exports.shortcodeFormatter = shortcodeFormatter;
/**
 * is Instagram Url?
 * @param url instagram post url
 * @returns
 */
const isIgPostUrl = (url) => {
    return /(?:https?:\/\/)?(?:www\.)?(?:instagram\.com(?:\/.+?)?\/(p|reel|tv)\/)([\w-]+)(?:\/)?(\?.*)?$/gim.test(url);
};
exports.isIgPostUrl = isIgPostUrl;
/**
 * get instagram post type
 * @param type product_type
 * @returns
 */
const getPostType = (type) => {
    return type == index_1.ProductType.CAROUSEL
        ? index_1.IGPostType.carousel_container
        : type == index_1.ProductType.REEL
            ? index_1.IGPostType.clips
            : type == index_1.ProductType.SINGLE
                ? index_1.IGPostType.feed
                : type == index_1.ProductType.TV
                    ? index_1.IGPostType.igtv
                    : index_1.IGPostType.feed;
};
exports.getPostType = getPostType;
/** get random number in range */
const randInt = (min, max, q = 0.001) => {
    return Math.floor((Math.random() * (min - max)) / q) * q;
};
exports.randInt = randInt;
// https://stackoverflow.com/questions/13230487/converting-a-buffer-into-a-readablestream-in-node-js
const bufferToStream = (buffer) => {
    const readable = new stream_1.Readable();
    readable._read = () => { }; // _read is required but you can noop it
    readable.push(buffer);
    readable.push(null);
    return readable;
};
exports.bufferToStream = bufferToStream;
