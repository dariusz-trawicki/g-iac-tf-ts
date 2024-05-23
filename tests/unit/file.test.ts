import { getContent, readTemplate, readYaml } from "../../src/utils/file";

test("readYaml", () => {
  const yamlPath = "tests/unit/file.yaml";
  const yamlResult = {
    test: {
      aaa: 1,
      bbb: 2,
      ccc: ["a", "b", "c"],
    },
  };
  expect(readYaml(yamlPath)).toEqual(yamlResult);
});

test("readTemplate", () => {
  const templatePath = "templates/project.tpl";
  const result = `module "project" {
  source  = "terraform-google-modules/project-factory/google"
  version = "~> 14.0"

  activate_apis = [
    {% for item in spec.params.activate_apis %}"{{ item }}",
    {% endfor %}]
  billing_account             = "{{spec.params.billing_account}}"
  create_project_sa           = {{spec.params.create_project_sa}}
  default_service_account     = "{{spec.params.default_service_account}}"
  disable_services_on_destroy = {{spec.params.disable_services_on_destroy}}
  folder_id                   = "{{spec.params.folder_id}}"
  labels                      = {{spec.params.labels}}
  name                        = "{{spec.params.name}}"
  org_id                      = "{{spec.params.org_id}}"
  random_project_id           = {{spec.params.random_project_id}}
}
`;

  const template = readTemplate(templatePath);
  expect(template).toEqual(result);
});

test("getContent", () => {
  const template = "Template {{name}} - {{lorem}}";
  const context = {
    name: "test-template",
    lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh.",
  };
  const result =
    "Template test-template - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh.";

  const content = getContent(template, context);

  expect(content).toEqual(result);
});
