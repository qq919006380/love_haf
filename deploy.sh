#!/usr/bin/env sh
echo 输出静态文件
npm run build

echo 压缩部署包！
tar -zcvf dist.tar.gz dist/

echo 上传文件
scp -r dist.tar.gz root@47.244.164.231:/root/www/

# 服务器环境开启
ssh root@47.244.164.231 -tt <<EOF

echo 进入目标目录
cd www/

echo 删除 img/ css/ js/ fonts/ index.html favicon.ico
rm -rf img/ css/ js/ fonts/ index.html favicon.ico

echo 解压dist.tar.gz
tar -zxvf dist.tar.gz --strip-components 1

echo 删除本地压缩包！

rm -rf dist.tar.gz

exit

EOF

# 服务器环境结束

echo 上传完成！

echo 删除本地压缩包！

rm -rf dist.tar.gz