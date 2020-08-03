<pre>                                                                                                                                                                                                             
  ______  _      _____  _____  _   __  _____  _   _  _____ 
  | ___ \| |    |  _  |/  __ \| | / / |  _  || | | ||_   _|
  | |_/ /| |    | | | || /  \/| |/ /  | | | || | | |  | |  
  | ___ \| |    | | | || |    |    \  | | | || | | |  | |  
  | |_/ /| |____\ \_/ /| \__/\| |\  \ \ \_/ /| |_| |  | |  
  \____/ \_____/ \___/  \____/\_| \_/  \___/  \___/   \_/                                                             
              Building Blocks that think outside the box                                               
</pre>

## React Components that you can fully customise. Including  the BLEEPin stryles!!!! 

 
#### See examples by running yarn start


I will add all my reusable components here


Contact me nickjohngray@gmail.com for help.

##  Scripts
### prepublishOnly
prepublishOnly will run BEFORE prepare and ONLY on npm publish. 
It will run the test and lint to make sure it  doesn't publish bad code.

### preversion
preversion will run before bumping a new package version. 
To be 100% sure a new version  with bad code does not get published.

### Version
Version will run after a new version is bumped. 
If your package has a git repository, 
like in our case, a commit and a new version-tag will be made every time you bump a new version. 
This command will run BEFORE the commit is made. 
A  formatter could be run at this stage so no ugly code will pass into the new version:

### npm version patch
Bump a new patch version of the package
The preversion, version, and postversion will run
and create a new tag in git and push it to the remote repository. 

### npm push 
npm push will run npm deploy, if eveything is good ( tslint and tests pass)
a new version is deployed.

## npn test
Runs all tests


## Tips

## Ignore tracked files from git that were accidentally committed
git rm -r --cached . 

git add .

git commit -m ".gitignore fix"
