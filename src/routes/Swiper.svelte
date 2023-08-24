<script>
    import { onMount } from "svelte";
    import Swiper from "swiper/bundle";
    import "swiper/css";

    let swiper;

    onMount(() => {
        swiper = new Swiper(".swiper-container", {
            loop: true,
            pagination: {
                el: ".swiper-pagination",
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    });
</script>

<section id="home">
    <div class="swiper-container">
        <div class="swiper-wrapper home-slider">
            <!-- Item 1 -->
            <div class="swiper-slide">
                <div class="item item-first">
                    <div class="caption">
                        <div class="container">
                            <div class="col-md-6 col-sm-12">
                                <h1>Heading for the first slide</h1>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dignissimos rem, sint
                                    harum modi veniam labore.
                                </h3>
                                <a
                                    href="#about"
                                    class="section-btn btn btn-default smoothScroll"
                                    >About Us</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Item - 2 -->
            <div class="swiper-slide">
                <div class="item item-second">
                    <div class="caption">
                        <div class="container">
                            <div class="col-md-6 col-sm-12">
                                <h1>Heading for the second slide</h1>
                                <h3>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Sequi ipsa quidem incidunt
                                    delectus id atque?
                                </h3>
                                <a
                                    href="#services"
                                    class="section-btn btn btn-default smoothScroll"
                                    >Services</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Item - 3 -->
            <div class="swiper-slide">
                <div class="item item-third">
                    <div class="caption">
                        <div class="container">
                            <div class="col-md-6 col-sm-12">
                                <h1>Heading for the Third slide</h1>
                                <h3>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nisi officia cupiditate
                                    placeat dolores ipsam saepe!
                                </h3>
                                <a
                                    href="#contact"
                                    class="section-btn btn btn-default smoothScroll"
                                    >Reach out to us</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add pagination and navigation if needed -->
        <div class="swiper-pagination" />
        <div class="swiper-button-next" />
        <div class="swiper-button-prev" />
    </div>
</section>

<style>
    #home {
        max-width: 100%;
    }
    .swiper-container {
        overflow: hidden;
        width: 100%;
    }
</style>
