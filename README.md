# Meteor packages presentation


## agenda for the presentation

1. Customize an existing package from atmosphere (smart.json wizardry) 
2. Local packages (keep it local, no need to share on github or commit after changes, changes integrate automatically)
3. Release a public package to atmosphere (live example)


## basic intro

### Meteor v0.9

- Out since 2am when I finished building a demo for the previous version
- meteorite / mrt has been incorporated into meteor and is called the meteor package system
- the mrt command is now decomissioned.
- All packages are added, removed, searched for using `meteor` and not `mrt`
- See FAQ about the [changes and history](http://blog.percolatestudio.com/engineering/meteor-packaging-questions/)
- browse packages on [atmosphere](http://atmospherejs.com/)

	
#### beneath the surface:
- all items under packages/ are just symlinks to a .meteorite directory under your user home.  We exploit this later to add local packages!

## 1. customise existing packages

### The wrong way

While you can updated the code for a package under the packages/ directory this is unadvisable because:

1. Your changes will vanish upon an update
2. Your changes won't be observed when someone else checks out your code and fires up meteor
3. Your changes probably won't get deployed (depending on how you are deploying your code to 'prod')

### The right way

After installing a package with meteorite, you can point to a different branch or even fork in your smart.json.

1. Stop your server
2. Update smart.json
3. Start your server

## 2. install local packages

We can integrate packages via meteorite, and we can also see how we can link to packages off meteorite by defining the git repository in our project smart.json dir.

We can do one better, and reference packages defined on our filesystem.  This means no commiting and pushing just to test our changes to one of our packages... phew!

Run `ls -l` under the app directory.  You can see that each meteor package is in fact just a sym link to another folder under our user home.  Create a symlink from your private package to your app directory's `packages/` subdirectory

    ln -s /path/to/private/packages/<package_name> /<pathtoapp>/packages/
    meteor add <package_mame>
    
Now, fire up your development server, and any change you make to code under your private package dir, will be observed straight away in your meteor application without you refreshing (that's how we like it).

## 3. release a public package to atmosphere

According to new docs:

`meteor release --create`

First time doing this on the new version - let's hope for the best!


#### Tips
1. Test locally using as a private package first!
2. In package.js, declare templates before javascripts that reference the templates
3. Make your packages so that they are easy for you to reuse, chances then they will be for others too





	
	