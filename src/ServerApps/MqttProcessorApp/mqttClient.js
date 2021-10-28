const mqtt = require("mqtt");
const appConfig = require("./AppConfigs/appConfig.Development.json");

var host = appConfig.host;
var options = appConfig.options;

class MqttService {
  constructor(brokerHost, brokerOptions) {
    this.brokerHost = brokerHost;
    this.brokerOptions = brokerOptions;
    this._client = mqtt.connect(this.brokerHost, this.brokerOptions);
  }

  Subscribe = (topics, qos) => {
    return new Promise((resolve, reject) => {
      console.log("hello");

      this._client.on("connect", () => {
        this._client.subscribe(topics, qos);
        resolve();
      });

      this._client.on("message", (topic, message, packet) => {
        console.log(message.toString());
      });
    });
  };

  Unsubscribe = topics => {
    return new Promise((resolve, reject) => {
      this._client.on("connect", () => {
        this._client.unsubscribe(topics);
        resolve();
      });
    });
  };

  Publish = (topicName, message) => {
    return new Promise((resolve, reject) => {
      this._client.on("connect", () => {
        this._client.publish(topicName, message);
        resolve();
      });
    });
  };

  Reconnect = () => {
    return new Promise((resolve, reject) => {
      this._client.on("close", () => {
        if (!this._client.connected) {
          this._client.reconnect(this.host, this.options);
          resolve();
        }
      });
    });
  };

  Disconnect = () => {
    return new Promise((resolve, reject) => {
      this._client.end(true, {}, () => {
        console.log("MQTT connection disconnected");
        resolve();
      });
    });
  };
}
