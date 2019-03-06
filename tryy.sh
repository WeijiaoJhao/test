tag=prod-`date +%Y%m%d%H%M`
echo "start ${tag}!"
git checkout develop
git pull origin develop
git tag -a ${tag} -m ${tag}

SHA1=`git log -1 --pretty=format:"%h"`
echo "start ${SHA1}!"
sed -i '' '/VUE_APP_TEST/d' ./.env.production
echo "VUE_APP_TEST = 'tag ${tag}, SHA1 ${SHA1}'" >> ./.env.production

yarn build
serve -s dist
echo "end"
