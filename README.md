Desafio Front-End – Tabela de Funcionários

Esta aplicação foi desenvolvida para exibir uma tabela (ou lista) de funcionários com os seguintes dados:

    Imagem (thumb do/a usuário/a)
    Nome
    Cargo
    Data de Admissão
    Telefone

Além disso, o projeto permite a pesquisa na tabela por meio de um input, filtrando os funcionários por cargo, nome e telefone. As formatações de datas e telefones são realizadas no front-end.

A aplicação possui um layout responsivo com abordagem mobile-first, onde no mobile os dados são apresentados em formato de cards com accordion e, no desktop, são exibidos em um layout de tabela alinhada.
Pré-requisitos

Para rodar o projeto, você precisará ter instalado em sua máquina:

    Git – para clonar o repositório.
    Node.js – versão recomendada 14 ou superior.
    Bun – para gerenciamento e execução dos scripts (utilizando Vite + Bun).
    Yarn ou outro gerenciador de pacotes (opcional, conforme sua preferência).
    json-server – para simular a API (pode ser instalado globalmente ou utilizado via npx/yarn).

Instruções para Rodar a Aplicação

    Clone o repositório

git clone <link-do-repositorio>
cd <nome-da-pasta-do-projeto>

Instale as dependências

Se estiver utilizando Bun:

bun install

Ou, alternativamente, se preferir Yarn ou npm:

yarn install
# ou
npm install

Inicie o json-server

O arquivo db.json que simula a API está localizado na raiz do projeto. Para iniciá-lo, execute:

json-server --watch db.json

Caso encontre problemas, tente:

npx json-server --watch db.json

ou

yarn json-server --watch db.json

Inicie a aplicação

Se estiver utilizando Bun com Vite:

bun run dev

Ou, se estiver utilizando outro gerenciador:

    yarn dev
    # ou
    npm run dev

    Acesse a aplicação

    Abra seu navegador e acesse a URL indicada no terminal (geralmente http://localhost:3000 ou http://localhost:5173).

Estrutura do Projeto

    /src: Contém os componentes React, estilos (CSS/Module CSS) e demais arquivos do front-end.
    db.json: Arquivo de dados utilizado pelo json-server para simulação da API.
    README.md: Este arquivo com as informações sobre o projeto, pré-requisitos e instruções para rodar a aplicação.

Tecnologias Utilizadas

    React.js – Biblioteca para construção da interface.
    Vite – Ferramenta de build e desenvolvimento rápido.
    Bun – Ambiente de execução e gerenciamento de pacotes.
    TypeScript – (Opcional) Utilizado para melhorar a robustez do código.
    json-server – API simulada para fornecer os dados dos funcionários.
    CSS Modules – Para escopo e organização dos estilos.

Considerações Finais

    Responsividade: O layout foi desenvolvido com abordagem mobile-first, garantindo uma ótima experiência tanto em dispositivos móveis quanto em desktops.
    Pesquisa: A barra de pesquisa permite filtrar os dados exibidos na tabela/carta em tempo real, considerando os campos de cargo, nome e telefone.
    Formatação: Datas e telefones são formatados no front-end para exibição adequada.
