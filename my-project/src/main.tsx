import { createRoot } from 'react-dom/client'
import './styles/global.scss'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './slices/store.ts'
import React, { Suspense } from 'react'
import { ClipLoader } from 'react-spinners'

const LazyApp = React.lazy(() =>import('./App.tsx'))

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={ <ClipLoader color="#243580ff" size={40} />}>
                <LazyApp />
            </Suspense>
        </BrowserRouter>
    </Provider>


)
