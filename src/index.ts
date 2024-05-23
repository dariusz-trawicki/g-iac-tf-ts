import { dataType, viewType } from "./types";
import { getContent, readTemplate, readYaml, saveFile } from "./utils/file";
import * as path from "path";

export function generateView() {
  const configPath = `${__dirname}/../config.yaml`;
  const config = readYaml(configPath);

  config.views.forEach((view: viewType) => {
    const templatePath = `${__dirname}/../templates/${view.template_name}`;
    const template = readTemplate(templatePath);

    const dataPath = view.data_path;
    const data: dataType = readYaml(dataPath);

    const generatedView = getContent(template, data);

    const destPath: string = view.dest_path;

    const fileName: string = path.basename(destPath);
    const filePath: string = path.dirname(destPath);

    saveFile(fileName, filePath, generatedView);
  });
}
