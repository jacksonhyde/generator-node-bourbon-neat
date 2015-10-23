# generator-node-bourbon-neat

Rough and (semi)-ready yoeman generator for scaffolding a gulp build system implementing node-bourbon and node-neat.

### Instructions

1. [Clone this repository](https://help.github.com/articles/cloning-a-repository/) to a folder on your machine.
2. `cd` into that folder and run `npm link` - this will allow you to run this generator as if it had been globally installed with using NPM.
3. If you don't already have it, install [yoeman](http://yeoman.io/) globally with `npm install -g yo
4. Create your project directory and `cd` into it.
5. Run `npm init`
6. Run `yo node-bourbon-neat`

**NOTE:** You probably don't want to run this if you've already created a gulpfile. In this instance, take a look at `generators/app/templates/gulpfile.js` and copy across what you need. The important bit is passing the node-bourbon and node-neat paths into the sass task using the `includePaths` build option.

### To do

* Nicer editing/creation of the gulpfile. Rather than just copying a template over (potential overwriting an existing file), it should look for existing files and add tasks if possible.
* Ask the user where they want their sass entry point file and where they want the generated CSS file.
* Once these previous tasks have been completed, publish the NPM module
