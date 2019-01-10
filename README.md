# TWEB TE 2
you can create an user with the endpoint /api/register and the following informations:

```json

{
	"username": "test",
  "email":"test@tweb.ch",
	"password": "test",
}
```

For the login use /auth/login and you will received a token if your username and your password are correct :)

To see the movies: use /api/movies?pageNo=3&size=2


You can use the client to test the login 

I have tried to deploy on heroku but i have an error with npm 

https://young-hamlet-95202.herokuapp.com/

```
2019-01-10T14:35:03.863199+00:00 app[web.1]: npm ERR! api@1.0.0 start: `npm run server`
2019-01-10T14:35:03.863302+00:00 app[web.1]: npm ERR! Exit status 1
2019-01-10T14:35:03.863563+00:00 app[web.1]: npm ERR!
2019-01-10T14:35:03.863683+00:00 app[web.1]: npm ERR! Failed at the api@1.0.0 start script.
2019-01-10T14:35:03.863791+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

```
 db proof sended to paul with telegram 
