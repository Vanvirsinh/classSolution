<script>
	import Swiper from "./Swiper.svelte";
	import About from "./About.svelte";
	import Services from "./Services.svelte";
	import Testimonial from "./Testimonial.svelte";
	import Contact from "./Contact.svelte";
	import PopUpForm from "./PopUpForm.svelte";

	import { onMount } from "svelte";

	onMount(() => {
		document.body.addEventListener("mouseleave", handleMouseLeave);
	});

	let onlyOnce = true;
	let isVisible = false;

	function showForm() {
		isVisible = true;
	}
	function hideForm() {
		isVisible = false;
	}

	function handleMouseLeave() {
		if (onlyOnce) {
			showForm();
		}
		onlyOnce = false;
	}
</script>

<Swiper />
<About />
<Services />
<Testimonial />
<Contact />
{#if isVisible}
	<PopUpForm {isVisible} {hideForm} />
{/if}
