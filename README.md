# Smart Trash Can Application (STC-app)

This project represents a case study from the Book **Product Velocity**.
Learn more at [productvelocity.org](https://www.productvelocity.org).

## Case Study: Recycling is hard!

**Alex:** “Hey, where do I put the pizza box? Regular garbage or paper?”

**Blair:** “Neither. It goes into *Food & Yard Waste*.”

**Alex:** “What? That does not make any sense! It's neither food nor yard waste!”

**Cory:** “That's Texas for you. In California, it’d go into *Compost*.”

**Alex:** “That's only slightly better. I would have put it into the paper bin.”

**Blair:** “Nah, you never do that. Sometimes you have to throw it into regular trash, like in New York.”

**Alex:** “That's crazy. How can anybody recycle correctly? We need to change this. **Let's develop an app for it!**”

## Is this a hardware product?

Even though we are developing an app, we have to take hardware into account: At a minimum, the smart phone camera, but there will be more.

This is the smallest case study from [Product Velocity](https://www.productvelocity.org). We include it so that

1. We better understand why software development is so blazingly fast these days;
2. We understand that even for "pure software" product, we need to take the hardware that it's running on into account.

## Read the book for details

This is a showcase project. So we will demonstrate best practices from the book in a fashion that will not slow us down. In this gitHub repository, we will capture artefacts, decisions and so forth. We will only briefly explain what we are doing and provide references to the book, where you can read the details.

> 📘 **Book:** Case Studies, Chapter #.#

## Product Velocity: How fast?

Here, we document the effort that it took to create this app from idea to launch to feature complete.

### 1h: Bootstrapping

After the above conversation, Alex sets up a minimal work environment. She creates a gitHub repository and creates a document folder with the Arc42 template as Markdown.

**Decision** | **Reason** | **Result**
-- | -- | --
gitHub as the platform | It will be an open source project, gitHub is widely used and simple. | [Repository](https://github.com/LeanSystemsLab/stc-app/)
[arc42](https://arc42.org/) for documenting architecture | Lightweight and mature | [Architecture Template](https://github.com/LeanSystemsLab/stc-app/commit/c5e3ca64745e17d0c94340241585e4dd7838017c#diff-140eef3ba41bdcf401d507408084181f2c0ac627532b61e0f7906ea7cc926782)

### 8h: Initial draft of architecture documentation

Alex starts working on a first draft of this document. After a few days ans 8 hours invested, she completed a first draft.

**Result:** [Architecture Documentation Draft](https://github.com/LeanSystemsLab/stc-app/commit/bf6f5feebff85152d536fd334de1bb582c3d8e45) (not yet reviewed)

### 4h: Review of architecture documentation

Alex shares the github link and asks for feedback. Depending on technical maturity, her friends provide feedback:

* Pull requests from technically inclined peers who cloned the repository
* Discussions on those pull requests
* GitHub issues from those who want to comment and discuss, but without creating a pull request first
* Optionally, start using GitHub Discussions
* Casual feedback via email or IM from the rest

This happens asynchronously: As soon as it's clear that there are no major objections, Alex can begin with development.

### 2h: Organizing the GitHub folder structure to support the selected architecture.

We decided to use a single repository with multiple components. Also, we decided to use configuration-as-code. After some research, Alex starts with this folder structure.

Folder | Description
--- | ---
`/docs` | Documentation including architecture, contribution guides, and diagrams
`/frontend` | Single Page Application built with TypeScript and Vue/Vuetify
`/backend` | Node.js backend service handling business logic, APIs, and database access
`/scripts` | Utility scripts for setup, testing, deployment, or maintenance
`/config` | Configuration files for environment variables, Caddy, or NGINX
`/test` | Cross-cutting tests including integration and end-to-end scenarios


### 4h: Creating a skeleton for the frontend

Our goal is to get to a minimal viable product (MVP) as quickly as possible. Ava decides to start with the front end.

> ⚠️ **Avoid AI for architecture:** It might be tempting to create the stub code with AI tools. If possible, don't. Instead, see whether ready-to use templates are available. Those use the latest insights and follow best practices

On the command line, [create-vue](https://github.com/vuejs/create-vue) creates a good starting point in less than a minute.

![create-vue CLI screencast](https://raw.githubusercontent.com/vuejs/create-vue/refs/heads/main/media/screencast-cli.gif)

In these 4 hours, Ava:

* Adds [Vuetify Application](https://vuetifyjs.com/en/components/application/) to add an application bar and navigation content
* Add an internationalization framework including language chooser, so that we can translate the application easily
* Adds a README.md for the frontend, so other developers will get up to speed quickly
* Configures VSCode to not show any warnings and to make development efficient
