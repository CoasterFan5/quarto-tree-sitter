/**
 * @file Quarto 
 * @author CoasterFan5 <CoasterFan9@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "quarto",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
