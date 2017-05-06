cd public &&
git init &&
git add . &&
git commit -m "Deploy" &&
git push git@github.com:cauequeiroz/cauequeiroz.com.br.git master:gh-pages --force &&
rm -rf .git