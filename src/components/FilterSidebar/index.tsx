import React from 'react';
import CheckBox from '../atoms/CheckBox'

type filterProps = {
    categoryFilter: any[];
    category: React.FormEventHandler<HTMLInputElement>;
    rangeFilter: any[];
    range: React.FormEventHandler<HTMLInputElement>;
}

const categories = ["People", "Premium", "Pets", "Food", "Landmarks", "Cities", "Nature"];
const ranges = [
    {
        title: "Lower than $20",
        value: "lower20"
    },
    {
        title: "$20 ~ $100",
        value: "20-100"
    },
    {
        title: "$100 ~ $200",
        value: "100-200",
    },
    {
        title: "More than $200",
        value: "more200"
    }
];

const FilterSidebar: React.FC<filterProps> = (props: filterProps) => {

    const { categoryFilter, category, range, rangeFilter } = props;

    return (
        <div className="filter-sidebar">
            <p className="filter-sidebar__title">Category</p>
            <br />
            <div className="d-grid">
                {categories.map((cat) => (
                    <CheckBox
                        key={cat}
                        title={cat}
                        name="category"
                        id={cat}
                        onChange={category}
                        checked={Boolean(categoryFilter.indexOf(cat.toLocaleLowerCase()) > -1)}
                    />
                ))}
            </div>
            <hr className="filter-sidebar__hr" />
            <p className="filter-sidebar__title">Price range</p>
            <br />
            <div className="d-grid">
                {ranges.map((ran) => (
                    <CheckBox
                    key={ran.value}
                    title={ran.title}
                    name="range"
                    id={ran.value}
                    onChange={range}
                    checked={Boolean(rangeFilter.indexOf(ran.value) > -1)}
                />
                ))}
            </div>
        </div>
    )
}

export default FilterSidebar;
