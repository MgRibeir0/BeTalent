
# Teste prático BeTalent

Desafio Front-End – Tabela de Funcionários

Esta aplicação foi desenvolvida para exibir uma tabela de funcionários com os seguintes dados:

    Imagem (thumb do/a usuário/a)
    Nome
    Cargo
    Data de Admissão
    Telefone

Além disso, o projeto permite a pesquisa na tabela por meio de um input, filtrando os funcionários por cargo, nome e telefone. As formatações de datas e telefones são realizadas no front-end.

A aplicação possui um layout responsivo com abordagem mobile-first, onde no mobile os dados são apresentados em formato de cards com accordion e, no desktop, são exibidos em um layout de tabela alinhada.

# Pré-requisitos

Para rodar o projeto, você precisará ter instalado em sua máquina:

- Git – para clonar o repositório.

- Node.js – versão recomendada 18 ou superior.

- [Bun](https://bun.sh/) (ou algum outro gerenciador de pacotes como npm ou yarn)

- Json-server – `bun add json-server` (ou com outros gerenciadores de pacote)
# Instruções para Rodar a Aplicação

1. Clone o repositório

```
git clone https://github.com/MgRibeir0/BeTalent.git
cd BeTalent
```

2. Instale as dependências

Se estiver usando bun:

`bun install`

Ou, alternativamente, se preferir Yarn ou npm:

```
yarn install
# ou
npm install
```

3. Inicie o json-server

`json-server --watch db.json`

Caso tenha problemas, use um gerenciador de pacotes:

Bun (Recomendado):

`bunx json-server --watch db.json`

npx:

`npx json-server --watch db.json`

yarn:

`yarn json-server --watch db.json`

4. Inicie a Aplicação

`bun run dev`

Ou, se estiver usando outro gerenciador:

```
npm run dev
# ou
yarn dev
```

5. Acesse a aplicação

Normalmente, ela estará na porta 5173:

`http://localhost:5173`

Caso a porta esteja ocupada, confira o terminal.


---

# Estrutura do projeto

- public/: Aqui vivem todos os arquivos que serão utilizados pela aplicação e necessitam de acesso direto e sem compilação. (E.g. favicon)

- /src: Aqui é onde vive o código React do projeto, aqui estão os componentes, estilos e tipos

- /src/components: Aqui estão todos os componentes React que compõem o site. Cada componente possui um arquivo .tsx e um aquivo .module.css

- /src/styles: Arquivos css globais e não específicos, como o reset do css e estilos globais.

---

# Tecnologias Utilizadas

- React.js – Biblioteca para construção da interface.
- Typescript – Superset do Javascript que permite a inserção de tipos para garantir a consistencia dos dados.
- Vite – Ferramenta de build e desenvolvimento rápido.
- Bun – Gerenciador de pacotes moderno e ultra veloz escrito em Rust.
- json-server – Pacote para servir os dados .json como uma API.
- CSS Modules – Para escopo e organização dos estilos de maneira local, sem sobrescrever outros estilos.