module "project" {
  source  = "terraform-google-modules/project-factory/google"
  version = "~> 14.0"

  activate_apis = [
    "compute.googleapis.com",
    "container.googleapis.com",
    ]
  billing_account             = "111111-AAAAAA-222222"
  create_project_sa           = false
  default_service_account     = "keep"
  disable_services_on_destroy = false
  folder_id                   = "1234567890"
  labels                      = [object Object]
  name                        = "prod"
  org_id                      = "666"
  random_project_id           = true
}
