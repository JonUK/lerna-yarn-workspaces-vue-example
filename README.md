# lerna-yarn-workspaces-vue-example
An example of using Lerna, Yarn Workspaces, Vue.js and Storybook in a monrepo

Install yarn globally
`npm install --global yarn`

Install lerna globally
`npm install --global lerna`

Build all the packages
`lerna run build`

Add dependency to package
`yarn workspace @stratus/ui-example add date-fn`
`yarn workspace @stratus/ui-example add @types/date-fns --dev`




