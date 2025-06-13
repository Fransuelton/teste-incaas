# 📊 Cadastro de Partes e Consulta de Processos Judiciais – DataJud CNJ

Projeto desenvolvido como parte de um **desafio técnico**, com o objetivo de criar uma aplicação Angular para **cadastro de partes interessadas** e **consulta de processos judiciais** através da **API pública do CNJ (DataJud)**.

## 🚀 Funcionalidades Implementadas

### 1. 👤 Cadastro de Partes Interessadas
- Formulário com os campos:
  - Nome completo
  - Tipo de pessoa (Física ou Jurídica)
  - CPF ou CNPJ (com validação)
  - E-mail
- Validações de formulário com feedback visual
- Listagem das partes cadastradas em uma tabela
- Funcionalidades de **editar** e **remover**
- **Persistência local** via `localStorage`

### 2. 🔎 Consulta de Processos via API do CNJ
- Consumo da API pública do DataJud (endpoint TRF1 usado como exemplo)
- Exibição em tabela dos seguintes dados:
  - Código da Unidade
  - Assuntos principais
  - Classe Judicial
  - Grau de jurisdição
  - Tipo de Justiça (Estadual ou Federal)
- Filtros dinâmicos:
  - Por **grau de jurisdição**
  - Por **tipo de justiça**
- Ordenação por **número de processos**
- Tratamento de erro com mensagem amigável ao usuário em caso de falha na requisição

### 3. 📄 Detalhamento da Unidade
- Ao clicar em uma linha da tabela de processos, os dados da unidade são exibidos em um **modal**.

### 4. 🎨 Interface e Navegação
- Estilo com **Tailwind CSS**
- Interface **responsiva**
- Layout com:
  - **Home**
  - **Cadastro**
  - **Consulta**
  - **Header fixo**
  - **Footer fixo com cor institucional**
- Utilização de ícones e cores similares ao **CNJ/DataJud**
- Favicon oficial do CNJ

---

## 📌 Decisões de Implementação

- O uso de Tailwind CSS permitiu prototipação rápida e responsiva.
- A estrutura de serviços (DataJudService) separa a lógica de API, garantindo maior organização e testabilidade.
- O filtro e ordenação foram aplicados no frontend, pois o endpoint consumido não oferece esses recursos via query parameters.

## 🛠️ Tecnologias Utilizadas

| Tecnologia        | Uso |
|-------------------|-----|
| Angular 20       | Estrutura principal da aplicação |
| Angular Router    | Navegação entre páginas |
| Reactive Forms    | Formulário reativo com validações |
| HttpClient        | Consumo de API |
| Tailwind CSS      | Estilização da interface |
| TypeScript        | Tipagem e lógica |
| localStorage      | Persistência local dos cadastros |

## 🛡️ CORS e Proxy

A API do CNJ não permite requisições diretas do navegador devido às restrições de CORS (Cross-Origin Resource Sharing). Isso impede que o front-end Angular acesse diretamente a API, pois navegadores bloqueiam chamadas para domínios diferentes que não estejam explicitamente autorizados pelo servidor.

### ✅ Solução Implementada

Para contornar essa limitação durante o desenvolvimento, foi utilizado o recurso de proxy reverso do Angular. Isso permite que o Angular redirecione localmente as chamadas para a API como se fossem feitas ao mesmo domínio de origem.

### 🔧 Configuração do Proxy

O proxy foi configurado no arquivo `proxy.conf.json` com:

```json
{
  "/api": {
    "target": "https://api-publica.datajud.cnj.jus.br",
    "secure": true,
    "changeOrigin": true,
    "pathRewrite": {
      "^/api": ""
    }
  }
}
```

Com essa configuração:

- Qualquer requisição feita para /api/... será redirecionada para o endpoint real do CNJ.
- Exemplo: /api/api_publica_trf1/_search será transformado em https://api-publica.datajud.cnj.jus.br/api_publica_trf1/_search.

## 📁 Estrutura de Pastas (resumida)

```
src/
├── app/
│   ├── components/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── home/
│   │   ├── listing/
│   │   ├── listing-modal/
│   │   ├── registration/
│   ├── services/
│   │   └── data-jud.ts
│   │   └── mask.ts
│   └── app.routes.ts
│   └── app.html
│   └── app.ts
```

## 📌 Rotas da Aplicação

| Caminho                    | Componente         | Descrição                                 |
|---------------------------|--------------------|-------------------------------------------|
| `/`                       | `HomeComponent`    | Página inicial com botões de navegação    |
| `/partes-interessadas`    | `Registration`     | Cadastro e listagem de partes interessadas |
| `/consulta-processos`     | `Listing`          | Consulta à API do CNJ                     |

---

## 🔧 Instalação e Execução Local

### Pré-requisitos:
- Node.js (v16 ou superior)
- Angular CLI

### Passos:

1. Clone o repositório:

```bash
git clone git@github.com:Fransuelton/teste-incaas.git
```
2. Navegue até o diretório do projeto:

```bash
cd datajud-cnj-angular
```
3. Instale as dependências:

```bash
npm install
```
4. Execute o servidor de desenvolvimento:

```bash
ng serve
```
5. Acesse a aplicação no navegador:

```
http://localhost:4200
```

---

## 🌐 API Utilizada

- **API Pública do CNJ – DataJud**  
  Documentação: [https://datajud-wiki.cnj.jus.br/api-publica/endpoints](https://datajud-wiki.cnj.jus.br/api-publica/endpoints)

## 📄 Licença

Este projeto é apenas para fins de avaliação técnica e aprendizado.

## 👨‍💻 Autor

![](./.github/readme/author-card.png)