import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import axiosClient from "../utils/axiosClient";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import styled from "styled-components";
import { Divider, Grid, CardActions, IconButton } from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import "../styles/Order.css";
import styledGridItem from "./Recipe";
import EditIcon from '@mui/icons-material/Edit';


let DateDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
`;

let DividerWrapper = styled(Grid)`
  display: flex;
  justify-content: center;
`;

const StyledGridItem = styled(Grid)`
  padding: 1rem;
`;

export default function InventoryCard(props) {
    let info = props.info;
    let Ingredient = info.Ingredient === null ? "" : info.Ingredient;
    let Amount_Left = info.Amount_Left === null ? "" : info.Amount_Left;

    const [ingredients, setIngredients] = React.useState([]);
    const [openEditDialog, setOpenEditDialog] = React.useState(false);

    useEffect(() => {
        // use axiosClient created to get all ingredient lists
        axiosClient.get("/inventory", {params: {Ingredient}},)
            .then((res) => {
            setIngredients(res.data);
            //console.log(res.data);
            });
        axiosClient.post("/inventory", {params: {Ingredient}},)
            .then((res) => {
            setIngredients(res.data);
            //console.log(res.data);
        });
      }, []);


    return (
        <Card>
          <CardHeader title={Ingredient} subheader={'Amount left: ' + 0} />
          {
          //ingredients.map((item, i) => (
                  //<StyledGridItem item xs={4} key={i}>
                //   <StyledGridItem>
                //     {Ingredient}
                //   </StyledGridItem>
          //))
          }
          <CardActions disableSpacing className='card-actions'>
          {/* <IconButton onClick={() => deleteRecipe(info.Recipe_ID)}> */}
          <IconButton>
            <DeleteIcon />
          </IconButton>
          {(
            <IconButton>
              <EditIcon />
          </IconButton>
          )}
        </CardActions>

        </Card>
      );
}