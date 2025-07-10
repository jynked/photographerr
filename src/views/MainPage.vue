<template>
    <main class="main-wrapper">
        <div class="arts">
            <swiper :modules="[Pagination, Navigation]" :pagination="{ clickable: true, dynamicBullets: true }"
                navigation loop slides-per-view="1">
                <swiper-slide class="first-first-block">
                    <div style="width: 100%; max-width: 695px; height: auto;">
                        <h1>Dein Fotograf in Wien</h1>
                        <h6>Herzlich willkommen! Ich bin Tatiana, Fotografin aus Leidenschaft, und es ist mir eine
                            Freude,
                            deine schönsten Momente in authentischen Bildern festzuhalten. Mit über 10 Jahren Erfahrung
                            und
                            modernster Fototechnik sorge ich für höchste Qualität – von der Aufnahme bis zur
                            professionellen
                            Bearbeitung</h6>
                    </div>
                </swiper-slide>
                <swiper-slide><img src="../assets/img/1-2-model.svg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/1-3-model.svg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/1-4-model.svg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/1-5-model.svg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/1-6-model.svg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/1-7-model.svg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/1-8-model.svg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/1-9-model.svg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/img/1-10-model.svg" alt=""></swiper-slide>
            </swiper>
        </div>
        <div class="circles-for-modals-container">
            <div class="circles-for-modals">
                <button>
                    <img src="../assets/img/2-1-model.jpg" alt="">
                </button>
                <button style="border: 3px solid rgba(58, 58, 58, 1)">
                    <img src="../assets/img/2-2-model.jpg" alt="">
                </button>
                <button>
                    <img src="../assets/img/2-3-model.jpg" alt="">
                </button>
                <button>
                    <img src="../assets/img/2-4-model.jpg" alt="">
                </button>
                <button>
                    <img src="../assets/img/2-5-model.jpg" alt="">
                </button>
                <button>
                    <img src="../assets/img/2-6-model.jpg" alt="">
                </button>
            </div>
        </div>
        <div class="your-photographer-container">
            <div class="image">
                <img src="../assets/img/yout-photographer.svg" alt="">
            </div>
            <div class="about-your-photographer">
                <h1>
                    Dein Fotograf in Wien
                </h1>
                <div>
                    <h3>Warum <span>mit mir</span> arbeiten?</h3>
                    <div>
                        <p>
                            Angenehmes Shooting-Erlebnis: Mir liegt eine lockere Atmosphäre am Herzen, damit du dich
                            wohlfühlst und natürlich wirkst
                        </p>
                        <p>
                            Top-Equipment & Studio: Mein <span>helles Fotostudio</span> im Zentrum Wiens ist
                            <span>perfekt erreichbar</span> (öffentliche Verkehrsmittel vor der Tür!) und mit
                            hochwertigster Technik ausgestattet
                        </p>
                        <p>
                            Leidenschaft & Professionalität: Fotografie ist für mich <span>Berufung, nicht nur
                                Beruf</span>. Jedes Shooting gestalte ich mit Herz und Expertise

                        </p>
                    </div>
                </div>
                <p>
                    Ob Hochzeiten, Familienfotos, Paarshootings, Businessportraits oder kreative Projekte –
                    <span>gemeinsam
                        setzen wir deine Ideen um</span>. Ich freue mich darauf, dich kennenzulernen und unvergessliche
                    Bilder
                    zu schaffen!
                </p>
                <h4>"Die beste Kamera ist die, die du dabei hast – aber die besten Fotos entstehen mit dem richtigen
                    Fotografen."</h4>
            </div>
        </div>
        <div class="karriere-container">
            <h1>Karriere & Business</h1>
            <div class="karriere-cards">
                <div class="karriere-card">
                    <img src="../assets/img/3-1-model.svg" alt="">
                    <h5>Bewerbung & Passfotos</h5>
                    <h6>
                        Perfekte Bewerbungsfotos, die sympathisch und professionell wirken. Passfotos nach offiziellen
                        Vorgaben – schnell und präzise
                    </h6>
                </div>
                <div class="karriere-card">
                    <img src="../assets/img/3-2-model.svg" alt="">
                    <h5>Business Portrait & Branding</h5>
                    <h6>
                        Individuelle Businessfotos für LinkedIn, Website oder Werbung. Starke Porträts,
                        die deine Persönlichkeit und Marke unterstreichen
                    </h6>
                </div>
                <div class="karriere-card">
                    <img src="../assets/img/3-3-model.svg" alt="">
                    <h5>Mitarbeiterfotos</h5>
                    <h6>
                        Einheitliche und professionelle Mitarbeiterporträts für Unternehmen. Vor Ort oder im Studio –
                        für einen konsistenten Corporate Look
                    </h6>
                </div>
                <div class="karriere-card">
                    <img src="../assets/img/3-4-model.svg" alt="">
                    <h5>Produktfotografie</h5>
                    <h6>
                        Hochwertige Produktaufnahmen für Webshop, Kataloge oder Werbung. Clean oder kreativ – dein
                        Produkt perfekt in Szene gesetzt
                    </h6>
                </div>
            </div>
        </div>
        <div class="some-main-model">
            <img src="../assets/img/4-1-model.svg" alt="">
            <span></span>
            <span></span>
        </div>
        <div class="karriere-container">
            <h1>Privat & Hochzeit</h1>
            <div class="karriere-cards">
                <div class="karriere-card">
                    <img src="../assets/img/5-1-model.svg" alt="">
                    <h5>Hochzeitsfotograf</h5>
                    <h6>
                        Emotionale Hochzeitsfotografie, die euren besonderen Tag natürlich und unvergesslich festhält.
                        Von der Trauung bis zur Feier - authentische Momentaufnahmen.
                    </h6>
                </div>
                <div class="karriere-card">
                    <img src="../assets/img/5-2-model.svg" alt="">
                    <h5>Babybauch Shooting</h5>
                    <h6>
                        Zauberhafte Aufnahmen deines strahlenden Mutterglücks. Natürliche und sinnliche Fotos, die die
                        Vorfreude auf dein Baby einfangen.
                    </h6>
                </div>
                <div class="karriere-card">
                    <img src="../assets/img/5-3-model.svg" alt="">
                    <h5>Neugeborenen Shooting</h5>
                    <h6>
                        Die zarten ersten Tage deines kleinen Wunders in wundervollen Bildern. Sanfte Aufnahmen in
                        entspannter Atmosphäre.
                    </h6>
                </div>
                <div class="karriere-card">
                    <img src="../assets/img/5-4-model.svg" alt="">
                    <h5>Familie Fotoshooting</h5>
                    <h6>
                        Lebendige Familienfotos voller Lachen und Herzlichkeit. Natürliche Interaktionen statt
                        gestellter Posen - eure Liebe verewigt.
                    </h6>
                </div>
            </div>
        </div>
        <div class="some-main-model">
            <img src="../assets/img/6-1-model.svg" alt="">
            <span></span>
            <span></span>
        </div>
        <div class="kostenloses-container">
            <div class="image">
                <img src="../assets/img/7-1-model.jpg" alt="">
                <button class="play-container btn" type="button" data-bs-toggle="modal" data-bs-target="#passport">
                    <div class="play">
                        <img src="../assets/img/play.svg" alt="">
                    </div>
                </button>
            </div>
            <div class="about-kostenloses">
                <div style="gap: 5px">
                    <h1>
                        Kostenloses Bonus-Angebot
                    </h1>
                    <h2>Biometrisches Passfoto inklusive!</h2>
                </div>
                <p>
                    Bei jeder Buchung eines unserer Fotoshootings (egal ob Bewerbungsfotos, Business-Portraits oder
                    andere Dienstleistungen) erhältst du <span>kostenlos ein digitales biometrisches Passfoto</span> –
                    ohne
                    zusätzliche Kosten oder versteckte Bedingungen.
                </p>
                <div>
                    <h3>Das bekommst du <span>gratis</span> dazu:</h3>
                    <ul>
                        <li>
                            100% behördenkonformes Passbild nach allen aktuellen Vorgaben (neutraler Hintergrund,
                            korrekte Größe, passender Gesichtsausdruck)
                        </li>
                        <li>
                            Digitale Version zum sofortigen Download
                        </li>
                        <li>
                            Professionelle Aufbereitung für optimale Erkennbarkeit (natürliche Retusche, perfekte
                            Ausleuchtung)
                        </li>
                        <li>
                            Ohne verpflichtenden Druck – du entscheidest selbst, ob und wo du es ausdruckst
                        </li>
                    </ul>
                </div>
                <button>
                    Fotosession buchen
                </button>
                <p><span>Wichtig</span>: Das Angebot gilt nur für die digitale Version. Auf Wunsch bieten wir gegen
                    Aufpreis auch hochwertige Drucke in Passfoto-Qualität an.</p>
            </div>
        </div>
        <div class="dein-container">
            <h1>Dein Fotoshooting – einfach & perfekt in 4 Schritten</h1>
            <div class="cards">
                <div class="dein-card">
                    <img src="../assets/img/8-1-model.svg" alt="">
                    <div class="title">
                        <p>1</p>
                        <h5>Beratung & Buchung</h5>
                    </div>
                    <ul>
                        <li>Kostenloses Erstgespräch am Telefon</li>
                        <li>Individuelle Konzeptentwicklung</li>
                        <li>Flexible Terminbuchung 24/7 über unsere Webseite, per WhatsApp oder telefonisch</li>
                    </ul>
                </div>
                <div class="dein-card">
                    <img src="../assets/img/8-2-model.svg" alt="">
                    <div class="title">
                        <p>2</p>
                        <h5>Vorbereitung</h5>
                    </div>
                    <ul>
                        <li>
                            Styling-Beratung für Outfit und Farben
                        </li>
                        <li>
                            Optional: Professionelle(r) Make-up-Artist(in) und Hairstylist(in) vor Ort

                        </li>
                        <li>
                            Umkleideraum, sowie Frisier- und Schminkbereich in unserem Studio
                        </li>
                        <li>
                            Auswahl aus verschiedenen Hintergründen
                        </li>
                    </ul>
                </div>
                <div class="dein-card">
                    <img src="../assets/img/8-3-model.svg" alt="">
                    <div class="title">
                        <p>3</p>
                        <h5>Dein Fotoshooting</h5>
                    </div>
                    <ul>
                        <li>Individuelle Posen-Beratung </li>
                        <li>
                            Dein Foto im richtigen Stil: ob romantisch-zart bei Hochzeitsfotos, bunt-spielerisch für
                            Babyshootings oder modern-dynamisch für Businessportrait
                        </li>
                        <li>Hochwertige Studioausstattung mit Profibeleuchtung oder im Freien</li>
                    </ul>
                </div>
                <div class="dein-card">
                    <img src="../assets/img/8-4-model.svg" alt="">
                    <div class="title">
                        <p>4</p>
                        <h5>Schnelle Ergebnisse</h5>
                    </div>
                    <ul>
                        <li>Auswahl der besten Bilder via einem zugesandten Link</li>
                        <li>Digitale Galerie innerhalb von 72 Stunden</li>
                        <li>Digitale Galerie innerhalb von 72 Stunden</li>
                        <li>Premium-Retusche mit natürlichem Ergebnis</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="some-main-model">
            <img src="../assets/img/9-1-model.svg" alt="">
            <span></span>
            <span></span>
        </div>
        <div class="kunden-container">
            <h1>Was unsere Kunden über uns denken</h1>
            <div class="cards">
                <div class="kunden-card">
                    <img src="../assets/img/10-1-model.svg" alt="">
                    <button>
                        <div class="play">
                            <img src="../assets/img/play.svg" alt="">
                        </div>
                    </button>
                </div>
                <div class="kunden-card">
                    <img src="../assets/img/10-2-model.svg" alt="">
                    <button>
                        <div class="play">
                            <img src="../assets/img/play.svg" alt="">
                        </div>
                    </button>
                </div>
                <div class="kunden-card">
                    <img src="../assets/img/10-3-model.svg" alt="">
                    <button>
                        <div class="play">
                            <img src="../assets/img/play.svg" alt="">
                        </div>
                    </button>
                </div>
                <div class="kunden-card">
                    <img src="../assets/img/10-4-model.svg" alt="">
                    <button>
                        <div class="play">
                            <img src="../assets/img/play.svg" alt="">
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div class="google-container">
            <div class="google-rate">
                <img src="../assets/img/google.png" alt="">
                <div class="stars-container">
                    <h1>5,0</h1>
                    <div class="stars">
                        <img src="../assets/img/star.png" alt="">
                        <img src="../assets/img/star.png" alt="">
                        <img src="../assets/img/star.png" alt="">
                        <img src="../assets/img/star.png" alt="">
                        <img src="../assets/img/star.png" alt="">
                    </div>
                </div>
                <h5>Bewertungen: 46</h5>
            </div>
            <div class="requests-container">
                <Swiper @swiper="onSwiper" :slides-per-view="2" :slides-per-group="1" :loop="false"
                    class="requests-swiper">
                    <SwiperSlide class="request">
                        <h1>Yuliia Hübl</h1>
                        <div class="stars-container">
                            <div class="stars">
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                            </div>
                            <p>vor 5 Monaten</p>
                        </div>
                        <p>{{ truncateText('Tatiana ist eine talentierte Fotografin und sie hat ein wunderschönes Studio! Zu einem solchen Fotografen möchte ich zurückkehren, weil die Aufnahmen sehr einfach sind. Sie sagt direkt, wie man wird und was zu tun ist, und das können und tun nicht alle Fotografen! Daher bleibt es nur, den Prozess zu genießen. Die Bilder sind super hochwertig und meistens sind sie alle cool, was für ein Foto du nicht nehmen kannst, jeder mag es. Ich empfehle es aufrichtig!', 350) }}</p>
                    </SwiperSlide>
                    <SwiperSlide class="request">
                        <h1>Yuliia Hübl</h1>
                        <div class="stars-container">
                            <div class="stars">
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                            </div>
                            <p>vor 5 Monaten</p>
                        </div>
                        <p>{{ truncateText('Tatiana ist eine talentierte Fotografin und sie hat ein wunderschönes Studio! Zu einem solchen Fotografen möchte ich zurückkehren, weil die Aufnahmen sehr einfach sind. Sie sagt direkt, wie man wird und was zu tun ist, und das können und tun nicht alle Fotografen! Daher bleibt es nur, den Prozess zu genießen. Die Bilder sind super hochwertig und meistens sind sie alle cool, was für ein Foto du nicht nehmen kannst, jeder mag es. Ich empfehle es aufrichtig!', 350) }}</p>
                    </SwiperSlide>
                    <SwiperSlide class="request">
                        <h1>Yuliia Hübl</h1>
                        <div class="stars-container">
                            <div class="stars">
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                            </div>
                            <p>vor 5 Monaten</p>
                        </div>
                        <p>{{ truncateText('Tatiana ist eine talentierte Fotografin und sie hat ein wunderschönes Studio! Zu einem solchen Fotografen möchte ich zurückkehren, weil die Aufnahmen sehr einfach sind. Sie sagt direkt, wie man wird und was zu tun ist, und das können und tun nicht alle Fotografen! Daher bleibt es nur, den Prozess zu genießen. Die Bilder sind super hochwertig und meistens sind sie alle cool, was für ein Foto du nicht nehmen kannst, jeder mag es. Ich empfehle es aufrichtig!', 350) }}</p>
                    </SwiperSlide>
                    <SwiperSlide class="request">
                        <h1>Yuliia Hübl</h1>
                        <div class="stars-container">
                            <div class="stars">
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                            </div>
                            <p>vor 5 Monaten</p>
                        </div>
                        <p>{{ truncateText('Tatiana ist eine talentierte Fotografin und sie hat ein wunderschönes Studio! Zu einem solchen Fotografen möchte ich zurückkehren, weil die Aufnahmen sehr einfach sind. Sie sagt direkt, wie man wird und was zu tun ist, und das können und tun nicht alle Fotografen! Daher bleibt es nur, den Prozess zu genießen. Die Bilder sind super hochwertig und meistens sind sie alle cool, was für ein Foto du nicht nehmen kannst, jeder mag es. Ich empfehle es aufrichtig!', 350) }}</p>
                    </SwiperSlide>
                    <SwiperSlide class="request">
                        <h1>Yuliia Hübl</h1>
                        <div class="stars-container">
                            <div class="stars">
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                                <img src="../assets/img/star.png" alt="star" />
                            </div>
                            <p>vor 5 Monaten</p>
                        </div>
                        <p>{{ truncateText('Tatiana ist eine talentierte Fotografin und sie hat ein wunderschönes Studio! Zu einem solchen Fotografen möchte ich zurückkehren, weil die Aufnahmen sehr einfach sind. Sie sagt direkt, wie man wird und was zu tun ist, und das können und tun nicht alle Fotografen! Daher bleibt es nur, den Prozess zu genießen. Die Bilder sind super hochwertig und meistens sind sie alle cool, was für ein Foto du nicht nehmen kannst, jeder mag es. Ich empfehle es aufrichtig!', 350) }}</p>
                    </SwiperSlide>
                    <SwiperSlide class="request-button-next">
                        <button>
                            hinterlassen Sie Ihr Feedback
                            <img src="../assets/img/next.svg" alt="">
                        </button>
                    </SwiperSlide>
                </Swiper>
                <div class="request-pagination">
                    <div class="progress-bar" aria-hidden="true">
                        <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
                    </div>
                    <div class="action-buttons">
                        <button @click="slidePrev">
                            <img src="../assets/img/slider-nav.svg" alt="prev" style="transform: rotate(180deg);" />
                        </button>
                        <button @click="slideNext">
                            <img src="../assets/img/slider-nav.svg" alt="next" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="unsere">
            <h1>Unsere Kunden</h1>
            <div class="arts">
                <swiper :modules="[Pagination, Navigation]" :pagination="{ clickable: true, dynamicBullets: true }"
                    navigation loop slides-per-view="1">
                    <swiper-slide class="unsere-slide">
                        <div class="info">
                            <h3>Merbag</h3>
                            <div class="text">
                                <p>Bei einer geschlossenen Veranstaltung in Wien präsentierte Merbag, der offizielle
                                    Mercedes-Benz Händler, neueste Modelle und innovative Lösungen für gewerbliche
                                    Kunden</p>
                                <p>Die Gäste erlebten hautnah die Performance und Technologie der Fahrzeuge – ein
                                    gelungener Abend mit Networking und Fachgesprächen</p>
                            </div>
                        </div>
                        <img src="../assets/img/11-1-model.svg" alt="">
                    </swiper-slide>
                    <swiper-slide class="unsere-slide">
                        <div class="info">
                            <h3>Die Familie Mucha <span>– Medienpower mit Tradition</span></h3>
                            <div class="text">
                                <p>Ihr Engagement für Branchenthemen und innovative Formate macht sie zu zentralen
                                    Akteuren der Wirtschaftskommunikation</p>
                                <p>Als Inhaber der MG Mediengruppe, zählen sie zu den prägenden Persönlichkeiten der
                                    österreichischen Medienlandschaft.</p>
                                <p style="grid-column: 1/ -1;">Mit ihrem Portfolio aus Fachzeitschriften, digitalen
                                    Plattformen und Veranstaltungen verbindet die Unternehmerfamilie seit Jahren
                                    wirtschaftliche Kompetenz mit journalistischem Anspruch</p>
                            </div>
                        </div>
                        <img src="../assets/img/11-2-model.svg" alt="">
                    </swiper-slide>
                    <swiper-slide class="unsere-slide">
                        <div class="info">
                            <h3>Pavel Kolgatin <span>– Tenor an der Wiener Staatsoper</span></h3>
                            <div class="text">
                                <p>Der in Balaschow geborene Tenor Pavel Kolgatin ist seit 2018 Ensemblemitglied der
                                    Wiener Staatsoper</p>
                                <p>Der Preisträger des Tschaikowski-Wettbewerbs (2015) brilliert in Partien wie Lenski
                                    ("Eugen Onegin"), Ferrando ("Così fan tutte") und Belmonte ("Die Entführung aus dem
                                    Serail")</p>
                                <p style="grid-column: 1/ -1;">International trat er u.a. am Teatro alla Scala und bei
                                    den Bregenzer Festspielen auf</p>
                            </div>
                        </div>
                        <img src="../assets/img/11-3-model.svg" alt="">
                    </swiper-slide>
                    <swiper-slide class="unsere-slide">
                        <div class="info">
                            <h3>Masha Weber <span>– Pop-Sängerin</span></h3>
                            <div class="text">
                                <p>Maria "Masha" Weber ist eine deutsch-russische Popsängerin und ehemalige Frontfrau
                                    der Girlgroup Tutsi (2012-2016)</p>
                                <p>Seit ihrem Solodebüt 2016 begeistert sie mit eingängigen Dance-Pop-Hits wie
                                    "Ostavaiysya" und Bühnenshows</p>
                                <p style="grid-column: 1/ -1;">Die vielseitige Künstlerin verbindet Gesangstalent mit
                                    schauspielerischer Präsenz in TV-Rollen</p>
                            </div>
                        </div>
                        <img src="../assets/img/11-4-model.svg" alt="">
                    </swiper-slide>
                    <swiper-slide class="unsere-slide">
                        <div class="info">
                            <h3>Victoria Rachytskaya-Carillet <span>– Gründerin der Kosmetikmarke RAVI</span></h3>
                            <div class="text">
                                <p>Die Unternehmerin Victoria Rachytskaya-Carillet ist die Inhaberin der
                                    Premium-Kosmetikmarke RAVI, die sich auf natürliche, hochwertige Hautpflege
                                    spezialisiert hat</p>
                                <p>Mit Sitz in Wien kombiniert die Marke innovative Wirkstoffe mit nachhaltigen
                                    Produktionsmethoden</p>
                                <p style="grid-column: 1/ -1;">Victoria bringt ihre Expertise aus der Beauty-Branche und
                                    ihr Engagement für Clean Beauty in das Unternehmen ein</p>
                            </div>
                        </div>
                        <img src="../assets/img/11-5-model.svg" alt="">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="denken-container">
            <h1>
                Was unsere Kunden über uns denken
            </h1>
            <div class="denken">
                <div class="arts">
                    <swiper :modules="[Pagination]" :pagination="{ clickable: true, dynamicBullets: true }" loop
                        slides-per-view="1">
                        <swiper-slide>
                            <img src="../assets/img/12-5-model.svg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/12-1-model.svg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/12-2-model.svg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/12-3-model.svg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/12-4-model.svg" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="info">
                    <div>
                        <h2>Weltweite Würdigung fotografischer Brillanz</h2>
                        <h6>Für, die bei den 35AWARDS in mehreren Kategorien triumphierte, sind diese Zertifikate der Beweis, dass ihre Arbeiten zu den <span>100 besten Fotografien</span> des Jahres gehören, ausgewählt unter 444.000 Einsendungen von über 123.000 Fotografen aus 173 Ländern</h6>
                    </div>
                    <div>
                        <h2>Absolute Fairness, globale Reichweite</h2>
                        <h6>Das streng anonymisierte Verfahren mit <span>35 internationalen Preisrichtern</span> garantiert, dass nur die Bildsprache zählt – kein Name, kein bisheriger Ruhm. Dass ihre Arbeiten in dieser Elite überzeugten, bestätigt: Ihre Vision spricht eine universelle Sprache.</h6>
                    </div>
                    <div>
                        <h2>Mehr als ein Preis – ein Karriereimpuls</h2>
                        <h6>Für, die bei den 35AWARDS <span>in mehreren Kategorien triumphierte</span>, sind diese Zertifikate der Beweis, dass ihre Arbeiten zu den 100 besten Fotografien des Jahres gehören, ausgewählt unter 444.000 Einsendungen von über 123.000 Fotografen aus 173 Ländern</h6>
                    </div>
                        <a href="https://35awards.com/11th/about/" target="_blank">35awards.com <img src="../assets/img/next.svg" alt=""></a>
                    <h4>In einer Welt, die täglich von Millionen Bildern überflutet wird, sind solche Auszeichnungen das Wertvollste, was eine Fotografin erreichen kann: die Gewissheit, dass ihre Vision die Menschen berührt</h4>
                </div>
            </div>
        </div>
        <div class="some-main-model">
            <img src="../assets/img/13-1-model.svg" alt="">
            <span></span>
            <span></span>
        </div>
        <div class="modal fade" id="passport" tabindex="-1" aria-labelledby="passportLabel" aria-hidden="true">
            <button type="button" data-bs-dismiss="modal" aria-label="Close">
                <img src="../assets/img/close.svg" alt="">
            </button>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src="../assets/img/passport.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import { ref, computed, watch } from 'vue';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const truncateText = (text, maxLength = 250) => text && text.length > maxLength ? text.slice(0, maxLength) + '...' : text || '';

const swiperInstance = ref(null);
const currentIndex = ref(0);
const totalSlides = ref(0);

const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
    totalSlides.value = swiper.slides.length;
    currentIndex.value = swiper.realIndex || swiper.activeIndex || 0;

    swiper.on('slideChange', () => {
        currentIndex.value = swiper.realIndex || swiper.activeIndex || 0;
    });
};

const slideNext = () => {
    if (swiperInstance.value) swiperInstance.value.slideNext();
};

const slidePrev = () => {
    if (swiperInstance.value) swiperInstance.value.slidePrev();
};

const progressPercent = computed(() => {
    if (!totalSlides.value) return 0;
    if (currentIndex.value >= totalSlides.value - 2) {
        return 100;
    }
    return ((currentIndex.value + 1) / totalSlides.value) * 100;
});
</script>