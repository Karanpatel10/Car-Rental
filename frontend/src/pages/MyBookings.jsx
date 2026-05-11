import { Calendar, MapPin } from "lucide-react";
import { useAppContext } from "../AppContext";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const MyBookings = () => {
    const { axios, user, setLoading,setShowLogin } = useAppContext();
    const [mybooking, setMyBooking] = useState([]);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const location = useLocation();

    // Fetch bookings
    const fetchMyBooking = async () => {
        try {
            const { data } = await axios.get("/api/booking/booking-list");

            if (data.success) {
                setMyBooking(data.bookings);
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    // Load bookings
    useEffect(() => {
       if (user === undefined) return;

        if (!user?._id) {
           setShowLogin(true);
            return;
        }
        
         fetchMyBooking();

    }, [user]);

    // Handle Stripe redirect (NO navigation here → prevents refresh loop)
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const success = params.get("success");

        if (success === "true" || success === "false") {
            setPaymentStatus(success === "true" ? "success" : "failure");
        }
    }, [location.search]);

    // Clean URL once when payment status appears
    useEffect(() => {
        if (!paymentStatus) return;

        window.history.replaceState({}, document.title, "/my-bookings");

        const timer = setTimeout(() => {
            fetchMyBooking();
            setPaymentStatus(null);
        }, 5000);

        return () => clearTimeout(timer);
    }, [paymentStatus]);

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
           
            {/* Modal */}
            {paymentStatus && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }} className="bg-white p-6 rounded-lg text-center w-[90%] max-w-md">
                        <h2 className="text-2xl font-bold">
                            {paymentStatus === "success"? "Payment Successful 🎉": "Payment Failed ❌"}
                        </h2>

                        <p className="mt-3 text-gray-600">
                            {paymentStatus === "success"? "Your booking has been confirmed.": "Your payment was cancelled or failed."}
                        </p>

                        <button className={`mt-5 px-4 py-2 rounded text-white ${paymentStatus === "success"? "bg-green-500": "bg-red-500"}`}
                            onClick={() => setPaymentStatus(null)}>OK
                        </button>
                    </motion.div>
                </div>
            )}

            {/* Title */}
            <h1 className="flex text-3xl my-15 p-2 font-semibold justify-start">
                My Bookings
            </h1>

            {/* Bookings */}
            <div className="flex flex-col gap-15 my-20">
                {mybooking.map((booking, index) => (
                    <div key={booking._id}>
                        <div className="flex flex-col md:flex-row justify-between items-center shadow-[0_1px_10px_rgba(0,0,0,0.3)] md:p-5 rounded-lg">

                            {/* Left */}
                            <div className="flex flex-col md:flex-row gap-10 md:gap-20 p-5">

                                <div>
                                    <img src={booking.car.image[0]} alt="Car" className="w-126 h-76 object-cover rounded-xl"/>
                                    <h2 className="text-2xl font-semibold mt-4">{booking.car.brand} {booking.car.model}</h2>
                                    <p>{booking.car.category} {booking.car.year}</p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <p>
                                        Booking #{index + 1}

                                        <span className={`ml-3 p-2 rounded-lg ${booking.payment === "unpaid"? "text-red-500 bg-red-100": "text-green-500 bg-green-100"}`}>
                                            {booking.payment === "unpaid"?"unPaid":"Paid"}
                                        </span>

                                        <span className={`ml-3 p-2 rounded-lg ${booking.status === "confirmed"? "text-green-500 bg-green-100": "text-red-500 bg-red-100"}`}>
                                            {booking.status}
                                        </span>
                                    </p>

                                    <label className="flex gap-3 text-gray-400 font-medium">
                                        <Calendar className="text-primary" />
                                        Rental Period
                                    </label>
                                    <p className="ml-10">
                                        {new Date(booking.pickupDate).toLocaleDateString()} -{" "}
                                        {new Date(booking.returnDate).toLocaleDateString()}
                                    </p>

                                    <label className="flex gap-3 text-gray-400 font-medium">
                                        <MapPin className="text-primary" />
                                        Pick-Up Location
                                    </label>
                                    <p className="ml-10">Pickup</p>

                                    <label className="flex gap-3 text-gray-400 font-medium">
                                        <MapPin className="text-primary" />
                                        Return Location
                                    </label>
                                    <p className="ml-10">Return</p>
                                </div>
                            </div>

                            {/* Right */}
                            <div className="flex flex-col p-10">
                                <h2 className="text-2xl font-semibold mb-2">
                                    Total Price
                                </h2>
                                <p className="text-3xl font-bold text-primary">
                                    ${booking.price}
                                </p>
                                <p className="text-gray-400">
                                    {new Date(booking.createdAt).toLocaleDateString()}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookings;