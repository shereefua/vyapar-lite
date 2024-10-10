"use client";
import React, { useState } from "react";

const WorkPage = () => {
    // State to control the modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSite, setSelectedSite] = useState(null);

    const sites = [
        { id: 1, name: "Site 1", update: "In progress" },
        { id: 2, name: "Site 2", update: "Completed" },
        { id: 3, name: "Site 3", update: "Pending" },
    ];

    const openModal = (site) => {
        setSelectedSite(site);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSite(null);
    };

    return (
        <div className="work-page-container">
            <h2 className="text-2xl font-bold mb-4">Your Current Sites</h2>

            {/* Flex container to hold the site boxes */}
            <div className="site-grid flex flex-wrap gap-4">
                {sites.map((site) => (
                    <div
                        key={site.id}
                        className="site-box p-4 border border-gray-300 rounded-lg cursor-pointer w-1/4"
                        onClick={() => openModal(site)}
                    >
                        <h3 className="text-xl font-semibold">{site.name}</h3>
                        <p>{site.update}</p>
                    </div>
                ))}
            </div>

            {/* Modal for editing */}
            {isModalOpen && (
                <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="modal-content bg-white p-6 rounded-lg w-1/3">
                        <h3 className="text-xl font-bold mb-4">Edit {selectedSite?.name}</h3>
                        <form>
                            {/* Example input field */}
                            <div className="mb-4">
                                <label className="block mb-2 font-semibold">Update Status</label>
                                <input
                                    type="text"
                                    defaultValue={selectedSite?.update}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2" onClick={closeModal}>
                                    Cancel
                                </button>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WorkPage;
