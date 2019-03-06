SHA1=`git log -1 --pretty=format:"%h"`
echo "start ${SHA1}!"
sed -i '' '/VUE_APP_TEST/d' ./.env.production
echo "VUE_APP_TEST = 'SHA1 ${SHA1}'" >> ./.env.production