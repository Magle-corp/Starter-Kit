#!/usr/bin/env node
const { execSync } = require("child_process");

// Stop process if the project name is not specified.
if (!process.argv[2]) {
  console.log(
    "Please specify a project name : npx @magle-corp/starter-kit <project_name>"
  );
}

const project_name = process.argv[2];

// Execute shell commands.
const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (err) {
    console.error(`Failed to execute ${command}`, err);
    return false;
  }
  return true;
};

// Clone Starter-Kit repository.
console.log(`[1/6] Cloning Starter-Kit repository as ${project_name}`);
const clone_starter_kit = `git clone git@github.com:Magle-corp/Starter-Kit.git ${project_name}`;
const result_clone_starter_kit = runCommand(clone_starter_kit);
if (!result_clone_starter_kit) process.exit(-1);

// Clone Starter-Next repository.
console.log(
  `[2/6] Cloning Starter-Next repository as ${project_name}/${project_name}-next`
);
const clone_starter_next = `git clone git@github.com:Magle-corp/Starter-Next.git ${project_name}/${project_name}-next`;
const result_clone_starter_next = runCommand(clone_starter_next);
if (!result_clone_starter_next) process.exit(-1);

// Clone Starter-Strapi repository.
console.log(
  `[3/6] Cloning Starter-Strapi repository as ${project_name}/${project_name}-strapi`
);
const clone_starter_strapi = `git clone git@github.com:Magle-corp/Starter-Strapi.git ${project_name}/${project_name}-strapi`;
const result_clone_starter_strapi = runCommand(clone_starter_strapi);
if (!result_clone_starter_strapi) process.exit(-1);

// Set APP_NAME_FRONT env variable.
const result_sed_app_name_front = runCommand(
  `sed -i "s/Starter-Next/${project_name}-next/g" ${project_name}/.env.example`
);
if (!result_sed_app_name_front) {
  process.exit(-1);
}

// Set APP_NAME_BACK env variable.
const result_sed_app_name_back = runCommand(
  `sed -i "s/Starter-Strapi/${project_name}-strapi/g" ${project_name}/.env.example`
);
if (!result_sed_app_name_back) {
  process.exit(-1);
}

// Replace README.md by README_PROD.md.
const result_mv = runCommand(
  `mv ${project_name}/doc/README_PROD.md ${project_name}/README.md`
);
if (!result_mv) {
  process.exit(-1);
}

// Replace "Starter-Kit" by project_name in listed files.
console.log(`[4/6] Set the project name "${project_name}"`);
const files_to_update = [
  ".env.example",
  "README.md",
  `${project_name}-next/README.md`,
  `${project_name}-strapi/README.md`,
];
files_to_update.forEach((file) => {
  const result = runCommand(
    `sed -i "s/Starter-Kit/${project_name}/g" ${project_name}/${file}`
  );
  if (!result) {
    process.exit(-1);
  }
});

// Replace "Starter-Kit" in Next Git actions.
const set_next_git_actions = runCommand(
  `sed -i "s/Starter-Kit-next/${project_name}-next/g" ${project_name}/${project_name}-next/.github/workflows/deploy.yml`
);
if (!set_next_git_actions) {
  process.exit(-1);
}

// Replace "Starter-Kit" in Strapi Git actions.
const set_strapi_git_actions = runCommand(
  `sed -i "s/Starter-Kit-strapi/${project_name}-strapi/g" ${project_name}/${project_name}-strapi/.github/workflows/deploy.yml`
);
if (!set_strapi_git_actions) {
  process.exit(-1);
}

// Remove unnecessary files for development project.
console.log(`[5/6] Remove unnecessary files`);
const files_to_remove = [
  "package.json",
  ".git",
  "doc",
  `${project_name}-next/.git`,
  `${project_name}-strapi/.git`,
  "Starter-Next",
  "Starter-Strapi",
];
files_to_remove.forEach((file) => {
  const result = runCommand(`rm -rf ${project_name}/${file}`);
  if (!result) {
    process.exit(-1);
  }
});

// Initialize git repository.
console.log(`[6/6] Initialize git and create first commit`);
const initialize_git = `cd ${project_name} && git init && git add . && git commit -m "${project_name} initial commit"`;
const result_initialize_git = runCommand(initialize_git);
if (!result_initialize_git) process.exit(-1);

console.log(`[!] You should push to a remote repository`);
console.log(`[!] Create an environment file 'cp .env.example .env'`);
console.log(
  `[i] Start developing ${project_name} project with 'docker-compose up'`
);
console.log(`[i] More information in the README.md`);
