# Charada do Dia

Este projeto web apresenta uma charada diferente a cada vez que a página é carregada. O usuário pode tentar adivinhar a resposta e, em seguida, revelá-la ou solicitar uma nova charada.

## Índice

* [Funionalidades](#funcionalidades)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Como Usar](#como-usar)


## Conteúdo

Este projeto é composto por três arquivos principais:

* `index.html`: A estrutura HTML da página web, incluindo a apresentação da charada, o campo de entrada para a resposta e os botões de ação. Utiliza Tailwind CSS para estilização.
* `style.css`: Contém estilos CSS adicionais para complementar o Tailwind CSS, embora neste caso, os estilos sejam mínimos.
* `script.js`: A lógica JavaScript para buscar a charada de uma API, exibir a pergunta, verificar a resposta do usuário e revelar a solução.

## Funcionalidades

* **Charada Aleatória:** Ao carregar a página, uma nova charada é buscada de uma API (presumivelmente rodando localmente em `http://127.0.0.1:5000/charadas`).
* **Entrada de Resposta:** Um campo de texto permite que o usuário digite sua tentativa de resposta.
* **Revelar Resposta:** Ao clicar no botão "Ver resposta", a resposta correta é exibida. Se a resposta do usuário estiver correta (ignorando espaços e pontos, e em caixa baixa), uma mensagem de acerto em verde é mostrada. Caso contrário, uma mensagem de erro em vermelho com a resposta correta é exibida. O campo de entrada é desabilitado após a revelação.
* **Próxima Charada:** O botão "Próxima Charada" recarrega a página, buscando e exibindo uma nova charada.

## Tecnologias Utilizadas

* ![image](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
* ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
* ![image](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Como Usar

1.  Salve os arquivos `index.html`, `style.css` e `script.js` no mesmo diretório.
2.  Abra o arquivo `index.html` no seu navegador web.
3.  Uma charada será exibida. Digite sua resposta no campo de texto.
4.  Clique em "Ver resposta" para ver se você acertou.
5.  Clique em "Próxima Charada" para obter uma nova charada.

**Observação:** Certifique-se de que a API de charadas esteja rodando no endereço especificado para que o script funcione corretamente.
