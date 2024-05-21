import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import foodImage from "../images/food.png";

export default function ItemCard(params) {
    let item = params.item;

    return (
        <Card sx={{ padding: 1 }}>
            <CardMedia
                component="img"
                image={item.large_item_image ? item.large_item_image : foodImage}
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
                <Typography variant="body2" color="text.secondary">
                    {item.price}
                </Typography>
            </CardContent>
            <Button variant="contained" color="primary">
                +
            </Button>
        </Card>
    );
}