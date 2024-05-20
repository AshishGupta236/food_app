import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

export default function ItemCard(params) {
    let item = params.item;
    
    console.log(params)
    return (
        <Card sx={{  padding: 2 }}>
        <CardMedia
            component="img"
            height="140"
            image={item.large_item_image}
            alt="Item image"
        />
        <CardContent>
            <Typography gutterBottom variant="p" component="div">
                {item.item_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {item.item_description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {item.is_custom_category_available == '1' ?"Customization Applicable" : ""}
            </Typography>
            {/* <Rating name="rating" value={3.4} readOnly /> */}
            <Typography variant="body2" color="text.secondary">
                {item.price}
            </Typography>
        </CardContent>
        <Button variant="contained" color="primary">
            Add item
        </Button>
        </Card>
    );
}