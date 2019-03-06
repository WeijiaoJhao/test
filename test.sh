# 取執行時給的數值
version=$1
echo "start ${version}!"

# 取當天日期
DATE=`date +%Y-%m-%d`
echo "start ${DATE}!"
# 取當下年月日時分秒
date=`date +%Y%m%d%H%M%S`
echo "start ${date}!"

# 切換branch(master)
git checkout master
# 添加所有要commit的檔案
git add --all
# 執行commit
git commit -m 'test'
# 推送至遠端分支(master)
git push origin master
# 拉遠端分支(master)
git pull origin master
# 列出目前的tag
git tag
# 新增tag
git tag -a "${version}" -m "${version}"
# 推送tag至遠端分支
git push origin --tags
# merge master至當前分支
git merge master -m "${date}"

# 拷貝資料夾內各項目，至某處
cp -r /Users/joe/Desktop/copy /Users/joe/Desktop/y
# 搬移資料夾內各項目，至某處
mv /Users/joe/Desktop/y/ /Users/joe/Desktop/copy
