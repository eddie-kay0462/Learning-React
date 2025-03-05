function List (props){
    const fruits = [{id: 1,name:'apple', calories: 95},
        {name:'banana', calories: 105, id: 2},
        {name:'pineapple', calories: 452, id: 3},
        {name:'orange', calories: 62, id: 4},
        {name:'coconut', calories: 159, id:5},];
    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    //for reverse order
    // fruits.sort((a, b) => b.name.localeCompare(a.name));

    //sort by calories
    // fruits.sort((a, b) => a.calories - b.calories);

    //reverse calories
    // fruits.sort((a, b) => b.calories - a.calories);

    const lowerCalories = fruits.filter(fruit => fruit.calories < 100);

    const listItems = fruits.map((fruit) =>
        <li key={fruit.id}>{fruit.name} has {fruit.calories} calories and an id of {fruit.id}</li> 
    );
    
    const lowerCaloriesList = lowerCalories.map((fruit) =>
        <li key={fruit.id}>{fruit.name} has {fruit.calories} calories and an id of {fruit.id}</li>
    );
    return (
        <ol>
            {lowerCaloriesList}
        </ol>
    );
}

export default List;