echo "Starting build Setup...."

exec 3>&1 4>&2
trap 'exec 2>&4 1>&3' 0 1 2 3
exec 3>&1 1>>setup_logs.md 2>&1

echo "\n\n Setup Logs (`date +"%Y-%m-%d %r"`) \n========== "

function checkStatus {
    "$@"
    local status=$?
    if [ $status -ne 0 ]; then
        echo "Error with $1 $2 $3 ! Please Check setup_logs.md log for more details!" 1>&3
        echo "#Error\n Error with command --> ###$1 $2 $3! \n\n\n"
        exit 1;
    fi
    return $status
}

# Check for Homebrew, install if we don't have it
if test ! $(which brew); then
    echo "Installing homebrew.....Please provide your input as required" 1>&3
    echo -ne '\n' | ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    echo "1.Homebrew Installed Successfully!" 1>&3

else
    echo "1.Homebrew already installed!\n" 1>&3
fi

# Install Bash 4
if test ! $(which bash); then
    checkStatus brew install bash
fi

if [ ! -f ~/.bash_profile ] ; then
    echo "Creating Bash Profile file..."
    touch ~/.bash_profile
fi

if [ ! -f ~/.bashrc ] ; then
    echo "Creating Bashrc file..."
    touch ~/.bashrc
fi
# Update homebrew recipes
checkStatus brew update

#Install npm
echo "2. Install NPM!" 1>&3
if test ! $(which npm); then
    checkStatus brew install npm
fi

echo "Source bash_profile....\n"
source ~/.bash_profile

echo "Source bashrc....\n"
source ~/.bashrc

echo "Check for nvm!" 1>&3
if [ -d ~/.nvm ] && test $(command -v nvm); then
    version=$(echo $(nvm --version))
    echo "3. nvm version already installed...$version" 1>&3

else
    echo "Installing nvm..." 1>&3
    checkStatus brew install nvm
    if [ -d  ~/.nvm ]; then
        echo "nvm folder already exist" 1>&3
    else
       checkStatus mkdir ~/.nvm
    fi
    checkStatus echo 'export NVM_DIR="$HOME/.nvm"' >>~/.bash_profile
    checkStatus echo 'export NVM_HOMEBREW="/usr/local/opt/nvm/nvm.sh"' >>~/.bash_profile
    checkStatus echo '[ -s "$NVM_HOMEBREW" ] && . "$NVM_HOMEBREW"' >>~/.bash_profile

    echo "3. NVM installed successfully" 1>&3
fi

source ~/.bash_profile

source ~/.bashrc
#Install Yarn
if test ! $(which yarn); then
    echo "4. Install Yarn" 1>&3
    checkStatus brew install yarn
fi

# Install Node
echo "5. Installing node latest stable version" 1>&3
checkStatus nvm install --lts

echo "Install grunt for node stable version"
checkStatus npm install -g grunt-cli --force

checkStatus npm install -g grunt --force

echo "6. Install Node version 12.14" 1>&3
checkStatus nvm install 12.14.1

echo "7. Use Node 12.14" 1>&3
checkStatus nvm use v12.14.1

checkStatus nvm alias default v12.14.1

echo "8. Grunting it up" 1>&3
checkStatus npm install -g grunt-cli --force

checkStatus npm install -g grunt --force

source ~/.bash_profile

source ~/.bashrc

echo "Cleaning up brew" 1>&3
checkStatus brew cleanup

echo "Local Setup Completed!" 1>&3

