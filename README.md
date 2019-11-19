# Distancias-Maps

O sistema serve pra nada! O foco foi apenas em criar uma estrutura para consumir API's.

|<img width="50%" src="https://github.com/brduarte/Distancias-Maps/blob/master/img.gif">

## ⚒️ Funcionalidades
  
  - Consultar a distância entre dois pontos geográficos utilizando a API do Google Maps

## 👨‍💻 Executando localmente 

Assegure-se de ter [Node.js](http://nodejs.org/) instalado

- 1º você precisa ativar api do [Distance Matrix API](https://developers.google.com/maps/documentation/distance-matrix/start) do Google Maps
- 2º Na pasta raiz existe o arquivo config.exemplo.js; você precisa renomea-lo para 'config.js' e fazer as configurações nescessárias

Ex:
```js script

    googleAPi: {

        maps: {

            url: "https://maps.googleapis.com/maps",

            distanceMatrix: {
                uri: 'api/distancematrix/json',
                language: "pt-BR",
                units: "matric",
                key: ""
            }
        }
        
    }


```

```shell script
$ git clone https://github.com/brduarte/Distancias-Maps.git # ou clone seu próprio fork
$ cd Jogo-Multiplayer
$ npm install
$ npm start
```

## 📝 Documentação 

Para obter mais informações das ferramentas utilizadas:

- [Node.js](https://nodejs.org/en/docs/)

## Autor

| [<img width="125px" src="https://avatars2.githubusercontent.com/u/29002558?v=4"><br><sub>@brduarte</sub>](https://github.com/brduarte)|
| :---: |
