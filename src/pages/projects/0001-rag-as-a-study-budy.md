---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: ../../layouts/ProjectLayout.astro
title:  "RAG as a study buddy"
tags: [Python, LLM, GenAI, RAG, langchain]
repoUrl: https://github.com/loictr/rag-as-study-buddy
image: windrider.png
description: A RAG tool to boost employee knowledge. It generates questions from company data and evaluates user answers.
---

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