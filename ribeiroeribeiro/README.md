# Advocacia DCL 

## Primeiros Passos

1. Instale o _Pug_ globalmente em seu computador executando `npm install -g pug-cli` no terminal;
2. Instale o _SASS_ globalmente em seu computador executando `npm install -g node-sass` no terminal;
3. Instale o _Git LFS_ em seu computador usando o método recomendado para o seu sistema operacional;

## Compilando

Para compilar os arquivos `.pug`, execute o seguinte comando com o terminal no diretório raiz do repositório:
  
`pug source/pug -o public -w -P`

Para compilar os arquivos `.sass`, execute o seguinte comando com o terminal no diretório raiz do repositório:

`sass source/sass:public/styles --watch`  