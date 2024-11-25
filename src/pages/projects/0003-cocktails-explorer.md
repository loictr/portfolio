---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: ../../layouts/ProjectLayout.astro
title:  "Cocktail Explorer"
tags: [Vector database, python, pandas, recommendation system, angular]
image: cocktail-explorer-logo.png
videoId: "58vLR0G_nI0"
repoUrl: https://github.com/loictr/cocktails-explorer
description: A cocktail recommendation system. Choose your favorite cocktails, and the engine will suggest others you might like.
---

## Presentation

Cocktails explorer is a website presenting cocktails recipes with their ingredients. I exploited an open database for retrieving the recipes. And, I used pandas to normalize the data. Finally, I vectorized the data by selecting the ingredients of the recipes.

The user selects one or more cocktails. And the recommendation system uses the vectorized ingredients data to suggest other cocktails to the user based on the distance between his selection and the other cocktails.

## Exploiting AI tools

I bootstrapped the front using Bolt.new, used Github copilot to continue the coding, generated the logo by diffusion with Flux in ComfyUI, created the music for the demo video using Suno. A well balanced cocktail of AI tooling.