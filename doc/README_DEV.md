# Installation du Starter Kit dev

Créer une instance du Starter Kit pour son dévelopement.

Cette instance comprendra les projets :
- [Starter Kit](https://github.com/Magle-corp/Starter-Kit) 
- [Starter Next](https://github.com/Magle-corp/Starter-Next)
- [Starter Strapi](https://github.com/Magle-corp/Starter-Strapi)

Chaque projet est versionné individuellement, les parties Next et Strapi sont des sous-modules git.

___

## Requis

Assurez-vous que les ports suivants sont disponibles :
- 3000
- 1337
- 3306
- 8081

D'après le site web de Docker, votre utilisateur doit être dans le groupe Docker.

```shell
sudo usermod -aG docker your-user
```

## Installer le projet

```shell
git clone git@github.com:Magle-corp/Starter-Kit.git
cd Starter-Kit
git submodule init
git submodule update
```

Lancer Docker.
```shell
cp .env.example
docker-compose up
```

## Enjoy
- Next app disponible [http://localhost:3000](http://localhost:3000)
- Strapi app disponible [http://localhost:1337](http://localhost:1337)
- PhpMyAdmin disponible [http://localhost:8081](http://localhost:8081)

