read -p "Enter a commit Text: " commite
if [ -d "./.git" ]; then 
	git add .
	git commit -m $commite
	git push
else
	git init
	git add .
	git commit -m $commit
	git branch -M main
	read -p "Enter a Github URL without https://: " url
	git remote add origin https://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@$url
fi
