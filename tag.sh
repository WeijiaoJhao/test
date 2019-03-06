tag=prod-`date +%Y%m%d%H%M`
echo "start ${tag}!"
git checkout develop
git pull origin develop
git tag -a "${tag}" -m "${tag}"
git push origin --tags

yarn build
serve -s dist
echo "end"
