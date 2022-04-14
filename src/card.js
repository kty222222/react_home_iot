import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import axios from "axios";

const posts = [

    {
     title: "스탠드 전등",
     excerpt: "식문용 전등을 키고 켠다",
     image: 'light.jpg',
     on : "http://ec2-3-39-9-195.ap-northeast-2.compute.amazonaws.com/turnon",
     off : "http://ec2-3-39-9-195.ap-northeast-2.compute.amazonaws.com/turnoff"
    },
   
    {
     title: "스마트 화분",
     excerpt: "물을 준다",
     image: "plant.jpg",
     on : "http://182.214.104.97:2000/ledon",
     off : "http://182.214.104.97:2000/ledoff"
    },
   
    {
     title: "로봇 청소기",
     excerpt: "청소를 한다",
     image: "cleaner.jpg",
     on : "http://ec2-3-39-9-195.ap-northeast-2.compute.amazonaws.com/turnon",
     off : "http://ec2-3-39-9-195.ap-northeast-2.compute.amazonaws.com/turnoff"
    },
    {
        title: "미니",
        excerpt: "그걸 한다",
        image: "mini.jpg"
    },
    {
        title: "티와이",
        excerpt: "그걸 한다",
        image: "twhy.jpg"
    },
]

const onClickHandler = (name, e) =>{
    axios.get(name);
};

function Posts(props) {
    return (
      <div style={{ marginTop: 40, padding: 10 }}>
        <Grid container spacing={80} justify="center">
          {posts.map(post => (
            <div style={{padding: 30 }}>
            <Grid item key={post.title}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image={post.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography component="p">{post.excerpt}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button onClick={e => onClickHandler(post.on, e)} size="small" color="primary">
                    켜기
                  </Button>
                  <Button onClick={e => onClickHandler(post.off, e)} size="small" color="primary">
                    끄기
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            </div>
          ))}
        </Grid>
      </div>
    );
}
export default Posts;