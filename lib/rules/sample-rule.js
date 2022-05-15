"use strict";

module.exports = {
  meta: {
    docs: {
      description: "sample rule.",
      category: "Category",
      recommended: true,
      url: "url",
    },
    fixable: null,
    messages: {
      sample: "sample rules",
    },
    schema: [],
    type: "suggestion",
  },

  create(context) {
    return {
      "sample-rule"(node) {
        context.report({
          node,
          messageId: "sample",
        });
      },
    };
  },
};
