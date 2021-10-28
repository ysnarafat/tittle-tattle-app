/*
  MQTT.Cool - https://mqtt.cool
  Hello IoT World Demo
  Copyright (c) Lightstreamer Srl
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

const mqttcool = require('mqtt.cool-node-client');
const onExit = require('signal-exit');
const ansi = require('ansi');
const cursor = ansi(process.stdout);

// Target MQTT.Cool address. Change it with if required.
const MQTT_COOL_URL = 'https://cloud.mqtt.cool';

// Reset used cursor on process exit.
onExit(function() {
  cursor.reset();
});

// Connect to the MQTT.Cool server.
log('Connecting to MQTT.Cool...');
mqttcool.openSession(MQTT_COOL_URL, 'demouser', '', {

  onConnectionFailure: function(errorType, errorCode, errorMessage) {
    log('MQTT.Cool connection failure ' + errorType);
  },

  onConnectionSuccess: function(mqttCoolSession) {
    log('Connected to MQTT.Cool');
    // Get a client instance, which will connect to the MQTT broker mapped by
    // the alias "mosquitto". The instance will also be used later to
    // re-subscribe for updating the frequency update.
    var mqttClient = mqttCoolSession.createClient('tcp://broker.mqtt.cool:1883');

    // Connect to the MQTT broker.
    mqttClient.connect({
      onSuccess: function() {
        // Upon successful connection, subscribe to telemetry topics.
        log('Connected to the MQTT broker');
        mqttClient.subscribe('telemetry/speed');
        mqttClient.subscribe('telemetry/rpm');
      },

      onFailure: function(response) {
        log(response.errorMessage);
        process.exit(1);
      }
    });

    mqttClient.onReconnectionStart = function(response) {
      log('Starting reconnection to MQTT.Cool...');
    };

    mqttClient.onReconnectionComplete = function(response) {
      log('Reconnected to MQTT.Cool');
    };

    // Callback invoked if the connection to the target MQTT broker is lost.
    mqttClient.onConnectionLost = function(response) {
      log(response.errorMessage);
      process.exit(1);
    };

    // Callback invoked upon receiving a message.
    mqttClient.onMessageArrived = function(message) {
      // Get the message topic to retrieve the pertinent gauge.
      var dest = message.destinationName;
      var tok = dest.split('/', 2);
      var gauge = tok[1];

      // Get and transform the received payload into an integer value, which
      // can be then managed by the Google Chart Tools.
      var metric = parseInt(message.payloadString);

      // Update the target cursor.
      switch (gauge) {
        case 'rpm':
          updateRPMData(metric.toString());
          break;

        case 'speed':
          updateSpeedData(metric.toString());
          break;

        default:
          break;
      }
    };
  }
});



