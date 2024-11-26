---
layout: ../../layouts/ProjectLayout.astro
title:  "Nutri AI"
image:  nutriai-capture.png
tags:   [C#, .Net core, LLM, GenAI, OpenAI, Azure, Angular, ChatGPT, Prompt engineering]
demoUrl: https://lemon-mushroom-01848ce03.5.azurestaticapps.net/en/
videoId: Md65-Y_odbc
description: A project utilizing generative AI to create healthy weekly menus. Users can reject meals, and receive alternative suggestions.
order: 200
---

## Use case

Finding ideas each week for the family menu can be challenging. I created a quick demo to show how generative AIs can swiftly produce a healthy menu.

Some solutions exist that are based on recipe databases with ingredients, etc... But my solution was notably quick and accurate, even without fine-tuning.

## Implementation

The demo operates using the Azure OpenAI SDK. I utilized its structured output feature to obtain JSON output.

The front-end, though simple and straightforward, was a useful exercise for me to stay updated with front-end technologies like Angular.

The back-end employs .NET Core's minimal API and MediatR as a proof of concept for this type of software architecture.

## Features

Currently, the back-end can incorporate the user's language preferences. Users can also select their country to receive a menu tailored to their country's cuisine.

Users can reject certain meals from the menu, and the system will replace them with alternative options, maintaining variety.

Some improvements are still needed, such as better language support. While selecting a specific country's cuisine is enjoyable, I also like incorporating dishes from different cultures. Even living in France, I would include empanadas, sushi, or couscous in my menus. Achieving this variety might require some prompt engineering.
