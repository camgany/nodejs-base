
heroku login

heroku create name-app-2022

heroku logs --tail
git add .

git commit -m 'deploying'

git push heroku HEAD:master


heroku addons:create cleardb:ignite

heroku config | grep CLEARDB_DATABASE_URL

user:password@host/database