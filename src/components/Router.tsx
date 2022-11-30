import { Route, Routes, useLocation } from "react-router-dom";
import { AIndustria } from "../pages/AIndustria";
import { ExportacaoAgronegocio } from "../pages/Blog/ExportacaoAgronegocio";
import { K2022 } from "../pages/Blog/K2022";
import { LeiDasFerrovias } from "../pages/Blog/LeiDasFerrovias";
import { WEG } from "../pages/Blog/WEG";
import { Contato } from "../pages/Contato";
import { Empresa } from "../pages/Empresa";
import { Home } from "../pages/Home";
import { Instagram } from "../pages/Instagram";
import { MeioAmbiente } from "../pages/MeioAmbiente";
import { Revolução40 } from "../pages/Revolução40";
import { Solucoes } from "../pages/Solucoes";

export function Router() {

    const location = useLocation()


    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path='/empresa' element={<Empresa />} />
            <Route path='/solu%C3%A7%C3%B5es' element={<Solucoes />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/meio-ambiente' element={<MeioAmbiente />} />
            <Route path='/instagram' element={<Instagram />} />
            <Route path='/blog/revolucao-40-inspira-ampliacao-da-wirklich' element={<Revolução40/>} />
            <Route path='/blog/a-industria-e-o-ecossistema-de-inovacao' element={<AIndustria/>} />
            <Route path='/blog/WEG-aponta-forte-crescimento-do-negocio-de-geracao-solar-distribuida-em-2022' element={<WEG/>} />
            <Route path='/blog/exportacoes-do-agronegocio-em-setembro-chegam-a-US-13-9-bilhoes-com-aumento-de-38-4' element={<ExportacaoAgronegocio/>} />
            <Route path='/blog/decreto-que-regulamenta-a-lei-das-ferrovias-e-assinado' element={<LeiDasFerrovias/>} />
            <Route path='/blog/K-2022-a-maior-feira-de-plastico-e-borracha-do-mundo' element={<K2022/>} />

        </Routes>
    )
}