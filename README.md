# Loïc Transler
Linkein profile: https://www.linkedin.com/in/loictransler/

# Project "RAG as a study budy"

Repository: https://github.com/loictr/rag-as-study-buddy

## Keywords

LLM, GenAI, RAG, langchain

## Use case

A company has a huge private or evolving knowledge. Each employee would gain to have a better understanding of that knowledge. It could be for support team, for business teams that may have to face many questions from their stakeholders, developpers that would need to be super efficient on their domain...

Now this knowledge comprehension may be a part of the new employee onboarding. Or, the company could have an internal certification program with incentives, or simply encourage employees to spend some times on a corporate quizz on daily or weekly bases.

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

