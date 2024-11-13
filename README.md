# Loïc Transler

[Linkedin](https://www.linkedin.com/in/loictransler/)

# Retrieval Augmented Generation (RAG) as a study budy

[Repository](https://github.com/loictr/rag-as-study-buddy)

## Keywords

Python, LLM, GenAI, RAG, langchain

## Use case

A company possesses vast and continually evolving knowledge. Each employee stands to benefit from a deeper understanding of this knowledge. This applies to support teams, business teams who may encounter numerous questions from stakeholders, and developers needing to excel in their domain.

This understanding of company knowledge could be integrated into new employee onboarding processes. Additionally, the company could implement an internal certification program with incentives, or simply encourage employees to engage with corporate quizzes on a daily or weekly basis.

## Implementation

For easy portability, the demo uses markdown files for the knowledge content. It could also come from Confluence or any internal wiki or pdfs in a shared directory...

This demo uses `langchain` as a RAG for two jobs:
1. Generate multiple questions upon the knowledge base
2. Evaluate the user answers to this questions

I used `Ollama` as LLM to illustrate the use of a local LLM for full confidentiality.

And `Chroma` as a vector database.

The first step was to create the embeddings and store it into the vector database.

Then, I created a first RAG chain to generate the questions upon the content.

Finally, I created a second chain that is used to get the asked question and the user's answer, get the relevant context from the knowledge base, then evaluate the user's answer considering the question and the knowledge.

I started with a notebook for a PoC. Then I created a demo based on `Gradio` for a quick chat UX.

# NutriAI

[Repository](https://github.com/loictr/rag-as-study-buddy)

## Keywords

C#, .Net core, LLM, GenAI, OpenAI, Azure, Angular, ChatGPT, Prompt engineering

## Use case

Finding ideas each week for the family menu can be hard. I created a quick demo of how we can quickly get results by using generative AIs to generate a healthy menu.

Some solution exists based on a recipes databases with ingredients etc... But here, the solution was really quick and accurate, even without fine tuning.

## Implementation

The demo operates upon the Azure OpenAI SDK. I used its structured output feature to get Json output.

The small front-end uses Angular 18, as an exercise for me to keep up to date on front-end technologies.

The back-end uses .net core's minimal API and Mediatr as a PoC for this type of software architecture.

## Features

Today, the back-end is capable of injecting  the language of the user. The user can also select his country to get a menu according to the country culture.

The user can reject some meals from the menu and the system replace it with another option, keeping a variety in the menu.

Some improvements are still needed like a better language support. And even if the country selection is fun, I like trying to cook some other cultures food. Even in France, I would like to have empanadas, shushis, or couscous. This may be a prompt engineering challenge.

# ESP scene notifier

[Repository](https://github.com/loictr/esp-scene-notifier-st7789)

## Keywords

IoT, Zigbee, C, Embedded

## Use case

I have some automations running on Home Assistant for my home cinema setup. Some are quite long to run and we have no visual feedback on their processing.

The goal of this project is to build a small communicating device that will display some information on the running automation.

And it is a good way to get some knowledge on communicating devices and zigbee.

## Implementation

The device expose a multi select endpoint. The home assistant server sends zigbee commands to it to change the inform the scene that is being processed.
The device displays the information on a SPI display.

## Next steps

3D print a case. And replace the display I broke...
