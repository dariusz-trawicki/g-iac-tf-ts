module "project" {
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
