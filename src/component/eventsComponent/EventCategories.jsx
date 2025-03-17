import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBalanceScale, faBook, faEarth, faFootball, faHeart,
    faProjectDiagram, faSprout, faVectorSquare
} from '@fortawesome/free-solid-svg-icons';
import CategoryCard from './CategoryCard';

const EventCategories = ({ state, onClick }) => (
    <div className="mb-4">
        <p className="text-end">التصنيفات:</p>
        <div className="d-grid flex-wrap gap-3">
            {[
                { icon: faProjectDiagram, label: 'التكنولوجيا' },
                { icon: faFootball, label: 'رياضه' },
                { icon: faHeart, label: 'صحه' },
                { icon: faEarth, label: 'العلوم' },
                { icon: faSprout, label: 'الزراعه' },
                { icon: faBalanceScale, label: 'القانون' },
                { icon: faBook, label: 'الهندسه' },
                { icon: faVectorSquare, label: 'ريادة أعمال' },
            ].map(({ icon, label }) => (
                <CategoryCard
                    key={label}
                    icon={icon}
                    label={label}
                    onClick={() => onClick(label)}
                    isSelected={state.categories.includes(label)}
                />
            ))}
        </div>
    </div>
);

export default EventCategories;