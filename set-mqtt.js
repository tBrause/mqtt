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
const topicDir = "home/temperatur";

// CONNECT TOPIC
client.on("connect", () => {
  console.log("SET : CONNECT : " + connectUrl);

  // VALUE
  let value = "2";

  // SUBSCRIBE
  client.subscribe([topicDir], () => {
    console.log(`SUBSCRIBE : topic : ${topicDir}`);
  });

  // PUBLISH
  client.publish(topicDir, value, { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`PUBLISH : Topic : ${topicDir} : ${value}`);
      //console.log(`Value : ${value}`);
    }
  });
});

// MESSAGE
client.on("message", (topic, payload) => {
  console.log("MESSAGE : ", topic, payload.toString());
  console.log("");
});
