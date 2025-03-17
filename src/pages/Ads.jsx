import React, { useState, useEffect, useReducer } from "react";
import HomeItemCard from "../component/adsComponent/HomeItemCard";
import AdCard from "../component/adsComponent/AdCard";
import AdForm from "../component/adsComponent/AdForm ";
import { defaultAds } from "../data/data/AdsData"
// الإعلانات الافتراضية


// Reducer لإدارة الإعلانات
const adsReducer = (state, action) => {
    switch (action.type) {
        case "ADD_AD":
            return [...state, action.payload];
        case "UPDATE_AD":
            return state.map((ad, index) =>
                index === action.payload.index ? action.payload.ad : ad
            );
        case "DELETE_AD":
            return state.filter((_, index) => index !== action.payload);
        case "SET_ADS":
            return action.payload;
        default:
            return state;
    }
};

const Ads = () => {

    const addAdsSection = document.getElementById("addAds");
    const homeItems = [
        { name: "عدد المشاهدات", number: "45,000" },
        { name: "عدد التفاعلات", number: "8,500" },
    ];

    const [ads, dispatch] = useReducer(adsReducer, []);

    useEffect(() => {
        // تحميل البيانات من localStorage بعد فتح التطبيق
        const storedAds = localStorage.getItem("ads");
        try {
            const parsedAds = JSON.parse(storedAds);
            if (Array.isArray(parsedAds) && parsedAds.length > 0) {
                dispatch({ type: "SET_ADS", payload: parsedAds });
            } else {
                localStorage.setItem("ads", JSON.stringify(defaultAds));
                dispatch({ type: "SET_ADS", payload: defaultAds });
            }
        } catch (error) {
            console.error("Error parsing ads from localStorage:", error);
            localStorage.setItem("ads", JSON.stringify(defaultAds));
            dispatch({ type: "SET_ADS", payload: defaultAds });
        }
    }, []);

    useEffect(() => {
        // حفظ الإعلانات في localStorage عند أي تغيير
        if (ads.length > 0) {
            localStorage.setItem("ads", JSON.stringify(ads));
        }
    }, [ads]);

    const [newAd, setNewAd] = useState({ name: "", description: "", images: [] });
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (e) => {
        setNewAd({ ...newAd, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        if (e.target.files.length > 0) {
            const files = Array.from(e.target.files);
            const newImages = [];

            files.forEach(file => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    newImages.push(reader.result);
                    if (newImages.length === files.length) {
                        setNewAd({ ...newAd, images: [...newAd.images, ...newImages].slice(0, 3) });
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const addOrUpdateAd = () => {
        if (newAd.name && newAd.description && newAd.images.length > 0) {
            if (editingIndex !== null) {
                dispatch({ type: "UPDATE_AD", payload: { index: editingIndex, ad: newAd } });
                setEditingIndex(null);
            } else {
                dispatch({ type: "ADD_AD", payload: newAd });
            }
            setNewAd({ name: "", description: "", images: [] });
        } else {
            alert("يرجى ملء جميع الحقول وتحميل صورة واحدة على الأقل.");
        }
    };

    const editAd = (index) => {
        setNewAd(ads[index]);
        setEditingIndex(index);
        addAdsSection.scrollIntoView({ behavior: "smooth" });

    };

    const deleteAd = (index) => {
        if (window.confirm("هل أنت متأكد من حذف هذا الإعلان؟")) {
            dispatch({ type: "DELETE_AD", payload: index });
        }
    };

    return (
        <div className="container my-4">
            <div className="row g-4 justify-content-center">
                {homeItems.map((item, index) => (
                    <HomeItemCard key={index} item={item} />
                ))}
            </div>

            <div className="d-flex justify-content-end mt-4 mb-3">
                <h3>قسم الإعلانات</h3>
            </div>
            <div className="adCard d-grid gap-4 text-light">
                {ads.map((ad, index) => (
                    <AdCard key={index} ad={ad} index={index} onEdit={editAd} onDelete={deleteAd} />
                ))}
            </div>

            <AdForm
                ad={newAd}
                onChange={handleChange}
                onImageChange={handleImageChange}
                onSubmit={addOrUpdateAd}
                isEditing={editingIndex !== null}
            />
        </div>
    );
};

export default Ads;
