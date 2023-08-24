<script>
    import { fade } from "svelte/transition";
    export let flashMessage = "Section Title";
    export let status = true;

    function closeFlash() {
        status = null;
    }

    function handleKeyPress(event) {
        if (event.key === "Escape") {
            closeFlash();
        }
    }
</script>

{#if status !== null}
    <div class="flash-message">
        <div class="message-box" transition:fade>
            <i
                on:click={closeFlash}
                on:keydown={handleKeyPress}
                class="fa fa-times"
            />
            <i
                class="fa fa-check status-icon {status ? 'success' : 'failure'}"
            />
            <h1>{flashMessage}</h1>
        </div>
    </div>
{/if}

<style>
    .flash-message .fa-times {
        position: absolute;
        right: 5px;
        top: 5px;
        cursor: pointer;
        padding: 5px 7px;
        border: 2px solid #f5f5f5;
        border-radius: 5px;
    }
    .flash-message .fa-times:active {
        border-color: black;
    }
    .flash-message .status-icon {
        font-size: 40px;
        padding: 23px 25px;
        border-radius: 50%;
        color: #fff;
    }
    .flash-message {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.447);
        z-index: 50;
    }
    .flash-message > div {
        width: max-content;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.1),
            -2px -2px 8px 0px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 10px;
    }
    .flash-message > div h1 {
        text-align: center;
        font-size: 17px;
        margin: 0;
        margin-top: 10px;
        max-width: 250px;
        font-weight: normal;
    }
    .success {
        background-color: #29ca8e;
    }
    .failure {
        background-color: #ec3838;
    }
</style>
