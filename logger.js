const log4js = require("log4js");
const path = require("path");

function getCommonAppender(pathSeg) {
    return {
        type: "dateFile",
        filename: path.resolve(__dirname, "logs", pathSeg, "logging.log"),
        maxLogSize: 1024 * 1024 * 5,
        keepFileExt: true,
        daysToKeep: 3,
        layout: {//日志消息的布局
            type: 'pattern',
            pattern: "%c: [%d{yyyy-MM-dd hh:mm:ss}] %p %m%n"
        }
    }
}

log4js.configure({
    appenders: {
        blog: getCommonAppender("blog"),
        default: {
            type: "stdout"
        }
    },
    categories: {
        blog: {
            appenders: ['blog'],
            level: "all"
        },
        default: {
            appenders: ['default'],
            level: "all"
        }
    }
});

exports.blogLogger = log4js.getLogger("blog");
exports.defaultLogger = log4js.getLogger();