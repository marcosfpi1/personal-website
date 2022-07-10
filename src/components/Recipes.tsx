import React from "react";
import { useState } from "react";

const greetings = {
    hello: 1,
    bye: 2,
    hey: 3
};

const words = {
    ...greetings,
    food: 4,
    work: 5
};

console.log(greetings);
console.log(words);

const Recipes = () => {
    const [recipe, setRecipe] = useState<Record<string, number>>({});
    return (
        <div>
            <h3>
                Current Recipe:
            </h3>
            <button onClick={() => {setRecipe(greetings)}}>
                Greetings
            </button>
            <button onClick={() => {setRecipe(words)}}>
                Words
            </button>

            <ul>
                {Object.keys(recipe).map((material) => (
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Recipes;
