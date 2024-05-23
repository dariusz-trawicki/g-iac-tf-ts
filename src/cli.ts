#!/usr/bin/env node

import { Command } from "commander";
import { generateView } from ".";

const program = new Command();

program.version(process.env.npm_package_version);

program.command("version").action(() => {
  console.log(process.env.npm_package_version);
});

program
  .command("generate-views")
  .description("converts all views defined in `config.yaml` file")
  .option(
    "--verbosity <number>",
    "0 - no output log, 1 - show version and config, 2 - show version, config and log",
    "0",
  )
  .action((options) => {
    if (options.verbosity >= 1) {
      console.log(`G-iac-tf, version: ${process.env.npm_package_version}`);
    }
    generateView();
  });

program.parse();
