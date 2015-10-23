var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },
  install: function () {
    console.log('Installing gulp');
    this.npmInstall(['gulp'], { 'saveDev': true });
    console.log('Installing gulp-sass');
    this.npmInstall(['gulp-sass'], { 'saveDev': true });
    console.log('Installing node-bourbon');
    this.npmInstall(['node-bourbon'], { 'saveDev': true });
    console.log('Installing node-neat');
    this.npmInstall(['node-neat'], { 'saveDev': true });

  },
  writing: function () {
    console.log('Creating Sass entry point');
    this.fs.copyTpl(
      this.templatePath('styles.scss'),
      this.destinationPath('src/scss/styles.scss')
    );
    console.log('Creating Neat config');
    this.fs.copyTpl(
      this.templatePath('neat-config.scss'),
      this.destinationPath('src/scss/neat-config.scss')
    );
    console.log('Creating gulpfile');
    this.fs.copyTpl(
      this.templatePath('gulpfile.js'),
      this.destinationPath(this.destinationRoot() + '/gulpfile.js')
    );
  }
});
