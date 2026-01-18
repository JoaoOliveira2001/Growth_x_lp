# Navegar para o diretório do projeto
$projectPath = "C:\Users\Jão Dev\Documents\Doideras\GrowtXLp"
Set-Location $projectPath

# Remover .git se existir
if (Test-Path .git) {
    Remove-Item -Path .git -Recurse -Force
}

# Inicializar git
git init

# Adicionar arquivos do projeto
git add app/ components/ lib/ public/ *.json *.ts *.mjs *.md .gitignore

# Fazer commit inicial
git commit -m "Initial commit: Growth X Landing Page"

# Verificar se GitHub CLI está instalado
$ghInstalled = Get-Command gh -ErrorAction SilentlyContinue

if ($ghInstalled) {
    Write-Host "GitHub CLI encontrado. Criando repositório..."
    gh repo create Growth_x_lp --public --source=. --remote=origin --push
} else {
    Write-Host "GitHub CLI não encontrado. Execute os seguintes comandos manualmente:"
    Write-Host "1. Crie o repositório 'Growth_x_lp' no GitHub"
    Write-Host "2. Execute: git remote add origin https://github.com/SEU_USUARIO/Growth_x_lp.git"
    Write-Host "3. Execute: git branch -M main"
    Write-Host "4. Execute: git push -u origin main"
}
