___
<p align="center"> <img src="github/moments_logo.png" width="50%"></p>
<br/>
<p align="center">
<img alt="Course Event" src="https://img.shields.io/badge/omnistack-week%207-%23000000"/>
<img alt="GitHub Language Count" 		  src="https://img.shields.io/github/languages/count/alissonpratesperes/moments?color=000000"/>
<a href="https://github.com/alissonpratesperes/moments/search?l=javascript"><img alt="Top Language" src="https://img.shields.io/github/languages/top/alissonpratesperes/moments?color=000000"/></a>
<img alt="GitHub Repository Size" src="https://img.shields.io/github/repo-size/alissonpratesperes/moments?color=000000">
<img alt="GitHub Code Size" src="https://img.shields.io/github/languages/code-size/alissonpratesperes/moments?color=000000"/>
<a href="https://github.com/alissonpratesperes/moments/commits/main">
<img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/alissonpratesperes/moments?color=000000"></a>
<a href ="https://github.com/alissonpratesperes/moments/blob/main/LICENSE"> <img alt="GitHub License" src="https://img.shields.io/badge/license-MIT-000000"/> 
</p>
<br/>
<p align="center">
<a href="#dart-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#battery-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#electric_plug-execute">Execute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#fuelpump-autor">Autor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#memo-licença">Licença</a>
</p>
<br/>

<p align="center"> <img src="github/moments_dashboard.png" width="100%"> </p>

## :dart: Sobre
A **Moments** é uma Aplicação inspirada no Instagram. Compartilhe seus melhores momentos e receba likes de quem visualizar, em tempo real, pelo Computador ou Smartphone.

## :battery: Tecnologias
Essa Aplicação foi desenvolvida utilizando as seguintes tecnologias:

- <a href="https://insomnia.rest/">Insomnia</a>
- <a href="https://www.mongodb.com/">Mongo DB</a>
- <a href="https://nodejs.org/">NodeJS</a>
- <a href="https://socket.io/">Socket IO</a>
- <a href="https://reactjs.org/">ReactJS</a>
- <a href="https://axios-http.com/">Axios</a>
- <a href="https://expo.dev/">Expo IO</a>
- <a href="https://reactnative.dev/">React Native</a>

## :electric_plug: Execute

	- Clonar o Repositório;
	- Instalar as Dependências do Back-End com o Comando: "npm install";
		|- "./backend/src/index.js:17" - Verificar URL de conexão com o MongoDB;
			>_ Inicializar o Back-End com o Comando: "npm run dev";
	- Instalar as Dependências do Front-End com o Comando: "npm install";
		|- "./frontend/src/pages/MomentsFeed.js:21" - Atualizar o Endereço de conexão dos WebSockets;
		|- "./frontend/src/pages/MomentsFeed.js:50" - Atualizar o Endereço de conexão para as Imagens;
		|- "./frontend/src/services/api.js:4" - Alterar o Endereço de Conexão do Front-End;
			>_ Inicializar o Front-End com o Comando: "npm start";
	- Instalar as Dependências do Mobile com o Comando: "npm install --force";
		|- "./mobile/node_modules/expo/AppEntry.js:3" - Alterar o diretório de inicialização do Expo para : "../../src/index";
		|- "./mobile/src/pages/MomentsFeed.js:31" - Atualizar o Endereço de conexão dos WebSockets;
		|- "./mobile/src/pages/MomentsFeed.js:60" - Atualizar o Endereço de conexão para as Imagens;
		|- "./mobile/src/services/api.js:4" - Alterar o Endereço de Conexão do Mobile;
			>_ Inicializar o Mobile com o Comando: "expo start".
		

## :fuelpump: Autor

Projeto desenvolvido durante a **Semana OmniStack 7** da <a href="https://rocketseat.com.br/">Rocketseat</a>, ocorrida em **Junho de 2019**.

## :memo: Licença

Esse projeto está sob a **Licença MIT**. Veja o arquivo [LICENSE](https://github.com/alissonpratesperes/moments/blob/main/LICENSE) para mais detalhes.

---

<h5 align="center">👨🏻‍💻&nbsp;com&nbsp;💜&nbsp;por&nbsp;<a href="https://github.com/alissonpratesperes">Alisson Prates Peres</a>&nbsp;✌🏻😗</h5>
