const request = require("request");

const url = "https://raw.githubusercontent.com/emojione/emojione/master/emoji_strategy.json";

// Regex
const regex = /([0-9a-z]+)-?/g;
const subst = `\\x{$1}`;

request({
    url: url,
    json: true
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        let result    = "";
        let resultAlt = "";
        for (let key in body) {
            if (body.hasOwnProperty(key)) {
                result += '"' + body[key].shortname + '", "' + key.replace(regex, subst) + '",\n';
                for (let i = 0; i < body[key].shortname_alternates.length; i++) {
                    resultAlt += '"' + body[key].shortname_alternates[i] + '", "' + key.replace(regex, subst) + '",\n';
                }
            }
        }
        console.log(result + "\n" +
                    "# Alternate shortname\n\n" +
                    resultAlt);
    }
});
