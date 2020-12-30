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

## gitStart an app

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
