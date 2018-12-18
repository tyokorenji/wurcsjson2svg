import { SVG_convert } from "./SVG_converter";

let http = require("http");

console.log("start\n");

let server = http.createServer(function(req, res) {
    console.log("connected");
    if (req.method == "POST") {
        let body = "";
        // data受信イベントの発生時に断片データ(chunk)を取得
        // body 変数に連結
        req.on("data", function(chunk) {
            body += chunk;
        });

        // 受信完了(end)イベント発生時
        req.on("end", function() {
            let result = SVG_convert(body);
            console.log("finish");
            res.end( "\n" + result + "\n");
        });
    }
}).listen(1337, "0.0.0.0");