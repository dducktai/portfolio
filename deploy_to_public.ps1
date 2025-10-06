# deploy_to_public.ps1
$BUILD_DIR = "D:\Technology\Portfolio\build"
$DEPLOY_REPO = "https://github.com/<YOUR_USERNAME>/portfolio-deploy.git"
$BRANCH = "gh-pages"

if (-not (Test-Path $BUILD_DIR)) {
    Write-Error "Không tìm thấy build folder: $BUILD_DIR"
    exit 1
}

Set-Location $BUILD_DIR

git init
git checkout -B $BRANCH
git add -A
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git remote remove origin -ErrorAction SilentlyContinue
git remote add origin $DEPLOY_REPO
git push -u origin $BRANCH --force

Write-Host "Đã deploy xong."
