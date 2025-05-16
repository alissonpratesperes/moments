<p align="center">
  <img src="./github/moments-logo.png" alt="moments-logo" width="50%"/>
</p>

___

<br/>

<p align="center">
  <a href="#sobre">SOBRE</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#tecnologia">TECNOLOGIA</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#execute">EXECUTE</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#autor">AUTOR</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#licença">LICENÇA</a>
</p>

<br/>

<p align="center">
  <img src="./github/moments-dashboard.png" alt="moments-dashboard" width="100%"/>
</p>

## SOBRE

A **moments** é uma Aplicação inspirada no Instagram, compartilhe seus melhores momentos e receba likes pelo Computador e Smartphone em tempo real.

## TECNOLOGIA

<details>
  <summary><strong>Tooling</strong></summary>

  <ul>
    <li><a href="https://insomnia.rest/">Insomnia</a></li>
    <li><a href="https://expo.dev/">Expo IO</a></li>
  </ul>
</details>

<details>
  <summary><strong>Database</strong></summary>

  <ul>
    <li><a href="https://mongodb.com/">Mongo DB</a></li>
  </ul>
</details>

<details>
  <summary><strong>Integration</strong></summary>

  <ul>
    <li><a href="https://socket.io/">Socket IO</a></li>
    <li><a href="https://expressjs.com/">Express</a></li>
    <li><a href="https://axios-http.com/">Axios</a></li>
  </ul>
</details>

<details>
  <summary><strong>Back-End</strong></summary>

  <ul>
    <li><a href="https://nodejs.org/">Node JS</a></li>
  </ul>
</details>

<details>
  <summary><strong>Front-End</strong></summary>

  <ul>
    <li><a href="https://reactjs.org/">React JS</a></li>
  </ul>
</details>

<details>
  <summary><strong>Mobile</strong></summary>

  <ul>
    <li><a href="https://reactnative.dev/">React Native</a></li>
  </ul>
</details>

## EXECUTE

    - Clonar este repositório
    - Acessar o Back-End: "./backend"
		|- Instalar as dependências com o Comando: "npm install --force"
		|- Acessar o arquivo: "./backend/src/index.js:17" e verificar URL de Conexão com o Banco de Dados
			>_ Inicializar o Back-End com o Comando: "npm run dev"
	- Acessar o Front-End: "./frontend"
      	|- Instalar as dependências com o Comando: "npm install --force"
		|- Acessar o arquivo: "./frontend/src/pages/MomentsFeed.js:21" e atualizar o Endereço de Conexão dos WebSockets
		|- Acessar o arquivo: "./frontend/src/pages/MomentsFeed.js:50" e atualizar o Endereço de Conexão das Imagens
		|- Acessar o arquivo: "./frontend/src/services/api.js:4" e atualizar o Endereço de Conexão do Front-End
			>_ Inicializar o Front-End com o Comando: "npm start"
	- Acessar o Mobile: "./mobile"
      	|- Instalar as dependências com o Comando: "npm install --force"
		|- Acessar o arquivo: "./mobile/node_modules/expo/AppEntry.js:3" e atualizar o diretório de inicialização do Expo para: "../../src/index"
		|- Acessar o arquivo: "./mobile/src/pages/MomentsFeed.js:31" e atualizar o Endereço de Conexão dos WebSockets
		|- Acessar o arquivo: "./mobile/src/pages/MomentsFeed.js:60" e atualizar o Endereço de Conexão das Imagens
		|- Acessar o arquivo: "./mobile/src/services/api.js:4" e atualizar o Endereço de Conexão do Mobile
			>_ Inicializar o Mobile com o Comando: "expo start"

## AUTOR

Projeto desenvolvido durante a **Omni Stack Week 07** da <a href="https://rocketseat.com.br/">Rocketseat</a> ocorrida em **Junho de 2019**

## LICENÇA

Esse projeto está sob a **Licença MIT** veja o arquivo [LICENSE](https://github.com/alissonpratesperes/moments/blob/main/LICENSE) para mais detalhes

___

<p align="center">👨🏻‍💻&nbsp;with&nbsp;❤️</p>