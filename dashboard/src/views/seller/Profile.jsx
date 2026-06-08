import React, { useState } from "react";
import {
    User,
    Mail,
    Phone,
    Store,
    MapPin,
    Lock,
    Camera,
    Save,
    ShieldCheck,
    Package,
    ShoppingBag,
    Star,
} from "lucide-react";

const Profile = () => {
    const [profile, setProfile] = useState({
        name: "Rahul Rai",
        email: "rahul@example.com",
        phone: "+91 9876543210",
        shopName: "Rahul Store",
        address: "New Delhi, India",
    });

    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleProfileChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    const handlePasswordChange = (e) => {
        setPassword({
            ...password,
            [e.target.name]: e.target.value,
        });
    };

    const updateProfile = () => {
        alert("Profile Updated Successfully");
    };

    const updatePassword = () => {
        if (password.newPassword !== password.confirmPassword) {
            return alert("Passwords do not match");
        }

        alert("Password Updated Successfully");
    };

    const stats = [
        {
            title: "Total Products",
            value: "145",
            icon: Package,
        },
        {
            title: "Orders",
            value: "1,245",
            icon: ShoppingBag,
        },
        {
            title: "Rating",
            value: "4.9",
            icon: Star,
        },
        {
            title: "Verified",
            value: "Yes",
            icon: ShieldCheck,
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8">

            {/* Cover Section */}
            <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-r from-[#F54900] via-orange-500 to-orange-400 min-h-[250px] shadow-xl">

                {/* Decorative Circles */}
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-white/5 rounded-full"></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between h-full p-8 lg:p-10">

                    {/* Left Profile */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6">

                        <div className="relative">
                            <img
                                src="https://i.pravatar.cc/200"
                                alt="Profile"
                                className="w-32 h-32 lg:w-36 lg:h-36 rounded-full border-[5px] border-white object-cover shadow-2xl"
                            />

                            <button className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition">
                                <Camera size={18} className="text-[#F54900]" />
                            </button>
                        </div>

                        <div className="text-center sm:text-left">

                            <h2 className="text-3xl lg:text-4xl font-bold text-white">
                                Rahul Rai
                            </h2>

                            <p className="text-orange-100 mt-1 text-lg">
                                Seller Account
                            </p>

                            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">

                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/15 border border-white/20 backdrop-blur-sm">
                                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                                        <ShieldCheck size={14} className="text-white" />
                                    </div>

                                    <span className="text-white font-medium">
                                        Verified Seller
                                    </span>
                                </span>
                                <span className="px-4 py-2 rounded-md bg-white/20 backdrop-blur-md text-white text-sm">
                                    Active Since 2024
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Right Side */}
                   <div className="mt-8 lg:mt-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">

                        <h3 className="text-white/80 text-sm uppercase tracking-wider">
                            Total Revenue
                        </h3>

                        <h2 className="text-4xl font-bold text-white mt-1">
                            ₹1,25,000
                        </h2>

                        <p className="text-green-200 mt-2">
                            +18.5% this month
                        </p>

                    </div>

                </div>
            </div>

            {/* Floating Stats */}
            <div className="relative z-20 lg:-mt-12 mt-4 px-4 md:px-8">

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-5 shadow-xl border border-slate-100 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-slate-500 text-sm">
                                        {item.title}
                                    </p>

                                    <h3 className="text-2xl font-bold text-slate-800 mt-1">
                                        {item.value}
                                    </h3>
                                </div>

                                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                                    <item.icon
                                        size={24}
                                        className="text-[#F54900]"
                                    />
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>

            {/* Gap After Stats */}
            <div className="h-8"></div>



            {/* Main Profile Section */}
            <div className="grid xl:grid-cols-3 gap-6">

                {/* Profile Form */}
                <div className="xl:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-200">

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold">
                            Personal Information
                        </h2>

                        <p className="text-slate-500 mt-1">
                            Update your account details
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">

                        <InputField
                            icon={<User size={18} />}
                            label="Full Name"
                            name="name"
                            value={profile.name}
                            onChange={handleProfileChange}
                        />

                        <InputField
                            icon={<Mail size={18} />}
                            label="Email Address"
                            name="email"
                            value={profile.email}
                            onChange={handleProfileChange}
                        />

                        <InputField
                            icon={<Phone size={18} />}
                            label="Phone Number"
                            name="phone"
                            value={profile.phone}
                            onChange={handleProfileChange}
                        />

                        <InputField
                            icon={<Store size={18} />}
                            label="Store Name"
                            name="shopName"
                            value={profile.shopName}
                            onChange={handleProfileChange}
                        />

                        <div className="md:col-span-2">

                            <label className="block mb-2 text-sm font-medium">
                                Address
                            </label>

                            <div className="relative">

                                <MapPin
                                    size={18}
                                    className="absolute top-4 left-4 text-slate-400"
                                />

                                <textarea
                                    rows="5"
                                    name="address"
                                    value={profile.address}
                                    onChange={handleProfileChange}
                                    className="w-full rounded-2xl border border-slate-200 pl-11 p-4 focus:ring-2 focus:ring-[#F54900] outline-none"
                                />

                            </div>
                        </div>

                    </div>

                    <button
                        onClick={updateProfile}
                        className="mt-8 bg-[#F54900] hover:bg-[#dd4200] transition text-white px-8 py-3 rounded-2xl flex items-center gap-2"
                    >
                        <Save size={18} />
                        Save Changes
                    </button>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">

                    {/* Security */}
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

                        <h3 className="text-xl font-bold mb-6">
                            Password Settings
                        </h3>

                        <div className="space-y-4">

                            <PasswordField
                                placeholder="Current Password"
                                name="currentPassword"
                                value={password.currentPassword}
                                onChange={handlePasswordChange}
                            />

                            <PasswordField
                                placeholder="New Password"
                                name="newPassword"
                                value={password.newPassword}
                                onChange={handlePasswordChange}
                            />

                            <PasswordField
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={password.confirmPassword}
                                onChange={handlePasswordChange}
                            />

                        </div>

                        <button
                            onClick={updatePassword}
                            className="w-full mt-5 bg-slate-900 hover:bg-black transition text-white py-3 rounded-2xl"
                        >
                            Update Password
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
};

const InputField = ({
    icon,
    label,
    name,
    value,
    onChange,
}) => (
    <div>
        <label className="block mb-2 text-sm font-medium">
            {label}
        </label>

        <div className="relative">

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                {icon}
            </span>

            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                className="w-full h-14 rounded-2xl border border-slate-200 pl-11 pr-4 focus:ring-2 focus:ring-[#F54900] outline-none"
            />

        </div>
    </div>
);

const PasswordField = ({
    placeholder,
    name,
    value,
    onChange,
}) => (
    <div className="relative">

        <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
            type="password"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full h-14 rounded-2xl border border-slate-200 pl-11 pr-4 focus:ring-2 focus:ring-[#F54900] outline-none"
        />
    </div>
);

export default Profile;