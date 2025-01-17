import * as React from 'react';
import { Provider } from 'react-redux';

import PlaygroundWrapper from './components/PlaygroundWrapper'
import GraphQLEditor from './components/Playground/GraphQLEditor'
import { store } from './components/GraphQLBinApp'

export { PlaygroundWrapper as Playground, GraphQLEditor }

export default function PlaygroundWrapperWithStore(props) {
    return (
        <Provider store={store}>
            <PlaygroundWrapper {...props} />
        </Provider>
    );
}

export { store }

export * from './state/sessions/actions'
export * from './state/sessions/selectors'

export * from './state/sharing/actions'
export * from './state/sharing/selectors'

export * from './state/workspace/actions'
export * from './state/workspace/reducers'

export * from './state/history/actions'
export * from './state/history/selectors'

export * from './state/docs/actions'
export * from './state/docs/selectors'

export * from './state/general/actions'
export * from './state/general/selectors'

export * from './state/appHistory/actions'
export * from './state/appHistory/reducers'
