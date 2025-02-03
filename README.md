# Speak Chat

Speak Chat é um chatbot integrado ao ChatGPT, desenvolvido com Next.js, NextAuth e Tailwind CSS.

## Tecnologias Utilizadas

- **Next.js** - Framework React para desenvolvimento web.
- **NextAuth** - Autenticação segura e fácil de implementar.
- **Tailwind CSS** - Estilização rápida e responsiva.
- **OpenAI API** - Integração com o ChatGPT para respostas inteligentes.

## Funcionalidades

- Autenticação de usuários com NextAuth.
- Interface responsiva e moderna com Tailwind CSS.
- Integração com a API da OpenAI para respostas dinâmicas.
- Histórico de conversações.

## Como Executar o Projeto

### 1. Clone o Repositório
```sh
  git clone https://github.com/seu-usuario/speak-chat.git
  cd speak-chat
```

### 2. Instale as Dependências
```sh
  npm install
  # ou
  yarn install
```

### 3. Configure as Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:
```sh
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=seu_segredo
OPENAI_API_KEY=sua_chave_da_openai
```

### 4. Inicie o Servidor de Desenvolvimento
```sh
  npm run dev
  # ou
  yarn dev
```

O projeto estará disponível em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias e novas funcionalidades! Para isso:
1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Envie um push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---
Desenvolvido por [Seu Nome](https://github.com/RodrigoNet0) 🚀
