#!/usr/bin/env bash

OUTPUT_FILE_NAME=output.yaml
TEMP_FILE_NAME_RANDOM=HGUD53hkdfsJHKGED897fdjKHKHJ

# run kustomize for prod folder
(
  cd examples/hello-cloud/kustomization/overlays/prod
  rm -f "${TEMP_FILE_NAME}"
  kustomize build . > "${OUTPUT_FILE_NAME}"

  yq 'sort_keys(..)' "${OUTPUT_FILE_NAME}" > "${TEMP_FILE_NAME_RANDOM}"
  rm "${OUTPUT_FILE_NAME}"
  mv "${TEMP_FILE_NAME_RANDOM}" "${OUTPUT_FILE_NAME}"
)
