module "main" {
  source = "terraform-google-modules/network/google"

  project_id   = local.alias_project.project_id
  network_name = "main"

  subnets = [
    {
      subnet_name           = "main"
      subnet_ip             = "10.1.0.0/16"
      subnet_region         = local.region
      subnet_private_access = true
      subnet_flow_logs      = false
    },
  ]
}
