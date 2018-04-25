# webflow-prototyping-framework
Robust rapid prototyping with Webflow and JS code

# Documentation work in progress

# Set up: simple version
You can use most of the utilities bundles by adding this code in your Webflow project.

Paste the following code inside the head section
```TODO Rawgit link```

Paste the following code inside the bottom custom code section, before end of "body" tag
```TODO Rawgit link```

# Set up: pro version
- Clone this repository to another GitHub repo
- In your new repository set up GitHub pages on master branch
- open terminal inside the root folder
- In terminal type ```npm install``` (you need to install Node.js on your computer if the command is not found)
- Add your prototype JS code organized as features inside ```main-app-code/v1/features/```
- In terminal type ```gulp watchFilesAndAutomaticallyPushChanges``` - all changes that you make will be automatically bundled in one file and published to your GitHub page
- add the JS and CSS bundles links in your Webflow projects, CSS goes in "head", JS goes at the end of "body"
- edit files and each change will be automatically pushed to server, after couple of seconds refresh Webflow site to see you changes
