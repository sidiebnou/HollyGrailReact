// Import the Redis library and create a Redis client
var redis = require("redis");
var client = redis.createClient();

// Single Value Write & Read

// Set a key "my_key" with the value "Hello World!"
client.set("my_key", "Hello World!");

// Retrieve the value associated with "my_key" and print it to the console
client.get("my_key", function (err, reply) {
  console.log(reply);
});

// Multiple Value Write & Read

// Set multiple key-value pairs at once
client.mSet("header", 0, "left", 0, "article", 0, "right", 0, "footer", 0);

// Retrieve the values associated with an array of keys and print them to the console
client.mGet(["header", "article", "right", "footer"], function (err, value) {
  console.log(value);
});

// Quit the Redis client gracefully
client.quit("");
