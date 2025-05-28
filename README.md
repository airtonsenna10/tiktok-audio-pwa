
# TikTok Audio Converter PWA

Uma aplicação Progressive Web App (PWA) em Node.js que converte vídeos do TikTok em arquivos de áudio (.mp3).

## 🚀 Funcionalidades
- Upload de vídeos locais.
- Conversão automática para áudio usando FFmpeg.
- Download do arquivo convertido.
- Funciona como PWA (pode ser instalada no celular ou desktop).

## 🛠️ Tecnologias utilizadas
- Node.js + Express
- Multer (upload de arquivos)
- Fluent-ffmpeg (conversão de vídeo para áudio)
- HTML, CSS e JavaScript (Frontend PWA)

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/tiktok-audio-pwa.git
cd tiktok-audio-pwa
```

2. Instale as dependências:

```bash
npm install
```

3. Certifique-se de que o `ffmpeg` está instalado no sistema.

4. Crie as pastas `uploads/` e `audios/` na raiz do projeto:

```bash
mkdir uploads audios
```

5. Inicie a aplicação:

```bash
npm start
```

6. Acesse via navegador: [http://localhost:3000](http://localhost:3000)

## 📲 Instalação PWA

- Ao acessar pelo navegador, será possível instalar o app como PWA no dispositivo.

## ⚠️ Observação

Para melhorar o sistema:
- Implementar input de URL do TikTok para download automático.
- Melhorar validação de arquivos.

## 📄 Licença

MIT
