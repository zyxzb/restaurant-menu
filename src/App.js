import React, {useState} from 'react';
import Menu from './components/Menu'
import Categories from './components/Categories';
import items from './data';

const allCategories = items.map(item => item.category);
// https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
const uniqCategories = [...new Set(allCategories)];

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(uniqCategories);

    const filterItems = (category) => {
        if(category === 'all') {
            setMenuItems(items);
        } else {
            const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
        }
    }

    return (
        <main>
            <section className='menu section'>
                <div className="title">
                    <h2>Our menu</h2>
                    <div className="underline"></div>
                </div>
            </section>
            <Categories filterItems={filterItems} categories={categories}/>
            <Menu items={menuItems}/>
        </main>
    );
}

export default App;