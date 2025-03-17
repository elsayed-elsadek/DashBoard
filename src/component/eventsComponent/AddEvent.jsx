import React, { useReducer, useEffect, useState } from 'react';
import FileUpload from './FileUpload';
import EventDetails from './EventDetails';
import EventDescription from './EventDescription';
import EventRegistration from './EventRegistration';
import EventLocation from './EventLocation';
import EventDateTime from './EventDateTime';
import EventCategories from './EventCategories';

// Initial state
const initialState = {
    name: '',
    shortdes: '',
    des: '',
    registrationLink: '',
    eventType: 'free',
    location: '',
    address: '',
    date: '',
    time: '',
    categories: [],
    img: null,
    errors: {},
};

// Reducer function
function eventReducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD':
            return { ...state, [action.field]: action.value, errors: { ...state.errors, [action.field]: '' } };
        case 'TOGGLE_CATEGORY':
            return {
                ...state,
                categories: state.categories.includes(action.category)
                    ? state.categories.filter(cat => cat !== action.category)
                    : [...state.categories, action.category],
            };
        case 'SET_IMAGE':
            return { ...state, img: action.img };
        case 'RESET':
            return initialState;
        case 'SET_EVENT':
            return { ...state, ...action.event };
        case 'SET_ERRORS':
            return { ...state, errors: action.errors };
        default:
            return state;
    }
}

const AddEvent = ({ onAddEvent, eventToEdit, onEdit }) => {
    const [state, dispatch] = useReducer(eventReducer, initialState);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (eventToEdit) {
            dispatch({ type: 'SET_EVENT', event: eventToEdit });
        }
    }, [eventToEdit]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'SET_FIELD', field: name, value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                dispatch({ type: 'SET_IMAGE', img: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCategoryClick = (category) => {
        dispatch({ type: 'TOGGLE_CATEGORY', category });
    };

    const validateForm = () => {
        const errors = {};
        if (!state.name) errors.name = 'اسم الحدث مطلوب';
        if (!state.des) errors.des = 'الوصف الكامل مطلوب';
        if (!state.shortdes) errors.shortdes = 'الوصف القصير مطلوب';
        if (!state.date) errors.date = 'التاريخ مطلوب';
        if (!state.time) errors.time = 'الوقت مطلوب';

        dispatch({ type: 'SET_ERRORS', errors });
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const isConfirmed = window.confirm(eventToEdit ? 'هل أنت متأكد من تحديث الحدث؟' : 'هل أنت متأكد من إضافة الحدث؟');
            if (isConfirmed) {
                setIsLoading(true);
                const newEvent = {
                    id: eventToEdit ? eventToEdit.id : Date.now(),
                    ...state,
                };
                try {
                    if (eventToEdit) {
                        await onEdit(newEvent);
                    } else {
                        await onAddEvent(newEvent);
                    }
                    dispatch({ type: 'RESET' });
                    alert(eventToEdit ? 'تم تحديث الحدث بنجاح!' : 'تمت إضافة الحدث بنجاح!');
                    // eslint-disable-next-line no-unused-vars
                } catch (error) {
                    alert('حدث خطأ أثناء حفظ الحدث');
                } finally {
                    setIsLoading(false);
                }
            }
        }
    };

    return (
        <form className="container my-5 d-grid" onSubmit={handleSubmit} id='add-evevnt-section'>
            <h3 className="text-center mb-5">{eventToEdit ? 'تعديل الحدث' : 'إضافة حدث جديد'}</h3>

            <FileUpload img={state.img} onChange={handleFileChange} />
            <EventDetails state={state} onChange={handleInputChange} errors={state.errors} />
            <EventDescription state={state} onChange={handleInputChange} errors={state.errors} />
            <EventRegistration state={state} onChange={handleInputChange} errors={state.errors} />
            <EventLocation state={state} onChange={handleInputChange} errors={state.errors} />
            <EventDateTime state={state} onChange={handleInputChange} errors={state.errors} />
            <EventCategories state={state} onClick={handleCategoryClick} />

            <div className="text-center mb-5">
                <button type="submit" className="btn btn-primary rounded-4 px-5 py-2 w-75 m-auto" style={{ backgroundColor: "#8D56FF" }} disabled={isLoading}>
                    {isLoading ? 'جاري الحفظ...' : (eventToEdit ? 'تحديث' : 'حفظ')}
                </button>
            </div>
        </form>
    );
};

export default AddEvent;