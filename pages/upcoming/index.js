import Link from "next/link";
import { useEffect } from "react";
import Valorant from "./valorant";
import Counter from "./csgo";
import Dota from "./dota";
import Lol from "./Lol";

const GamesPage = ({ valres, csres, dotres, lolres }) => {


    useEffect(() => {
        let tabsWithContent = (function () {
            let tabs = document.querySelectorAll('.tabs li');
            let tabsContent = document.querySelectorAll('.tab-content');

            let deactvateAllTabs = function () {
                tabs.forEach(function (tab) {
                    tab.classList.remove('is-active');
                });
            };

            let hideTabsContent = function () {
                tabsContent.forEach(function (tabContent) {
                    tabContent.classList.remove('is-active');
                });
            };

            let activateTabsContent = function (tab) {
                tabsContent[getIndex(tab)].classList.add('is-active');
            };

            let getIndex = function (el) {
                return [...el.parentElement.children].indexOf(el);
            };

            tabs.forEach(function (tab) {
                tab.addEventListener('click', function () {
                    deactvateAllTabs();
                    hideTabsContent();
                    tab.classList.add('is-active');
                    activateTabsContent(tab);
                });
            })

            tabs[0].click();
        })();
    }, [])




    return (
        <div className="container">
            <div id="tabs-with-content">
                <div className="tabs is-toggle is-toggle-rounded is-centered">
                    <ul className="tab-ul">
                        <li><a className="gamelinks">Valorant</a></li>
                        <li><a className="gamelinks">CS:GO</a></li>
                        <li><a className="gamelinks">Dota 2</a></li>
                        <li><a className="gamelinks">LoL</a></li>
                    </ul>
                </div>
                <div>
                    <section className="tab-content">
                        <Valorant valres={valres} />
                    </section>

                    <section className="tab-content">
                        <Counter csres={csres} />
                    </section>

                    <section className="tab-content">
                        <Dota dotres={dotres}/>
                    </section>
                    <section className="tab-content">
                        <Lol lolres={lolres}/>
                    </section>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {

    const valresult = await fetch(`https://api.pandascore.co/matches/upcoming?filter[videogame]=valorant&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);
    const csresult = await fetch(`https://api.pandascore.co/matches/upcoming?filter[videogame]=cs-go&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);
    const dotaresult = await fetch(`https://api.pandascore.co/matches/upcoming?filter[videogame]=dota-2&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);
    const lolresult = await fetch(`https://api.pandascore.co/matches/upcoming?filter[videogame]=league-of-legends&token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0`);


    const valdata = await valresult.json();
    const csdata = await csresult.json();
    const dotdata = await dotaresult.json();
    const loldata = await lolresult.json();

    return {
        props: { valres: valdata, csres: csdata, dotres: dotdata, lolres: loldata },
    };

}

export default GamesPage;