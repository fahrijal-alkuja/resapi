# ResAPi

## Project setup

```
cd /home/user/www/myapp/
```

```
npm install --production
```

## PM2 install

```
npm install pm2@latest -g
```

## Start an app

```
pm2 restart app_name
pm2 reload app_name
pm2 stop app_name
pm2 delete app_name
```

## List managed applications

```
pm2 [list|ls|status]
pm2 logs
```

## membuat image dokcker

```
docker build -t "nama image" .
docker container create --name "name App" -p 8080:27017 "name image:tag"
docker container start  "nama container"
```

## Stop container

```
docker container stop "nama container"
```

## hapus container

```
docker container rm "nama container"
```
