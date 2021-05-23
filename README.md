# lerna-yarn-workspaces-vue-example
An example of using Lerna, Yarn Workspaces, Vue.js and Storybook in a monrepo

Install yarn globally
`npm install --global yarn`

Boostrap the UI component library
`yarn boot`

Build all the packages
`lerna run build`

Add third-party dependency to package
`lerna add date-fn --scope=@stratus/ui-example`
`lerna add @types/date-fns --scope=@stratus/ui-example`

Add internal package dependency to another internal package
`lerna add @stratus/ui-table-row --scope=@stratus/ui-data-table`

