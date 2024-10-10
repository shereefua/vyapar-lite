import React from "react";

const HomePge = () => {
    return (
        <div className="">
            <header>
                <h1>Welcome to My Homepage</h1>
            </header>
            <main>
                <section>
                    <h2>About Me</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
                        adipiscing nec, ultricies sed, dolor.
                    </p>
                </section>
                <section>
                    <h2>My Work</h2>
                    <ul>
                        <li>Project 1</li>
                        <li>Project 2</li>
                        <li>Project 3</li>
                    </ul>
                </section>
                <section>
                    <h2>Contact Me</h2>
                    <p>
                        Email: <a href="mailto:info@example.com">info@example.com</a>
                    </p>
                    <p>Phone: 555-555-5555</p>
                </section>
            </main>
            <footer>
                <p>Copyright © 2023 My Homepage</p>
            </footer>
        </div>
    );
};

export default HomePge;
