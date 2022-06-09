// IMPORT
const mqtt = require("mqtt");

// CONNECTION DATA
const host = "localhost";
const port = "1883";
const clientId = "mmqttx_f5529776";
const connectUrl = `mqtt://${host}:${port}`;

// MQTT CONNECT
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: "tbrause",
  password: "Ennosgrande666",
  reconnectPeriod: 1000,
});

// TOPIC
const topic = "home/temperatur";

// CONNECT TOPIC
client.on("connect", () => {
  console.log("GET : CONNECT : " + connectUrl);
  // SUBSCRIBE
  client.subscribe([topic], () => {
    console.log(`SUBSCRIBE : topic : ${topic}`);
    console.log("");
  });
});

// MESSAGE
client.on("message", (topic, payload) => {
  console.log("MESSAGE : ", topic, payload.toString());
});
