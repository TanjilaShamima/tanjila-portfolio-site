import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import blog1 from '../../../images/blog1.jpg';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase : 'liner'
  };

  const blogs =[
      {
          image : blog1,
          title : 'Basic Javascript',
          links : 'https://tanjila-cse-diu.medium.com/basic-javascript-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95-%E0%A6%9C%E0%A6%BE%E0%A6%AD%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%AA%E0%A7%8D%E0%A6%9F-6830d9fe90fb'
      },
      {
        image : 'https://cdn.educba.com/academy/wp-content/uploads/2020/01/Logical-Operators-in-JavaScript.jpg',
        title : 'Operators & Operands',
        links : 'https://tanjila-cse-diu.medium.com/%E0%A6%85%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%9F%E0%A6%B0-%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%A1-%E0%A6%85%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%A1-operator-and-operand-897394e0c748'
    },
    {
        image : blog1,
        links : 'https://tanjila-cse-diu.medium.com/basic-javascript-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95-%E0%A6%9C%E0%A6%BE%E0%A6%AD%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%AA%E0%A7%8D%E0%A6%9F-6830d9fe90fb'
    },
    {
        image : 'https://cdn.educba.com/academy/wp-content/uploads/2020/01/Logical-Operators-in-JavaScript.jpg',
        title : 'Operators & Operands',
        links : 'https://tanjila-cse-diu.medium.com/%E0%A6%85%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%9F%E0%A6%B0-%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%A1-%E0%A6%85%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%A1-operator-and-operand-897394e0c748'
    },

    {
        image : 'https://cdn.educba.com/academy/wp-content/uploads/2020/01/Logical-Operators-in-JavaScript.jpg',
        title : 'Operators & Operands',
        links : 'https://tanjila-cse-diu.medium.com/%E0%A6%85%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%9F%E0%A6%B0-%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%A1-%E0%A6%85%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%A1-operator-and-operand-897394e0c748'
    }
  ]


const BlogDetails = () => {
    return (
        <div>
            <Container id="blogs">
            <hr/>
            <h1 className="text-center mt-5 text-dark">My Blogs</h1>
            <Slider {...settings} className="mt-5  mb-5">
                    {

                           blogs.map((blog, idx )=> 
                            <Card style={{width : '200px'}} className="d-flex align-items-center justify-content-between  bg-white rounded">
 

                                <Card.Img style={{height : '200px', width : '90%'}} className="card-image mt-4 rounded" variant="top" src={blog.image} />
                                <Card.Body>
                                        <h4 style={{ color : '#17B995'}} className="mt-4 text-left">{blog.title}</h4>
                                        <hr style={{width : '20%', marginLeft: '0px', backgroundColor : '#d1c398', height : '2px'}}/>
                                        <Button variant="outline-success d-block" className="text-center"><a href={blog.links}>View Details</a></Button>                                      
                                    </Card.Body>
                            </Card>
                            )
                    }         
                </Slider>          
        </Container>
        </div>
    );
};

export default BlogDetails;