# Doc Tool Documentation

This will help you to generate htm files form markdown/json/yaml.

---

##Warning:

- You would need the below configuration to run the application.
- Node version and other versions should be the below way

### Setup Local

In order to begin local development - you first must have a few things installed globally:

- [Node](http://howtonode.org/how-to-install-nodejs)
- [npm](https://www.npmjs.org/doc/README.html)
- [grunt-cli](http://gruntjs.com/getting-started)
- [Yarn](https://classic.yarnpkg.com/en/docs/getting-started/)

To install all these dependency the easiest way is to use `mc_macsetup.sh` (for mac) script added in repository. So you just need to follow
below instruction and you will be ready to build your repo.

1. The only prerequisite for this script is GIT. So your system should have git installed. You can run `git --version` command
   and if it is not there in your system it will start installing git in your local using xcode-install. Just follow the instruction shown on screen.
2. Go To `Terminal` (For Terminal , go to applications and search for it.)
3. Go To your repo directory using `cd` command (e.g `cd <path to your local doc-build-tool repo folder>`)
4. Now just run `sh mc_macsetup.sh`

If everything goes fine you will see `Local Setup Completed!` message in console. If you get any error you can check the `setup_logs.md` in the same folder.
Once you are done with the setup close the current terminal process and start new one to run build command.

- If you want to install the dependencies one by one manually or if you get any error when you ran the setup script, You can follow the
  instructions added at the end of this document to install the required dependency.

## How to run this tool

- Warning: This repo contains all the scripts/templates needed to transform markdown files to htm. Hence the technical writers are not expected to change any of the files in this repo.

Here are the steps to run:

1. create a new directory where you can clone git repositories (ex: /user/home/project/ccx)
1. First clone this doc tool repo by running the following command

   - git clone git@git.soma.salesforce.com:ccx-dev-docs-markdown-to-dsc/doc-build-tool.git

1. Clone the doc repo to the same directory as above (ex: /user/home/project/ccx)

   - git clone git@git.soma.salesforce.com:ccx-dev-docs-markdown-to-dsc/marketing_cloud_dev_docs.git

1. You are free to modify the content of the authring repo and when you want to run locally,

   ```
   > pwd
     /user/home/project/ccx/marketing_cloud_dev_docs

   # Preview version for livereload
   > sh ../doc-build-tool/build.sh preview
   ```

   In case you want to check plain vanila htm files

   ```
   > sh ../doc-build-tool/build.sh
   ```

Note: This will allow 'preview' or 'prd'
_ preview mode will create htm files with more capabilities (which are verbose) and cannot be given to DSC as is. More details add below.
_ prd mode will create plain vanila htm files which are readily shippable to DSC

## What features does development mode htm add?

Development mode is strictly for technical writers to check their changes locally. This mode will add few styles and scripts to the htmls and hence these should not be sent to DSC directly. These below featuress are available in preview mode -

- Live reload is added - so when you change a particular file in md/image etc., those changes will be available in local server.
- The styles are added just the same way as developer.salesforce.com site would appear

### Manually setting up your Local (Steps for MAC OS)

1. To install the dependencies like Node, npm ,nvm etc , the easiest way is using `Homebrew` !

   - To install `Homebrew` use `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` command.
   - It will ask you to continue installation by pressing "return" and then ask your system password to enter. Please provide input as required.

2. Update homebrew using `brew update` command

3. Install NPM using `brew install npm` command

4. Install Yarn using `brew install yarn` command

5. Install NVM. To install NVM you need to run couple of commands which is given below.

   - `touch ~/.bash_profile`
   - `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash`
   - `source ~/.bash_profile`

   To verify if nvm is properly installed in your system just try `nvm --version`. If you get result version number
   that means your nvm setup is done else you will something similar to `nvm: command not found` . In that case please
   check the [NVM Installation Guide](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)

6. Install Node (Version 12.14) using `nvm install 12.14.1`

7. Start using Node 12.14 `nvm use v12.14.1` . Set it to default `nvm alias default v12.14.1`

8. Install Grunt CLi & Grunt using `npm install -g grunt-cli` & `npm install -g grunt` command.

9. Source your .bash_profile file at the end using `source ~/.bash_profile` command.

10. Close your current terminal and start it again for fresh terminal session.

That's it , You are ready to build your repo.
