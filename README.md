# Aplikace pro testování generátorů pseudonáhodných čísel
V aplikaci má uživatel možnost vygenerovat dle požadovaného počtu řadu hodnot jedním z předdefinovaných generátorů a v závislosti na typu generátoru lze také nastavit seed. Další možností je vložení vlastní uživatelovy řady hodnot. Hodnoty lze poté automaticky otestovat implementovanými testy, přičemž aplikace předkládá jejich vyhodnocení včetně stanovení hypotéz a slovních interpretací výsledků.

Implementace webové aplikace je založena na využití programovacího jazyku JavaScript pro jeho podporu napříč různými webovými prohlížeči a zařízeními. Pro zlepšení intuitivnosti prostředí byl k návrhu vizuálního stylu aplikace využit CSS framework Bootstrap [3] a pro intepretaci zápisu vztahů systémem LaTeX zahrnuje knihovnu MathJax.js [5].
<p align="center">
<img src="http://imgur.com/IYDm2q8.jpg" alt="preview" />
</p>

## Seriální koeficient korelace a Cochranův test
Udává míru závislosti mezi sousedními nebo vzdálenějšími členy posloupnosti a pro k<n je definován vztahem [1]:
<p align="center">
<img src="http://imgur.com/EIwXVTG.jpg" alt="preview" />
</p>
Pomocí algoritmizace zmíněného vztahu generuje aplikace do tabulky posloupnost koeficientů seriální korelace r_1,r_2…, jako tzv. korelogram. Vzájemná korelovanost hodnot je v aplikaci testována až po k=10 a interpretován je výsledek hypotézy o nulovém koeficientu korelace.

Dále je implementován také Cochranův test pro testování sdružené hypotézy
na základě algoritmizace výpočtu statistiky <img src="http://imgur.com/z5qXgrP.jpg" alt="preview" />.

##	Seznam použitých zdrojů
[1] SKALSKÁ, Hana. Stochastické modelování. Vyd. 2., rozš. a upr. Hradec Králové: Gaudeamus, 2006. ISBN 807041488X.<br />
[2] BAU, David. GitHub – seedrandom.js. [online]. 2015, poslední revize 4. 7. 2015 [cit. 2016-12-4]. Dostupné z: <https://github.com/davidbau/seedrandom>.<br />
[3] Bootstrap. HTML, CSS, and JS framework for developing responsive, mobile first projects on the web. [online]. 2016 [cit. 2016-12-4]. Dostupné z: <http://getbootstrap.com>.<br />
[5] MathJax. A JavaScript display engine for mathematics that works in all browsers. [online]. 2016 [cit. 2016-12-4]. Dostupné z: <https://www.mathjax.org>.<br />
[6] QUINN, Victor. Chance.js. [online]. 2016, poslední revize 8. 7. 2016 [cit. 2016-12-4]. Dostupné z: <http://chancejs.com>.<br />
[8] Random.js. GitHub. A mathematically correct random number generator library for JavaScript. [online]. 2015, poslední revize 14. 10. 2015 [cit. 2016-12-4]. Dostupné z: <https://github.com/ckknight/random-js/commits/master>.
