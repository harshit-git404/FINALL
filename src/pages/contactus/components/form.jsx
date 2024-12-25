import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, mobile, message } = formData;

        // Validation
        if (!name || !email || !mobile || !message) {
            toast.error("Please fill in all fields before submitting the form!", {
                position: "top-center",
            });
            return;
        }

        if (!/^[6-9]\d{9}$/.test(mobile)) {
            toast.error("Please enter a valid 10-digit mobile number!", {
                position: "top-center",
            });
            return;
        }

        // Personalized success toast
        toast.success(`Thank you, ${name}! 😊 Our team will contact you soon.`, {
            position: "top-center",
        });

        // Clear form
        setFormData({
            name: "",
            email: "",
            mobile: "",
            message: "",
        });
    };

    return (
        <div>
            <section className="text-gray-700 body-font relative">
                <div className="container px-5 py-24 mx-auto flex flex-wrap lg:flex-nowrap">
                    {/* Contact Form */}
                    <div className="lg:w-2/4 w-full bg-white rounded-lg overflow-hidden px-6">
                        <div className="flex flex-col w-full mb-12">
                            <h1 className="sm:text-3xl md:text-5xl text-3xl md:text-left text-center title-font font-bold text-[#31363F]">
                                Contact Us
                            </h1>
                        </div>
                        <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        placeholder="Enter your name"
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#5DB996] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        placeholder="Enter your email"
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#5DB996] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        placeholder="Enter 10-digit mobile number"
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#5DB996] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        placeholder="Enter your message"
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#5DB996] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button
                                    type="submit"
                                    className="flex mx-auto border-2 rounded-full bg-white font-semibold text-[#31363F] py-2 px-8 focus:outline-none hover:bg-black hover:text-white text-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Interactive Map Section */}
                    <div className="w-full lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] relative mt-8 lg:mt-0 lg:top-2 mx-auto shadow-2xl rounded-[40px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6237.861176191911!2d79.1483746575245!3d12.969832109726292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1729946618006!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full rounded-[35px] border-none"
                        ></iframe>
                        {/* Directions Link */}
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Vellore+Institute+of+Technology"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute left-24 bottom-1 md:absolute md:bottom-4 md:left-[180px] bg-[#228ECF] text-white px-4 py-2 rounded-full hover:bg-blue-400 transition-all duration-300"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </section>
            {/* Toastify Container */}
            <ToastContainer />
        </div>
    );
}
