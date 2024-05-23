# g-iac-tf-ts / Generate IaC Terraform

## 1. How to run

```
npm i
npm run build
npm run test
npm run dev

npm run dev version
npm run dev generate-views
```

## 2. Requirements

We read config file `config.yaml`.

The command:

```
npm run dev -- generate-views
```

converts all views defined in `config.yaml` file.

## 3. How to run kustomization?

```
./run.sh
```

## 4. How to run prettier?

Check format:

```
npx prettier . --check
```

Fix format:

```
npx prettier . --write
```
