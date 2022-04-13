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
                        
                    </ul>
                </div>
                <div>
                    <section className="tab-content">
         
                    </section>

                    <section className="tab-content">
                       
                    </section>

                    <section className="tab-content">
                       
                    </section>
                    
                </div>
            </div>
        </div>
    )
}



export default GamesPage;