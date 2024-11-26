---
layout: ../../layouts/ProjectLayout.astro
title:  "ESP Scene Notifier"
image:  homeassistant.png
tags:   [IoT, Zigbee, C, Embedded]
description: Creating an ESP32-based device to provide visual feedback for Home Assistant automations.
---
## Use case

I have some automations running on Home Assistant for my home cinema setup. Some are quite long to run and we have no visual feedback on their processing.

The goal of this project is to build a small communicating device that will display some information on the running automation.

And it is a good way to get some knowledge on communicating devices and zigbee.

## Implementation

The device expose a multi select endpoint. The home assistant server sends zigbee commands to it to change the inform the scene that is being processed.
The device displays the information on a SPI display.

## Next steps

3D print a case. And replace the display I broke...
