import logo from "./logo.png";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg"
import close_icon from "./close_icon.svg"
import users_icon from "./users_icon.svg"
import car_icon from "./car_icon.svg"
import location_icon from "./location_icon.svg"
import fuel_icon from "./fuel_icon.svg"
import addIcon from "./addIcon.svg"
import carIcon from "./carIcon.svg"
import carIconColored from "./carIconColored.svg"
import dashboardIcon from "./dashboardIcon.svg"
import dashboardIconColored from "./dashboardIconColored.svg"
import addIconColored from "./addIconColored.svg"
import listIcon from "./listIcon.svg"
import listIconColored from "./listIconColored.svg"
import cautionIconColored from "./cautionIconColored.svg"
import arrow_icon from "./arrow_icon.svg"
import star_icon from "./star_icon.svg"
import check_icon from "./check_icon.svg"
import tick_icon from "./tick_icon.svg"
import delete_icon from "./delete_icon.svg"
import eye_icon from "./eye_icon.svg"
import eye_close_icon from "./eye_close_icon.svg"
import filter_icon from "./filter_icon.svg"
import edit_icon from "./edit_icon.svg"
import calendar_icon_colored from "./calendar_icon_colored.svg"
import location_icon_colored from "./location_icon_colored.svg"
import testimonial_image_1 from "./testimonial_image_1.png"
import testimonial_image_2 from "./testimonial_image_2.png"
import main_car from "./main_car.png"
import banner_car_image from "./banner_car_image.png"
import user_profile from "./user_profile.png"
import upload_icon from "./upload_icon.svg"
import car_image1 from "./car_image1.png"
import car_image2 from "./car_image2.png"
import car_image3 from "./car_image3.png"
import car_image4 from "./car_image4.png"
import booking_process from "./booking_process.png"
import bookprocess_Step1 from "./bookprocess_Step1.png"
import bookprocess_Step2 from "./bookprocess_Step2.png"
import bookprocess_Step3 from "./bookprocess_Step3.png"
import bookprocess_Step4 from "./bookprocess_Step4.png"
import applogo1 from "./applogo1.jpg"
import applogo2 from "./applogo2.png"
import appsection2 from "./appsection2.png"
import excusivecusotmer_bg from "./exclusivecustomer-bg.webp"
import excusive_mercedesfront from "./exclusive-mercedesfront.webp"
import jeepbanner from "./jeepbanner.webp"
import info_banner1 from "./infobanner1.webp"
import info_banner2 from "./infobanner2.webp"
import info_banner3 from "./infobanner3.webp"
import info_banner4 from "./infobanner4.webp"
import info_banner5 from "./infobanner5.webp"
import info_banner6 from "./infobanner6.webp"
import contact_banner from "./contact-banner.jpg"
import sheffer_banner from "./sheffer_banner.webp"
import about_top from "./abouttop_banner.webp"


// CarLogo 

import car_logo1 from "./CarLogo/audi.png"
import car_logo2 from "./CarLogo/bmw.png"
import car_logo3 from "./CarLogo/Chevrolet.png"
import car_logo4 from "./CarLogo/honda.png"
import car_logo5 from "./CarLogo/hyundai.png"
import car_logo6 from "./CarLogo/Kia.jpg"
import car_logo7 from "./CarLogo/lamborghini.png"
import car_logo8 from "./CarLogo/Lexus.png"
import car_logo9 from "./CarLogo/Chevrolet.png"
import car_logo10 from "./CarLogo/mazda.png"
import car_logo11 from "./CarLogo/Mercedes-Benz.jpg"
import car_logo12 from "./CarLogo/tesla.png"
import car_logo13 from "./CarLogo/toyota.png"




export const cityList = ['Greensboro, NC', 'Winston-Salem, NC', 'Raleigh, NC', 'Durham, NC', 'Charlotte, NC'];

export const assets = {
    
    // icons and images
    logo,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    users_icon,
    edit_icon,
    car_icon,
    location_icon,
    fuel_icon,
    addIcon,
    carIcon,
    carIconColored,
    dashboardIcon,
    dashboardIconColored,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    main_car,
    banner_car_image,
    car_image1,
    upload_icon,
    user_profile,
    car_image2,
    car_image3,
    car_image4,
    booking_process,
    bookprocess_Step1,
    bookprocess_Step2,
    bookprocess_Step3,
    bookprocess_Step4,
    applogo1,
    applogo2,
    appsection2,
    excusivecusotmer_bg,
    excusive_mercedesfront,
    jeepbanner,
    info_banner1,
    info_banner2,
    info_banner3,
    info_banner4,
    info_banner5,
    info_banner6,
    sheffer_banner,
    contact_banner,
    about_top,

    car_logos:[
    { logo: car_logo1,name:"Audi" },
    { logo: car_logo2,name:"BMW" },
    { logo: car_logo3,name:"Chevrolet" },
    { logo: car_logo4,name:"Honda" },
    { logo: car_logo5,name:"Hyundai" },
    { logo: car_logo6,name:"Kia" },
    { logo: car_logo7,name:"Lamborghini" },
    { logo: car_logo8,name:"Lexus" },
    { logo: car_logo9,name:"Chevrolet" },
    { logo: car_logo10,name:"Mazda" },
    { logo: car_logo11,name:"Mercedes-Benz" },
    { logo: car_logo12,name:"Tesla" },
    { logo: car_logo13,name:"Toyota" },
    ],

}

export const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Vehicle", path: "/cars" },
    { name: "Location", path: "/location" },
    { name: "About", path: "/About" },
    { name: "Contact Us", path: "/contact-us" },
]

export const ownerMenuLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Add car", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
    { name: "Manage Cars", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
    { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]

export const dummyUserData = {
  "_id": "6847f7cab3d8daecdb517095",
  "name": "GreatStack",
  "email": "admin@example.com",
  "role": "owner",
  "image": user_profile,
}

