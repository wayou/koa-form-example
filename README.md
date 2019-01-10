# koa-form-example

koa form data handling example

### Installing

```sh
$ yarn
```

### Running

```sh
$ node server.js
```

This start a server at http://localhost:3000 and a POST action at `/submit`.

### Testing

To submit form data, visit http://localhost:3000 and click the submit button,
or, suing curl form the command line by the following command:

```sh
$ curl -i http://localhost:3000/submit -d "name=test"
```

### The Result

```sh
$ curl -i http://localhost:3000/submit -d "name=test"
HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8
Content-Length: 15
Date: Thu, 10 Jan 2019 11:50:42 GMT
Connection: keep-alive

{"name":"test"}
```
