# Starter-Kit

Starter-Kit par Magle-corp.

🔤 TypeScript  🚀 Next.js  🎩 Strapi.js  🏗 MySQL  📋 PhpMyAdmin  🐋 Docker 

Intègre le design system [Starter-UI](https://github.com/Magle-corp/Starter-UI) 🎉 [consulter le book](http://storybook.magle-staging.ovh)

___

## Requis

Assurez-vous que les ports suivants sont disponibles :
- 3000
- 1337
- 3306
- 8081

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
