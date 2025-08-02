import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'
import Projetos from '../containers/Projetos'
import Sobre from '../containers/Sobre'
import Contato from '../containers/Contato'
import Certificados from '../containers/Certificados'

import DefaultLayout from '../layout/DefaultLayout'

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/certificados" element={<Certificados />} />
      </Route>
    </Routes>
  )
}

export default Router
