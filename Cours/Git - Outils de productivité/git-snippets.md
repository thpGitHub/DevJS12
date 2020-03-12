# `Git` Snippets

- [`Git` Snippets](#git-snippets)
  - [Informations générales sur `Git`](#informations-g%c3%a9n%c3%a9rales-sur-git)
  - [Configuration](#configuration)
  - [Preparation](#preparation)
  - [Afficher des infos](#afficher-des-infos)
  - [Travailler dans un dépôt local](#travailler-dans-un-d%c3%a9p%c3%b4t-local)
  - [Annuler des révisions (_commits_)](#annuler-des-r%c3%a9visions-commits)
  - [Se déplacer dans un dépôt local](#se-d%c3%a9placer-dans-un-d%c3%a9p%c3%b4t-local)
  - [Branches](#branches)
  - [Stash (remise)](#stash-remise)
  - [Dépôt distant](#d%c3%a9p%c3%b4t-distant)
  - [Tags](#tags)

## Informations générales sur `Git`

Afficher la version installée de `Git`

```sh
git --version
```

Afficher l'aide de `Git`

```sh
git --help
```

## Configuration

Aide des commandes de configuration

```sh
git config --help
```

Afficher la configuration locale

```sh
git config --list
```

Configurer le nom

```sh
git config --global user.name <"name">
```

Configurer l'email

```sh
git config --global user.email <"email">
```

## Preparation

Initialiser un dépôt

```sh
git init
```

Cloner un dépôt distant

```sh
git clone <url> <dir>
```

## Afficher des infos

Afficher l'état de l'espace de travail et de l'index. Montre les fichiers non-suivis (`untracked`) en rouge, les fichiers modifiés (`modified`) en rouge et les fichiers indexés (`staged`) en vert.

```sh
git status
```

Afficher l'historique des commits

```sh
git log
git shortlog
```

Savoir quels fichiers sont suivis par Git

```sh
git ls-files
```

Afficher la différence entre le dernier commit et les fichiers modifiés mais NON INDEXÉS

```sh
git diff
```

Afficher la différence entre le dernier commit et les fichiers modifiés et INDEXÉS

```sh
git diff --staged
git diff --cached
```

## Travailler dans un dépôt local

```sh
git add file1 file2 file3
git add .
git add --all
```

```sh
git reset -- <file1> <file2> <file3>
```

```sh
git checkout -- <file1> <file2> <file3>
```

```sh
git rm <file1> <file2> <file3>
```

```sh
git commit -m <"message">
```

```sh
git commit --amend
```

## Annuler des révisions (_commits_)

Annuler toutes les révisions entre HEAD et un commit et placer les modifications correspondantes dans l'espace de travail

```sh
git reset --mixed <sha1>
```

Annuler toutes les révisions entre HEAD et un commit et placer les modifications correspondantes dans l'index

```sh
git reset --soft <sha1>
```

Annuler toutes les révisions entre HEAD et un commit et effacer les modifications

```sh
git reset --hard <sha1>
```

## Se déplacer dans un dépôt local

Passer à une autre branche

```sh
git checkout <branch-name>
```

Passer à un commit particulier

```sh
git checkout <commit-name>
```

## Branches

Lister les branches

```sh
git branch
```

Créer une branche

```sh
git branch <branch-name>
```

Supprimer une branche locale

```sh
git branch -d <branch-name>
```

## Stash (remise)

Sauvegarder le répertoire de travail dans la `stash`

```sh
git stash save
```

Voir la liste des `stashes`

```sh
git stash list
```

Sortir le dernier `stash` de la pile de stashes et l'appliquer au répertoire de travail.

```sh
git stash pop
```

Supprimer les dernier `stash`

```sh
git stash drop
```

Supprimer tous les `stashes`

```sh
git stash clear
```

## Dépôt distant

Afficher la liste des dépôts distants

```sh
git remote -v
```

Ajouter un dépôt distant avec un nom donné

```sh
git remote add <remote-name> <url>
```

Retirer un dépôt de la liste des dépôts distants

```sh
git remote remove <remote-name>
```

Télécharger les motidifications sur les branches distantes

```sh
git fetch <remote-name> <branch-name>
```

Télécharger les modifications et fusionner automatiquement dans les branches locales

```sh
git pull <remote-name> <branch-name>
```

Supprimer une branche distante

```sh
git push <origin-name> --delete <branch-name>
```

## Tags

Création d'un nouveau «tag» pour identifier la version 0.0.1 avec le message "Version 0.0.1"

```sh
git tag -a 0.0.1 -m "Version 0.0.1"
```

Lister les «tag» sur le projet et vérifier que notre nouveau «tag» est bien listé

```sh
git tag
```

Consulter le détail de la version correspondant à un «tag».

```sh
git show 0.0.1
```

Supprimer un «tag»

```sh
git tag -d 0.0.1
```
