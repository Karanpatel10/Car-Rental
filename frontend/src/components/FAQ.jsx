import React, { useState } from "react";


const FAQ=()=>{
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [

        {title:'Payment'},
        {
            question: "Do you offer refunds?",
            answer: "We does not provide any refunds, returns or exchanges of any kind for any reason as all sales are final. Our goal is to provide you with bar none superior service. If you have an issue of any kind during your rental please let us know so we can make appropriate arrangements.",
        },
        {
            question: "Do you charge for delivery / pick up on your luxury rental cars?",
            answer: "If you are within proximity of our pick up and drop off destination there will be no extra delivery or pick up fees. If you fall outside our delivery/pick up areas certain charges may apply. Instant Luxury Rentals will provide you with that information at the time you make your reservation.",
        },
        {
            question: "How many miles are included in the rental rate?",
            answer: "Instant Luxury Rentals will provide you with the amount of miles allowance for the specific vehicle you rent and the renter is responsible for additional cost per mile if you drive over the stated mile allotment.",
        },
        {
            question: "How much tax do I have to pay?",
            answer: "The tax rate depends on which state you receive delivery of the vehicle.",
        },
        {
            question: "If my luggage doesn’t fit in the car, can you take the remaining baggage to my hotel?",
            answer: "Yes, transfer services are available based on delivery time and location for an additional fee.",
        },
        {
            question: "What if I get a ticket?",
            answer: "The renter is fully responsible for any ticket incurred while the vehicle is rented.  Parking, traffic, speeding, toll bridges, or any other violations issued while the vehicle is being rented is the responsibility of the renter.  The renter must pay any fees, penalties, towing charges, impound costs and all other monies that are associated with the car during their possession.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept Visa, Master Card, American Express, and Paypal.&nbsp; We also do accept cashier’s checks, cash, and wire transfer which includes a  if processed this way. However, in some cases but a credit card must be on file for the vehicle deposit and damage deposit.  See vehicle deposit below.",
        },
        {
            question: "When do you charge my card?",
            answer: "An authorization will be taken 24 hours before the rental is scheduled to take place.",
        },
        {title:'Reservation'},
        {
            question: "Can I add additional drivers to the rental reservation?",
            answer: "Absolutely – as long as they meet the same rental and insurance requirements stated.",
        },
        {
            question: "Do you offer additional Insurance on your rentals and who pays if I get into an accident?",
            answer: "The driver is responsible for any damages, liabilities, etc that may occur when renting the vehicle. If the renter is in need of additional insurance then please inquire within.",
        },
        {
            question: "How does the procedure with insurance work?",
            answer: "The name of your insurance company and policy number is required. An agent will verify coverage.",
        },
        {
            question: "Is there a minimum rental period?",
            answer: "Most of our vehicles can be rented for a minimum of two days; with exception only to our track and wedding experience packages.",
        },
        {
            question: "Is my appointment date and time guaranteed?",
            answer: "Instant Luxury Rentals will do everything possible to meet your appointment time and date. Please note that due to circumstance beyond our control we may need to delay or reschedule your appointment. Potential reasons that we may need to delay or reschedule your appointment include, but are not limited to: Other clients being late, or going over time, inclement weather, mechanical issues with the vehicle, schedule conflicts, etc.",
        },
        {
            question: "What are your hours of operation?",
            answer: "We serve our customers 24 hours a day 7 days a week, but our offices are only open from 8am – 8pm EST.",
        },
        {
            question: "What credentials do I need to have with me?",
            answer: "At the time of the vehicle rental reservation, please provide a valid driver’s license, a valid insurance card, and a valid credit card.",
        },
        {
            question: "What is the typical damage and security deposit and what is it used for?",
            answer: "Our damage and security deposits range from $500 to $10,000 depending on the class of vehicle. Deposits will be used to cover any excess mileage, damage to vehicle, gas, tolls, smoking, tickets, loss of use or any other costs incurred from the rental as agreed in the rental agreement.",
        },{title:'Preparation'},
        {
            question: "Can I drive on a racetrack?",
            answer: "Absolutely not. Both our insurance company and your insurance company will not allow any of our cars on any racetracks. If you’re interested in booking a track experience, inquire about our Track Experience Packages for more information.",
        },
        {
            question: "Do I have to submit to any kind of background check or any other driver experience reports?",
            answer: "Yes – deposit may be determined based on your motor vehicle driving record.  Instant Luxury Rentals has the right to refuse rentals to those with major moving violations, DUI convictions and any other major infractions.",
        },
        {
            question: "Do you offer after-hours services?",
            answer: "Yes, a fee will be charged based on the time and location of the requested service.",
        },
        {
            question: "Do you allow international drivers to rent your vehicles?",
            answer: "International drivers are allowed to rent from our luxury fleet. International drives must provide us with a valid passport and driver’s license from their country. Additional fees may apply.",
        },
        {
            question: "Do your vehicles come with GPS / misc. equipment?",
            answer: "Some of our cars already have GPS and/or miscellaneous electronic equipment built-in. However, if the model you’re interested in doesn’t have GPS / the equipment you desire, we can provide it for you for an additional fee. Just let us know that you’ll be needing the device(s) for your rental in advance at the time of reservation.",
        },
        {
            question: "I have insurance, why would you bill me for damage?",
            answer: "Minor scuffs and scrapes are unfortunately a common occurrence for rental vehicles – sometimes renters scrape a wheel, scratch a front bumper or bubble a tire for example. These repairs are usually quick and relatively inexpensive to make and are billed from the security deposit in order to minimize the amount of time the vehicle is out of commission off the road. Once your invoice has been settled, you may of course make a claim to your insurance company to be reimbursed for any charges.",
        },
        {
            question: "How old do I have to be to rent a car?",
            answer: "Renters must be of the age 18 years or older. ",
        },
        {
            question: "What if the vehicle malfunctions or has a mechanical issue while I’m renting it? ",
            answer: "We work with trained luxury vehicle technicians that put in the tender love and care to make sure these cars are in top-shape and expertly tuned. However, if an issue arises that is out of your control, please call us so we can get you a replacement car ASAP.",
        },

    ];
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className=" max-w-full md:max-w-2/3 mx-auto flex flex-col items-center justify-center py-25 px-5 md:p-25">
                <p className="text-indigo-600 text-sm font-medium">FAQ's</p>
                <h1 className="text-3xl font-semibold text-center">Looking for answer?</h1>
                <p className="text-sm text-slate-500 mt-2 pb-8 text-center">
			    		Some of the frequently asked questions our customers often ask about our rental procedures.			    	
                </p>
                {faqs.map((faq, index) => faq.title?(<h1 className="text-2xl font-semibold w-full mt-10 my-5">{faq.title}</h1>):(
                    
                    <div className="border-b border-slate-200 py-4 cursor-pointer w-full" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-medium">
                                {faq.question}
                            </h3>
                            <svg width="28" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-11/12 ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FAQ