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
    source_file: ($) => repeat($._definition),

    _definition: ($) => $.function_definition,

    function_definition: ($) => seq("func", $.identifier, $._type, $.block),

    _type: ($) => choice("bool", "string"),

    block: ($) => seq("{", repeat($._statement), "}"),

    _statement: ($) => $.return_statement,

    return_statement: ($) => seq("return", $._expression, ";"),

    _expression: ($) => choice($.identifier, $.number),

    identifier: ($) => /[a-z]+/,

    number: ($) => /\d+/,
  },
});
