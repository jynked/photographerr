<template>
    <header>
        <router-link :to="{ name: 'main' }" class="logo">
            <img src="../assets/img/logo.svg" alt="">
        </router-link>
        <nav>
            <router-link :to="{ name: 'main' }">Karriere & Business</router-link>
            <router-link :to="{ name: 'main' }">Privat & Hochzeit</router-link>
            <router-link :to="{ name: 'main' }">Services</router-link>
            <router-link :to="{ name: 'main' }">Aktuelles</router-link>
            <router-link :to="{ name: 'main' }">Kontakt</router-link>
        </nav>
        <div class="header-contacts">
            <div>
                <a href="tel:+436705072140">
                    <img src="../assets/img/phone.png" alt="">
                    +43 670 5072140
                </a>
                <a href="mailto:info@deinfotograf.at">
                    <img src="../assets/img/email.png" alt="">
                    info@deinfotograf.at
                </a>
            </div>
            <a href="#">
                <img src="../assets/img/map.png" alt="">
                Ausstellungsstrasse 3/15 1020 Wien
            </a>
        </div>
        <div class="header-media">
            <a href="#">
                <img src="../assets/img/facebook.png" alt="">
            </a>
            <a href="#">
                <img src="../assets/img/youtube.png" alt="">
            </a>
            <a href="#">
                <img src="../assets/img/inst.png" alt="">
            </a>
        </div>
        <button class="menu" @click="setModal">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>
    <div class="menu-modal" v-if="isModal">
        <div class="menu-heading">
            <header class="header-in-menu" v-if="windowWidth < 1100">
                <router-link :to="{ name: 'main' }" class="logo">
                    <img src="../assets/img/logo.svg" alt="">
                </router-link>
                <button class="menu" @click="setModal">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>
            <header class="header-in-menu" v-else style="position: relative;">
                <nav style="display: flex; margin: 0 auto;">
                    <router-link :to="{ name: 'main' }" style="font-size: 0.875rem;">Karriere & Business</router-link>
                    <router-link :to="{ name: 'main' }" style="font-size: 0.875rem;">Privat & Hochzeit</router-link>
                    <router-link :to="{ name: 'main' }" style="font-size: 0.875rem;">Services</router-link>
                    <router-link :to="{ name: 'main' }" style="font-size: 0.875rem;">Aktuelles</router-link>
                    <router-link :to="{ name: 'main' }" style="font-size: 0.875rem;">Kontakt</router-link>
                </nav>
                <button class="menu" @click="setModal" style="position: absolute; right: 0; display: flex;">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>
        </div>
        <div class="menu-main">
            <ul v-if="whichMenuSlide == 0 && windowWidth < 1100" style="min-height: 368px;">
                <li>
                    <button @click="whichMenuSlide = 1">
                        Karriere & Business
                        <img src="../assets/img/next.svg" alt="">
                    </button>
                </li>
                <li>
                    <button>
                        Privat & Hochzeit
                        <img src="../assets/img/next.svg" alt="">
                    </button>
                </li>
                <li>
                    <button>
                        Services
                        <img src="../assets/img/next.svg" alt="">
                    </button>
                </li>
                <li>
                    <button>
                        Aktuelles
                        <img src="../assets/img/next.svg" alt="">
                    </button>
                </li>
                <li>
                    <router-link :to="{ name: 'main' }">Kontakt</router-link>
                </li>
            </ul>
            <div class="menu-selected-block-container" v-if="windowWidth >= 1100">
                <div class="menu-selected-block"
                    style=" display: flex; flex-direction: row; justify-content: space-between;">
                    <div class="menu-links-selected-block">
                        <ul>
                            <li>
                                <a href="#">
                                    Bewerbung & Passfotos
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Bewerbung & Passfotos
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Bewerbung & Passfotos
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Bewerbung & Passfotos
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Bewerbung & Passfotos
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Bewerbung & Passfotos
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Bewerbung & Passfotos
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Bewerbung & Passfotos
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="menu-footer-info">
                        <router-link :to="{ name: 'main' }">
                            <img src="../assets/img/logo.svg" alt="">
                        </router-link>
                        <div class="header-media">
                            <a href="#">
                                <img src="../assets/img/facebook-gray.png" alt="">
                            </a>
                            <a href="#">
                                <img src="../assets/img/youtube-gray.png" alt="">
                            </a>
                            <a href="#">
                                <img src="../assets/img/inst-gray.png" alt="">
                            </a>
                        </div>
                        <div class="header-contacts">
                            <div>
                                <a href="tel:+436705072140">
                                    <img src="../assets/img/phone.png" alt="">
                                    +43 670 5072140
                                </a>
                                <a href="mailto:info@deinfotograf.at">
                                    <img src="../assets/img/email.png" alt="">
                                    info@deinfotograf.at
                                </a>
                            </div>
                            <a href="#">
                                <img src="../assets/img/map.png" alt="">
                                Ausstellungsstrasse 3/15 1020 Wien
                            </a>
                        </div>
                    </div>
                    <img src="../assets/img/menu-model.svg" alt=""
                        style="width: 100%; object-fit: cover; max-width: 440px;">
                </div>
            </div>
            <div class="menu-selected-block-container" v-if="whichMenuSlide == 1 && windowWidth < 1100">
                <button @click="whichMenuSlide = 0" class="menu-back">
                    <img src="../assets/img/next.svg" alt="">
                    Zurück
                </button>
                <div class="menu-selected-block" :style="windowWidth > 700 ? 'margin-bottom: 30px;' : 'margin-bottom: 20px;'">
                    <h6>Karriere & Business</h6>
                    <ul class="menu-links-selected-block is-desktop">
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Bewerbung & Passfotos
                            </a>
                        </li>
                    </ul>
                </div>
                <img v-if="windowWidth < 701" src="../assets/img/menu-model.svg" alt=""
                style="width: 100%; object-fit: cover; max-height: 440px; max-width: 800px; margin: 0 auto; display: flex;" :style="windowWidth > 700 ? 'height: auto' : 'height: 356px'">
            </div>
            <img v-if="windowWidth < 1100 && windowWidth > 701" src="../assets/img/menu-model.svg" alt=""
                style="width: 100%; object-fit: cover; max-height: 440px; max-width: 800px; margin: 0 auto; display: flex;">
            <div class="menu-footer-info" v-if="windowWidth < 1100">
                <div class="header-media">
                    <a href="#">
                        <img src="../assets/img/facebook-gray.png" alt="">
                    </a>
                    <a href="#">
                        <img src="../assets/img/youtube-gray.png" alt="">
                    </a>
                    <a href="#">
                        <img src="../assets/img/inst-gray.png" alt="">
                    </a>
                </div>
                <div class="header-contacts">
                    <a href="tel:+436705072140">
                        <img src="../assets/img/phone.png" alt="">
                        +43 670 5072140
                    </a>
                    <a href="mailto:info@deinfotograf.at">
                        <img src="../assets/img/email.png" alt="">
                        info@deinfotograf.at
                    </a>
                    <a href="#">
                        <img src="../assets/img/map.png" alt="">
                        Ausstellungsstrasse 3/15 1020 Wien
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isModal: false,
            whichMenuSlide: 0,
            windowWidth: window.innerWidth,
        }
    },
    methods: {
        setModal() {
            let bodyComp = document.body;
            this.isModal ? bodyComp.style.overflowY = 'auto' : bodyComp.style.overflowY = 'hidden';
            this.isModal = !this.isModal;
        },
        updateWindowWidth() {
            this.windowWidth = window.innerWidth;
        }
    },
    mounted() {
        this.windowWidth = window.innerWidth;
        window.addEventListener('resize', this.updateWindowWidth);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateWindowWidth);
    }
}
</script>