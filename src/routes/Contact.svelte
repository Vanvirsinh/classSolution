<script>
    import Flash from "./Flash.svelte";

    let name = "";
    let email = "";
    let phone = "";
    let message = "";
    let flashMessage = "";
    let status = null;
    let buttonStatus = "Send Message";

    function resetForm() {
        name = "";
        email = "";
        phone = "";
        message = "";
    }

    function handleSubmit() {
        buttonStatus = "Loading...";
        var data = {
            name,
            email,
            phone,
            message,
        };
        fetch("https://formspree.io/f/xoqoddzp", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                buttonStatus = "Send Message";
                resetForm();
                if (response.ok) {
                    flashMessage = `Thanks ${data.name}, for your submission!`;
                    status = true;
                } else {
                    response.json().then((data) => {
                        if (Object.hasOwn(data, "errors")) {
                            flashMessage = data["errors"]
                                .map((error) => error["message"])
                                .join(", ");
                            status = false;
                        } else {
                            flashMessage =
                                "Oops! There was a problem submitting your form";
                            status = false;
                        }
                    });
                }
            })
            .catch((error) => {
                resetForm();
                buttonStatus = "Send Message";
                flashMessage = "Oops! There was a problem submitting your form";
                status = false;
            });
    }
</script>

<!-- Flash Message -->
{#if status !== null}
    <Flash {flashMessage} {status} />
{/if}

<!-- CONTACT -->
<section id="contact">
    <div class="container">
        <div class="row">
            <div class="section-title">
                <h2>Contact us</h2>
                <small>We love conversations. Let us talk!</small>
            </div>
            <div class="col-md-6 col-sm-12">
                <form id="contact-form" on:submit|preventDefault={handleSubmit}>
                    <h2>Send us an enquiry!</h2>
                    <div class="col-md-12 col-sm-12">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter full name"
                            name="name"
                            required
                            bind:value={name}
                        />

                        <input
                            type="email"
                            class="form-control"
                            placeholder="Enter email address"
                            name="email"
                            required
                            bind:value={email}
                        />

                        <input
                            type="phone"
                            class="form-control"
                            placeholder="Enter phone number"
                            name="phone"
                            required
                            bind:value={phone}
                        />

                        <textarea
                            class="form-control"
                            rows="6"
                            placeholder="Tell us about your message"
                            name="message"
                            required
                            bind:value={message}
                        />
                    </div>

                    <div class="col-md-4 col-sm-12">
                        <input
                            type="submit"
                            class="form-control"
                            name="send message"
                            value={buttonStatus}
                        />
                    </div>
                </form>
            </div>

            <div class="col-md-6 col-sm-12">
                <div class="contact-image">
                    <img
                        src="images/contact-image.jpg"
                        class="img-responsive"
                        alt="Smiling Two Girls"
                    />
                </div>
            </div>
        </div>
    </div>
</section>
