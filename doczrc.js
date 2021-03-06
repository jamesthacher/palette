import path from "path"

export default {
  hashRouter: true,
  indexHtml: "docs/index.html",
  // modifyBabelRc: config => {
  //   console.log(config)
  //   config.babelrc = false
  //   return config
  // },
  protocol: "http",
  typescript: true,
  themeConfig: {
    // Can override any of these colors:
    // https://github.com/pedronauck/docz/blob/781c2bff5ae6ebe7a0d8a46f9cbc8cfef709c191/packages/docz-theme-default/src/styles/modes.ts#L5
    colors: {
      primary: "#6E1EFF",
      sidebarBg: "#F8F8F8",
    },
  },
  wrapper: "docs/utils/components/Wrapper.tsx",
}
