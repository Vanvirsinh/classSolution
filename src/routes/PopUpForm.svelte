<script>
    export let isVisible;
    export let hideForm;
    import { fade } from "svelte/transition";

    let name = "";
    let email = "";
    let phone = "";
    let message = "";
    let flashMessage = "";
    let status = null;
    let buttonStatus = "Send Message";
    let isDisabled = false;

    function handleKeyPress(event) {
        if (event.key === "Escape") {
            hideForm();
        }
    }

    function resetForm() {
        name = "";
        email = "";
        phone = "";
        message = "";
    }

    function handleSubmit() {
        buttonStatus = "Loading...";
        isDisabled = true;
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
                isDisabled = true;
                resetForm();
                if (response.ok) {
                    buttonStatus = `Form Submitted Successfully!`;
                    status = true;
                    setTimeout(() => {
                        buttonStatus = "Sent Message";
                        isDisabled = false;
                    }, 2000);
                } else {
                    response.json().then((data) => {
                        if (Object.hasOwn(data, "errors")) {
                            buttonStatus = data["errors"]
                                .map((error) => error["message"])
                                .join(", ");
                            status = false;
                            setTimeout(() => {
                                buttonStatus = "Sent Message";
                                isDisabled = false;
                            }, 2000);
                        } else {
                            buttonStatus = "Oops! Submission Failed";
                            status = false;
                            setTimeout(() => {
                                buttonStatus = "Sent Message";
                                isDisabled = false;
                            }, 2000);
                        }
                    });
                }
            })
            .catch((error) => {
                isDisabled = true;
                resetForm();
                buttonStatus = "Oops! Submission Failed";
                setTimeout(() => {
                    buttonStatus = "Sent Message";
                    isDisabled = false;
                }, 2000);
                status = false;
            });
    }
</script>

<svelte:window on:keydown={handleKeyPress} />

{#if isVisible}
    <main transition:fade>
        <section transition:fade>
            <i
                on:click={hideForm}
                on:keyup={handleKeyPress}
                class="fa fa-times"
            />
            <div class="container">
                <div class="contact-image">
                    <img src="/images/contact-us.png" alt="" />
                </div>
                <div class="contact-form">
                    <h1>Contact Us</h1>
                    <form on:submit|preventDefault={handleSubmit}>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter full name"
                            name="name"
                            bind:value={name}
                        />

                        <input
                            type="email"
                            class="form-control"
                            placeholder="Enter email address"
                            name="email"
                            bind:value={email}
                        />

                        <input
                            type="phone"
                            class="form-control"
                            placeholder="Enter phone number"
                            name="phone"
                            bind:value={phone}
                        />

                        <textarea
                            class="form-control"
                            rows="4"
                            placeholder="Tell us about your message"
                            name="message"
                            bind:value={message}
                        />
                        <button
                            type="submit"
                            class="submit-btn"
                            name="send message"
                            disabled={isDisabled}>{buttonStatus}</button
                        >
                    </form>
                </div>
            </div>
        </section>
    </main>
{/if}

<style>
    main {
        height: 100vh;
        width: 100vw;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.447);
        z-index: 40;
        top: 0;
        left: 0;
    }
    section {
        background: linear-gradient(to left, rgb(210, 205, 248), 25%, #fff);
        padding: 40px 20px;
        padding-top: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    section .fa-times {
        position: absolute;
        right: 5px;
        top: 5px;
        cursor: pointer;
        padding: 5px 7px;
        border: 2px solid #f5f5f5;
        border-radius: 5px;
        color: rgb(118, 118, 118);
    }
    section .fa-times:active {
        border-color: black;
    }
    section .container {
        width: 100%;
        display: flex;
    }
    section .container .contact-image {
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
    }
    section .container .contact-image img {
        height: 50%;
        width: auto;
    }
    section .container .contact-form {
        width: 60%;
    }

    .contact-form > h1 {
        font-size: 25px;
        position: relative;
        top: -10px;
        color: #575757;
    }
    section .container .contact-form form {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    .form-control {
        border: 0;
        border-radius: 5px;
        box-shadow: none;
        background-color: #fff;
        padding-top: 25px;
        padding-bottom: 25px;
    }

    .contact-form input {
        width: 100%;
    }

    .contact-form textarea {
        padding-top: 10px;
    }

    .submit-btn {
        background: #6b3fa0;
        border-radius: 50px;
        border: 0;
        color: #ffffff;
        height: 50px;
        padding: 0;
        display: block;
    }

    .submit-btn:hover {
        background: #ffffff;
        color: #252020;
    }
</style>
