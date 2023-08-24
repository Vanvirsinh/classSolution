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
                delay: 2000,
                disableOnInteraction: false,
            },
        });
    });

    let reviews = [
        {
            userImage: "images/tst-image1.jpg",
            userName: "John Doe",
            userDesignation: "Developer",
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            stars: [1, 2, 3, 4, 5],
        },
        {
            userImage: "images/tst-image2.jpg",
            userName: "Selena Gomez",
            userDesignation: "Manager",
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            stars: [1, 2, 3],
        },
        {
            userImage: "images/tst-image3.jpg",
            userName: "Taylor Swift",
            userDesignation: "Director",
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            stars: [1, 2, 3, 4],
        },
        {
            userImage: "images/tst-image4.jpg",
            userName: "Justin Bieber",
            userDesignation: "Advisor",
            review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            stars: [1, 2, 3, 4, 5],
        },
    ];
</script>

<!-- TESTIMONIAL -->
<section id="testimonial">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="section-title">
                    <h2>Student Reviews</h2>
                    <small>From around the world</small>
                </div>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <!-- start -->
                        {#each reviews as review}
                            <div class="col-md-4 col-sm-4 swiper-slide">
                                <div class="item">
                                    <div class="tst-image">
                                        <img
                                            src={review.userImage}
                                            class="img-responsive"
                                            alt=""
                                        />
                                    </div>
                                    <div class="tst-author">
                                        <h4>{review.userName}</h4>
                                        <span>{review.userDesignation}</span>
                                    </div>
                                    <p>
                                        {review.review}
                                    </p>
                                    <div class="tst-rating">
                                        {#each review.stars as star}
                                            <i class="fa fa-star" />
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        {/each}
                        <!-- end -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .swiper-container {
        overflow: hidden;
    }
</style>
