# Loïc Transler

[Linkedin](https://www.linkedin.com/in/loictransler/)

[Portfolio homepage](/portfolio/)


## NutriAI

[Repository](https://github.com/loictr/NutritionAI)

[Demo](https://lemon-mushroom-01848ce03.5.azurestaticapps.net/fr/)

{% include youtube.html id="Md65-Y_odbc" %}

### Keywords

C#, .Net core, LLM, GenAI, OpenAI, Azure, Angular, ChatGPT, Prompt engineering

### Use case

Finding ideas each week for the family menu can be hard. I created a quick demo of how we can quickly get results by using generative AIs to generate a healthy menu.

Some solution exists based on a recipes databases with ingredients etc... But here, the solution was really quick and accurate, even without fine tuning.

### Implementation

The demo operates upon the Azure OpenAI SDK. I used its structured output feature to get Json output.

The small front-end uses Angular 18, as an exercise for me to keep up to date on front-end technologies.

The back-end uses .net core's minimal API and Mediatr as a PoC for this type of software architecture.

### Features

Today, the back-end is capable of injecting  the language of the user. The user can also select his country to get a menu according to the country culture.

The user can reject some meals from the menu and the system replace it with another option, keeping a variety in the menu.

Some improvements are still needed like a better language support. And even if the country selection is fun, I like trying to cook some other cultures food. Even in France, I would like to have empanadas, shushis, or couscous. This may be a prompt engineering challenge.
