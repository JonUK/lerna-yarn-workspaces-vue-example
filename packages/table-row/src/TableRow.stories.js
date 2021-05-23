import { storiesOf } from '@storybook/vue'
import JTableRow from './TableRow'

storiesOf('TableRow', module)
    .add('default', () => ({
        components: { JTableRow },
        template:
            `
      <JTableRow
        :values="values"
      />
    `,
        data: () => ({
            values: [
                'José Silva',
                'email@email.com'
            ]
        })
    }));