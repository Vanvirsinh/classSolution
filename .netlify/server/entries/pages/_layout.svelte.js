import { c as create_ssr_component } from "../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1c4rd4k_START --><link rel="stylesheet" href="css/bootstrap.min.css"><link rel="stylesheet" href="css/font-awesome.min.css"><link rel="stylesheet" href="css/templatemo-style.css"><!-- HEAD_svelte-1c4rd4k_END -->`, ""}


<section class="preloader"><div class="spinner"><span class="spinner-rotate"></span></div></section>


<section class="navbar custom-navbar navbar-fixed-top" role="navigation"><div class="container"><div class="navbar-header"><button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon icon-bar"></span>
				<span class="icon icon-bar"></span>
				<span class="icon icon-bar"></span></button>

			
			<a href="#" class="navbar-brand">Class Solution</a></div>

		
		<div class="collapse navbar-collapse"><ul class="nav navbar-nav navbar-nav-first"><li><a href="#top" class="smoothScroll">Home</a></li>
				<li><a href="#about" class="smoothScroll">About</a></li>
				<li><a href="#services" class="smoothScroll">Services</a></li>
				<li><a href="#testimonial" class="smoothScroll">Testimonial</a></li>
				<li><a href="#contact" class="smoothScroll">Contact</a></li></ul>

			<ul class="nav navbar-nav navbar-right"><li><a href="#"><i class="fa fa-phone"></i> +91 999 870 5371</a></li></ul></div></div></section>

<main>${slots.default ? slots.default({}) : ``}</main>


<footer id="footer"><div class="container"><div class="row"><div class="col-md-4 col-sm-6"><div class="footer-info"><div class="section-title"><h2>About Class Solution</h2></div>
					<address><p>Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Laboriosam iste quam sapiente odio repellat! A
							sint libero blanditiis tempora ipsum veritatis natus
							maiores deleniti, soluta eos quam explicabo.
						</p></address></div></div>

			<div class="col-md-4 col-sm-6"><div class="footer-info"><div class="section-title"><h2>Contact Info</h2></div>
					<address><p>+91 999 870 5371</p>
						<p><a href="mailto:youremail.co">hello@youremail.com</a></p></address>

					<div class="footer_menu"><h2>Quick Links</h2>
						<ul><li><a href="#top">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#services">Services</a></li>
							<li><a href="#testimonial">Testimonial</a></li>
							<li><a href="#contact">Contact</a></li></ul></div></div></div>

			<div class="col-md-4 col-sm-12"><div class="footer-info newsletter-form"><div class="section-title"><h2>Follow us On Social Media</h2></div>
					<div><ul class="social-icon"><li><a href="#" class="fa fa-facebook-square" attr="facebook icon"></a></li>
							<li><a href="#" class="fa fa-twitter"></a></li>
							<li><a href="#" class="fa fa-instagram"></a></li></ul>

						<div class="copyright-text"><p>Copyright © Class Solution</p></div></div></div></div></div></div></footer>`;
});
export {
  Layout as default
};
