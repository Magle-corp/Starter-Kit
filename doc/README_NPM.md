# Starter-Kit

Starter-Kit par Magle-corp.

🔤 TypeScript  🚀 Next.js  🎩 Strapi.js  🏗 MySQL  📋 PhpMyAdmin  🐋 Docker 🧪 Jest

___

## A propos

[NPM package](https://www.npmjs.com/package/@magle-corp/starter)

## Requis

Assurez-vous que les ports suivants sont disponibles :
- 3000 Next.js
- 1337 Strapi
- 3306 MySQL
- 8081 PhpMyAdmin

## Installation

```bash
npx @magle-corp/starter <nom_du_projet>
cd <nom_du_projet>
cp .env.example .env
docker-compose up
```

## Enjoy

- Next app disponible [http://localhost:3000](http://localhost:3000)
- Strapi app disponible [http://localhost:1337](http://localhost:1337)
- PhpMyAdmin disponible [http://localhost:8081](http://localhost:8081)

## GitHub actions

Les parties Next.js et Strapi utilisent des Github actions pour les tests et le déploiement.

Veillez à décommenter ces actions et créer les Github repository secrets nécessaires.

| Secret   | Description                                                         |    
|----------|---------------------------------------------------------------------|
| SSH_PRIVATE_KEY | La clé SSH privée de la machine distante                            |
| STAGING_HOST | Le host de la machine distance                                      |
| STAGING_SERVER | L'adresse serveur de la machine distante                            |
| STAGING_PROJECT_FOLDER | Le chemin du dossier projet de la machine distante                  |
| STAGING_COVERAGE_FOLDER | Le chemin du dossier destiné à accueillir le code coverage statique |
| PROCESS_NAME | Le nom du processus à redémarrer                                    |
