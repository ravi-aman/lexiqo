"use client";

import { useState } from "react";

const QueryForm = () => {
    const [formData, setFormData] = useState({
        userId: "",
        title: "",
        description: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await fetch("/api/query", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("Query submitted successfully!");
                setFormData({ userId: "", title: "", description: "" });
            } else {
                setMessage(`Error: ${data.error}`);
            }
        } catch (error) {
            setMessage("Something went wrong!");
        }
    };

    return (
        <div className="max-w-screen mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Submit a Query</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="userId"
                    placeholder="User ID"
                    value={formData.userId}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Query Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <textarea
                    name="description"
                    placeholder="Query Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Submit Query
                </button>
            </form>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </div>
    );
};

export default QueryForm;
