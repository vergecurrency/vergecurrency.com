var request = require("request");
var url     = require("url");
var pjson   = require('./package.json');

var host = process.env.CODECLIMATE_API_HOST || "https://codeclimate.com";

var options = {
  url: host + "/test_reports",
  method: "POST",
  headers: {
    "User-Agent": "Code Climate (JavaScript Test Reporter v" + pjson.version + ")",
    "Content-Type": "application/json"
  },
  timeout: 5000
};

var proxy = process.env.HTTP_PROXY || false;

if (proxy) {
  options.proxy = proxy;
}

var postJson = function(data, opts) {
  opts = opts || {};

  options.rejectUnauthorized = !opts.skip_certificate;

  var parts = url.parse(options.url);

  options.body = JSON.stringify(data);
  console.log("Sending test coverage results to " + parts.host + " ...");
  request(options, function(error, response, body) {
    if (error) {
      if (error.code === 'UNABLE_TO_VERIFY_LEAF_SIGNATURE') {
        console.error(
          '\n' +
          'It looks like you might be trying to send coverage to an\n' +
          'enterprise version of CodeClimate with a (probably) invalid or\n' +
          'incorrectly configured certificate chain. If you are sure about\n' +
          'where you are sending your data, add the -S/--skip-cert flag and\n' +
          'try again. Run with --help for more info.\n'
        );
      }

      console.error("A problem occurred", error);
    }
    if (response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        console.log("Test coverage data sent.");
      } else if (response.statusCode === 401) {
        console.log("An invalid CODECLIMATE_REPO_TOKEN repo token was specified.");
      } else {
        console.log("Status code: " + response.statusCode);
      }
    }
  });

};

module.exports = { postJson: postJson };
