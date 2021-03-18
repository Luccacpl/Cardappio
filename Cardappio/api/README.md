Rotas

`registro`

/register 

`POST`
send
```
{
	"email":"email@gmail.com",
	"pass":"123456",
	"name":"Allan",
	"dt_nasc":"2000-02-17"
}
```
return
```
{
"SUCCESS": "user.email created"
}
```

`autentificação`

/login

`POST`
send
```
{
	"email":"allan.cruvinel@gmail.com",
	"pass":"123456"
}
```
return
```
{
"authorization": "RANDOM CRAZY CODE TOKEN"
}
```

`categorias`

/category

`POST`
send
```
{
	"email":"allan.cruvinel@gmail.com",
	"pass":"123456"
}
```
return
```
{
"authorization": "RANDOM CRAZY CODE TOKEN"
}
```

`autentificação`
