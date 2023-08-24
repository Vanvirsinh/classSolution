<script>
    let services = [
        {
            image: "images/courses-image1.jpg",
            title: "This is my first Service",
            description: "Lorem ipsum dolor sit consectetur adipisicing elit.",
            subServices: [
                {
                    icon: "fa-book",
                    title: "Sub-Services Heading",
                    description:
                        "Lorem ipsum dolor sit amet,elit. Sint ipsa voluptatibus consectetur adipisicing.",
                },
                {
                    icon: "fa-check",
                    title: "Sub-Services Heading",
                    description:
                        "Lorem ipsum dolor sit amet,elit. Sint ipsa voluptatibus consectetur adipisicing.",
                },
            ],
        },
        {
            image: "images/courses-image2.jpg",
            title: "This is my Second Service",
            description: "Lorem ipsum dolor sit consectetur adipisicing elit.",
            subServices: [
                {
                    icon: "fa-book",
                    title: "Sub-Services Heading",
                    description:
                        "Lorem ipsum dolor sit amet,elit. Sint ipsa voluptatibus consectetur adipisicing.",
                },
                {
                    icon: "fa-check",
                    title: "Sub-Services Heading",
                    description:
                        "Lorem ipsum dolor sit amet,elit. Sint ipsa voluptatibus consectetur adipisicing.",
                },
            ],
        },
        {
            image: "images/courses-image3.jpg",
            title: "This is my Third Service",
            description: "Lorem ipsum dolor sit consectetur adipisicing elit.",
            subServices: [
                {
                    icon: "fa-book",
                    title: "Sub-Services Heading",
                    description:
                        "Lorem ipsum dolor sit amet,elit. Sint ipsa voluptatibus consectetur adipisicing.",
                },
                {
                    icon: "fa-check",
                    title: "Sub-Services Heading",
                    description:
                        "Lorem ipsum dolor sit amet,elit. Sint ipsa voluptatibus consectetur adipisicing.",
                },
            ],
        },
    ];
</script>

<!-- Services -->
<section id="services">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="section-title">
                    <h2>Services</h2>
                    <small>Upgrade your skills with Class Solution</small>
                </div>

                <div
                    class="owl-carousel owl-theme owl-courses services-container"
                >
                    {#each services as service}
                        <div class="col-md-4 col-sm-4">
                            <div class="item">
                                <div class="courses-thumb">
                                    <div class="services-img">
                                        <img
                                            src={service.image}
                                            class=""
                                            alt=""
                                        />
                                    </div>
                                    <div class="service-info">
                                        <h3>{service.title}</h3>
                                        <p>
                                            {service.description}
                                        </p>
                                        <div class="service-detail">
                                            {#each service.subServices as subService}
                                                <figure>
                                                    <span
                                                        ><i
                                                            class="fa {subService.icon}"
                                                        /></span
                                                    >
                                                    <figcaption>
                                                        <h3>
                                                            {subService.title}
                                                        </h3>
                                                        <p>
                                                            {subService.description}
                                                        </p>
                                                    </figcaption>
                                                </figure>
                                            {/each}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>
