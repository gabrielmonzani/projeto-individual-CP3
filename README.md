# CP1 — Site pessoal de Gabriel

Site pessoal com 5 páginas estáticas (HTML5 + CSS3), desenvolvido como Checkpoint 1.

⚠️ **Antes de entregar:** renomeie a pasta do projeto para `CP1_Gabriel_[SeuSobrenome]_[Turma]`,
substituindo `TURMA` pelo nome/código real da sua turma.

## Estrutura

```
CP1_Gabriel_Monzani_TURMA/
├── index.html         → quem eu sou, avatar, resumo de interesses
├── curriculo.html      → formação, projetos, tabela de habilidades
├── formulario.html     → formulário de contato (8 tipos de campo)
├── multimidia.html     → vídeo, áudio e mapa incorporado (iframe)
├── graficos.html        → gráfico em <canvas> e diagrama em SVG
├── css/
│   └── estilos.css      → folha de estilos externa, usada por todas as páginas
├── img/
│   └── avatar.jpg        → foto de perfil usada na página inicial
└── README.md
```

## Como abrir

Basta abrir `index.html` em qualquer navegador — não precisa de servidor nem de instalação.
Todos os links entre páginas e o link do CSS usam **caminhos relativos**, então a pasta
funciona igual em qualquer computador, inclusive depois de extrair o `.zip`.

## Decisões de design

- **Paleta:** verde-escuro (`#2f6f4e` / `#1f4e36`) para transmitir tecnologia e crescimento,
  âmbar (`#c8862b`) como cor de destaque, sobre um fundo neutro (`#f2f1ec`).
- **Tipografia:** Space Grotesk nos títulos, IBM Plex Sans no texto corrido e IBM Plex Mono
  em rótulos técnicos (menu, tabelas, campos do formulário) — remetendo ao universo de
  desenvolvimento e automação que é o tema do site.
- **Cartões:** bordas finas com uma barra lateral colorida (em vez de sombra), para um visual
  mais "painel técnico" do que um template genérico.

## Mídia usada

- Vídeo e áudio de exemplo (domínio público / CC0) vêm da MDN
  (`interactive-examples.mdn.mozilla.net`), usados para demonstrar os elementos
  `<video>` e `<audio>` com `controls` — o YouTube não fornece um arquivo `.mp4`/`.mp3`
  direto, então essas duas tags continuam usando arquivos reais.
- O `<iframe>` incorpora o vídeo do YouTube indicado pelo autor.

## Conteúdo

Todo o texto sobre formação, projetos (SalesLens, Monzani & Gomes, análise de dados,
AutoCuida) e habilidades é baseado na experiência real do autor.

## Checklist antes de enviar

- [ ] Pasta renomeada com sobrenome e turma reais
- [ ] Extraí o `.zip` em outra pasta e abri `index.html` — nada quebrou
- [ ] Validei cada página no W3C Markup Validator
- [ ] Não há caminhos `C:\...` ou `file:///...` em nenhum link/imagem
- [ ] Pasta `.git`, arquivos temporários e executáveis não estão incluídos no `.zip`
