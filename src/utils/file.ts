import yaml from "js-yaml";
import fs from "fs";
import nunjucks from "nunjucks";

export function readYaml(path: string) {
  try {
    const yamlData = fs.readFileSync(path, "utf8");
    const data: any = yaml.load(yamlData);

    return data;
  } catch (error) {
    console.error("Error reading YAML file:", error);
  }
}

export function readTemplate(templatePath: string): string {
  try {
    const templateContent = fs.readFileSync(templatePath, "utf8");
    return templateContent;
  } catch (error) {
    console.error("Error reading template:", error);
  }
}

export function getContent(templateContent: string, context: Object) {
  nunjucks.configure({ autoescape: true });
  const content: string = nunjucks.renderString(templateContent, context);
  return content;
}

export function saveFile(fileName: string, filePath: string, context: string) {
  if (!fs.existsSync(filePath + "/" + fileName)) {
    fs.mkdir(filePath, { recursive: true }, (err) => {
      if (err) {
        console.error("Error creating folder:", err);
      }
      fs.writeFileSync(filePath + "/" + fileName, context);
    });
  } else {
    fs.writeFileSync(filePath + "/" + fileName, context);
  }
}
