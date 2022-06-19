import "./styles.css";

const About = () => {
	return (
		<div className="about">
			<h1 className="mt-5">About</h1>
			<p class="col-lg-6 col-md-8">
				📥 Super Store is an inventory management system using React. It uses
				Json Server as a backend. To make a new account, navigate to Sign Up
				page and if you already have an account go to Sign In page. You can view
				the products even without login but to add, update, delete the items you
				have to Sign In. You can also navigate to your profile page after you
				Log In.
			</p>
		</div>
	);
};

export default About;
