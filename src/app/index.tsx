import { Header } from "../components/header";
import { Promo } from "@/components/promo";
import { Slider } from "@/components/slider";
import { Section } from "@/components/section/Section";
import { Footer } from "@/components/footer";

import qrImg from "@/assets/qr.jpg";
import photo from "@/assets/sliderPhoto.jpg";
import photo2 from "@/assets/sliderPhoto2.jpg";
import photo3 from "@/assets/sliderPhoto3.jpg";

import "./App.css";

function App() {
    return (
        <main>
            <Header />
            <Promo />
            <Section id="archive" title="фотоархив">
                <Slider photos={[photo, photo2, photo3]} />
            </Section>
            <Section
                id="biography"
                title="биография"
                text={[
                    "Биография может содержать сведения из жизни человека, такие как: место рождения, происхождение, семейные отношения, учеба, образование, служба, работа, обстоятельства смерти.",
                    "Вы так же можете описать яркие, важные или переломные моменты в жизни, достижения, их хронологию и географию.",
                ]}
            />
            <Section
                id="memories"
                title="воспоминания близких"
                text={[
                    "Вы сможете поделиться своими воспоминаниями о человеке, воспоминаниями близких людей, сослуживцев или коллег.",
                ]}
            />
            <Section
                id="words"
                title="слова памяти"
                text={["Вы сможете оставить памятные слова от родных и близких людей."]}
            />
            <Section
                id="grave-place"
                title="место захоронения"
                text={[
                    "Вы сможете указать место захоронения (название кладбища, адрес, место, дополнительную информацию или координаты)",
                ]}
            />
            <Section
                id="relatives-pages"
                title="родственные страницы"
                text={["Вы сможете добавить ссылки на связанные (родственные) Мемориальные страницы."]}
            />
            <Section
                id="links"
                title="ссылки"
                text={["Вы сможете добавить до 3-х ссылок на другие источники информации о человеке."]}
            />
            <Section id="qr-code" title="qr-код страницы">
                <img id="qr-img" src={qrImg} alt="qr code" />
            </Section>
            <Footer />
        </main>
    );
}

export default App;
