import styles from './Home.module.scss';
import BannerMobile1 from 'assets/img/banner-mobile_1.png';
import BannerDesktop1 from 'assets/img/banner_1.png';
import BannerMobile2 from 'assets/img/banner-mobile_2.png';
import BannerDesktop2 from 'assets/img/banner_2.png';
import Profile2 from 'assets/img/profile_2.png';
import Video1 from 'assets/img/video_1.png';
import Video2 from 'assets/img/video_2.png';
import Video3 from 'assets/img/video_3.png';
import Video4 from 'assets/img/video_4.png';
import Produto1 from 'assets/img/produto_1.png';
import Produto2 from 'assets/img/produto_2.png';
import Produto3 from 'assets/img/produto_3.png';
import Produto4 from 'assets/img/produto_4.png';
import Thumbnail1 from 'assets/img/miniatura_1.png';
import Thumbnail2 from 'assets/img/miniatura_2.png';
import Thumbnail3 from 'assets/img/miniatura_3.png';
import Thumbnail4 from 'assets/img/miniatura_4.png';
import Thumbnail5 from 'assets/img/miniatura_5.png';
import classNames from "classnames";
import {useState} from "react";
import Logo from "../../assets/img/logo.svg";
import {Images} from "../../types/images";

export default function Home() {
  const [menuAtivo, setMenuAtivo] = useState(false);
  return (
    <div className={styles.pagina}>
      <header className={styles.header}>
        <button className={styles.header__menu} aria-label="Menu" onClick={() => setMenuAtivo(!menuAtivo)}><i></i></button>
        <img src={Logo} className={styles.header__logo} alt="Logotipo" />
        <p style={{"--profile-2": `url(${Profile2})`} as Images} className={styles.header__perfil}>Bruno Lopez</p>
        <button className={styles.header__notification} aria-label="Notificação"><i></i></button>
      </header>
      <nav className={classNames({[styles.menu]: true, [styles['menu--ativo']]: menuAtivo})}>
        <img src={Logo} className={styles.menu__logo} alt="Logotipo"/>
        <a href="#" className={classNames({[styles.menu__link]:true, [styles['menu__link--inicio']]:true, [styles['menu__link--ativo']]: true})}>Início</a>
        <a href="#" className={classNames(styles.menu__link, styles['menu__link--videos'])}>Vídeos</a>
        <a href="#" className={classNames(styles.menu__link, styles['menu__link--picos'])}>Picos</a>
        <a href="#" className={classNames(styles.menu__link, styles['menu__link--integrantes'])}>Integrantes</a>
        <a href="#" className={classNames(styles.menu__link, styles['menu__link--camisas'])}>Camisas</a>
        <a href="#" className={classNames(styles.menu__link, styles['menu__link--pinturas'])}>Pinturas</a>
      </nav>
      <main className={styles.principal}>
        <h2 className={styles['titulo-pagina']}>Início</h2>
        <article className={classNames(styles.cartao,styles['cartao--destaque'],styles['videos-destaque'])}>
          <img src={BannerMobile1} className={classNames(styles.cartao__imagem, styles['cartao__imagem--mobile'])} alt="Banner do Cartão" />
          <img src={BannerDesktop1} className={classNames(styles.cartao__imagem, styles['cartao__imagem--desktop'])} alt="Banner do Cartão" />
          <div className={styles.cartao__conteudo}>
            <p className={styles.cartao__conteudo__destaque}>Vídeo em destaque</p>
            <h3 className={styles.cartao__conteudo__titulo}>HZC - Título</h3>
            <p className={styles.cartao__conteudo__perfil}>Bruno Lopez</p>
            <p className={classNames(styles.cartao__conteudo__info, styles['cartao__conteudo__info--tempo'])}>33 minutos</p>
            <p className={classNames(styles.cartao__conteudo__info, styles['cartao__conteudo__info--visualizacao'])}>33 visualizações</p>
            <button className={classNames(styles.cartao__conteudo__botao,styles['cartao__conteudo__botao--play'],styles['cartao__conteudo__botao--destaque'])}>Assistir agora</button>
          </div>
        </article>
        <article className={classNames(styles.cartao,styles['cartao--recentes'],styles['videos-recentes'])}>
            <h3 className={styles.cartao__conteudo__titulo}>Videos recentes</h3>
            <a href="#" className={styles.cartao__link}>Ver todos</a>
            <ul className={styles.cartao__lista}>
              <li className={styles.cartao__lista__item}>
                <img src={Thumbnail1} alt="Thumbnail" className={styles.cartao__lista__item__thumbnail}/>
                <h4 className={styles.cartao__lista__item__titulo}>HZC - Love Machine</h4>
                <p className={styles.cartao__lista__item__perfil}>Bruno Lopez</p>
              </li>
              <li className={styles.cartao__lista__item}>
                <img src={Thumbnail2} alt="Thumbnail" className={styles.cartao__lista__item__thumbnail}/>
                <h4 className={styles.cartao__lista__item__titulo}>HZC - Love Machine</h4>
                <p className={styles.cartao__lista__item__perfil}>Bruno Lopez</p>
              </li>
              <li className={styles.cartao__lista__item}>
                <img src={Thumbnail3} alt="Thumbnail" className={styles.cartao__lista__item__thumbnail}/>
                <h4 className={styles.cartao__lista__item__titulo}>HZC - Love Machine</h4>
                <p className={styles.cartao__lista__item__perfil}>Bruno Lopez</p>
              </li>
              <li className={styles.cartao__lista__item}>
                <img src={Thumbnail4} alt="Thumbnail" className={styles.cartao__lista__item__thumbnail}/>
                <h4 className={styles.cartao__lista__item__titulo}>HZC - Love Machine</h4>
                <p className={styles.cartao__lista__item__perfil}>Bruno Lopez</p>
              </li>
              <li className={styles.cartao__lista__item}>
                <img src={Thumbnail5} alt="Thumbnail" className={styles.cartao__lista__item__thumbnail}/>
                <h4 className={styles.cartao__lista__item__titulo}>HZC - Love Machine</h4>
                <p className={styles.cartao__lista__item__perfil}>Bruno Lopez</p>
              </li>
            </ul>
        </article>
        <section className={classNames(styles.section, styles['section-videos'])}>
          <h3 className={styles.section__titulo}>Vídeos mais vistos</h3>
          <article className={styles.cartao}>
            <img src={Video1} className={styles.cartao__imagem} alt="Banner do Cartão" />
            <div className={styles.cartao__conteudo}>
              <p className={styles.cartao__conteudo__perfil}>André Soares</p>
              <h3 className={styles.cartao__conteudo__titulo}>HZC - Tudo sem Padrin</h3>
              <p className={classNames(styles.cartao__conteudo__info, styles['cartao__conteudo__info--tempo'])}>33 minutos</p>
              <button className={classNames(styles.cartao__conteudo__botao,styles['cartao__conteudo__botao--play'])} aria-label="Assistir agora"></button>
            </div>
          </article>
          <article className={styles.cartao}>
            <img src={Video2} className={styles.cartao__imagem} alt="Banner do Cartão" />
            <div className={styles.cartao__conteudo}>
              <p className={styles.cartao__conteudo__perfil}>Bruno Lopes</p>
              <h3 className={styles.cartao__conteudo__titulo}>HZC - Enter the HU Flex</h3>
              <p className={classNames(styles.cartao__conteudo__info, styles['cartao__conteudo__info--tempo'])}>33 minutos</p>
              <button className={classNames(styles.cartao__conteudo__botao,styles['cartao__conteudo__botao--play'])} aria-label="Assistir agora"></button>
            </div>
          </article>
          <article className={styles.cartao}>
            <img src={Video3} className={styles.cartao__imagem} alt="Banner do Cartão" />
            <div className={styles.cartao__conteudo}>
              <p className={styles.cartao__conteudo__perfil}>Luiza Sampaio</p>
              <h3 className={styles.cartao__conteudo__titulo}>HZC - Vol.3</h3>
              <p className={classNames(styles.cartao__conteudo__info, styles['cartao__conteudo__info--tempo'])}>33 minutos</p>
              <button className={classNames(styles.cartao__conteudo__botao,styles['cartao__conteudo__botao--play'])} aria-label="Assistir agora"></button>
            </div>
          </article>
          <article className={styles.cartao}>
            <img src={Video4} className={styles.cartao__imagem} alt="Banner do Cartão" />
            <div className={styles.cartao__conteudo}>
              <p className={styles.cartao__conteudo__perfil}>Bruno Lopez</p>
              <h3 className={styles.cartao__conteudo__titulo}>HZC - Love Machine</h3>
              <p className={classNames(styles.cartao__conteudo__info, styles['cartao__conteudo__info--tempo'])}>33 minutos</p>
              <button className={classNames(styles.cartao__conteudo__botao,styles['cartao__conteudo__botao--play'])} aria-label="Assistir agora"></button>
            </div>
          </article>
        </section>
        <article className={classNames(styles.cartao,styles['cartao--recentes'],styles['artes-recentes'])}>
          <h3 className={styles.cartao__conteudo__titulo}>Artes recentes</h3>
          <a href="#" className={styles.cartao__link}>Ver todas</a>
          <ul className={styles.cartao__lista}>
            <li className={styles.cartao__lista__item}>
              <img src={Thumbnail1} alt="Thumbnail" className={styles.cartao__lista__item__thumbnail}/>
              <h4 className={styles.cartao__lista__item__titulo}>HZC - Love Machine</h4>
              <p className={styles.cartao__lista__item__perfil}>Bruno Lopez</p>
            </li>
            <li className={styles.cartao__lista__item}>
              <img src={Thumbnail2} alt="Thumbnail" className={styles.cartao__lista__item__thumbnail}/>
              <h4 className={styles.cartao__lista__item__titulo}>HZC - Love Machine</h4>
              <p className={styles.cartao__lista__item__perfil}>Bruno Lopez</p>
            </li>
            <li className={styles.cartao__lista__item}>
              <img src={Thumbnail1} alt="Thumbnail" className={styles.cartao__lista__item__thumbnail}/>
              <h4 className={styles.cartao__lista__item__titulo}>HZC - Love Machine</h4>
              <p className={styles.cartao__lista__item__perfil}>Bruno Lopez</p>
            </li>
            <li className={styles.cartao__lista__item}>
              <img src={Thumbnail3} alt="Thumbnail" className={styles.cartao__lista__item__thumbnail}/>
              <h4 className={styles.cartao__lista__item__titulo}>HZC - Love Machine</h4>
              <p className={styles.cartao__lista__item__perfil}>Bruno Lopez</p>
            </li>
            <li className={styles.cartao__lista__item}>
              <img src={Thumbnail4} alt="Thumbnail" className={styles.cartao__lista__item__thumbnail}/>
              <h4 className={styles.cartao__lista__item__titulo}>HZC - Love Machine</h4>
              <p className={styles.cartao__lista__item__perfil}>Bruno Lopez</p>
            </li>
            <li className={styles.cartao__lista__item}>
              <img src={Thumbnail2} alt="Thumbnail" className={styles.cartao__lista__item__thumbnail}/>
              <h4 className={styles.cartao__lista__item__titulo}>HZC - Love Machine</h4>
              <p className={styles.cartao__lista__item__perfil}>Bruno Lopez</p>
            </li>
            <li className={styles.cartao__lista__item}>
              <img src={Thumbnail5} alt="Thumbnail" className={styles.cartao__lista__item__thumbnail}/>
              <h4 className={styles.cartao__lista__item__titulo}>HZC - Love Machine</h4>
              <p className={styles.cartao__lista__item__perfil}>Bruno Lopez</p>
            </li>
          </ul>
        </article>
        <article className={classNames(styles.cartao,styles['cartao--destaque'],styles['artes-destaque'])}>
          <img src={BannerMobile2} className={classNames(styles.cartao__imagem, styles['cartao__imagem--mobile'])} alt="Banner do Cartão" />
          <img src={BannerDesktop2} className={classNames(styles.cartao__imagem, styles['cartao__imagem--desktop'])} alt="Banner do Cartão" />          <div className={styles.cartao__conteudo}>
            <p className={styles.cartao__conteudo__destaque}>Arte em destaque</p>
            <h3 className={styles.cartao__conteudo__titulo}>HZC - Título</h3>
            <p className={styles.cartao__conteudo__perfil}>Bruno Lopez</p>
            <p className={classNames(styles.cartao__conteudo__info, styles['cartao__conteudo__info--tempo'])}>33 minutos</p>
            <p className={classNames(styles.cartao__conteudo__info, styles['cartao__conteudo__info--visualizacao'])}>33 visualizações</p>
            <button className={classNames(styles.cartao__conteudo__botao,styles['cartao__conteudo__botao--play'],styles['cartao__conteudo__botao--destaque'])}>Assistir agora</button>
          </div>
        </article>
        <section className={classNames(styles.section, styles['section-camisas'])}>
          <h3 className={styles.section__titulo}>Vídeos mais vistos</h3>
          <article className={styles.cartao}>
            <img src={Produto1} className={styles.cartao__imagem} alt="Banner do Cartão" />
            <div className={styles.cartao__conteudo}>
              <p className={styles.cartao__conteudo__perfil}>André Soares</p>
              <h3 className={styles.cartao__conteudo__titulo}></h3>
              <p className={classNames(styles.cartao__conteudo__info, styles['cartao__conteudo__info--tempo'])}>33 minutos</p>
              <button className={classNames(styles.cartao__conteudo__botao,styles['cartao__conteudo__botao--play'])} aria-label="Assistir agora"></button>
            </div>
          </article>
          <article className={styles.cartao}>
            <img src={Produto2} className={styles.cartao__imagem} alt="Banner do Cartão" />
            <div className={styles.cartao__conteudo}>
              <p className={styles.cartao__conteudo__perfil}>Bruno Lopez</p>
              <h3 className={styles.cartao__conteudo__titulo}>HZC - Título</h3>
              <p className={classNames(styles.cartao__conteudo__info, styles['cartao__conteudo__info--tempo'])}>33 minutos</p>
              <button className={classNames(styles.cartao__conteudo__botao,styles['cartao__conteudo__botao--play'])} aria-label="Assistir agora"></button>
            </div>
          </article>
          <article className={styles.cartao}>
            <img src={Produto3} className={styles.cartao__imagem} alt="Banner do Cartão" />
            <div className={styles.cartao__conteudo}>
              <p className={styles.cartao__conteudo__perfil}>Bruno Lopez</p>
              <h3 className={styles.cartao__conteudo__titulo}>HZC - Título</h3>
              <p className={classNames(styles.cartao__conteudo__info, styles['cartao__conteudo__info--tempo'])}>33 minutos</p>
              <button className={classNames(styles.cartao__conteudo__botao,styles['cartao__conteudo__botao--play'])} aria-label="Assistir agora"></button>
            </div>
          </article>
          <article className={styles.cartao}>
            <img src={Produto4} className={styles.cartao__imagem} alt="Banner do Cartão" />
            <div className={styles.cartao__conteudo}>
              <p className={styles.cartao__conteudo__perfil}>Bruno Lopez</p>
              <h3 className={styles.cartao__conteudo__titulo}>HZC - Título</h3>
              <p className={classNames(styles.cartao__conteudo__info, styles['cartao__conteudo__info--tempo'])}>33 minutos</p>
              <button className={classNames(styles.cartao__conteudo__botao,styles['cartao__conteudo__botao--play'])} aria-label="Assistir agora"></button>
            </div>
          </article>
        </section>

      </main>
    </div>
  );
}