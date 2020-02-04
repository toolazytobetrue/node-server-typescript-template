```
sudo apt-get install nginx
sudo /etc/init.d/nginx start
sudo /etc/init.d/nginx stop
sudo /etc/init.d/nginx restart

mongo
use template
db.createUser( { user: "admin", pwd: "password", roles: [ "dbOwner" ] } )
show dbs
show collections
db.dropDatabase()
````


```
MONGODB_URI=mongodb://admin:password@127.0.0.1:27017/template
MONGODB_URI_LOCAL=mongodb://admin:password@127.0.0.1:27017/template
NODE_ENV=dev
```


```
ssh-keygen -t rsa -b 4096 -f template.key
openssl rsa -in template.key -pubout -outform PEM -out template.key.pub
```