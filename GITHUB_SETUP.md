# Instruções para Criar Repositório no GitHub

Execute os seguintes comandos no terminal PowerShell dentro do diretório do projeto:

## 1. Navegar para o diretório do projeto
```powershell
cd "C:\Users\Jão Dev\Documents\Doideras\GrowtXLp"
```

## 2. Inicializar Git (se ainda não foi feito)
```powershell
git init
```

## 3. Adicionar arquivos
```powershell
git add app/ components/ lib/ public/ *.json *.ts *.mjs *.md .gitignore README.md
```

## 4. Fazer commit inicial
```powershell
git commit -m "Initial commit: Growth X Landing Page"
```

## 5. Criar repositório no GitHub

### Opção A: Usando GitHub CLI (recomendado)
```powershell
gh repo create Growth_x_lp --public --source=. --remote=origin --push
```

### Opção B: Manualmente
1. Acesse https://github.com/new
2. Crie um novo repositório com o nome: **Growth_x_lp**
3. NÃO inicialize com README, .gitignore ou license
4. Execute os comandos:

```powershell
git remote add origin https://github.com/SEU_USUARIO/Growth_x_lp.git
git branch -M main
git push -u origin main
```

Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub.

## Pronto! 🎉

Seu repositório estará disponível em: `https://github.com/SEU_USUARIO/Growth_x_lp`
