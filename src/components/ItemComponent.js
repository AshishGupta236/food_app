import React from "react";
import ItemCard from "./itemCard";

export default function ItemComponent({menuList}) {
    
    console.log(menuList)
    return (
        <div>
            <h1>Coupon components</h1>
            {menuList.map((menu, menu_index) => (
                menu.category_detail.map((category, category_index)=>{
                    category.item_detail.map((item, item_index)=>{
                        <ItemCard  key={`${menu_index}-${category_index}-${item_index}`}></ItemCard>
                    })
                })
            ))}
        </div>
    )
}