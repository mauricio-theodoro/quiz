
# Quiz de Programação

Este é um aplicativo de quiz de programação desenvolvido com React, usando um gerenciamento de estado baseado em `useReducer`. O jogo envolve uma série de perguntas e respostas, e o objetivo é acertar o máximo de questões possível.

## Funcionalidades

- **Início do jogo**: O jogo começa com uma tela de boas-vindas e um botão para iniciar.
- **Perguntas embaralhadas**: As perguntas são embaralhadas automaticamente no início do jogo para garantir diversidade nas rodadas.
- **Respostas interativas**: O usuário seleciona uma resposta e recebe feedback imediato sobre a correção da opção escolhida.
- **Pontuação**: O app calcula e exibe a pontuação do usuário com base nas respostas corretas.
- **Tela de Fim de Jogo**: Após responder todas as perguntas, a pontuação é exibida e o usuário pode reiniciar o jogo.
- **Controle de fluxo**: O jogo segue uma sequência de estágios, com transições de "Início", "Jogo" e "Fim".

## Como rodar o projeto

Para rodar o projeto localmente, siga os passos abaixo:

### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/quiz-programacao.git
```

### 2. Navegue até o diretório do projeto

```bash
cd quiz-programacao
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm start
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura de pastas

A estrutura do projeto é organizada da seguinte forma:

```
├── public/
│   └── index.html
├── src/
│   ├── components/        # Componentes React
│   ├── context/           # Contexto do quiz
│   ├── data/              # Dados de perguntas
│   ├── styles/            # Estilos do projeto
│   ├── App.js             # Componente principal
│   └── index.js           # Ponto de entrada do aplicativo
├── package.json           # Dependências e scripts do projeto
└── README.md              # Documentação do projeto
```

## Tecnologias utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **useReducer**: Hook do React para gerenciamento de estado mais complexo.
- **CSS**: Estilos do projeto.
- **JavaScript**: Lógica e manipulação do estado e comportamento do quiz.

## Contribuições

Sinta-se à vontade para contribuir com o projeto! Caso queira contribuir, faça um fork do repositório e envie um pull request com as melhorias ou correções.

### Passos para contribuição:

1. Faça um fork deste repositório.
2. Crie uma nova branch (`git checkout -b minha-nova-feature`).
3. Realize suas alterações e faça commit (`git commit -am 'Adiciona nova feature'`).
4. Envie para o repositório remoto (`git push origin minha-nova-feature`).
5. Abra um pull request explicando suas modificações.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

