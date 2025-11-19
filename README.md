# ⚙️ RI5 Soluções - Lista de Exercícios em TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Status](https://img.shields.io/badge/status-concluído%20(acadêmico)-green?style=for-the-badge)

Bem-vindo ao repositório **RI5**, que contém a solução completa para a quinta lista de exercícios do professor. Este projeto é notável por sua implementação em **TypeScript**, demonstrando o uso de tipagem estática e uma estrutura de código moderna e compilável.

O objetivo é aplicar conceitos avançados de programação, utilizando o *superset* TypeScript para garantir a segurança e a robustez do código antes da execução em tempo de *runtime* (Node.js).

---

## 🎯 Sobre o Projeto: Tipagem e Compilação
Ao contrário das listas anteriores, o `RI5` exige um fluxo de trabalho de desenvolvimento que inclui **compilação**:

* **Estrutura Organizada:** O código-fonte reside na pasta `src`, seguindo as melhores práticas de projetos Node/TS.
* **Configuração de Compilação:** O arquivo `tsconfig.json` define as regras de compilação do TypeScript, convertendo o código (`.ts`) para JavaScript puro (`.js`) na pasta de saída (geralmente `dist`).
* **Tipagem Estática:** O uso de TypeScript força a verificação de tipos em tempo de desenvolvimento, prevenindo erros comuns de JavaScript e melhorando a qualidade do código.

---

## ✨ Conceitos Abordados
Esta lista de exercícios se concentra em conceitos avançados que são aprimorados pelo TypeScript:

* **Tipagem Estática:** Declaração explícita de tipos de dados para variáveis, parâmetros e retornos de funções.
* **Interfaces e Tipos:** Definição de contratos de dados (`Interfaces` ou `Types`) para modelagem de entidades.
* **Classes e POO:** Utilização da sintaxe de classes modernas (`class`) com modificadores de acesso (público, privado).
* **Módulos:** Uso de `import/export` para organizar a lógica em arquivos separados dentro da pasta `src`.
* **Ambiente Node.js:** Configuração e execução do código compilado no ambiente Node.js.

---

## 💻 Tecnologias Utilizadas
* **[TypeScript](https://www.typescriptlang.org/):** Linguagem principal, que adiciona tipagem estática ao JavaScript.
* **[Node.js](https://nodejs.org/):** Ambiente de execução.
* **NPM / Yarn:** Gerenciamento de dependências.

---

## 🔧 Pré-requisitos
Antes de começar, certifique-se de ter:
-   **Node.js** (versão 16.x ou superior).
-   **NPM** (vem com o Node.js).
-   **TypeScript Compiler** (instalado via `npm`).

---

## 🚀 Manual de Instalação e Execução

O projeto requer a instalação de dependências e a etapa de compilação antes da execução:

```bash
# 1. Clone o repositório
git clone [https://github.com/Templasan/RI5.git](https://github.com/Templasan/RI5.git)

# 2. Acesse o diretório
cd RI5

# 3. Instale as dependências (TypeScript e possivelmente tipos @types/node)
npm install

# 4. Compile o código TypeScript para JavaScript
# Este comando deve ser definido no seu package.json (ex: "build": "tsc")
npm run build 

# 5. Execute o script compilado
node dist/index.js
