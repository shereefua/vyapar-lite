"use client";
import React from "react";
import Image from "next/image";

const HomePage = () => {
    return (
        <>
            <div className="flex h-screen">
                {/* <!-- Left section --> */}
                <article className="flex flex-col w-3/4">
                    <div className="flex justify-between ml-4 mt-4">
                        <section className="w-2/3 mr-4">
                            <div className="h-72 petti">sales</div>
                        </section>
                        <section className="w-72">
                            <div className="h-72 petti">expense</div>
                        </section>
                    </div>
                   
                    <div className="flex justify-between  ml-4 mt-5 ">
                        <section className="w-72 mr-4">
                            <div className="h-72 petti">Content 1</div>
                        </section>
                        <section className="w-72 mr-4">
                            <div className="h-72 petti">Content 2</div>
                        </section>
                        <section className="w-72">
                            <div className="h-72 petti">Content 3</div>
                        </section>
                    </div>
                </article>

                {/* <!-- Vertical divider --> */}
                <div className="w-0.5 m-5 bg-gray-200"></div>
                {/* <!-- Right section (scrollable) --> */}
                <aside className="flex-1 overflow-y-auto ">
                    <div className="flex flex-col p-4 ">
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 1</div>
                        </section>
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 2</div>
                        </section>
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 3</div>
                        </section>
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 4</div>
                        </section>
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 5</div>
                        </section>
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 6</div>
                        </section>
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 7</div>
                        </section>
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 5</div>
                        </section>
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 6</div>
                        </section>
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 7</div>
                        </section>
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 5</div>
                        </section>
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 6</div>
                        </section>
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 7</div>
                        </section>
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 5</div>
                        </section>
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 6</div>
                        </section>
                        <section className="mb-4">
                            <div className="petti p-4">dcsddc 7</div>
                        </section>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default HomePage;
