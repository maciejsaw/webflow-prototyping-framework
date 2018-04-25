# webflow-prototyping-framework
Robust rapid prototyping with Webflow and JS code

# Documentation work in progress
-
-
-
-
-
-

# Features
- Create prototypes that have the same feeling as real web-app
  - Support for native back button, even for modals
  - Instant page switching thanks to preloading Webflow separate pages into one Single-Page-Application
- Build complex forms with logic
  - Pre-made components like checkboxes, radio-buttons, input fields
  - Easy to maintain
- Build complex wizards
  - Handle complex paths with complex logic
- Solve problems before developers see them
  - Your prototype code will be much closer to real life scenario, so you can foresee problems before developers encounter them
- Simulate server
  - Store your user data in local storage, so that it is persistent even if he refreshes the page
- Share specific screens
  - You can send links that directly open a specific state, for example link directly to a modal or directly to a specific step of a wizard
- Deliver CSS code together with prototype in BEM methodology
  - Webfloe exported CSS code can be directly used by developers


# Set up: simple version
You can use most of the utilities bundles by adding this code in your Webflow project.

Paste the following code inside the head section
```TODO Rawgit link```

Paste the following code inside the bottom custom code section, before end of "body" tag
```<script src="http://maciejsawicki.com/webflow-prototyping-framework/webflow-prototyping-framework-bundle.js"></script>```

# Set up: pro version
- Fork this repository to another GitHub repo
- In your new repository set up GitHub pages on master branch
- Clone your repository to your computer
- Open terminal inside the root folder
- In terminal type ```npm install``` (you need to install Node.js on your computer if the command is not found)
- Add your prototype JS code organized as features inside ```main-app-code/v1/features/```
- In terminal type ```gulp watchFilesAndAutomaticallyPushChanges``` - all changes that you make will be automatically bundled in one file and published to your GitHub page
- Add the JS and CSS bundles links in your Webflow projects, CSS goes in "head", JS goes at the end of "body"
- Edit files and each change will be automatically pushed to server, after couple of seconds refresh Webflow site to see you changes

# Pre-made components to Copy/Paste
```TODO Prepare project```
You can copy/paste pre-made framework elements from this project to your project. It's best to copy the whole page and save it as a draft in you Webflow project 
- Radio buttons
- Checkboxes
- Dropdowns
- Flashing notifications
- Modals with overlay
- Hamburger menu
- Tabs

# Documentation
## State
### Persistent state in local storage
### Navigation state in query string
### Actions are triggered when state changes







