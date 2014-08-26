# Meteor packages presentation


## agenda for the presentation

1. Customize an existing package from atmosphere (smart.json wizardry) 
2. Local packages (keep it local, no need to share on github or commit after changes, changes integrate automatically)
3. Release a public package to atmosphere (live example)


## basic intro

### meteor core packages:

- very few. core packages like templates, less, jquery etc.
- e.g. add less using 'meteor add less'
	
### meteorite:

- package management system with pretty awesome community (circa 1700 packages right now)
- will be part of meteor version 1
- heaps of popular projects repackaged for easy inclusion on your projects
- install meteorite. `npm install -g meteorite`
- browse packages on [atmosphere](http://atmospherejs.com/)
- install packages `mrt add iron-router`
	
	
#### beneath the surface:
- all items under packages/ are just symlinks to a .meteorite directory under your user home.  We exploit this later to add local packages!


## 2. install local packages

We can integrate packages via meteorite, and we can also see how we can link to packages off meteorite by defining the git repository in our project smart.json dir.

We can do one better, and reference packages defined on our filesystem.  This means no commiting and pushing just to test our changes to one of our packages... phew!

Run `ls -l` under the app directory.  You can see that each meteor package is in fact just a sym link to another folder under our user home.  Create a symlink from your private package to your app directory's `packages/` subdirectory

    ln -s /path/to/private/packages/<package_name> /<pathtoapp>/packages/
    meteor add <package_mame>
    
Now, fire up your development server, and any change you make to code under your private package dir, will be observed straight away in your meteor application without you refreshing (that's how we like it).

## 3. release a public package to atmosphere

Key components:


#### Tips
1. Test locally using as a private package first!
2. In package.js, declare templates before javascripts that reference the templates
3. Make your packages so that they are easy for you to reuse, chances then they will be for others too





	
	