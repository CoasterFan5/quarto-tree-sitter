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
    hello: ($) => repeat($._def),
    _def: ($) => choice($._blockDef),

    _blockDef: ($) => seq("```", repeat($.text), "```"),
    _md: ($) => choice(seq("#", $.text), seq("##", $.text)),

    text: ($) => /./,
    identifier: ($) => /[a-z]+/,
    number: ($) => /\d+/,
  },
});
