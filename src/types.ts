export type viewType = {
  data: {
    kind: string;
    name: string;
  };
  data_path: string;
  dest_path: string;
  template_name: string;
};

export type dataType = {
  kind: string;
  metadata: {
    dir: string;
    name: string;
  };
  spec: {
    params: {
      activate_apis: string[] | string;
      billing_account: string;
      create_project_sa: boolean;
      default_service_account: string;
      disable_services_on_destroy: boolean;
      folder_id: string;
      labels: string;
      name: string;
      org_id: string;
      random_project_id: boolean;
    };
  };
};
